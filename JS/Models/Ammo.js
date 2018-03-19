function Ammo() {
    EventEmitter.call(this);
    this.running = false;
    this.color = null;
}

Ammo.prototype = Object.create(EventEmitter.prototype);
Ammo.prototype.constructeur = Ammo;

Ammo.prototype.getColor = function () {
    return this.color;
}

Ammo.prototype.setColor = function (color) {
    this.color = color;

    return this;
}
