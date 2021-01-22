/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function laFruit() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    let first = fruits.shift();
    let last = fruits.pop();
    let newFirst = fruits.unshift("banana");
    let newLast = fruits.push('kiwi');
    document.write(fruits.join(", ")); //specifying a character to put between the values

}
document.getElementById('run').addEventListener('click', function(){
    laFruit();
})
