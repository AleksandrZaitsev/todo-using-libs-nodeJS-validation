$(function  () {

    var tasksCollection = new App.Collections.Task(utils.getCollection('tasks'));

    new App.Views.Title().render().el;
    new App.Views.AddTask({collection: tasksCollection}).render().el;

    new App.Views.Tasks({collection: tasksCollection}).render().el;

})