import 'phaser';
import Boot from './scenes/Boot.js';
import Preloader from './scenes/Preloader.js';
import Level from './scenes/Level.js';

var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-game',
    backgroundColor: '#969fa3',
    pixelArt: true,
    zoom: 1 / window.devicePixelRatio, // Set the zoom to the inverse of the devicePixelRatio
    width: window.innerWidth * window.devicePixelRatio, // set game width by multiplying window width with devicePixelRatio
    height: window.innerHeight * window.devicePixelRatio, // set game height by multiplying window height with devicePixelRatio
    scene: [
        Boot,
        Preloader,
        Level
    ]
};

// start game
window.game = new Phaser.Game(config);
