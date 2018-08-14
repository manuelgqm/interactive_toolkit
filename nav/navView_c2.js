define( [ 'lodash', 'text!./nav.html', 'mdv', 'jquery'  ], 
	function( _, template, Mdv ){
		var view = {
				template: template,
				css_url: 'nav/nav.css',
				is_rendered: false,
				
				renderCallback: function(){
					
					$('nav li:has(ul)')
						.click( function(event){
							if ( this == event.target ) {
								console.log( 'click' )
								$( this ).css('list-style-image',
									( !$( this ).children( 'ul' ).is( ':hidden' ) ) ? 'url(img/plus_blue.png)' : 'url(img/minus_blue.png)');
								$( this ).children( 'ul' ).toggle( '800' );
							}
						})
						.css({cursor:'pointer', 'list-style-image':'url(img/plus_blue.png)'})
						.children( 'ul' ).hide();
					$('nav li:not(:has(ul))').css({cursor:'default', 'list-style-image':'url(img/arrow_blue.png'});
					
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