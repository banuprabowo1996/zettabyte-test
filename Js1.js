/**
 * Direction:
 * Find the higher value from the array bellow
 *
 * Expected Result:
 * 8
 */
let numbers = [3, 1, 2, 3, 7, 5, 6, 8, 2, 1];

function result(numbers) {
    numbers.sort(function (a, b) {
        return a - b;
    });
    largest = numbers[numbers.length - 1];
    return largest
}

console.log(result(numbers));