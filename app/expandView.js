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