var App = React.createClass({
	getInitialState: function() {
		return {todos: []};
	},
	addToList: function(newItem){
		var list = this.state.todos.concat([newItem]);
		this.setState({todos: list});
	},
	componentDidMount: function() {
	this.myFirebaseRef = new Firebase("https://hire-me-at-doist.firebaseio.com/");
			this.myFirebaseRef.child("data").on("value", function(response) {
			  for (var i=1; i < response.val().length; i++) {
					this.addToList(response.val()[i]);
				}
			}.bind(this));
  },
	render: function() {
		return (
		<div>
		<TodoInput onAdd={this.addToList}></TodoInput>
		<div>
		<TodoList data={this.state.todos}></TodoList>
		</div></div>
		)
	}
})
