var KEYS = { 37: 'left', 38: 'up', 39: 'right', 40: 'down', 32: 'space', 27: 'esc' };
var ALIENS_NB = 5;

function Game() {
  this.running = false;
  this.lastTime = Date.now();

  this.player = new Player([236, 360]);
  this.enemies = [new Maxdec([14, 10])];
  this.bullets = [];
  this.keys = {};

  this.lastFire = Date.now();
  this.gameTime = 0;
  this.over = false;
  this.score = 0;

  this.speeds = {
    player: 200,
    bullet: 500,
    enemy: 100
  };

  var _this = this;

  window.onkeydown = function keyDown(event) {
    if (KEYS[event.keyCode]) {
      _this.keys[KEYS[event.keyCode]] = true;
      return false;
    }
  };

  window.onkeyup = function keyUp(event) {
    if (KEYS[event.keyCode]) {
      _this.keys[KEYS[event.keyCode]] = false;
      return false;
    }
  };
}

Game.prototype.init = function () {
  this.lastTime = Date.now();
  this.main();
};

/**
 * Main loop
 */
Game.prototype.main = function () {
  var now = Date.now();
  var dt = (now - this.lastTime) / 1000.0;

  this.update(dt);
  engine.render();

  this.lastTime = now;
  var _this = this;
  requestAnimFrame(function () {
    _this.main();
  });
};

Game.prototype.update = function (dt) {
  this.gameTime += dt;
  this.handleInput(dt);
  this.updateEntities(dt);
  engine.checkCollisions();
};

Game.prototype.reset = function () {
  this.over = false;
  this.gameTime = 0;
  this.score = 0;

  this.enemies = [];
  this.bullets = [];

  //this.player.pos = [50, engine.canvas.height / 2];
};

Game.prototype.updateEntities = function (dt) {
  this.player.sprite.update(dt);
  // TODO: update bullets
  // TODO: update enemies
  // TODO: update explosions
};

Game.prototype.handleInput = function (dt) {
  if (this.keys['right']) this.player.pos[0] += this.speeds.player * dt;
  if (this.keys['left']) this.player.pos[0] -= this.speeds.player * dt;
  if (this.keys['space'] && Date.now() - this.lastFire > 80) {
    var x = this.player.pos[0] + this.player.sprite.size[0] / 2;
    var y = this.player.pos[1] + this.player.sprite.size[1] / 2;
    this.lastFire = Date.now();
    // bullets.push({
    //   pos: [x, y],
    //   dir: 'forward'
    //   sprite: new Sprite()
    // })
  }

  if (this.keys[27]) this.this.player.pos[1] += this.speeds.this.player * dt;

};


