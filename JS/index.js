// create Game class with start method - obstacle method - update obstacle
class Game {
  constructor() {
    this.rock;
    this.obstaclesArr = [];
    this.bottomObstArr = [];
    this.addEventListener();
  }

  start() {
    this.rock = new Rock();
    this.rock.rockPlayer();

    setInterval(() => {
      const newObstacle = new TopObstacle();
      this.obstaclesArr.push(newObstacle);
    }, 3000);

    setInterval(() => {
      const newObstacle = new BottomObstacle();
      this.bottomObstArr.push(newObstacle);
    }, 3000);

    setInterval(() => {
      this.obstaclesArr.forEach((obstacleInstance) => {
        obstacleInstance.moveLeft();
      });
    }, 60);

    setInterval(() => {
      this.bottomObstArr.forEach((obstacleInstance) => {
        obstacleInstance.moveLeft();
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
    this.rock.style.width = 60 + "px";
    this.rock.style.height = 40 + "px";
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

class TopObstacle {
  constructor() {
    this.width = 1;
    this.height = Math.floor(Math.random() * 100) - 20;
    this.positionX = 50;
    this.positionY = 0;

    this.createObstacle();
  }

  createObstacle() {
    this.obstacle = document.createElement("div");
    this.obstacle.className = "obstacle";
    this.obstacle.style.width = this.width + "vw";
    this.obstacle.style.height = this.height + "vh";
    this.obstacle.style.right = this.positionX + "vw";
    this.obstacle.style.top = this.positionY + "vh";

    const parentElement = document.getElementById("board");
    parentElement.appendChild(this.obstacle);
  }

  moveLeft() {
    this.positionX--;
    this.obstacle.style.left = this.positionX + "vw";
  }
}

class BottomObstacle {
  constructor() {
    this.width = 1;
    this.height = Math.floor(Math.random() * 100) - 20;
    this.positionX = 100;
    this.positionY = 0;

    this.createObstacle();
  }

  createObstacle() {
    this.obstacle = document.createElement("div");
    this.obstacle.className = "obstacle";
    this.obstacle.style.width = this.width + "vw";
    this.obstacle.style.height = this.height + "vh";
    this.obstacle.style.right = this.positionX + "vw";
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
