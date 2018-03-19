function AmmoView(ammo, elemParent) {
    this.ammo = ammo;
    EventEmitter.call(this);

    this.createHtml(elemParent);
    this.listen();
}

AmmoView.prototype = Object.create(EventEmitter.prototype);
AmmoView.prototype.constructor = AmmoView;

AmmoView.prototype.createHtml = function (elemParent) {
    AmmoView.AmmoElem = $('<span class="ammo">');

    elemParent.append(AmmoView.AmmoElem);
}

AmmoView.prototype.listen = function () {

}
