Ext.define('ExampleApp.store.Contact', {
    extend: 'Ext.data.Store',
    model: 'ExampleApp.model.Contact',
    // autoLoad: true,
    config: {
    	proxy: {
     	//use sessionstorage if need to save data for that
    	//specific session only
     		type: 'sessionstorage',
        	id  : 'name',
    	}
    }
});