(function(global, undefined) {

  var CommentForm = React.createClass({

    getInitialState: function() {
      return {
        email: '',
        comment: ''
      };
    },
    componentDidMount: function() {},
    handleEmailChangeEvent: function (e) {
      this.setState({email:e.target.value});
    },
    handleCommentChangeEvent: function (e) {
      this.setState({comment:e.target.value});
    },
    handleCommentSubmit: function (e) {
      e.preventDefault();
      if(this.state.email === '' || this.state.comment === ''){
        return;
      }
      this.setState({email: '', comment: ''});
      React.findDOMNode(this.refs.commentTextBox).value = ''
      global.Actions.addItem({email: this.state.email, comment: this.state.comment});
    },
    render: function() {
      return (
        <div className='box comment-feed-form'>
          <form onSubmit={this.handleCommentSubmit}>
            <div className='box-item'>
              <input value={this.state.email} required onChange={this.handleEmailChangeEvent} className="app-header__filter" type="email" placeholder="Email" />
            </div>
            <div className='box-item'>
              <textarea ref='commentTextBox' required placeholder='Message' defaultValue={this.state.comment} onChange={this.handleCommentChangeEvent}></textarea>
            </div>
            <div className='box-item box-item--bottom'>
              <input className='comment-feed-form-button' type="submit" value="submit"/>
            </div>
          </form>
        </div>
        );
    }

  });
  global.CommentForm = CommentForm;
}(window));
