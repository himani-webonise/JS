Ext.define('ExampleApp.model.Race', {
    extend: 'Ext.data.Model',
    model: 'Race',    
    
    config: {
        
        fields: [
            {name: 'raceNumber',  type: 'string'},
            {name: 'raceType',  type: 'string'},
            {name: 'distance',  type: 'string'}
        ]
    }
});