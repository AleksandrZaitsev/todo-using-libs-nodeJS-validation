App.Models.Task = Backbone.Model.extend({
    url: 'test',
    
    validate: function(attrs) {
        if (!$.trim(attrs.title)) {
            return "Name of the task must be valid";
        }
    }
});
