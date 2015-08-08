(function(global, undefined) {

  var Avatar = React.createClass({

    render: function() {
      return (
        <div className='avatar-wrap'>
            <img className='avatar-img' src={ 'http://www.gravatar.com/avatar/' + md5(this.props.email) }/>
        </div>
        );
    }

  });
  global.Avatar = Avatar;
}(window));
