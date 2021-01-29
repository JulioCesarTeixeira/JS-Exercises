/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    const randomNumber = Math.floor(Math.random() * 100 + 1);

    function guessNumber() {
        let guess = parseInt(prompt('Guess a number from 0 to 100'));
        console.log(randomNumber);
        
        while (guess !== randomNumber) {
            if (guess < randomNumber) {
                alert('you have to go a bit higher')
            } else {
                alert('you have to go a bit lower')
            }
            guess = parseInt(prompt('give it another go'));
        }
        alert('there you go! Good job! You can read minds')
    }

    guessNumber();

    /*
    Pseudo code
*
*   function guess() {
*   IF (guess < number) {
*       alert('aim higher');
*   { IF else (guess > number)
*      alert('aim lower'){
*       else {
*           alert('exact');
* }}}};
*
* Math.floor(Math.random() * 100 + 1)
*
*
*
*
*
     */
})();
