/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let idx = 0
    switch(ruleKey) {
        case('type'):
            idx = 0;
            break;
        case('color'):
            idx = 1;
            break;
        case('name'):
            idx = 2;
            break;
    }
    let count = 0
    for (let i = 0; i < items.length; i++) {
        if (items[i][idx] === ruleValue) count += 1
    }
    return count
};