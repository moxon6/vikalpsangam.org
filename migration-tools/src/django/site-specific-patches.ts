import * as R from 'ramda';

// This module contains data patches specific to the vikalp sangam django deployment
// Specific patches to the vikalp dataset should be applied here

const globalPatches = R.pipe(
    (p: string) => p.replace(/Settlement and Transportation/g, "Settlement_and_Transportation"),
    p => p.replace(/Featured image for new videos /g, "Featured image for new videos_"),
)

const useThumbnailsForMissing = R.pipe(
    (p: string) => p.replace("Environment_And_Ecology/forestwaywater.jpg", "Environment_And_Ecology/.thumbnails/forestwaywater-327x218.jpg"),
    p => p.replace("vikalp_sangam_gathering_timbaktu.jpg", ".thumbnails/vikalp_sangam_gathering_timbaktu-327x218.jpg"),
    p => p.replace("Environment_And_Ecology/forestwayholyhill.jpg", "Environment_And_Ecology/.thumbnails/forestwayholyhill-60x60.jpg"),
    p => p.replace("Food and water/harpalsinghadilabadpaddy.jpg", "Food and water/.thumbnails/harpalsinghadilabadpaddy-327x218.jpg"),
    p => p.replace("LearningandEducation/leaf_art__process_of_self_creation.jpg", "LearningandEducation/.thumbnails/leaf_art__process_of_self_creation-327x218.jpg")
)

export const patchUrls = R.pipe(
    globalPatches,
    useThumbnailsForMissing,
    p => p.replace("alternativePolitics/gond_ravan_procession.jpg", "SocietyandCulture/gond_ravan_procession.jpg"),
    p => p.replace("Vikalp Sangam  Case Studies/timbaktu_collective_casestudy_ak.pdf", "Vikalp Sangam Case Studies/timbaktu_collective_casestudy_ak.pdf"),
    p => p.replace("organic_farmers_coop_madhuchandan_2.jpg", "organic_farmers_coop_madhuchandan.jpg"),
    p => p.replace("Resources/alternatives_transformation_framework_revised_20.2.2017.pdf", "Resources/alternatives_transformation_format_revised_20.2.2017.pdf"),
    p => p.replace("baba_mayaram_kitchen_gardens_%E0%A4%AE%E0%A4%BE%E0%A4%A8%E0%A4%AC%E0%A4%BE%E0%A4%88_%E0%A4%97%E0%A5%8B%E0%A4%82%E0%A4%A1_%E0%A4%95%E0%A4%BE%E0%A4%B8%E0%A4%B5%E0%A4%BE%E0%A4%AF.jpg", "baba_mayaram_kitchen_gardens_कमलेश्वरी_बाई_कामेपुर.jpg"),
    p => p.replace("PolicyEdits/ecoexist)natural_colours_picture_rz.png", "Perspectives/ecoexist_natural_colours_picture_rz.png"),
    p => p.replace("Resources/makaam_decl_womenfarmers_mar16.docx", "Resources/makaam_decl_womenfarmers_mar16.pdf")
)
