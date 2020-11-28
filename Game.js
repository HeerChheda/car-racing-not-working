class Game {
    constructor() {
    


    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
        gameState = data.val();
        });
    }

    updateState(state) {
        database.ref('/').update ({
            gameState: state   
        });
    }

    async start(){
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref ('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();

        }

            car1 = createSprite(100, 200);
            car2 = createSprite(300,200);
            car3 = createSprite(500, 200);
            car4 = createSprite(700, 200);
            cars = [car1,car2,car3,car4];

            car1.addImage(carImage1);
            car2.addImage(carImage2);
            car3.addImage(carImage3);
            car4.addImage(carImage4);
    
    }

    play () {
        form.hide();
        Player.getPlayerInfo();
        if (allPlayers !== undefined) {
            image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index = 0;
            var x = 200;
            var y;

            for (var p in allPlayers) {
                x = x+230;
                y = displayHeight - allPlayers[p].distance;
                index = index+1;
                cars[index - 1].x = x;
                cars[index - 1].y = y;

                if (index === player.index) {
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index - 1].y;
                }

            }
            
        }

        if (keyDown(UP_ARROW)&&player.index!==null) {
            player.distance += 50;
            player.update();
        }

        if (player.distance>4200) {
            gameState = 2;
        }


        drawSprites();

    }
    end() {
     background("pink");
     
     fill("black");
     textSize(30);
     text("You Win!!", displayWidth/2-50,displayHeight/2);

}  

}

