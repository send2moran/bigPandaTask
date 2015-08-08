(function(global, undefined) {
  var Avatar = global.Avatar;
  var FeedCommentRow = React.createClass({

    render: function() {
      return (
        <div className='box-item'>
              <div className='box comment-feed-row-content'>
                <div className='box-item comment-feed-row-avatar-wrap'>
                  <Avatar email={this.props.row.email}/>
                </div>
                <div className='box-item'>
                  <div className='box'>
                    <h2 className='box-item comment-feed-row-email'>
                      {this.props.row.email}
                    </h2>
                    <content className='box-item comment-feed-row-comment'>
                      {this.props.row.comment}
                    </content>
                  </div>
                </div>
              </div>
        </div>
        );
    }

  });
  global.FeedCommentRow = FeedCommentRow;
}(window));
