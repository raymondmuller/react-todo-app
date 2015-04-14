var TodoInput = React.createClass({
	getInitialState: function() {
		return {todo: ''};
	},
	addToList: function(e){
		console.log("adding to list");
		e.preventDefault();
		this.props.onAdd(this.state.todo);
		this.setState({todo: ''});
		React.findDOMNode(this.refs.todo).focus();
		return;
	},
	onChange: function(e){
		this.setState({
			todo: e.target.value
		});
	},
	render: function(){
		return (
			<div className="row row-centered">

			<form>
				<input id="todoInput" ref='todo' onChange={this.onChange} className="todo-input" value={this.state.todo}/>
				<span id="addButton" className="add-button"><button onClick={this.addToList}>Add</button></span>
			</form>
			</div> 
		);
	}
});