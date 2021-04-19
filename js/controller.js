'use strict'

function onInit() {
    console.log('LETS MEME!');

}



function openFilters() {
    document.querySelector('.dropdown-content').classList.toggle('show');
}


// צריך להחליף לפונקציית פילטר נורמלית
function filterMemes() {
    var filter, a,  txtValue;
    var filterInput = document.querySelector('.filter-input');
    filter = filterInput.value.toUpperCase();
    var filterDropdown = document.querySelector('.dropdown-content');
    a = filterDropdown.getElementsByTagName("a");
    for (var i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}