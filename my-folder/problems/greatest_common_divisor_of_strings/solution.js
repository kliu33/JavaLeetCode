var gcdOfStrings = function(str1, str2) {
    if (str1 === str2) return str1
    let arr = []
    let longer_string = str1.length > str2.length ? str1 : str2
    let shorter_string = str1.length > str2.length ? str2 : str1
    for (let i = 0; i < longer_string.length; i++) {
        for (let j = i + 1; j < longer_string.length; j++) {
            if (shorter_string.includes(longer_string.slice(i,j))) {
                arr.push(longer_string.slice(i,j))
            }
        }
    }
    let gcds = []
    for (let i = 0; i < arr.length; i++) {
        let times1 = Math.floor(longer_string.length / arr[i].length)
        let times2 = Math.floor(shorter_string.length/ arr[i].length)
        rec1 = ""
        rec2 = ""
        for (let j = 0; j < times1; j++){
            rec1 += arr[i]
        }
        for (let k = 0; k < times2; k++){
            rec2 += arr[i]
        }
        if (rec1 === longer_string && rec2 === shorter_string) {
            gcds.push(arr[i])
        }
    }
    max = 0
    gcd = ""
    for (let i = 0; i < gcds.length; i++) {
        if (gcds[i].length > gcd.length) {
            gcd = gcds[i]
        }
    }

    return gcd
};