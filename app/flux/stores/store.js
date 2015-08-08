(function(global, undefined) {
  var Store = alt.createStore({
    displayName: 'FoodStore',

    bindListeners: {
      addItem: global.Actions.addItem,
      filter: global.Actions.filter
    },

    state: {
      comments: [],
      term: ''
    },
    filter: function (term) {
      this.setState({
        term: term
      });
    },
    addItem: function (item) {
      var comments = this.state.comments;
      comments.push(item);
      this.setState({
        comments: comments
      });
    }
  });
  global.Store = Store;
}(window));
