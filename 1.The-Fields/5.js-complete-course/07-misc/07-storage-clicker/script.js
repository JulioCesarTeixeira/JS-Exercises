/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    //a decrement button has been added
    const decrement = document.createElement('button');
    decrement.setAttribute("id", "decrement");
    decrement.setAttribute('type', "button");
    decrement.innerHTML = "decrement and store";
    document.querySelector('.actions').appendChild(decrement);

    const target = document.getElementById('target');

if(localStorage.getItem("counter") !== null){
    target.innerText = localStorage.getItem("counter");
}
//@todo optimize this part in one single eventListener
    document.getElementById("decrement").addEventListener("click", event => {
        let count = parseInt(target.innerText) -1;
        count = count.toString();
        target.innerText = count.toString();
        localStorage.setItem("counter", target.innerText);
    })
    document.getElementById("increment").addEventListener("click", event =>{
   let count = parseInt(target.innerText) +1;
    count = count.toString();
        target.innerText = count.toString();
    localStorage.setItem("counter", target.innerText);
})



    /* Pseudo code!
    *
    * let target = document.getelementbyid... target . innerText;
    * let counter = parseInt(target);
    *
    * function CountThis () {
    *   for(let i = 0; ...
    *
    * }
    *
    * button.eventListener (click... {
    *
    *}
    *
    *
    *
    *
     */

})();
