define( [ 'lodash', 'text!./nav.html', 'mdv', 'jquery'  ], 
	function( _, template, Mdv ){
		var view = {
				template: template,
				css_url: 'nav/nav.css',
				is_rendered: false,
				
				renderCallback: function(){
					var icon_plus = 'url(img/plus_blue.png)';
					var icon_minus = 'url(img/minus_blue.png)';
					var icon_arrow = 'url(img/arrow_blue.png)';
					$('nav li:has(ul)')
						.css( { cursor:'pointer', 'list-style-image': icon_plus } )
						.click( function(event){
							event.stopPropagation()
							var target = $( event.target ).last();
							var actionTo = ( target.is( "li" ) ) ? $( this ) : null;
							var actionTo = ( target.is( "a" ) ) ? target.parent( "li" ) : $( this );
							if( actionTo != null ){
								if( actionTo.children( 'ul' ).length ){
									if ( !( target.is( "a" ) && !actionTo.children( 'ul' ).is( ':hidden' ) ) ){
										actionTo.css('list-style-image',
											( !actionTo.children( 'ul' ).is( ':hidden' ) ) ? icon_plus : icon_minus );
										actionTo.children( 'ul' ).toggle( '800' );
									}
								}
							};
						})
					$( 'nav li:has(ul):not(.level-1)' ).children( 'ul' ).hide();
					$( 'nav .level-1').css( 'list-style-image', icon_minus )
					$( 'nav li:not(:has(ul))' ).css( { cursor: 'default', 'list-style-image': icon_arrow  } );
					
					var page_loaded = window.location.href.toString().replace( 'http://istas.net/toolkit/', '' );
//					TODO: manage hashchange updating manually url
//					TODO: expand node of landing_page
					$( document ).bind( 'hashchange', function(){
						page_loaded = window.location.href.toString().replace( 'http://istas.net/toolkit/', '' );
					} )
					
					var pevious_node_selected = $( 'nav a[href="' + page_loaded + '"]' ).addClass( 'selected' ); 
					$( 'nav a' ).click( function(){
						if( pevious_node_selected ){ pevious_node_selected.removeClass( 'selected' )}
						$( this ).addClass( 'selected' );
						pevious_node_selected = $( this );
					});
				}
				
			}
		
		_.assign( view, new Mdv() );
		
		return view;
	}
)