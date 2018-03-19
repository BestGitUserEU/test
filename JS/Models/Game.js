function Game() {
    EventEmitter.call(this);
    this.running = false;
    this.balls = [];
    this.ammo = null;
}

// inheritance of EventEmitter object
Game.prototype = Object.create(EventEmitter.prototype);
Game.prototype.constructor = Game;

Game.prototype.getBalls = function () {
    return this.balls;
}

Game.prototype.getAmmo = function() {
    return this.ammo;
};

Game.prototype.setAmmo = function(ammo) {
    this.ammo = ammo;
    return this;
};
