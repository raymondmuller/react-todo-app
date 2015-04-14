var todos = [];

var TodoData = {
	todos: [],
	updateItems: function(newItems) {
    	console.log(newItems);
    	this.setState(newItems);
    },
  load: function() {
	this.myFirebaseRef = new Firebase("https://hire-me-at-doist.firebaseio.com/");
			
			this.myFirebaseRef.child("data").on("value", function(response) {
			  console.log(response.val())
			  for (var i=1; i < response.val().length; i++) {
			  	var todo = response.val()[i];
			    todos.push(React.createElement(Todo, {onClick: this.handleClick, data: todo}))
				}
				this.updateItems({items: todos});
			}.bind(this));
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    console.log(todos);
  }

};
