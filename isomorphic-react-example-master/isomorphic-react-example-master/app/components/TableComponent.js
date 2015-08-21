/** @jsx React.DOM */

var React = require('react/addons');

/* create factory with griddle component */
var Griddle = React.createFactory(require('griddle-react'));
var resultsPerPage = 200;

var TableComponent = React.createClass({
  componentDidMount: function () {
    var getData = $.get('../data/fakeData.js');
    var getColumnMeta = $.get('../data/columnMeta.js');

    $.when(getData, getColumnMeta).done(function (tableData, columnMeta) {
      this.setState({
        tableData: tableData,
        columnMeta: columnMeta
      });
    });
  },

  render: function () {
    return (
      <div id="table-area">

         <Griddle results={this.state.tableData}
                  columnMetadata={this.state.columnMeta}
                  resultsPerPage={resultsPerPage}
                  tableClassName="table"/>

      </div>
    )
  }
});

/* Module.exports instead of normal dom mounting */
module.exports = TableComponent;