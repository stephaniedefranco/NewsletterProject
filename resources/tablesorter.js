/**
 *
 * tablesorter.js
 * Created on 2/15/2018 by Stephanie DeFranco
 * JavaScript class to help sort the mailing list in a table.
 *
 */

$(document).ready(function () {
    $('tr.Entries').each(function () {   //get all tr elements
        var t = this.cells[0].textContent.split('-');  //split day-month-year values into array
        $(this).data('_ts', new Date(t[2], t[1] - 1, t[0]).getTime()); //parse into date class
    }).sort(function (a, b) {
        return $(a).data('_ts') < $(b).data('_ts'); //compare and sort dates
    }).appendTo('tbody');
});


function sortTable(j) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("TR");
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[j];
            y = rows[i + 1].getElementsByTagName("TD")[j];
            //check if the two rows should switch place:
            if (j > 0 && ( x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }

    var rows2 = document.querySelectorAll('tbody tr:nth-child(odd)');
    for (var r = 1; r < rows2.length - 1; r++) {
        rows2[r].style.display = 'none';
        //remove duplicate entries when working with date sorter (except the first, which contains table headers)
    }
}
