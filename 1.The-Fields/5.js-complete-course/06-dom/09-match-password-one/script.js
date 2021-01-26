/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('run').addEventListener('click', () =>
    {

        var leftBox = document.getElementById('pass-one').value;
        var rightBox = document.getElementById('pass-two').value;

        if (leftBox !== rightBox) {
           document.getElementById('pass-one').style.border = '3px red solid';
           document.getElementById('pass-two').style.border = '3px red solid';
           alert('Try again')

        } else {
            document.getElementById('pass-one').style.border = '3px blue solid';
            document.getElementById('pass-two').style.border = '3px blue solid';
            alert('Your password is correct!')
            return true
        }
    })
})();
