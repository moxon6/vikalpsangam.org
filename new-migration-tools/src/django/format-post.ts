import schema from '../validate/schema';
import { StructType } from 'superstruct'
import { extractMedia } from './utils';
import * as R from 'ramda';
import * as mime from 'mime-types';
import * as fs from 'fs';
import { imageSize } from 'image-size';

type Post = StructType<typeof schema>;

interface FlatMediaPost extends Omit<Post, 'media'> {
    media: string[]
}

const extractMediaPaths = (post: any): FlatMediaPost => ({
    ...post,
    media: extractMedia(post.content)
})

const cleanCategoriesAndTags = (post: any): FlatMediaPost => {
    const cleanMeta = R.pick(['id', 'slug', 'title']);
    return {
        ...post, 
        categories: post.categories.map(cleanMeta),
        tags: post.tags.map(cleanMeta),
    }
}

const mapMediaPaths = (post: FlatMediaPost) : FlatMediaPost => {
    const mapMediapath = R.pipe(
        (p: string) => p.replace(/%20/gi, " "),
        p => p.startsWith("/uploads") ? p.replace("/uploads", "/migrate") : p,
        p => p.startsWith("/static/media/uploads") ? p.replace("/static/media/uploads", "/migrate") : p,
        p => p.replace("Settlement and Transportation", "Settlement_and_Transportation"),
        p => p.replace("Featured image for new videos ", "Featured image for new videos_")
    )

    return {
        ...post,
        featured_image: mapMediapath(post.featured_image),
        media: post.media.map(mapMediapath)
    }
}

const filterComments = (post: FlatMediaPost) : FlatMediaPost => ({
    ...post,
    comments: post.comments.filter(c => c.is_public && !c.is_removed)
})

const addMediaMetadata = (post: FlatMediaPost) : Post => {

    const getFileSystemPath = (path: string) => `/workspace/uploads${path}`

    const addMediaMetadataSingle = (media: string) => {
        const fsPath = getFileSystemPath(media)

        if (!fs.existsSync(fsPath)) {
            console.log(`Media file missing: ${fsPath}`)
            return null
        }

        let [width, height] = [null, null];

        const mime_type = mime.lookup(fsPath) || "application/octet-stream";

        if (mime_type.startsWith("image")) {
            try {
                ({ width, height } = imageSize(fsPath))
            } catch(e) {
                console.log(`Error getting image info: ${fsPath}`)
            }
        }

        return {
            mime_type,
            width: width,
            height: height,
            file: media
        }
    }

    return {
        ...post,
        media: post.media
            .map(addMediaMetadataSingle)
            .filter(x => !!x)
    }
}

export default R.pipe(
    extractMediaPaths,
    cleanCategoriesAndTags,
    mapMediaPaths,
    filterComments,
    addMediaMetadata
)