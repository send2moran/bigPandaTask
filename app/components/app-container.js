(function(global, undefined) {
  var App = global.App;
  var View = global.View;
  var Filter = global.Filter;
  var CommentForm = global.CommentForm;
  var CommentFeedContainer = global.CommentFeedContainer;
  var AppContainer = React.createClass({

    render: function() {
      return (
        <div className="box comment-app-container">
          <div className="box-item box-item--top comment-feed-form-wrap">
            <CommentForm/>
          </div>
          <div className="box-item">
            <Filter/>
          </div>
          <div className="box-item box-item--bottom">
            <CommentFeedContainer/>
          </div>
        </div>
      );
    }

  });
  global.AppContainer = AppContainer;
}(window));
