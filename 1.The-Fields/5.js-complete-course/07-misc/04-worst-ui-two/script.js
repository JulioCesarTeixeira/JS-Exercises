/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let output = document.getElementById('target');
    let button460 = document.getElementById('part-one');
    let button01 = document.getElementById('part-two');
    let button02 = document.getElementById('part-three');
    let button03 = document.getElementById('part-four');

    //select all buttons and add eventListener for when they are clicked
    //the innerHTML of each button will be equal the variable result
    //second variable max to define the highest value
    document.querySelectorAll('button').forEach((button) => button.addEventListener('click', function(){
      let result = button.innerHTML;
      let max = button.dataset.max;

      //if the var result < max than it can still be incremented
        //number result converted to string to be displayed
      if (result < max){
          result++;
          result = result.toString();
      }
      if(result.length === max.length){
          button.innerHTML = result
      } else{
          button.innerHTML = "0" + result;
      }
      //the output will be "0" plus the value.toString() of each button in sequence
      output.innerHTML = "0" + button460.innerHTML + button01.innerHTML + button02.innerHTML + button03.innerHTML;
    }))
})();
