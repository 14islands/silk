# Paul irish requestAnimationFrame shim
# http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame =>
  return window.requestAnimationFrame ||=
          window.webkitRequestAnimationFrame ||=
          window.mozRequestAnimationFrame    ||=
          (callback) => window.setTimeout(callback, 1000 / 60)