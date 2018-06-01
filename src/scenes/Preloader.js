class Preloader extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'preloader' });
    }

    preload ()
    {
        // just a preload bar in graphics
        let progress = this.add.graphics();
        this.load.on('progress', function (value) {
            progress.clear();
            progress.fillStyle(0xe5ffff, 1);
            progress.fillRect(0, (window.innerHeight / 2 * window.devicePixelRatio) - 30, window.innerWidth * value * window.devicePixelRatio, 60);
        });
        this.load.on('complete', function () {
            progress.destroy();
        });

        // Load assets here
        // ...

        let imageSize = window.devicePixelRatio * 100; // 100, 200, 300 or 150

        this.load.image('squid', 'assets/squid@' + imageSize + 'x.png');

    }

    create ()
    {
        this.scene.start('level');
    }

}

export default Preloader;
