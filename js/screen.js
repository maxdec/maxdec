function Screen(h1, h2, callback) {
  this.step = function (dt) {
    if(Game.keys['fire'] && callback) callback();
  };

  this.render = function(canvas) {
    canvas.clearRect(0,0,Game.width,Game.height);
    canvas.font = "bold 40px arial";
    var measure = canvas.measureText(text);
    canvas.fillStyle = "#FFFFFF";
    canvas.fillText(text,Game.width/2 - measure.width/2,Game.height/2);
    canvas.font = "bold 20px arial";
    var measure2 = canvas.measureText(text2);
    canvas.fillText(text2,Game.width/2 - measure2.width/2,Game.height/2 + 40);
  };
}
