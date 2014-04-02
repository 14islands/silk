(function() {
  window.requestAnimFrame((function(_this) {
    return function() {
      return window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || (window.webkitRequestAnimationFrame = window.mozRequestAnimationFrame || (window.mozRequestAnimationFrame = function(callback) {
        return window.setTimeout(callback, 1000 / 60);
      })));
    };
  })(this));

}).call(this);

(function() {
  var Silk,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Silk = (function() {
    function Silk($el) {
      this.$el = $el;
      this.onPageScroll = __bind(this.onPageScroll, this);
      this.onScrollFrame = __bind(this.onScrollFrame, this);
      this.start = __bind(this.start, this);
      this.stop = __bind(this.stop, this);
      if (!this.$el) {
        this.$el = $(window);
      }
      this.pause = false;
      this.ticking = false;
      this.scrollY = 0;
      this.$el.on("scroll", this.onPageScroll);
      this.$el.on("scroller:pause", this.stop);
      this.$el.on("scroller:start", this.start);
    }

    Silk.prototype.stop = function() {
      return this.pause = true;
    };

    Silk.prototype.start = function() {
      return setTimeout((function(_this) {
        return function() {
          return _this.pause = false;
        };
      })(this), 1000);
    };

    Silk.prototype.onScrollFrame = function() {
      this.ticking = false;
      return this.$el.trigger("scroller:frame", this.scrollY);
    };

    Silk.prototype.onPageScroll = function() {
      if (!this.pause) {
        this.scrollY = Math.max(this.$el.scrollTop(), 0);
        if (!this.ticking) {
          window.requestAnimFrame(this.onScrollFrame);
        }
        return this.ticking = true;
      }
    };

    return Silk;

  })();

}).call(this);
