var TodoList = React.createClass({

	render: function() {

		var newItem = function(content, index) {
			console.log("New content " + content);
			return (
				<Todo>{content}</Todo>
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




