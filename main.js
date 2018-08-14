define([ './common', 
         'layout/layoutView', 
         'nav/navView'], 
function( common, layout, nav ) {

	var $ = require( 'jquery' );
	$.ajaxSetup({ cache: false });
	
	var layout_rendered = false;
	
	if( !layout_rendered ){
		layout.render( 'body' );
		nav.render( 'nav' );
		layout_rendered = true;
	}
	
	require([ 'router' ], function( router ) {
    router
      .registerRoutes({
		'with-dialog': { path: '/wd/:name', moduleId: 'app/dialogView' },
		substances: { path: '/sbs/listed-under-the-conventions', moduleId: 'app/listedView' },
		collapsable: { path: '/clp/:name', moduleId: 'app/expandView' },
        page: { path: '/:name', moduleId: 'page/pageView' },
        notFound: { path: '*', moduleId: 'page/pageView' }
      })
      
      .on('routeload', function( View, routeArguments) {
    	  var view = new View( 'article', routeArguments.name );
      })
      
      .init(); 
  });
});