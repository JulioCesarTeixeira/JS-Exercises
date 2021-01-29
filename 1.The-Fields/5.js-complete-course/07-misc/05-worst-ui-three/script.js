/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    //const query selectors
    const inputs = document.querySelectorAll('input');
    const target = document.getElementById('target');
    const buttons = document.querySelectorAll('button');

    //random number generator function
    function randomizer (min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    //push into the array in time interval
    let roulette = [];
    inputs.forEach((input, index) => {
        roulette.push(setInterval(() => numberSlot(index), 100)
        )
    });
    //get data-min and data-max from the inputs[index]
    let numberSlot = (index) => {
        let min = inputs[index].getAttribute('data-min');
        let max = inputs[index].getAttribute('data-max');
        inputs[index].value = randomizer(min, max).toString(); //convert the value from the inputs toString()
    }

    //event listener to clear interval (stop animation) and add "0" + the values of each input converted to string
    //and placed in the #target
    buttons.forEach((button, index) => button.addEventListener('click', event => {
        clearInterval(roulette[index]);
        target.innerHTML = "0";
        inputs.forEach(input => target.innerText = target.innerText + input.value.toString());

    }))

    //first horrible try

//button selector
//     let button1 = document.getElementById('fix-part-one');
//     let button2 = document.getElementById('fix-part-two');
//     let button3 = document.getElementById('fix-part-three');
//     let button4 = document.getElementById('fix-part-four');
//
//     //input selector
//     let target = document.getElementById('target');
//     let input1 = document.getElementById('part-one');
//     let input2 = document.getElementById('part-two');
//     let input3 = document.getElementById('part-three');
//     let input4 = document.getElementById('part-four');
//
//     //input dataset min selector
//     let min1 = input1.dataset.min;
//     let min2 = input2.dataset.min;
//     let min3 = input3.dataset.min;
//     let min4 = input4.dataset.min;
//
//     //random number generator
//     let randomNumber1 = setInterval(randomGen1, 100);
//     let randomNumber2 = setInterval(randomGen2, 100);
//     let randomNumber3 = setInterval(randomGen3, 100);
//     let randomNumber4 = setInterval(randomGen4, 100);


    // function randomGen1 (){
    //     input1.value = min1.toString();
    //     min1++;
    //     if(min1 >= input1.dataset.max){
    //         input1 = min1;
    //     }
    //     console.log(randomGen1);
    // }
    // function randomGen2 (){
    //     input2.value = min2.toString();
    //     min2++;
    //     if(min2 >= input2.dataset.max){
    //         input2 = min2;
    //     }
    // }
    // function randomGen3 (){
    //     input3.value = min3.toString();
    //     min3++;
    //     if(min3 >= input3.dataset.max){
    //         input3 = min3;
    //     }
    // }
    // function randomGen4 (){
    //     input4.value = min4.toString();
    //     min4++;
    //     if(min4 >= input4.dataset.max){
    //         input4 = min4;
    //     }
    // }
    //
    // //event listeners
    // button1.addEventListener('click', function() {
    //     clearInterval(randomNumber1);
    //     target.innerHTML = "0" + input1.value + input2.value + input3.value + input4.value;
    // });
    // button2.addEventListener('click', function() {
    //     clearInterval(randomNumber2);
    //     target.innerHTML = "0" + input1.value + input2.value + input3.value + input4.value;
    // });
    // button3.addEventListener('click', function() {
    //     clearInterval(randomNumber3);
    //     target.innerHTML = "0" + input1.value + input2.value + input3.value + input4.value;
    // });
    // button4.addEventListener('click', function() {
    //     clearInterval(randomNumber4);
    //     target.innerHTML = "0" + input1.value + input2.value + input3.value + input4.value;
    // })

})();
