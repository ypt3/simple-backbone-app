var TodoItemView = Backbone.View.extend({
	tagName: "li",


	initialize: function(options){
		if(!(options && options.model))
			throw new Error("model is not specified.");

		this.model.on("change", this.render, this);
	},

	events: {
		"click #toggle": "onClickToggle",
		"click #delete": "onClickDelete"
	},

	onClickDelete: function() {
		// console.log("Delete clicked");
		this.model.destroy();
	},

	onClickToggle: function() {
		//console.log("Toggle clicked");
		// if(this.model.get("isCompleted"))
		// 	this.model.set("isCompleted", false);
		// else
		// 	this.model.set("isCompleted", true);

		// this.model.set("isCompleted", !this.model.get("isCompleted"));
		this.model.toggle();
		this.model.save();
		console.log(this.model.toJSON());
	},

	render: function() {
		this.$el.attr("id", this.model.id);
		this.$el.toggleClass("completed", this.model.get("completed"));

		// var checked = this.model.get("completed") ? "checked": "";
		// this.$el.html("<input id='toggle' type='checkbox' " + checked + ">" + this.model.escape("title") + "<button id='delete'>Delete</button>");

		var template = $("#todoItemTemplate").html();
		var html = Mustache.render(template, this.model.toJSON());
		this.$el.html(html);

		return this;
	}
});