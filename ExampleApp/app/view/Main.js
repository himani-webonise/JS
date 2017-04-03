Ext.define('ExampleApp.view.Main', {
    extend: 'Ext.tab.Panel',       

    xtype: 'main',

    requires: [
        'Ext.MessageBox'
    ],

    config: {
        tabBarPosition: 'bottom',
        fullscreen: true,

        items: [
                {
                    title: 'Contact',
                    iconCls: 'user',
                    xtype: 'formpanel',
                    // url: 'contact.php',s
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
                                    label: 'Name'
                                },
                                {
                                    xtype: 'emailfield',
                                    label: 'Email'
                                },
                                {
                                    xtype: 'textareafield',
                                    label: 'Message'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            text: 'Send',
                            ui: 'confirm',
                            
                            handler: function(button, event) {
                                var errorString = '',
                                form = button.up('formpanel'),
                                fields = form.query("field");
                                console.log(fields);
/*                                // dump form fields into new model instance
                                var model = Ext.create("MyApp.model.Person", form.getValues());
                             
                                // validate form fields
                                var errors = model.validate();
                             
                                if (!errors.isValid()) {
                                // loop through validation errors and generate a message to the user
                                    errors.each(function (errorObj) {
                                        errorString += errorObj.getField() + " " + errorObj.getMessage() + "";                      ";
                                        var s = Ext.String.format('field[name={0}]',errorObj.getField());
                                        form.down(s).addCls('invalidField');
                                    });
                                    Ext.Msg.alert('Errors in your input',errorString);
                                } else {
                                    Ext.Msg.alert("Data is valid","Success");
                                }*/

                            Ext.Msg.alert("Data is valid","Success");
                        }
                    }
                ]
            }
        ]
    }
});
    