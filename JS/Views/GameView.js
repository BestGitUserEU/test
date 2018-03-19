function GameView(game, elemParent) {
    this.game = game;
    EventEmitter.call(this);

    this.createHtml(elemParent);
    this.listen();
}

GameView.prototype = Object.create(EventEmitter.prototype);
GameView.prototype.constructor = GameView;

GameView.prototype.listen = function() {
  // listen on view envents
  // this.game.on('generate_ball_line', this.gameStartAction.bind(this));
}

GameView.prototype.createHtml = function(elemParent) {
  this.htmlElemGameBlock = $('<div class="game-block">');
  var htmlBallsBlock = $('<div class="ball-block">');
  var htmlAmmoBlock = $('<div class="ammo-block">');

  //création du cannon
  this.game.setAmmo(new Ammo());

  var ammo = new AmmoView(this.game.getAmmo(), htmlAmmoBlock);
  var ammoController = new AmmoController(this.game, this.game.ammoView);

  this.htmlElemGameBlock.append(htmlBallsBlock, htmlAmmoBlock);

  // add the entire game bock to eltParent
  elemParent.append(
      this.htmlElemGameBlock,
  );


  for (ii = 0; ii < 35; ii++) {
      ball = new Ball()
  }

  // // instance of waterBank, view and controller
  // this.game.setWaterBank(new WaterBank());
  // var buyWaterView = new BuyWaterView(this.game.getWaterBank(), this.view.htmlEltMoreTools);
  // var buyWaterController = new BuyWaterController(this.game, buyWaterView);
  //
  // var fieldsController = new FieldsController(this.game);
  //
  // // create all fields
  // for(var ii=0; ii<conf.game.initial.nbFields; ii++) {
  //   var field = new Field();
  //   var viewField = new FieldView(field, this.view.htmlEltGameBlock);
  //   // add view to fieldsController
  //   fieldsController.addView(viewField);
  //   // add field to gameModel
  //   this.game.addField(field);
  // }

};
