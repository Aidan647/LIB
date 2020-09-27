/**
* @param {...number} args An array containing number like items.
* @return {number} average of an args
*/
Math.avg = function() {
	var sum = 0
	for (var i = 0; i < arguments.length; i++) {
		sum += (typeof arguments[i] == "number") ? arguments[i] : Number(arguments[i])
	}
	return sum / arguments.length
}
/**
* String is converted to number
* @param {...number} args An array containing number like items.
* @return {number} sum of an args
*/
Math.sum = function() {
	var sum = 0
	for (var i = 0; i < arguments.length; i++) {
		sum += (typeof arguments[i] == "number") ? arguments[i] : Number(arguments[i])
	}
	return sum
}
Math.add = Math.sum
/**
 * Tau is equal to two PI
 */
Math.Tau = Math.PI * 2

/**

	-----------Number-----------

 */

/**
* @param {...number} args An array containing number like items.
* @return {number} average of an args
*/
Number.prototype.avg = function() {
	var sum = Number(this)
	for (var i = 0; i < arguments.length; i++) {
		sum += (typeof arguments[i] == "number") ? arguments[i] : Number(arguments[i])
	}
	return sum / (arguments.length + 1)
}
/**
* String is converted to number
* @param {...number} args An array containing number like items.
* @return {number} sum of an args
*/
Number.prototype.sum = function() {
	var sum = Number(this)
	for (var i = 0; i < arguments.length; i++) {
		sum += (typeof arguments[i] == "number") ? arguments[i] : Number(arguments[i])
	}
	return sum
}
Number.prototype.add = Number.prototype.sum



/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
// function shuffle(a) {
//     for (let i = a.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [a[i], a[j]] = [a[j], a[i]];
//     }
//     return a;
// }


// let nums = [...new Array(100)].map((x) => {return Math.floor(Math.random() * 100)})
// let nums2 = [...new Array(100)].map((x) => {return Math.floor(Math.random() * 100).toString()})

// nums = shuffle(nums.concat(nums2));


