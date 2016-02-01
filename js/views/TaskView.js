$(function () {
    App.Views.Task = Backbone.View.extend({
        initialize: function() {
            this.model.on('change', this.render, this);
            this.model.on('destroy',this.remove, this);
        },

        tagName: 'li',
        template: utils.template('taskTemplate'),
        
        render: function() {
            var template = this.template(this.model.toJSON());
            this.$el.html( template );
            return this;
        },

        events: {
            'click .edit': 'editTask',
            'click .delete': 'destroy',
        },

        editTask: function() {
            var newTaskTitle = prompt("Please, enter a new name of task: ", this.model.get('title'));
            this.model.set('title', newTaskTitle, {validate:true});
        },

        destroy: function() {
            this.model.destroy();
        },

        remove: function() {
            this.$el.remove();
        },
    });
})
