define( function( require ){
	return function( element, template_name ){
	
		var $ = require( 'jquery' );
		require( 'jquery-ui' );
		
		if ( !$( "head [href='page/page.css']").length ){
			$( 'head' ).append( '<link rel="stylesheet" href="page/page.css" />')
		}
		
		if ( !$( "head [href='lib/jquery-ui/jquery-ui.min.css']").length ){
			$( 'head' ).append( '<link rel="stylesheet" href="lib/jquery-ui/jquery-ui.min.css" />');
		}
		
		require( ['text!../page/' + template_name + '.html'], function( page_template ){
			$( element ).html( page_template );
			$( 'article div.dialog' ).dialog({
				modal: true,
				autoOpen: false,
				width: 800,
				maxHeight: 600,
				resizable: true,
				show: true,
				buttons: {
					close: function(){ $( this ).dialog( 'close' ) }
				}
			}).addClass( 'dialog' );
			
			$( 'article area' ).click( function( ev ){
				ev.preventDefault();
				var element_to_open = $( this ).attr( 'href' );
				$( '#' + element_to_open ).dialog( 'open' );
			})
			
			$( '.expand' ).each( function(){
				$( this ).wrapInner( '<div></div>' );
				$( this ).prepend( '<h4>' + $( this ).attr( 'title' ) + '</h4>' );
			})
			
			$( 'div.expand' ).accordion({
				collapsible: true,
				header: 'h4',
				active: false
			})
			
		})
		
	}
})