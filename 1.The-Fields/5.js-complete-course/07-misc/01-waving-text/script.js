/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
//selectors
    const target = document.getElementById('target');
    const waveText = document.getElementById("target").innerHTML;

    //array split() - every individual char ""
    let splitText = waveText.split("");
    document.getElementById("target").innerHTML = "";

    //for loop to add an id to every span
    for (let i = 0; i < splitText.length; i++) {

        let span = document.createElement("span");
        span.id = "span" + i;

        let content = document.createTextNode(splitText[i]);

        span.appendChild(content);
        target.appendChild(span);

        switch (i%25) {
            case 0:
            case 3:
                document.getElementById("span" + i).style.fontSize = "x-small";
                break;
            case 4:
            case 7:
                document.getElementById("span" + i).style.fontSize = "small";
                break;
            case 8:
            case 10:
                document.getElementById("span" + i).style.fontSize = "medium";
                break;
            case 11:
            case 13:
                document.getElementById("span" + i).style.fontSize = "large";
                break;
            case 14:
            case 18:
                document.getElementById("span" + i).style.fontSize = "x-large";
                break;
        }
    }
})();

/*

setInterval(wave, timeout: Math.random)
let timeIndex = 0;

function wave() {
target.innerHTML = "";
splitText.forEach(function(element, i){
    let char = document.createElement("span);
    char.innerText = element;

    char.style.fontSize = Math.floor((Math.sin(i + timeIndex)* .2)* 12) + "px";

    target.appendChild(char);

})

*/
