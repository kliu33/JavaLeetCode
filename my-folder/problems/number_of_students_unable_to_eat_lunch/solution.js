/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    while (sandwiches.length > 0 && students.length > 0) {
        if (students.includes(sandwiches[0])) {
            students.splice(students.indexOf(sandwiches[0]), 1)
            sandwiches.shift()
        } else {
            return students.length
        }
    }
    return 0
};