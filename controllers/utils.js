const { mountDoom, orcs, xRange, yRange } = require("./constants");
exports.isOutsideRange = ({ x, y }) =>
	x < xRange[0] ||
	x > xRange[1] ||
	y < yRange[0] ||
	y > yRange[1];

exports.isDead = ({ x, y }) => orcs.find((item) => item.x === x & item.y === y);

exports.getNextStep = (current, direction) => ({
	n: { ...current, y: current.y + 1 },
	e: { ...current, x: current.x + 1 },
	s: { ...current, y: current.y - 1 },
	w: { ...current, x: current.x - 1 },
}[direction]);

exports.isRingDestroyed = ({ x, y }) => mountDoom.x === x && mountDoom.y === y;