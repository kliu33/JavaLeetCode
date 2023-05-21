/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    releaseTimes.unshift(0)
    let max_time = 0;
    let max_button = 'a'
    for (let i = 1; i < releaseTimes.length; i++) {
        let time = releaseTimes[i] - releaseTimes[i-1]
        if (time >= max_time) {
            if (time === max_time) {
                max_button = keysPressed[i-1] > max_button ? keysPressed[i-1] : max_button
            } else {
                max_button = keysPressed[i-1]
            }
            max_time = time
        }
    }
    return max_button
};