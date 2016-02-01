App.Collections.Task = Backbone.Collection.extend({
    model: App.Models.Task,

    initialize: function () {
        this.on('add remove change', this.saveToStorage, this);
    },

    saveToStorage: function (collection) {
        utils.saveToStorage('tasks', this.toJSON());
    }
});
