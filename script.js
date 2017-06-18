// object for todo list
var todoList = {
	todos: [],
	// displays todo list to console
	displayTodos: function() {
		console.log(this.todos);
	},
	// adds todo list items to the todos array
	addTodos: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	// changes a todo list item from the todos array
	changeTodos: function(position, todoText) {
		this.todos[position] = todoText;
		this.displayTodos();
	},
	// deletes a todo list item from the todos array
	deleteTodos: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	},
	// toggles the completed status of a todo item
	toggleCompleted: function(position) {
		if (this.todos[position].completed === false) {
			this.todos[position].completed = true;
		} else {
			this.todos[position].completed = false;
		}
		this.displayTodos();
	},
	// toggles all todos items completed status to true or false
	toggleAll: function() {

	}
};