(function(global, undefined) {
  var appContainerElement = document.getElementById('app-container');
  var AppContainer = global.AppContainer

  React.render(<AppContainer/>, appContainerElement);
}(window));
