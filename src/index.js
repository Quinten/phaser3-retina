import 'phaser';
import Boot from './scenes/Boot.js';
import Preloader from './scenes/Preloader.js';
import Level from './scenes/Level.js';

var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-game',
    width: window.innerWidth * window.devicePixelRatio, // set game width by multiplying window width with devicePixelRatio
    height: window.innerHeight * window.devicePixelRatio, // set game height by multiplying window height with devicePixelRatio
    backgroundColor: '#969fa3',
    pixelArt: true,
    zoom: 1 / window.devicePixelRatio, // Set the zoom to the inverse of the devicePixelRatio
    scene: [
        Boot,
        Preloader,
        Level
    ]
};

// improve iframe focus
window.addEventListener('load', function () {
    window.focus();
    document.body.addEventListener('click',function(e) {
        window.focus();
    },false);
});

// start game
window.game = new Phaser.Game(config);
