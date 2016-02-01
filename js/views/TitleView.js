$(function () {
App.Views.Title = Backbone.View.extend({
	tagName: 'ul',

	el: '.header',
	
	template: utils.template('headerTemplate'),

    render: function() {
		this.$el.html(this.template({header: 'Tasks todo:'}));
		
		return this;
	},
});

})