var app = app || {};

app.Project = Backbone.Model.extend({
    defaults: {
        ID: "unknown",
        customer: "unknown",
        lat: "unknown",
        long: "unknown"
    },

    idAttribute: "ID",

    initialize: function() {
    	console.log('Project has been initialized');

    	this.on('change', function() {
    		if(this.hasChanged('ID')) {
    			console.log('ID has been changed');
    		}
    		if(this.hasChanged('customer')) {
    			console.log('Customer has been changed');
    		}
    		if(this.hasChanged('lat') || this.hasChanged('long')) {
    			console.log('Lat/Long has been changed');
    		}
    	});

    	this.on('invalid', function(model, error) {
    		console.log('Houston we have an error: ' + error);
    	});
    },

    validate: function(attr) {
    	if (attr.ID <= 0) {
    		return "Invalid ID";
    	}
    },

    constructor: function() {
    	console.log('constructor has been called');
    	Backbone.Model.apply(this, arguments);
    },

    alert: function() {
    	alert('ID: ' + this.get('ID') + ', Customer: ' + this.get('customer') + ', Lat/Long: ' + this.get('lat') + "," + this.get('long'));
    },

    urlRoot : 'http://localhost:8080/project'
});