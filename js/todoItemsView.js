var TodoItemsView = Backbone.View.extend({
	// tagName: "ul",
	// id: "todoItems",

	id: "todoItemsContainer",

	initialize: function(options) {
		if(!(options && options.model))
			throw new Error("model is not specified.");

		this.model.on("add", this.onAddTodoItem, this);
		this.model.on("remove", this.onRemoveTodoItem, this);
	},

	onRemoveTodoItem: function(todoItem) {
		// console.log("Remove", todoItem);
		this.$("li#" + todoItem.id).remove();
	},

	onAddTodoItem: function(todoItem) {
		//console.log('Added');
		var view = new TodoItemView({model: todoItem});
		this.$("#todoItems").append(view.render().$el);
	},

	events: {
		// "click #add": "onClickAdd",
		"keypress #newTodoItem": "onKeyPress"
	},

	onKeyPress: function(e) {
		if(e.keyCode == 13) {
			//console.log("Enter pressed");
			// this.onClickAdd();
			var $textBox = this.$("#newTodoItem");
			if($textBox.val()) {
				var todoItem = new TodoItem({title: $textBox.val()});
				this.model.create(todoItem);

				$textBox.val("");
			}
		}
	},

	// onClickAdd: function() {
	// 	//console.log("clicked");

	// 		var $textBox = this.$("#newTodoItem");
	// 		if($textBox.val()) {
	// 		var todoItem = new TodoItem({title: this.$("#newTodoItem").val()});
	// 		this.model.create(todoItem);

	// 		// todoItems.save();
	// 		// this.model.add(todoItem);

	// 		$textBox.val("");
	// 	}
	// },

	render: function() {
		var self = this;

		// this.$el.append("<input type='text' autofocus id='newTodoItem'>")
		// this.$el.append("<button id='add'>Add</button>");
		// this.$el.append("<ul id='todoItems'></ul>");

		// this.model.each(function(todoItem){
		// 	var view = new TodoItemView({model: todoItem});
		// 	self.$el.append(view.render().$el);
		// });
		var template = $("#todoItemsTemplate").html();
		var html = Mustache.render(template);
		this.$el.html(html);

		return this;
	}
});