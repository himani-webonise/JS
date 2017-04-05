Ext.define('ExampleApp.view.Main', {
    extend: 'Ext.tab.Panel',       

    xtype: 'main',

    requires: [
        'Ext.MessageBox'
    ],

    views : [
        'Home'
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
                        id: 'sendBtn'                        
                    }
                ]
            }
        ]
    }
});
    