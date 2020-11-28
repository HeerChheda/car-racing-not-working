var database;
var gameState = 0;
var playerCount = 0;
var form, player, game; 
var allPlayers;
var car1,car2,car3,car4,cars;
var carImage1,carImage2,carImage3,carImage4,trackImage;


function preload () {

carImage1 = loadImage("images/car1.png");
carImage2 = loadImage("images/car2.png");
carImage3 = loadImage("images/car3.png");
carImage4 = loadImage("images/car4.png");
trackImage = loadImage("images/track.jpg");



}

function setup(){
    createCanvas(displayWidth - 20, displayHeight - 30);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

    

    
    
}

function draw(){
    background("white");

    if (playerCount === 4) {
        game.updateState (1);
    }
    if (gameState === 1) {
        clear();
        game.play ();
    }

    if (gameState === 2) {
        game.updateState(2);
        game.end();
    }
   
}




