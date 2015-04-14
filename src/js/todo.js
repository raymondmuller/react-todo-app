var Todo = React.createClass({
	handleClick: function(e) {
		React.findDOMNode(this.refs.todoItem).remove();

	},
	render: function() {
		return (
		<li ref="todoItem" onClick={this.handleClick}>
			<b>{this.props.children}</b>
			</li>	
		)
	}
})