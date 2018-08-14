define( [ 'lodash', 'text!./layout.html', 'mdv'  ], function( _, template, Mdv ){
	var view = {
		template: template,
		css_url: 'layout/layout.css',
		is_rendered: false
	}
	_.assign( view, new Mdv() );
	return view;
})