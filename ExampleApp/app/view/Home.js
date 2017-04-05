Ext.define("ExampleApp.view.Home", {
	extend: 'Ext.Panel',

    xtype: 'Home',

	config: {
		title: 'Home',
		iconCls: 'home',
		xtype: 'homepanel',

/*		 refs: {
	        HomeView: {
	            autoCreate: true,
	            selector: 'HomeView',
	            xtype: 'HomeView'
	        },
    	},*/

		html: [
            '<p>Welcome to Home page</p>'
        ],

        items: [
        	{
        		xtype: 'button',        		        		
        		ui: 'sencha',
        		text: 'Send Request',        		        		
                id: 'apiBtn',
                centered: true                       		
        	},
            {
                xtype: 'list',
                // store: 'Races',
                layout: 'fit',    
                itemTpl: new Ext.XTemplate('<p>{raceNumber} &nbsp; {raceType}</p>'),                
                id : 'raceList',
                // scrollable: 'vertical',                
                type:'gradedList',
                cls:'gradedListCnt',
                striped: true,
                disableSelection: true,
                scrollable: false,                
                itemId: 'raceListId',
                tplWriteMode: 'insertAfter'

            }
        ]
	}
}); 