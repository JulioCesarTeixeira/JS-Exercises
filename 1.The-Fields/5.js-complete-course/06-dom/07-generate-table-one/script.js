/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    //create element table set to 100% width within the <div>
   var table= document.createElement('table');
    table.style.width  = '100%';
    table.style.border = '3px solid red';

    //loop to insert 10 rows with insertRow()
    for(var i = 0; i < 10; i++){
        var tr = table.insertRow();
        for(var j = 0; j < 1; j++){
            if(j === 1){
                break;
            } else { //insertCell(), but expandable through loop structure
                var td = tr.insertCell();
                td.appendChild(document.createTextNode('owned'));
                td.style.border = '1px solid red';
                if(i === 1 && j === 1){
                    td.setAttribute('rowSpan', '1');
                }
            }
        }
    }
    document.getElementById('target').appendChild(table);

    })();
