// 3 function specific to the contact page

/* 
 * the first two functions (characterCounter and formSelect) are from materializecss.com: https://materializecss.com/text-inputs.html and https://materializecss.com/select.html
*/

function onReady() {
    /* 1. count number of characters in message */
    $('textarea#textarea1').characterCounter();
    /* 2. select a title from dropdown menu */
    $('select').formSelect();
    /* 3. pull out user input and send an email to Zack -- more work on this later */
}

$('document').ready(onReady);
