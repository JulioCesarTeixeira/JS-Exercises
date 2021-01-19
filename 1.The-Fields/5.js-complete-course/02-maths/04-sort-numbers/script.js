/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // retrieve the values from id tag Numbers as strings && convert the strings into an array split()
            let myArr = document.getElementById("numbers").value;
            let strings = myArr.split(', ')
        //create variable int and give it an empty array, which will be used to store the string array
            let int = [];
            for (let i = 0; i < strings.length; i++) {
                int[i] = parseInt(strings[i]); //int = empty array named i; parseInt to convert the string array to numbers
            }

            //sort = embed function to sort array in alphabetical, numerical order
            int.sort(function (a, b) {
                return (a - b)

            });
            alert(int);

    });



