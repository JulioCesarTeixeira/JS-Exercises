/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('pass-one').addEventListener('keyup', () => {

        let password = document.getElementById("pass-one");
        let inputPass = password.value;

        //Regex conditions for 2 minimum of 2 digits
        let conditions = /.*\d.*\d.*/g;
        let numbersFound = inputPass.match(conditions);

        //minimum amount of digits
        if(inputPass.length >= 8 && numbersFound != null){
            document.getElementById("validity").innerText = "ok";
        }
        else{
            document.getElementById("validity").innerText = "Nope nope";
        }


    })
})();
