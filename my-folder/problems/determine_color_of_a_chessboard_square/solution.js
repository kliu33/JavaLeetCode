/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let num;
    switch(coordinates[0]){
        case('a'):
            num = 1;
            break;
        case('b'):
            num = 2;
            break;
        case('c'):
            num = 3;
            break;
        case('d'):
            num = 4;
            break;
        case('e'):
            num = 5;
            break;
        case('f'):
            num = 6;
            break;
        case('g'):
            num = 7;
            break;
        case('h'):
            num = 8;
            break;
    }
    console.log(num)
    return (num + parseInt(coordinates[1])) % 2 === 1
};