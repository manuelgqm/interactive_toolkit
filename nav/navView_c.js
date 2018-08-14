define( [ 'lodash', 'text!./nav.html', 'mdv', 'jquery'  ], 
	function( _, template, Mdv ){
		var view = {
				template: template,
				css_url: 'nav/nav.css',
				is_rendered: false,
				
				renderCallback: function(){
					console.log( $( 'nav li' ).length  );
					$('nav li:has(ul)')
						.click( function(event){
							if ( this == event.target ) {
								$( this ).css('list-style-image',
									( !$( this ).children( 'ul' ).is( ':hidden' ) ) ? 'url(img/plus_blue.png)' : 'url(img/minus_blue.png)');
								$( this ).children( 'ul' ).toggle( '800' );
							}
						})
						.css({cursor:'pointer', 'list-style-image':'url(img/plus_blue.png)'})
						.children( 'ul' ).hide();
					$('nav li:not(:has(ul))').css({cursor:'default', 'list-style-image':'url(img/arrow_blue.png'});
				}
				
			}
		
		_.assign( view, new Mdv() );
		
		return view;
	}
)