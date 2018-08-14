define( function( require ){
	return function( element, template_name ){
	
		var $ = require( 'jquery' );
		require( 'jquery-ui' );
		
		template_name = ( !template_name ) ? 'home' : template_name;
		
		if ( !$( "head [href='page/page.css']").length ){
			$( 'head' ).append( '<link rel="stylesheet" href="page/page.css" />')
		};
		
		if ( !$( "head [href='lib/jquery-ui/jquery-ui.min.css']").length ){
			$( 'head' ).append( '<link rel="stylesheet" href="lib/jquery-ui/jquery-ui.min.css" />');
		}
		
		require( ['text!./' + template_name + '.html'], function( page_template ){
			$( element ).html( page_template );
			$( 'cite' ).tooltip();
		})
		
	}
})