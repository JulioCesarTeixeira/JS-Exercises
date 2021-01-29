/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    //selector and split. Reset innerText in #target
    let myText = document.getElementById('target').innerText.split("");
    document.getElementById("target").innerText = "";
    let i = 0;

    //set Interval(function name, (Math.random()
    let typeEffect = setInterval(typeWriter, (Math.random() * 150));

    //type writer function
    function typeWriter() {
            if (i === myText.length) {
                clearInterval(typeEffect); //when looped through the entire text, clearInterval() to avoid looping ad infinitum
            } else {
                document.getElementById("target").innerHTML += myText[i++]; //
            }
        }
})();
