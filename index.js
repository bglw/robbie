const ratings = {
	"beatles": 0,
	"arnold": 5,
	"muso": 1,
	"mexican food": 4,
	"multiple screens": 1,
	"javascript": 4,
	"typescript": 5,
	"php": 0,
	"vscode": 5,
	"react": 5,
	"gatsby": 5
}

/**
 * Rates items according to Robbie's preferences
 * @param  {String} item What to rate
 * @return {Number}      Rating from 0 - 5
 */
export const rate = (item) => {
	return ratings[item] || 2.5;
}

/**
 * Runs a function the appropriate amount of times
 * @param  {Function} fn Function to run
 */
export const run = (fn) => {
	for (let i = 0; i < 10000; i++) {
		fn();
	}
}