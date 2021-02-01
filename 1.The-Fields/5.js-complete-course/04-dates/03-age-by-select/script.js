/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


/*
        let user = document.getElementById('dob-year').value;
        let dob = new Date(user);
        let monthDif = Date.now() - dob.getTime();
        let age_dt = new Date(monthDif);
        let year = age_dt.getUTCFullYear();
        let age = Math.abs(year - 1970);
        alert( + age + "years");
*/
function calcAge() {

    let day = document.getElementById('dob-day').value;
    let month = document.getElementById('dob-month').value;
    let year = document.getElementById('dob-year').value;
    // let date = new Date(year, month, day);

    let today = new Date();
    let todYear = today.getFullYear();
    let todMonth = today.getMonth()+1;
    let toDate = today.getDate();

    let ageYear = todYear - year;

    let age;
    if (todMonth < month) {
    } else if (todMonth > month) {
        age = ageYear;
    } else {
        if (toDate < day) {
            age = ageYear - 1;
        } else {
            age = ageYear;
        }
    }
    alert(age);
    console.log(toDate);
}

document.getElementById('run').addEventListener("click", function () {

    calcAge();
    /*
    console.log(date);
    console.log(today);
    console.log(new Date(today.getFullYear(),today.getMonth(), today.getDate()));

    if(today.getMonth()){
        console.log(age -1);
        alert((age -1) + ' years');
    } else {
        console.log(age);
        alert(age + ' years');
    }

    if(today <= (new Date(today.getFullYear(),date.getMonth(), date.getDate()))){
        console.log(age -1);
        alert((age-1) + ' years');
    } else {
        console.log(age);
        alert(age + ' years');
    }*/
});
