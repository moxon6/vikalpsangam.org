import schema from '../validate/schema';
import { StructType } from 'superstruct'
import { extractMedia } from './utils';
import * as R from 'ramda';
import * as mime from 'mime-types';
import * as fs from 'fs';
import * as probe from 'probe-image-size';
import { v4 as uuidv4 } from 'uuid';
import { patchUrls } from './site-specific-patches';

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
        p => p.replace(/%20/gi, " "),
        p => p.startsWith("uploads/") ? p.replace("uploads/", "migrate/") : p,
        p => p.startsWith("/uploads/") ? p.replace("/uploads/", "migrate/") : p,
        p => p.startsWith("/static/media/uploads") ? p.replace("/static/media/uploads", "migrate") : p,
        patchUrls,
        encodeURI
    )

    return {
        ...post,
        content: patchUrls(post.content)
            .replace(/\/static\/media\/uploads\//gi, "/wp-content/uploads/migrate/"),
        featured_image: mapMediapath(post.featured_image),
        media: post.media.map(mapMediapath)
    }
}

const filterComments = (post: FlatMediaPost) : FlatMediaPost => ({
    ...post,
    comments: post.comments.filter(c => c.is_public && !c.is_removed)
})

const addMediaMetadata = (post: FlatMediaPost) : Post => {

    const getFileSystemPath = (path: string) => `/workspace/uploads/${decodeURI(path)}`

    const getImageDimensionsOrNull = (imagePath: string, mime_type: string) => mime_type.startsWith("image")
        ? probe.sync(fs.readFileSync(imagePath))
        : { width: null, height: null }

    const addMediaMetadataSingle = ({file, is_featured} : { file: string, is_featured: boolean}) => {
        const fsPath = getFileSystemPath(file)

        if (!fs.existsSync(fsPath)) {
            console.log(`Media file missing: ${fsPath} on post: ${post.title}`)
            return null
        }
        
        const mime_type = mime.lookup(fsPath) || "application/octet-stream";
        const { width, height } = getImageDimensionsOrNull(fsPath, mime_type)

        return {
            mime_type,
            width,
            height,
            file,
            is_featured
        }
    }

    const mediaWithIsFeatured = post.media.map(file => ({
        file, 
        is_featured: false
    }))

    if (post.featured_image) {
        mediaWithIsFeatured.push({
            file: post.featured_image,
            is_featured: true
        })
    }

    return {
        ...post,
        media: mediaWithIsFeatured
            .map(addMediaMetadataSingle)
            .filter(x => !!x)
    }
}

const withGuid = (post: any) => ({...post, guid: uuidv4() })

export default R.pipe(
    withGuid,
    extractMediaPaths,
    cleanCategoriesAndTags,
    mapMediaPaths,
    filterComments,
    addMediaMetadata
)