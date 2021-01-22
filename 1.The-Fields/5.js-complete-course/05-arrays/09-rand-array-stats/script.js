/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later

function tableArr() {

    let myArr = []; //empty array

    function randomizer() {
        return Math.floor((Math.random() * 100) + 1); //number randomizer
    }

    for (let i = 1; i < 11; i++) { //push random numbers inside of the array with for loop
        myArr.push(randomizer());
        document.getElementById("n-" + i).innerHTML = myArr[i - 1];
    }

    //array stats
    let min = Math.min(...myArr);
    let max = Math.max(...myArr);
    let sum = myArr.reduce((a, b) => a + b, 0);
    let average = sum / myArr.length;

    document.getElementById("min").innerHTML = min.toString();
    document.getElementById("max").innerHTML = max.toString();
    document.getElementById("sum").innerHTML = sum.toString();
    document.getElementById("average").innerHTML = average.toString();
}

document.getElementById('run').addEventListener('click', tableArr)

/* function randomArr() {
    var myArray = [...Array(10)].map(() => Math.floor(Math.random() * 100));

    const table = document.querySelector('table td').innerHTML = myArray;
    function theSum() {
        var num = 0;
        for (var i = 0, l = myArray.length; i < l; i++) num += myArray[i];
        return num;
    }

    const max = document.getElementById('max').innerHTML = Math.max.apply(null, myArray);
    const min = document.getElementById('min').innerHTML = Math.min.apply(null, myArray);
    const sum = document.getElementById('sum').innerHTML = theSum();
    const average = document.getElementById('average').innerHTML = sum / myArray.length;

} */


