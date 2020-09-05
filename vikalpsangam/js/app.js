/* eslint-env jquery */

const FixCategoryHeight = ( function() {
	function setHeight() {
		$( '.category-page-category-list-wrapper' ).each( function() {
			const ele = $( this );
			let maxHHeight = 0;
			let maxPHeight = 0;
			let maxAHeight = 0;

			ele.find( 'h4' ).each( function() {
				if ( maxHHeight < $( this ).innerHeight() ) {
					maxHHeight = $( this ).innerHeight();
				}
			} );

			ele.find( 'p' ).each( function() {
				if ( maxPHeight < $( this ).innerHeight() ) {
					maxPHeight = $( this ).innerHeight();
				}
			} );

			ele.find( '.category-title-wrapper' ).each( function() {
				if ( maxAHeight < $( this ).innerHeight() ) {
					maxAHeight = $( this ).innerHeight();
				}
			} );

			ele.find( 'h4' ).each( function() {
				$( this ).css( 'height', maxHHeight + 'px' );
			} );
			ele.find( 'p' ).each( function() {
				$( this ).css( 'height', maxPHeight + 'px' );
			} );
			ele.find( '.category-title-wrapper' ).each( function() {
				$( this ).css( 'height', maxAHeight + 'px' );
			} );
		} );
	}

	return {
		init() {
			setHeight();
		},
	};
}() );

const FixCarousalHeight = ( function() {
	function setHeight() {
		const featureListHeight = $( '.featured-list' ).innerHeight();
		$( '.fill-image' ).css( 'height', featureListHeight );
	}

	function trigger() {
		if ( $( '.featured-list' ).length > 0 && $( '.featured-list' ).offset().left > 200 ) {
			setHeight();
		}
	}

	return {
		init() {
			trigger();
		},
	};
}() );

const PageEventsList = ( function() {
	function resizeHandler() {
		FixCarousalHeight.init();
	}

	return {
		init() {
			$( window ).resize( function() {
				resizeHandler();
			} );
		},
	};
}() );

// var LoadMoreCallback = (function(jq){
//     function callback(){
//          jq.endlessPaginate({
//             onCompleted:function(){
//                 FixCategoryHeight.init();
//             }
//         });
//         jq.endlessPaginate();
//     }
//     return{
//         init: function(){
//             callback();
//         }
//     };
// })($);

const SetPageSeparatorBar = ( function() {
	function setIt() {
		if ( $( '.right-section' ).length > 0 && $( '.right-section' ).offset().top > 200 ) {
			return;
		}
		if ( $( '.left-section' ).innerHeight() < $( '.right-section' ).innerHeight() ) {
			$( '.left-section' ).removeClass( 'right-border-separator' );
			$( '.right-section' ).addClass( 'left-border-separator' );
		} else {
			$( '.left-section' ).addClass( 'right-border-separator' );
			$( '.right-section' ).removeClass( 'left-border-separator' );
		}
	}
	return {
		init() {
			setIt();
		},
	};
}() );

const CommentsUI = ( function() {
	function bindEvent() {
		$( '#addNewCommentBtn' ).click( function() {
			$( '#addNewCommentsFormWrapper' ).toggle( 'fast' );
		} );
	}
	function setLevels() {
		const buckets = [];
		function hasElement( num ) {
			for ( let i = 0; i < buckets.length; i++ ) {
				if ( buckets[ i ] === num ) {
					return true;
				}
			}
			return false;
		}

		function getIndex( num ) {
			for ( let i = 0; i < buckets.length; i++ ) {
				if ( buckets[ i ] === num ) {
					return i;
				}
			}
		}

		function getBuckets() {
			$( '#comments ul' ).each( function() {
				const value = $( this ).offset().left;
				if ( ! hasElement( value ) ) {
					buckets.push( value );
				}
			} );

			buckets.sort( function( a, b ) {
				return a > b;
			} );
		}

		function setLevelClasses() {
			$( '#comments ul' ).each( function() {
				const value = $( this ).offset().left;
				const index = getIndex( value );
				$( this ).attr( 'data-level', index );
			} );
		}
		function applyLevelClass() {
			$( '#comments ul' ).each( function() {
				const value = $( this ).attr( 'data-level' );
				if ( value > 2 ) {
					$( this ).addClass( 'dont-style' );
				}
			} );
		}

		getBuckets();
		setLevelClasses();
		applyLevelClass();
	}
	return {
		init() {
			try {
				bindEvent();
				setLevels();
			} catch ( e ) {}
		},
	};
}() );

const LanguageSelection = ( function() {
	function submitForm() {
		$( '#langaugeSelection label' ).click( function() {
			$( '#languageHiddenElement' ).val( $( this ).find( 'input' ).val() );
			$( '#languageHiddenElement' ).closest( 'form' ).submit();
		} );
	}

	function bindExplandCollapse() {
		$( '.show-language-bar' ).click( function() {
			$( this ).hide();
			$( '.language-wrapper' ).slideDown( 'slow', function() {
				$( '#content' ).css( 'margin-top', '78px' );
			} );
		} );

		$( '.hide-language-bar' ).click( function() {
			$( '.language-wrapper' ).slideUp( 'slow', function() {
				$( '.show-language-bar' ).slideDown( 'slow' );
				$( '#content' ).css( 'margin-top', '50px' );
			} );
		} );
	}

	return {
		init() {
			bindExplandCollapse();
			submitForm();
		},
	};
}() );

const CollapseDescription = ( function() {
	function showHideBinding() {
		$( '.category-description p.short a' ).click( function() {
			$( '.category-description p.short' ).hide();
			$( '.category-description p.long' ).show();
		} );

		$( '.category-description p.long a' ).click( function() {
			$( '.category-description p.long' ).hide();
			$( '.category-description p.short' ).show();
		} );
	}

	return {
		init() {
			showHideBinding();
		},
	};
}() );

$( document ).ready( function() {
	$( 'a#feature-article' ).hover( function() {
		$( this ).find( 'p' ).toggle();
	} );

	PageEventsList.init();
	// LoadMoreCallback.init();
	LanguageSelection.init();
	CollapseDescription.init();
} );

$( window ).load( function() {
	FixCategoryHeight.init();
	FixCarousalHeight.init();
	SetPageSeparatorBar.init();
	CommentsUI.init();
} );
