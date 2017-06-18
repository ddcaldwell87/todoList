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
	// toggles the completed status of a single todo item
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
		// get total number of todo items
		var totalTodos = this.todos.length;
		
		// how many todo items are complete
		var completedTodos = 0;

		// find out how many todo items are completed and add them to completedTodos
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}

		// if all todo items are completed, make them uncompleted
		if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		// else, make them all completed
		} else {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
	}
};

// handlers to be used in the DOM
var handlers = {
	displayTodos: function() {

	},
	addTodos: function() {

	},
	changeTodos: function() {

	},
	deleteTodos: function() {

	},
	toggleCompleted: function() {

	},
	toggleAll: function() {
		
	}
};