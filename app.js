$(function() {
  // init variables
  var mainElem = $('#container');

  var game = new Game();
  var gameView = new GameView(game, mainElem);
  var gameController = new GameController(game, gameView);
});
