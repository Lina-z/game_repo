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
      const gap = 20;
      const maxHeight = 100;
      const topHeight = Math.floor(Math.random() * 35) + 20;

      const bootomHeight = maxHeight - topHeight - gap;

      const topObstacle = new Obstacle(topHeight, 0);
      const bottomObstacle = new Obstacle(bootomHeight, bootomHeight);
      this.obstaclesArr.push(topObstacle, bottomObstacle);
    }, 3000);

    setInterval(() => {
      this.obstaclesArr.forEach((obstacleInstance) => {
        obstacleInstance.moveLeft();
        this.detectCollision(obstacleInstance);
      });
    }, 60);
  }

  addEventListener() {
    console.log("listeners");
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
    if (obstacleInstance.positionY === 0) {
      if (
        this.rock.positionX + this.rock.width > obstacleInstance.positionX &&
        this.rock.positionY <
          obstacleInstance.positionY + obstacleInstance.height
      ) {
        // console.log("game over");
        // location.href = "./game-over.html";
      } else if (
        this.rock.positionX + this.rock.width > obstacleInstance.positionX &&
        this.rock.positionY - this.rock.height > obstacleInstance.positionY
      ) {
        console.log("game over");
        location.href = "./game-over.html";
      }
    }
  }
}

// create a player class with positioning height width ...

class Rock {
  constructor() {
    this.width = 5;
    this.height = 5;
    this.positionX = 0;
    this.positionY = 50;
  }

  // create a dom element
  rockPlayer() {
    this.rock = document.createElement("div");
    this.rock.id = "rock";
    this.rock.style.width = 5 + "vw";
    this.rock.style.height = 5 + "vh";
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
    this.width = 10;
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
