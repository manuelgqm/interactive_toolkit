// css_url: styling
define( ['jquery' ], function( $ ){
	return function(){
		this.render = function( selector ){
			
			if ( this.css_url != undefined ){
				$( 'head' ).append( '<link rel="stylesheet" href="' + require.toUrl( '' + this.css_url ) + '" />');
			}
			
			$( selector ).empty().append( this.template );
			
			if ( this.renderCallback != undefined ){ this.renderCallback() };
		}
			
	} 
})