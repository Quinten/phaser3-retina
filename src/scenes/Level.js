class Level extends Phaser.Scene {

    constructor (config)
    {
        super((config) ? config : { key: 'level' });
        this.image = undefined;
    }

    create()
    {
        // This will prevent pixels from being drawn at half coordinates. It will also help stick your tilemaps together.
        this.cameras.main.setRoundPixels(true);

        // Add the image like any other
        this.image = this.add.image(0, 0, 'squid');

        // position stuff
        this.resizeField(this.sys.game.config.width, this.sys.game.config.height);
    }

    // This is a (non standard phaser 3) resize function that i have every scene implement to position it's own elements. See Boot.js
    resizeField(w, h) {
        this.image.x = w / 2;
        this.image.y = h / 2;
    }
}

export default Level;
