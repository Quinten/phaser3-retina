class Boot extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'boot' });
    }

    create ()
    {
        // more setup stuff here
        // ...

        // This will make your game responsive.
        window.onresize = () => {
            // Resize game configs.
            let w = window.innerWidth * window.devicePixelRatio;
            let h = window.innerHeight * window.devicePixelRatio;
            this.sys.game.renderer.resize(w, h, 1.0);
            this.sys.game.config.width = w;
            this.sys.game.config.height = h;
            this.sys.canvas.style.width = window.innerWidth + 'px';
            this.sys.canvas.style.height = window.innerHeight + 'px';
            // Check which scene is active.
            for (let scene of this.scene.manager.scenes) {
                if (scene.scene.settings.active) {
                    // Scale the camera
                    scene.cameras.main.setViewport(0, 0, w, h);
                    if (scene.resizeField) {
                        // Scale/position stuff in the scene itself with this method, taht the scen must implement.
                        scene.resizeField(w, h);
                    }
                }
            }
        }

        this.scene.start('preloader');
    }

}

export default Boot;
