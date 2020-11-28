class Form {
    constructor () {
    this.input = createInput ("Name");
    this.button = createButton ("play");
    this.greeting = createElement ('h3');
    this.title = createElement('h2');
    }

display() {
    this.title.html ("Car Racing Game");
    this.title.position (displayWidth/2 - 70, 0);

    this.input.position (displayWidth/2 - 70, displayHeight/2 - 100);

    
    this.button.position (displayWidth/2 - 55, displayHeight/2 - 70);


    this.button.mousePressed(() => {
        
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello" + player.name);
        this.greeting.position(displayWidth/2, displayHeight/8);
    });
}

hide () {
this.button.hide();
this.greeting.hide();
this.input.hide();
this.title.hide();
}



}

