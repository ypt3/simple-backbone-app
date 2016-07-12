
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

$(document).ready(function(){
	// var todoItem = new TodoItem({description: "TodoItem 1"});

	// var todoItemView = new TodoItemView({model: todoItem});
	// $("body").append(todoItemView.render().$el);

	// var todoItems = new TodoItems([
	// 	new TodoItem({id: 1, description: "TdoItem 1"}),
	// 	new TodoItem({id: 2, description: "TdoItem 2"})
	// 	]);

	var todoItems = new TodoItems();
	todoItems.fetch();

	var todoItemsView = new TodoItemsView({model: todoItems});
	$("body").append(todoItemsView.render().$el);
});