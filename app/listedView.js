define( function( require ){
	return function( element ){
		
		var $ = require( 'jquery' );
		require( 'jquery-ui' );
		require( 'tablesorter' );
		require( 'tablesorter-widgets' );
		
		if ( !$( "head [href='page/page.css']").length ){
			$( 'head' ).append( '<link rel="stylesheet" href="page/page.css" />')
		}

		if ( !$( "head [href='substance/substance.css']").length ){
			$( 'head' ).append( '<link rel="stylesheet" href="substance/substance.css" />')
		}
		
		if ( !$( "head [href='lib/jquery-ui/jquery-ui.min.css']").length ){
			$( 'head' ).append( '<link rel="stylesheet" href="lib/jquery-ui/jquery-ui.min.css" />');
		}
		
		if ( !$( "head [href='lib/tablesorter/theme.ice.css']").length ){
			$( 'head' ).append( '<link rel="stylesheet" href="lib/tablesorter/theme.ice.css" />');
		}
		
		require( ['text!../page/listed-under-the-conventions.html'], function( page_template ){
			
			$( element ).html( page_template );

			
			$( '.listed a' ).click( function( ev ){
				ev.preventDefault();
				var url_to_open = $( this ).attr( 'href' );
				
				require( [ 'text!../' + url_to_open ], function( sustance_tpl ){
					$( '#dialog-container' ).html( sustance_tpl );
					$( '.substance' ).dialog( {
						modal: true,
						width: 800,
						maxHeight: 600,
						resizable: true,
						show: true,
						buttons: {
							close: function(){ $( this ).dialog( 'close' ) }
						},
						close: function(){ $( this ).dialog( 'destroy') }
					})
				});
			})
			
			$( 'article .icotable' ).each( function(){
				var html_output = '';
				var convention = $( this ).attr( 'data-convention' );
				switch( convention ){
				case( 'b' ):
					html_output = '<span class="hidden">c</span>' +
								'<img src="img/rotterdam_32.png" alt="Rotterdam convention logo" title="substance listed in Rotterdam convention"/>' +
								'<img src="img/stockholm_32.png" alt="Stockholm convention logo" title="substance listed in Stockholm convention" style="margin-left: 5px;"/>'
				break;
				case( 'r' ):
					html_output = '<span class="hidden" >a</span>' +
								'<img src="img/rotterdam_32.png" alt="Rotterdam convention logo" title="substance listed in Rotterdam convention"/>'
				break;
				case( 's' ):
					html_output = '<span class="hidden">b</span>' +
								'<img src="img/stockholm_32.png" alt="Stockholm convention logo" title="substance listed in Stockholm convention"/>'
				break;
				}
				$( this ).html( html_output );
			})
			
			$('article table').tablesorter({
				widgets: ['zebra', 'columns'],
				theme: 'ice',
				usNumberFormat: false,
				sortReset: true,
				sortRestart: true
			});
			
			$( document ).tooltip();
			
		})
		
	}
})