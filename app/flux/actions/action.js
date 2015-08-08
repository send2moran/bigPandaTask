(function(global, undefined) {
  var Actions = global.alt.createActions({
    addItem: function (item) {
      this.dispatch(item);
    },
    filter: function (term) {
      this.dispatch(term);
    }
  });
  global.Actions = Actions;
}(window));
