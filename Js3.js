// Question
// Given a object data, return the data multiple by 3 and sort the data.
// Expected output : { j: 0, k: 9, i: 18, l: 36 }

const data = { i: 6, j: null, k: 3, l: 12 };

function result(data) {
    Object.keys(data).forEach(function (key, index) {
        data[key] *= 3.;
    });

    const sortable = Object.fromEntries(
        Object.entries(data).sort(([, a], [, b]) => a - b)
    );

    return sortable
}

console.log(result(data));