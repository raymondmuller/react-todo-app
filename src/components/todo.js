var Todo = React.createClass({
	handleClick: function(e) {
		if(this.props.children.url === undefined) {
			React.findDOMNode(this.refs.todoItem).remove();
		} else {
			window.open(this.props.children.url);
		}
	},
	render: function() {
		return (
		<li ref="todoItem" onClick={this.handleClick}>
			<b>{this.props.children.content}</b>
			</li>	
		)
	}
})