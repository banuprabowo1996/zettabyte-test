/**
 * Direction
 * Get name of the day of 4 days ago from today
 *
 * Expected result:
 * 1. if date now = monday
 * 2. then result = thursday
 */
function result() {
    let date = new Date()
    date.setDate(date.getDate() - 4);
    let day = date.getDay()
    switch (day) {
        case 1: return "Monday"
            break;
        case 2: return "Tuesday"
            break;
        case 3: return "Wednesday"
            break;
        case 4: return "Thursday"
            break;
        case 5: return "Friday"
            break;
        case 6: return "Saturday"
            break;
        case 7: return "Sunday"
            break;
    }
}

console.log(result());