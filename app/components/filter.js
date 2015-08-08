(function(global, undefined) {

  var Filter = React.createClass({

    getInitialState: function() {
      return {
        term: ''
      };
    },
    componentDidMount: function() {},
    handleTermEvent: function (e) {
      var value = React.findDOMNode(this.refs.textbox).value;
      this.setState({term: value});
      global.Actions.filter(value);
    },
    render: function() {
      return (
        <div className='comment-feed-filter-wrap'>
            <span className='search-icon'></span>
            <input ref='textbox' value={this.state.term} onChange={this.handleTermEvent} className='comment-feed-filter' type='text' placeholder='Filter' />
        </div>
        );
    }

  });
  global.Filter = Filter;
}(window));
