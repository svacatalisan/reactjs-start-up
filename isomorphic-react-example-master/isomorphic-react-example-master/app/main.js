    /** @jsx React.DOM */

var React = require('react/addons');
var TableComponent = require('./components/TableComponent');

var mountNode = document.getElementById("react-main-mount");

React.render(new TableComponent({}), mountNode);
