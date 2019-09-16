// # functions specific to contact page

/* 
 * two functions (characterCounter and formSelect) are from materializecss.com: https://materializecss.com/text-inputs.html and https://materializecss.com/select.html
*/

function onReady() {
    $('textarea#textarea1').characterCounter();
    $('select').formSelect();
}

$('document').ready(onReady);