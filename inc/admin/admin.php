<?php

function wpb_search_filter($query) {
	if ($query->is_search) {
	$query->set('post_type', 'post');
	}
	return $query;
}
add_filter('pre_get_posts','wpb_search_filter');

function add_extra_fields_to_category($taxonomy_name) {
    ?>
    <div class="form-field">
        <label for="short-description">Short Description</label>
        <input type="text" name="short-description" id="short-description"/>
    </div>
    <?php
}

add_action('category_add_form_fields','add_extra_fields_to_category');

function save_extra_taxonomy_fields($term_id){
    $term_item = get_term($term_id,'category');
    $term_slug = $term_item->slug;
	$term_category_text = sanitize_text_field($_POST['short-description']);
	update_option('term_category_text_' . $term_slug, $term_category_text); 
}

add_action('create_category','save_extra_taxonomy_fields');
add_action('edit_category','save_extra_taxonomy_fields');

function edit_extra_fields_for_category($term){
    //collect the term slug
    $term_slug = $term->slug;

    //collect our saved term field information
    $term_category_text = get_option('term_category_text_' . $term_slug); 
    $term_category_textarea = get_option('term_category_textarea_' . $term_slug); 
    $term_category_select = get_option('term_category_select_' . $term_slug); 
    $term_category_radio = get_option('term_category_radio_' . $term_slug); 

    //output our additional fields?>
    <tr class="form-field">
        <th valign="top" scope="row">
            <label for="short-description">Short Description</label>
        </th>
        <td>
            <input type="text" name="short-description" id="short-description" value="<?php echo $term_category_text; ?>"/>
        </td>
    </tr>
    <?php
}

add_action('category_edit_form_fields','edit_extra_fields_for_category');

function admin_overrides(){ 
    wp_register_script('admin-overrides', get_template_directory_uri() .'/bundle/admin.js', ["wp-polyfill"], vikalpsangam_VERSION, true);
	wp_enqueue_script('admin-overrides');
	
	wp_enqueue_style('reorder-post-sidebar', get_template_directory_uri() . '/admin-sidebar.css');

}
add_action( 'admin_enqueue_scripts', 'admin_overrides' );