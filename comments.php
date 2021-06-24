<?php
/*

This is based on the wordpress core comments.php

*/
    if ( have_comments() ) : ?>
<h3 id="comments">
    <?php
		if ( 1 == get_comments_number() ) {
			printf(
				__( 'One response to %s' ),
				'&#8220;' . get_the_title() . '&#8221;'
			);
		} else {
			printf(
				_n( '%1$s response to %2$s', '%1$s responses to %2$s', get_comments_number() ),
				number_format_i18n( get_comments_number() ),
				'&#8220;' . get_the_title() . '&#8221;'
			);
		}
		?>
</h3>

<div class="navigation">
    <div class="alignleft"><?php previous_comments_link(); ?></div>
    <div class="alignright"><?php next_comments_link(); ?></div>
</div>

<ol class="commentlist">
    <?php wp_list_comments(); ?>
</ol>

<div class="navigation">
    <div class="alignleft"><?php previous_comments_link(); ?></div>
    <div class="alignright"><?php next_comments_link(); ?></div>
</div>
<?php else : ?>

<?php if ( comments_open() ) : ?>

<?php else : ?>
<p class="nocomments"><?php _e( 'Comments are closed.' ); ?></p>

<?php endif; ?>
<?php endif; ?>

<?php comment_form(); ?>