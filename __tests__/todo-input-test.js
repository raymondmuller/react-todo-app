// __tests__/sum-test.js
global.React = require('../bower_components/react/react-with-addons');
global.TestUtils = React.addons.TestUtils;

jest.dontMock('../src/js/todoInput');

describe('TodoInput', function() {

 it('test', function() {
    var TodoInput = require('../src/js/todoInput');
 	expect(TodoInput).not.toBeUndefined();

 	var todoInput = TestUtils.renderIntoDocument(
 			<TodoInput ref='todo' className="todo-input"></TodoInput>
 		)
 	console.log(todoInput)
 	var input = TestUtils.findRenderedDOMComponentWithClass(todoInput,'todo-input');

	
 	expect(input).not.toBeUndefined();



 });
});