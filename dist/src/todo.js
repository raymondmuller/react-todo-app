var Todo = React.createClass({displayName: "Todo",
	handleClick: function(e) {
		React.findDOMNode(this.refs.todoItem).remove();

	},
	render: function() {
		return (
		React.createElement("li", {ref: "todoItem", onClick: this.handleClick}, 
			React.createElement("b", null, this.props.children)
			)	
		)
	}
})