import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { className } ) {
	return (
		<p className={ className }>
			{ __(
				'Vikalpsangam Map – hello from the editor!',
				'vikalpsangam-map'
			) }
		</p>
	);
}
