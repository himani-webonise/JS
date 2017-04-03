Ext.define('ExampleApp.view.Main', {
    extend: 'Ext.tab.Panel',       

    xtype: 'main',

    requires: [
        'Ext.MessageBox'
    ],

    views : [
        'HomeView'
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
                                
                                // dump form fields into new model instance
                                var model = Ext.create("ExampleApp.model.Contact", form.getValues());
                             
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
                                    // Ext.Msg.alert("Data is valid","Success");                                    
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
    