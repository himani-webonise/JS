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
                                Ext.Msg.alert("Data is valid","Success");
                            }
                        }
                    ]
                }
        ]
    }
});
    