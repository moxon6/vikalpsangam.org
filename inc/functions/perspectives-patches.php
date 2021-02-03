<?php

// Exclude "Perspectives" category from latest stories page
function exclude_perspective( $query ) {
    if ($query->query_vars["pagename"] == "stories") {
		$query->query_vars["category__not_in"] = [
			get_cat_ID("Perspectives")
		];
	}
}

add_action( 'pre_get_posts', 'exclude_perspective' );