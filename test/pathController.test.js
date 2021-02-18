const assert = require('assert');
const {goForAdventure} = require('../controllers/pathController');

describe('Adventure Steps', () => {
	it('should get outside the map', () => {
		const result = goForAdventure([ 'w', 'e' ])
		console.log({result})
		assert.deepStrictEqual(result, {
			'isKilled': false,
			'isOut': true,
			'isRingDemolished': false,
			'iteration': 0,
		});
	});
	
	it('should destroy the ring', () => {
		const result = goForAdventure([ 'e', 'e', 'n', 'e', 'e', 'n', 'e', 'e', 'n', 'n', 'e' ])
		console.log({result})
		assert.deepStrictEqual(result, {
			'isKilled': false,
			'isOut': false,
			'isRingDemolished': true,
			'iteration': 10,
		});
	});
	
	it('should find nothing', () => {
		const result = goForAdventure([ 'e', 'e', 'n', 'e', 'e', 'n', 'e', 'e', 'n', 'n' ])
		console.log({result})
		assert.deepStrictEqual(result, {
			'isKilled': false,
			'isOut': false,
			'isRingDemolished': false,
			'iteration': 9,
		});
	});
	
	it('should die', () => {
		const result = goForAdventure([ 'e', 'e', 'e' ])
		console.log({result})
		assert.deepStrictEqual(result, {
			'isKilled': true,
			'isOut': false,
			'isRingDemolished': false,
			'iteration': 2,
		});
	});
});

