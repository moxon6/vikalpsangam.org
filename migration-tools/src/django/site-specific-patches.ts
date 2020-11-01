import * as R from 'ramda';

// This module contains data patches specific to the vikalp sangam django deployment
// Specific patches to the vikalp dataset should be applied here

export const patchUrls = R.pipe(
    (p: string) => p,
    p => p.replace("Settlement and Transportation", "Settlement_and_Transportation"),
    p => p.replace("Featured image for new videos ", "Featured image for new videos_")
)