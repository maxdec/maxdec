function Resources() {
  this.cache = {};
  this.loading = [];
  this.readyCallbacks = [];
}

Resources.prototype.load = function (urlOrArray) {
  var _this = this;
  if (urlOrArray instanceof Array) {
    urlOrArray.forEach(function (url) {
      _this._load(url);
    });
  } else {
    this._load(urlOrArray);
  }
};

Resources.prototype._load = function (url) {
  if (this.cache[url]) return this.cache[url];

  var img = new Image();
  this.cache[url] = false;
  img.src = url;

  var _this = this;
  img.onload = function () {
    _this.cache[url] = img;

    if (_this.isReady()) {
      _this.readyCallbacks.forEach(function (cb) { cb(); });
    }
  };
};

Resources.prototype.get = function (url) {
  return this.cache[url];
};

Resources.prototype.isReady = function () {
  var ready = true;

  for (var k in this.cache) {
    if (!this.cache[k]) ready = false;
  }

  return ready;
};

Resources.prototype.onReady = function (callback) {
  this.readyCallbacks.push(callback);
};
