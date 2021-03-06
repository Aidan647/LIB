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

