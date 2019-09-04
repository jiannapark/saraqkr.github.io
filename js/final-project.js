// 3 common functions across the website

function onReady() {
  
    /* 1. on .menu-icon click, (1) dropdown menu drops down; (2) lines transition to X shape; (3) on second click, reverse */
    function onMenuClick() {
        if ($('.line1').hasClass('change')) {
            $('.dropdown-content').slideUp();
            $('.line1, .line2').toggleClass('change');
        } else {
            $('.dropdown-content').slideDown();
            $('.line1, .line2').toggleClass('change');
        }
    }

    /* 2. on "About" click, (1) menu button slides up and (2) open overlay */
    function openOverlay() {
        $('.dropdown-content').slideUp();
        $('#aboutMe').css('width', '100%');
    }
    
    /* 3. on close button click, close overlay */
    function closeOverlay() {
        $("#aboutMe").css('width', '0%');
    }
    
    $('.menu-icon').click(onMenuClick);
    $('#about').click(openOverlay);
    $('.closebtn').click(closeOverlay);
}

$('document').ready(onReady);