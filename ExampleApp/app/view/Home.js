Ext.define("ExampleApp.view.Home", {
	extend: 'Ext.Panel',

	config: {
		title: 'Home',
		iconCls: 'home',
		xtype: 'homepanel',

		 refs: {
	        HomeView: {
	            autoCreate: true,
	            selector: 'HomeView',
	            xtype: 'HomeView'
	        },
    	},

		html: [
            '<p>Welcome to Home page</p>'
        ]
	}
}); 