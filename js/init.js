/*

####  ###  ######  ##   ##  #####   ######   ######
## ### ##  ##  ##   ## ##   ##  ##  ##      ###
##  #  ##  ######    ###    ##   #  ####    ##
##     ##  ##  ##   ## ##   ##  ##  ##      ###
##     ##  ##  ##  ##   ##  #####   ######   ######

~~SPACE INVADERS ~~

*/
var game = new Game();
var engine = new Engine();
var resources = new Resources();

resources.load([
  'img/maxdec.png',
  'img/copter.png',
  'img/bullet.png'
]);

resources.onReady(function () {
  game.init();
});



function init() {
  document.onkeydown = checkStart;
  ctx.fillStyle = '#AAA';
  ctx.font = 'bold 20px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('-- Press SPACE --', WIDTH/2, 30);
}
