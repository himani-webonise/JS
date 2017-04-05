Ext.define('ExampleApp.store.Races', {
    extend: 'Ext.data.Store',
    model: 'ExampleApp.model.Race',
    xtype: 'races'    
    // autoLoad: true,
/*    config: {
    	proxy: {
     	//use sessionstorage if need to save data for that
    	//specific session only
     		type: 'sessionstorage',
        	id  : 'name',
    	},

        store: function() {

        }
    }*/,

//         config: {
//         model: 'ExampleApp.model.Race',
//         data: [
//             {raceNumber: "1", raceType: "test", distance: "09"}
//         ]
// /*        proxy: {
//             type: 'ajax',
//             extraParams: {
//                 id: example.id
//             }
//         }*/
//     }  
});