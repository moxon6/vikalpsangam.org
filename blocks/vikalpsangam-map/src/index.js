import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import './style.scss';

registerBlockType( 'create-block/vikalpsangam-map', {
	title: __( 'Vikalpsangam Map', 'vikalpsangam-map' ),
	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'vikalpsangam-map'
	),
	category: 'widgets',
	icon: 'smiley',

	supports: {
		html: false,
	},
	edit: () => "This is a leafletjs block",
	save: () => null,
} );
