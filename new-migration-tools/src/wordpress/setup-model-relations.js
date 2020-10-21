export default function setupRelations(wordpressModels) {
    wordpressModels.wp_posts.hasMany(wordpressModels.wp_postmeta, {
        sourceKey: "ID",
        foreignKey: "post_id"
    });


    wordpressModels.wp_terms.hasOne(wordpressModels.wp_term_taxonomy, {
        foreignKey: 'term_id'
    });
}