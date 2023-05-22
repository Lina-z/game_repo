// create Game class with start method - obstacle method - update obstacle 
class Game {
    constructor() {
        this.player
        this.obstacle
    }

    start()

}



// create a player class with positioning height width ... 

class Player {
    constructor() {
        this.width = 20px;
        this.height = 20px;
        this.positionX = 0;
        this.positionY = 50;

    }

    // create a dom element 
    rockPlayer() {
        this.rock = document.createElement('div');
        this.rock.id = "player"
        this.rock.style.width = this.width + 'px';
        this.rock.style.height = this.height + 'px';
        this.rock.style.left = this.positionX + 'vw';
        this.rock.style.center = this.positionY + 'vh'

        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.rock)

    }

    // implementing up/down movement
    moveUp() {
        this.positionY++;
    }

    moveDown() {
        this.positionY--;
    }
}

// create a obstacle class positioning heights width ... 

class Obstacle {
    constructor() {
    
    }
}