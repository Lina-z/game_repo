const rockHeight = 5;

// create Game class with start method - obstacle method - update obstacle
class Game {
  constructor() {
    this.rock;
    this.obstaclesArr = [];
    this.addEventListener();
  }

  start() {
    this.rock = new Rock();
    this.rock.rockPlayer();

    setInterval(() => {
      const gap = this.getRandomGap(35, 40);
      const maxHeight = 100;
      const topHeight = 20 + Math.floor(Math.random() * (gap - rockHeight/2 - 2));
      const bottomPosition = maxHeight - topHeight - gap;
    
      const topObstacle = new Obstacle(topHeight, 0);
      const bottomObstacle = new Obstacle(bottomPosition, topHeight + gap);
      this.obstaclesArr.push(topObstacle, bottomObstacle);
    }, 2000);

    setInterval(() => {
      this.obstaclesArr.forEach((obstacleInstance) => {
        obstacleInstance.moveLeft();
        this.detectCollision(obstacleInstance);
          this.removeObstacle(obstacleInstance);
      });
    }, 60);
  }

  addEventListener() {


    document.addEventListener("keydown", (event) => {
      console.log("event", event);
      if (event.code === "ArrowUp") {
        this.rock.moveUp();
      } else if (event.code === "ArrowDown") {
        this.rock.moveDown();
      }
    });
  }

   detectCollision(obstacleInstance) {

    const rockLeft = this.rock.positionX;
    const rockRight = this.rock.positionX + this.rock.width
    const rockTop = this.rock.positionY
    const rockBottom = this.rock.positionY + this.rock.height;

    const obstacleLeft = obstacleInstance.positionX;
    const obstacleRight = obstacleInstance.positionX + obstacleInstance.width;
    const obstacleTop = obstacleInstance.positionY;
    const obstacleBottom = obstacleInstance.positionY + obstacleInstance.height;

    if (
        rockRight >= obstacleLeft &&
        rockLeft <= obstacleRight &&
        rockBottom >= obstacleTop &&
        rockTop <= obstacleBottom
      ) {
        console.log("game over");
        location.href = "./game-over.html";
      }
    } 

    removeObstacle(obstacleInstance) {
      if (obstacleInstance.positionX < 0 - obstacleInstance.width) {
        obstacleInstance.obstacle.remove();
        this.obstaclesArr.shift();
      }
    }
  
    getRandomGap(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }

// create a player class with positioning height width ...

class Rock {
  constructor() {
    this.width = 7;
    this.height = rockHeight;
    this.positionX = 0;
    this.positionY = 50;
  }

  // create a dom element
  rockPlayer() {
    this.rock = document.createElement("div");
    this.rock.id = "rock";
    this.rock.style.width = 9 + "vw";
    this.rock.style.height = 10 + "vh";
    this.rock.style.left = this.positionX + "vw";
    this.rock.style.top = this.positionY + "vh";

    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.rock);
  }

  // implementing up/down movement
  moveUp() {
    this.positionY--;
    this.rock.style.top = this.positionY + "vh";
    console.log("moveup", this.positionY);
  }

  moveDown() {
    this.positionY++;
    this.rock.style.top = this.positionY + "vh";
    console.log("moveD", this.positionY);
  }
}

// create a obstacle class positioning heights width ...

class Obstacle {
  constructor(height, posY) {
    this.width = 2;
    this.height = height;
    this.positionX = 50;
    this.positionY = posY;

    this.createObstacle();
  }

  createObstacle() {
    this.obstacle = document.createElement("div");
    this.obstacle.className = "obstacle";
    this.obstacle.style.width = this.width + "vw";
    this.obstacle.style.height = this.height + "vh";
    this.obstacle.style.left = this.positionX + "vw";
    this.obstacle.style.top = this.positionY + "vh";

    const parentElement = document.getElementById("board");
    parentElement.appendChild(this.obstacle);
  }

  moveLeft() {
    this.positionX--;
    this.obstacle.style.left = this.positionX + "vw";
  }
}

const game = new Game();
game.start();
