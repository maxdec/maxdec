/**
 * Helpers to draw shapes
 */

function Engine() {
  //Canvas stuff
  this.ready = false;
  this.canvas = document.getElementById('canvas');
  this.ctx = canvas.getContext('2d');
  this.width = canvas.width;
  this.height = canvas.height;
  this.images = {};
}

Engine.prototype.rect = function (x, y, w, h) {
  this.ctx.beginPath();
  this.ctx.rect(x, y, w, h);
  this.ctx.closePath();
  this.ctx.fill();
};

Engine.prototype.clear = function () {
  this.ctx.fillStyle = '#EEE';
  this.ctx.clearRect(0, 0, this.width, this.height);
  this.rect(0, 0, this.width, this.height);
};

Engine.prototype.draw = function () {

};

Engine.prototype.drawCopter = function (x, y) {

};

Engine.prototype.collides = function (x, y, r, b, x2, y2, r2, b2) {
  return !(r <= x2 || x > r2 ||
           b <= y2 || y > b2);
};

Engine.prototype.boxCollides = function (pos, size, pos2, size2) {
  return this.collides(pos[0], pos[1],
                  pos[0] + size[0], pos[1] + size[1],
                  pos2[0], pos2[1],
                  pos2[0] + size2[0], pos2[1] + size2[1]);
};

Engine.prototype.checkCollisions = function () {
  this.PlayerBounds();

  // Run collision detection for all enemies and bullets
  for (var i = 0; i < game.enemies.length; i++) {
    var pos = game.enemies[i].pos;
    var size = game.enemies[i].sprite.size;

    // for (var j = 0; j < bullets.length; j++) {
    //   var pos2 = bullets[j].pos;
    //   var size2 = bullets[j].sprite.size;

    //   if(this.boxCollides(pos, size, pos2, size2)) {
    //     // Remove the enemy
    //     enemies.splice(i, 1);
    //     i--;

    //     // Add score
    //     //score += 100;

    //     // Add an explosion
    //     // explosions.push({
    //     //   pos: pos,
    //     //   sprite: new Sprite('img/sprites.png',
    //     //    [0, 117],
    //     //    [39, 39],
    //     //    16,
    //     //    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    //     //    null,
    //     //    true)
    //     // });

    //     // Remove the bullet and stop this iteration
    //     //bullets.splice(j, 1);
    //     break;
    //   }
    // }

    if (this.boxCollides(pos, size, game.player.pos, game.player.sprite.size)) {
      //gameOver();
    }
  }
};

Engine.prototype.PlayerBounds = function () {
  // Check bounds
  if (game.player.pos[0] < 0) {
    game.player.pos[0] = 0;
  } else if (game.player.pos[0] > this.canvas.width - game.player.sprite.size[0]) {
    game.player.pos[0] = this.canvas.width - game.player.sprite.size[0];
  }

  if (game.player.pos[1] < 0) {
    game.player.pos[1] = 0;
  } else if (game.player.pos[1] > this.canvas.height - game.player.sprite.size[1]) {
    game.player.pos[1] = this.canvas.height - game.player.sprite.size[1];
  }
};


Engine.prototype.render = function() {
  this.ctx.fillStyle = '#EEE'; //terrainPattern;
  this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

  // Render the player if the game isn't over
  if (!game.over) {
    this.renderEntity(game.player);
  }

  this.renderEntities(game.bullets);
  this.renderEntities(game.enemies);
  //this.renderEntities(game.explosions);
};

Engine.prototype.renderEntities = function (list) {
  for (var i = 0; i < list.length; i++) {
    this.renderEntity(list[i]);
  }
};

Engine.prototype.renderEntity = function (entity) {
  this.ctx.save();
  this.ctx.translate(entity.pos[0], entity.pos[1]);
  entity.sprite.render(this.ctx);
  this.ctx.restore();
};

var requestAnimFrame = (function () {
  return window.requestAnimationFrame  ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();
