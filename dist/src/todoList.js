var TodoList = React.createClass({displayName: "TodoList",

	render: function() {

		var newItem = function(content, index) {
			console.log("New content " + content);
			return (
				React.createElement(Todo, null, content)
			);
		}
		return (
		React.createElement("div", {className: "list"}, 
		React.createElement("ul", null, 
			this.props.data.map(newItem)
			)	
			)
		);
	}
});




