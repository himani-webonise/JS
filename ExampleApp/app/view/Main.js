Ext.define('ExampleApp.view.Main', {
    extend: 'Ext.tab.Panel',       

    xtype: 'main',

    requires: [
        'Ext.MessageBox'
    ],

    views : [
        'HomeView'
    ],
    stores : [
        'ExampleApp.store.Contact' //it must be Contacts
    ],

    config: {
        tabBarPosition: 'bottom',
        fullscreen: true,

        items: [
                {
                    title: 'Contact',
                    iconCls: 'user',
                    xtype: 'formpanel',
                    url: 'localhost:1841',

                    layout: 'vbox',

                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Contact Us',
                            instructions: '(email address is optional)',
                            height: 285,
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'name',
                                    label: 'Name'
                                },
                                {
                                    xtype: 'emailfield',
                                    name: 'email',
                                    label: 'Email'
                                },
                                {
                                    xtype: 'textareafield',
                                    name: 'message',
                                    label: 'Message'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            text: 'Send',
                            ui: 'confirm',
                            
                            handler: function(button, event) {
                                var errorString = '';
                                var form = button.up('formpanel');
                                var values = form.getValues();
                                
                                // dump form fields into new model instance
                                var model = Ext.create("ExampleApp.model.Contact", values);
                             
                                // validate form fields
                                var errors = model.validate();
                                                             
                                if (!errors.isValid()) {
                                // loop through validation errors and generate a message to the user
                                    errors.each(function (errorObj) {
                                        // errorObj.getField() + " " +
                                        errorString +=  errorObj.getMessage() + "";
                                    });
                                    Ext.Msg.alert('Errors in your input', errorString);
                                } else {
                                    
                                    Ext.Msg.alert("Data is valid","Success");                              
                                    var newRecord = new ExampleApp.model.Contact(values);                                                                                                        
                                    var store = Ext.create('ExampleApp.store.Contact', { model: "ExampleApp.model.Contact" }); 
                                      
                                    store.load();
                                    store.add(newRecord);
                                    store.sync();
                                   
                                    Ext.Viewport.down('main').destroy();
                                    Ext.Viewport.add(Ext.create('ExampleApp.view.Home', { fullscreen: true }));
                            }                           
                        }
                    }
                ]
            }
        ]
    }
});
    