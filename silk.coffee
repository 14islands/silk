
class Silk
	
	constructor: (@$el) ->
		@$el = $(window) unless @$el
		
		@pause = false
		@ticking = false
		
		@scrollY = 0
		
		@$el.on("scroll", @onPageScroll)
		@$el.on("scroller:pause", @stop)
		@$el.on("scroller:start", @start)

	stop: =>
		@pause = true
		
	start: =>
		setTimeout( =>
			@pause = false
		, 1000)

	onScrollFrame: =>
		@ticking = false
		@$el.trigger("scroller:frame", @scrollY)
		
	onPageScroll: =>
		unless @pause 
			@scrollY = Math.max(@$el.scrollTop(), 0) 
			@requestAnimFrame()(@onScrollFrame) unless @ticking
			@ticking = true

	requestAnimFrame: ->
		window.requestAnimationFrame ||=
		window.webkitRequestAnimationFrame ||=
		window.mozRequestAnimationFrame ||=
		(callback) => window.setTimeout(callback, 1000 / 60)

window.Silk = Silk