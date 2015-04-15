var TodoList = React.createClass({
	render: function() {

		var newItem = function(item, index) {
			console.log("New content " + item.content);
			return (
				<Todo>{item}</Todo>
			);
		}
		return (
		<div className="list">
		<ul>
			{this.props.data.map(newItem)}
			</ul>	
			</div>
		);
	}
});




