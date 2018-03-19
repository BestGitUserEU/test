function Ball (color) {
    this.color;

    this.prototype.getRandomColor = function() {
        var colors = ['red, blue, yellow, green, purple'];
        var key = Math.floor(Math.random() * colors.length);

        this.color = colors[key];
    }
}
