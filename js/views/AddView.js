$(function () {
App.Views.AddTask = Backbone.View.extend({

    el: '.addContainer',

    template: utils.template('addMenuTemplate'),

    events: {
        'submit': 'submit'
    },

    submit: function(evn) {
        evn.preventDefault();

        var newTaskTitle = $(evn.currentTarget).find('input[type=text]').val();
        var newTask = new App.Models.Task({title: newTaskTitle});

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    alert('Please, fill out the title of your purchase!');
                } else {
                    this.collection.add(newTask);
                    $("input[type=text]").val("");
                }
            }
        }.bind(this);

        xhr.open('POST', 'http://127.0.0.1:1337');
        xhr.send(JSON.stringify(newTask.toJSON()));
	},

    render: function() {
        this.$el.html(this.template({add: 'add to list'}));

        return this;
    },
});
})
