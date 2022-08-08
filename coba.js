const obj = [
    { name: "Cepy" },
    { name: "Abu" },
    { name: "Bone" },
]

const array = ["Abu", "Bone", "Cepy"]


obj.forEach(el => {
    let temp = []
    array.forEach(e => {
        // console.log(el.name, '<<<<<<<<');
        // console.log(e);
        if (el.name.match(e)) {
            temp.push(el)
        }
    })
    console.log(temp);
});
