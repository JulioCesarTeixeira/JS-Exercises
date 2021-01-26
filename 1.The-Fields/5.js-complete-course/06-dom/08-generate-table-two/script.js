/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var wrapper = document.getElementById('target');
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // creating all cells
    for (var i = 1; i < 11; i++) {
        // creates a table row
        var row = document.createElement("tr");

        for (var j = 1; j < 11; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            var cellText = document.createTextNode(j * i); //multiply j for i
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <div#target>
    wrapper.appendChild(tbl);


/*
    var table = document.createElement('table');
    table.style.width = '100%';
    table.style.border = '3px solid blue';

    result = 'x ';
    for (var i = 1; i < 11; i++) {
        var tr = table.insertRow();
        for (var j = 1; j < 11; j++) {
            var td = tr.insertCell();
            if (i === 1 && j > 1) {

                td.setAttribute('rowSpan', 1);
                result += '[' + j + ']';
            } else if (j === 0 && i > 0) {
                result += '[' + i + '] ';
            } else if (i > 0 && j > 0) {
                result += (i * j) + ' ';
            }
            td.appendChild(document.createTextNode(result));
        }
        result += '\n'
    }

    document.getElementById('target').appendChild(table);
    console.log(result); */
})();
