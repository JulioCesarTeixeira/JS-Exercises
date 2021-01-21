/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

//eventListener that when clicked on the button generates a random number with Math random.
//Nested inside Math.floor (which generates a random integer smaller than the given number
    //in this case 16677254

document.getElementById("run").addEventListener("click", function(){
   let randomColor = Math.floor(Math.random()*16677254).toString(16);
   document.body.style.backgroundColor = '#' + randomColor;

});



