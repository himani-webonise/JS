Ext.define('ExampleApp.model.Contact',{
	extend: 'Ext.data.Model',
    alias: 'model.Contact',
 
	config: {
    	fields: [
	        {
	        	name: 'name'
	        },
	        {
	        	name: 'email'
	        },
	        {
	        	name: 'message'
	        }
		],
		validations: [
			{
				type: 'presence',
				field: 'name',
				message: 'Name is mandatory'	
			},		
			{
				type: 'presence',
				field: 'message',
				message: 'Message is mandatory'	
			}
		]
	}
});