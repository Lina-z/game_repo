// create Game class with start method - obstacle method - update obstacle
class Game {
  constructor() {
    this.rock;
    this.obstaclesArr = [];
  }

  start() {
    this.rock = new Rock();
    this.rock.rockPlayer();

    setInterval(() => {
      this.updateObstacles();
    }, 3000);
  }

  updateObstacles() {
    const obstacle = new Obstacle();
    obstacle.createObstacle();
    this.obstaclesArr.push(obstacle);
    this.obstacles.forEach((obstacleArr) => {
      obstacle.moveLeft();
    });
  }

  addEventListener() {
    document.addEventListener("keydown", (event) => {
      if (event.code === "ArrowUp") {
        this.rock.moveUp();
      } 
      else if (event.code === "ArrowDown") {
        this.rock.moveDown();
      }
    });
  }
}

// create a player class with positioning height width ...

class Rock {
  constructor() {
    this.width = 20;
    this.height = 20;
    this.positionX = 0;
    this.positionY = 50;
  }

  // create a dom element
  rockPlayer() {
    this.rock = document.createElement("div");
    this.rock.id = "rock";
    this.rock.style.width = this.width + "px";
    this.rock.style.height = this.height + "px";
    this.rock.style.left = this.positionX + "vw";
    this.rock.style.top = this.positionY + "vh";

    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.rock);
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
    this.width = 10;
    this.height = Math.floor(Math.random() * 100);
    this.positionX = 100;
    this.positionY = 0;

    this.createObstacle();
  }

  createObstacle() {
    this.obstacle = document.createElement("div");
    this.obstacle.className = 'obstacle';
    this.obstacle.style.width = this.width + "px";
    this.obstacle.style.height = this.height + "px";
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
