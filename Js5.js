/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 * 
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
const students = [
    { firstName: 'Kai', lastName: 'Lyons' },
    { firstName: 'Belle', lastName: 'Norton' },
    { firstName: 'Finnley', lastName: 'Rennie' },
    { firstName: 'Tatiana', lastName: 'Dickerson' },
    { firstName: 'Peyton', lastName: 'Gardner' },
];
const groups = 3;

function result(students, groups) {
    let str = students.map(el => el.firstName).sort()
    let result = []
    for (let i = 0; i < str.length; i++) {
        let perStr = str[i]
        let tmp = []
        for (let j = 0; j < students.length; j++) {
            let perStudent = students[j]
            // console.log(perStr);
            // console.log(perStudent);
            if (perStudent.firstName === perStr) {
                tmp.push(perStudent)
            } else {
                j++
            }
        }
        console.log(tmp);
        let numberOfEachGroup = Math.ceil(students.length / groups)
        if (tmp.length === numberOfEachGroup) {
            result.push(tmp)
            tmp = []
        }
    }
    return result
}

console.log(result(students, groups));
