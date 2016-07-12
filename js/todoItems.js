var TodoItems = Backbone.Collection.extend({
	model: TodoItem,

	url: "http://jsonplaceholder.typicode.com/todos"
});