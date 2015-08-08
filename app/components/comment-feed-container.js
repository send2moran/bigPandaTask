(function(global, undefined) {
  var Store = global.Store;
  var CommentFeed = global.CommentFeed;
  var CommentFeedContainer = React.createClass({
    getInitialState: function() {
      return {
        comments: Store.getState().comments
      };
    },
    componentWillMount: function() {
    },
    componentDidMount: function() {
      Store.listen(this.onChange);
    },
    componentWillUnmount: function() {
      Store.unlisten(this.onChange);
    },
    onChange: function () {
      var comments = Store.getState().comments;
      if(Store.getState().term !== ''){
        comments = Store.getState().comments.filter(function (item) {
          return item.comment.indexOf(Store.getState().term) > -1 || item.email.indexOf(Store.getState().term) > -1;
        });
      }
      this.setState({comments: comments});
    },
    render: function() {
      return (
        <div className='comment-feed-wrap'>
          <CommentFeed comments={this.state.comments}/>
        </div>
      );
    }

  });
  global.CommentFeedContainer = CommentFeedContainer;
}(window));
