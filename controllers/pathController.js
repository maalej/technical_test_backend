const { start } = require("./constants");
const { isOutsideRange, isDead, getNextStep, isRingDestroyed } = require("./utils");


/*
* @name: goForAdventure
* @description: loops through the steps to advance in the adventure
* @parameters: [] strings n, w, s, e descriptions the directions to take
* @return: {} the state describing the final situation of the adventure
* */
exports.goForAdventure = (steps) => {
	let nextStep = { ...start };
	const nextStepState = {
		isOut: false,
		isKilled: false,
		isRingDemolished: false,
		iteration: 0,
	};
	for (let i = 0; i < steps.length; i++) {
		nextStep = getNextStep(nextStep, steps[i]);
		nextStepState.iteration = i;
		nextStepState.isOut = !!isOutsideRange(nextStep);
		if (nextStepState.isOut) {
			break;
		} else {
			nextStepState.isKilled = !!isDead(nextStep);
			if (nextStepState.isKilled) {
				break;
			} else {
				nextStepState.isRingDemolished = !!isRingDestroyed(nextStep);
				if(nextStepState.isRingDemolished) {
					break;
				}
			}
		}
	}
	return nextStepState;
}