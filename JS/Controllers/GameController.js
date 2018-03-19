function GameController(game, gameView) {
  this.game = game;
  this.view = gameView;

  this.listen();
  this.init();
}

GameController.prototype.listen = function() {
  // listen on view envents
  this.view.on('game_start', this.gameStartAction.bind(this));
  this.view.on('game_end', this.gameEndAction.bind(this));
};

GameController.prototype.gameStartAction = function() {
  this.game.startAction();
};

GameController.prototype.gameEndAction = function() {
  this.game.endAction();
};

GameController.prototype.init = function() {
    this.view.htmlElemGameBlock = $('<div class="game-block">');
    var htmlBallsBlock = $('<div class="ball-block">');
    var htmlAmmoBlock = $('<div class="ammo-block">');

    //création du cannon
    this.game.setAmmo(new Ammo());

    var ammo = new AmmoView(this.game.getAmmo(), htmlAmmoBlock);
    var ammoController = new AmmoController(this.game, this.game.ammoView);

    this.htmlElemGameBlock.append(htmlBallsBlock, htmlAmmoBlock);

    // add the entire game bock to eltParent
    elemParent.append(
        this.view.htmlElemGameBlock,
    );


    for (ii = 0; ii < 35; ii++) {
        ball = new Ball();

    }
};
