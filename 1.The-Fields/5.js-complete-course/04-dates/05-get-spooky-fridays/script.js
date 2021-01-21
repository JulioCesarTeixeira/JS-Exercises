/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



const new_Date = new Date();

const lMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function friday13th(year){
    let theYear = document.getElementById('year').value;
    let count = 0;
    for (let month = 0; month <= 12; month++){
        let theDate = new Date(theYear, month, 13);
        console.log(theDate.getDay() === 5);
        if (theDate.getDay() === 5){
            count++;
            document.write(lMonth[month] +
                ' ' + theDate.getDate() + ', ' + theYear + '<br>');
        }
    }
}

document.getElementById('run').addEventListener('click', function(){
    friday13th();
})