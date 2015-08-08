(function(global, undefined) {
  var Avatar = global.Avatar;
  var FeedCommentRow = global.FeedCommentRow;
  var CommentFeed = React.createClass({
    componentDidMount: function() {},
    render: function() {
      return (
        <div className='box comment-feed-row'>
          {this.props.comments.map(function(feedItem) {
            return <FeedCommentRow row={feedItem}/>
          })}
          {this.props.comments.length === 0 ? <span className='comment-feed-empty'>- No Items -</span> : null}
        </div>
        );
    }

  });
  global.CommentFeed = CommentFeed;
}(window));
