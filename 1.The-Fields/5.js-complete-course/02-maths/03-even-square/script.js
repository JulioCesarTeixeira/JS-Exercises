/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let squareNumbers = [];

    document.getElementById("run").addEventListener("click", function() {
        for (let i = 0; i < 21; i++) {
//if the sqrt of i = integer then returns true
            //checks for whole numbers
            if (Math.sqrt(i) % 1 === 0) {
                squareNumbers.push(i);
            }
        }
        alert(squareNumbers);
    })
})();

//
// document.getElementById("run").addEventListener("click", function() {
//
//     let i;
//     for (i = 0; i <= 21; i++) {
//         document.write(Math.sqrt(i) + "<br>");
//     }
// });