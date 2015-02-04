Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        console.log('Our first App woot!');
		
		var myStore = Ext.create('Rally.data.wsapi.Store', {
			model: 'User Story',
			listeners: {
				load: function(store, data, success) {
					//process data
				}
			},
			fetch: ['Name', 'ScheduleState']
		});
        //API Docs: https://help.rallydev.com/apps/2.0/doc/
    }
});
