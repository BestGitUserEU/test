function AmmoController(game, ammoView) {
    this.game = game;
    this.view = ammoView;
    this.listen();
}

AmmoController.prototype.listen = function() {
    // this.view.on('reload_ammo', this.ammoAction.bind(this));
};
