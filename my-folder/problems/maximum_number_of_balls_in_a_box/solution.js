/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    let boxes = {}
    for (let i = lowLimit; i <= highLimit; i++){
        if (boxes[sumOfDigits(i)]) boxes[sumOfDigits(i)] ++
        else boxes[sumOfDigits(i)] = 1
    }
    return Math.max(...Object.values(boxes))
};

var sumOfDigits = function(num){
    let sum = 0;
    while (num > 0) {
        sum += num % 10
        num = Math.floor(num / 10)
    }
    return sum
}