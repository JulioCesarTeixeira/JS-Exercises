/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

//new Date().getHours() is embed in JS. Simple If else statements to change
//the 'target' ID to whatever the variable greeting tells
function time() {
    let greeting;
    let time = new Date().getHours();
    if (time < 18) {
        greeting = "Hello";
    } else {
        greeting = "Good evening"
    }
    document.getElementById('target').innerHTML = greeting;
}
time();
