/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//create a loop that if i smaller or equal 100, one will be add
for (let i = 1; i <= 100; i++) {
    let out = ''; //variable out here represents an empty string that will be filled up
    //i % N === 0 count the multiples of 3 and 5. When one of those are print, the the out variable will be activated
    if(i % 3 === 0) out += 'Fizz';
    if(i % 5 === 0) out += 'Buzz';
    //it will either console log the 'out' variable (fizz/buzz) or (||) a number.
    console.log(out || i);
}
