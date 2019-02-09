import 'phaser';
import Boot from './scenes/Boot.js';
import Preloader from './scenes/Preloader.js';
import Level from './scenes/Level.js';

var config = {
    type: Phaser.WEBGL,
    backgroundColor: '#969fa3',
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.NONE, // we will resize the game with our own code (see Boot.js)
        width: window.innerWidth * window.devicePixelRatio, // set game width by multiplying window width with devicePixelRatio
        height: window.innerHeight * window.devicePixelRatio, // set game height by multiplying window height with devicePixelRatio
        zoom: 1 / window.devicePixelRatio // Set the zoom to the inverse of the devicePixelRatio
    },
    scene: [
        Boot,
        Preloader,
        Level
    ]
};

// start game
window.game = new Phaser.Game(config);
