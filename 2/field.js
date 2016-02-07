var Field = function(rows, cols) {
	this.rows = rows;
	this.cols = cols;

	this.create = function() {
		var field = document.getElementById(this.id);
		var cellsQuantity = this.rows * this.cols;

		field.innerHTML = '';

		for (var i = 0; i < cellsQuantity; i++) {
			var div = document.createElement('div');
			div.className = 'cell';
			field.appendChild(div);
		};
	};

	this.getCell = function(row, col) {
		var cellIndex = cellsQuantity * (row - 1) + col - 1;
		return field.childNodes[cellIndex];
	};
};