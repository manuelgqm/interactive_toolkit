requirejs.config({
    shim: {
    	'jquery-ui': { exports: '$', deps: [ 'jquery' ] },
    },
    paths: {
        'jquery-ui': 'lib/jquery-ui/jquery-ui.min',
        'router': 'lib/router.min',
        'lodash': 'lib/lodash',
        'text': 'lib/text',
        'mdv': 'lib/mdv',
        'jquery': 'lib/jquery',
        'rivets': 'lib/rivets',
        'tablesorter': 'lib/tablesorter/jquery.tablesorter.min',
        'tablesorter-widgets': 'lib/tablesorter/jquery.tablesorter.widgets.min'
    }
});