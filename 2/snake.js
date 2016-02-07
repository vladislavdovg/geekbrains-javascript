var Snake = function(position, direction) {

	var that = this;
	this.body = [];
	this.direction = '';
	this.speed = 0.9;

	this.eat = function(position) {
		this.body.unshift({
			x: position.x,
			y: position.y
		});
		console.info('Snake eat() [' + position.x + ',' + position.y + ']');
	};

	this.changeDirection = function(direction) {
		if (direction === 'top' || direction === 'right'
			|| direction === 'bottom' || direction === 'left') {
			if (direction != this.direction) {
				this.direction = direction;
				console.info('Snake direction now "' + this.direction + '"');
			};
		} else {
			console.error('Unknown snake direction: ' + direction);
		};
	};

	this.move = function() {
		var x = that.body[0].x;
		var y = that.body[0].y;
		if (direction === 'top') {
			that.body.unshift({
				x: x,
				y: y - 1
			});
		} else if (direction === 'right') {
			that.body.unshift({
				x: x + 1,
				y: y
			});
		} else if (direction === 'bottom') {
			that.body.unshift({
				x: x,
				y: y + 1
			});
		} else if (direction === 'left') {
			that.body.unshift({
				x: x - 1,
				y: y
			});
		};
		that.body.pop();
		console.info('Snake move() from [' + x + ',' + y + '] to [' + that.body[0].x + ',' + that.body[0].y + ']');
	};

	this.create = function() {
		this.changeDirection(direction);
		this.eat(position);
		setInterval(this.move, 10100 - 10000 * this.speed);
	};

};