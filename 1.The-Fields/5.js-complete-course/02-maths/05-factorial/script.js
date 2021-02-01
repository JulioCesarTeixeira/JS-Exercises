/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function factorialize(num) {

    document.getElementById("run").addEventListener("click", function () {
        //fetch the HTML input with id number and transforms the string in integer
        let num = parseInt(document.getElementById("number").value);
        let fact = 1;
        for (let i=num; i>=1; i--){
            fact = fact * i;
        }
        alert(fact);
    });
}
factorialize();

