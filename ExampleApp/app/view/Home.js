Ext.define("ExampleApp.view.Home", {
	extend: 'Ext.Panel',

	config: {
		title: 'Home',
		iconCls: 'home',
		xtype: 'homepanel',

		html: [
            '<img src="http://staging.sencha.com/img/sencha.png" />',
            '<h1>Welcome to Sencha Touch</h1>',
            "<p>You're creating the Getting Started app. This demonstrates how ",
            "to use tabs, lists and forms to create a simple app</p>",
            '<h2>Sencha Touch (2.0.0)</h2>'
        ].join("")
	}
}); 