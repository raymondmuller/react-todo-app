global.React = require('../bower_components/react/react-with-addons');
global.TestUtils = React.addons.TestUtils;

var Component, App;

jest.dontMock('../src/js/app');

describe('TodoInput', function() {
	
  beforeEach(function() {
  	App = require('../src/js/app');
    Component = TestUtils.renderIntoDocument(<App></App>);
  });

 it('should render', function() {
 	expect(App).toBeDefined();
 });
});