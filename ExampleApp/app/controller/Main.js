Ext.define('ExampleApp.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            sendButton: '#sendBtn',
            apiButton: '#apiBtn',
            raceList: '#raceList'
        },

        control: {
            sendButton: {
                tap: 'onSendButtonTap'
            },

            apiButton: {
                tap: 'callApi'
            }
        }
    },

    onSendButtonTap: function (button) {
        console.log('loaded onSendButtonTap');
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
    },

    callApi: function(button) {
        
        Ext.Ajax.request({
            url: 'http://stage.drfformulatorweb.com/formulator-service/racesCondition',
            params: {
                raceDate: '4/5/2017',
                trackId: 'GP',
                country: 'USA',
                dayEve: 'D',
                raceNum: 1,
                horseNum: 10030469
            },
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },

            success: function(response) {             
                debugger;
                var _this = this;
                var jsonResp = Ext.util.JSON.decode(response.responseText);

                if (jsonResp.status == 200) {
                    var raceList = jsonResp.data.races;
                    var raceStore = Ext.getStore('Races'); 

                    raceStore.setData(raceList);
                    raceStore.load();
                    _this.getRaceList().setStore(raceStore);                                     
                }                 
            }.bind(this),
            failure: function(response) {
                Ext.Msg.alert('Error in API'+ response.status);
            }
        });
    }

});