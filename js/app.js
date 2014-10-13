var app = app || {};

app.saveForm = function() {
	var formValues = app.getFormValues($('#project-form'));
	var p = new app.Project(formValues);
	p.save({}, {
        success: function (model, response, options) {
            console.log("The model has been saved to the server");
        },
        error: function (model, xhr, options) {
            console.log("Something went wrong while saving the model");
        }
    });
};

app.getFormValues = function(el) {
	var values = {};
	var input;
	el.children("input").each(function(index){
		input = $(this);
		values[input.attr('name')] = input.val();
	});
	return values;
}