global.React = require('../bower_components/react/react-with-addons');
global.TestUtils = React.addons.TestUtils;

var Component, App;

jest.dontMock('../src/components/app');

describe('TodoInput', function() {
	
  beforeEach(function() {
  	App = require('../src/components/app');
    Component = TestUtils.renderIntoDocument(<App></App>);
  });

 it('should render', function() {
 	expect(App).toBeDefined();
 });
});