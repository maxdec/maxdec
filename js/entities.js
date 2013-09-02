/**
 * Aliens
 */
function Alien(x, y) {
  this.x = x;
  this.y = y;
  this.size = 10;
  this.health = 1;
  this.color = '#222';
}

Alien.prototype.draw = function () {
  ctx.fillStyle = this.color;
  rect(this.x, this.y, this.size, this.size);
};

/**
 * Big MAXDEC
 */
function Maxdec (pos) {
  this.pos = pos;
  this.sprite = new Sprite('img/maxdec.png',
                           [0, 0],
                           [471, 85],
                           16,
                           [0]);
}

/**
 * Player
 */
function Player(pos) {
  this.pos = pos;
  this.sprite = new Sprite('img/copter.png',
                           [0, 0],
                           [27, 32],
                           16,
                           [0, 1, 2, 3]);
}

/**
 * Bullets
 */
function Bullet(pos, dir) {
  this.pos = pos;
  this.dir = dir || 'up';
}
Bullet.prototype.sprite = new Sprite('img/bullet.png', [0, 0], [8, 18]);
