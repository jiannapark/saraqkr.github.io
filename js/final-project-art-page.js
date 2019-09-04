// # functions specific to art page

function onReady() {

    // 1. on .year buttons click, toggle list-year menus to show/hide
    function onYear19Click() {
        if ($('.list-19').hasClass('active')) {
            $('.list-19').slideUp();
            $('.list-19').toggleClass('active');
        } else {
            $('.list-19').slideDown();
            $('.list-19').toggleClass('active');
        }
    }

    function onYear18Click() {
        if ($('.list-18').hasClass('active')) {
            $('.list-18').slideUp();
            $('.list-18').toggleClass('active');
        } else {
            $('.list-18').slideDown();
            $('.list-18').toggleClass('active');
        }
    }

    $('.year-19').click(onYear19Click);
    $('.year-18').click(onYear18Click);



    // 2. on year>artwork buttons click, (1) remove class .artwork to turn off 'display:none' and (2) turn it back on for other artworks

    function on19oneClick() {
        $('#juicy, #rubber, #lasso, #untitled, #silly, #aftermath, #god').addClass('artwork');
        $('#juicy').removeClass('artwork');
    }

    function on19twoClick() {
        $('#juicy, #rubber, #lasso, #untitled, #silly, #aftermath, #god').addClass('artwork');
        $('#rubber').removeClass('artwork');
    }

    function on19threeClick() {
        $('#juicy, #rubber, #lasso, #untitled, #silly, #aftermath, #god').addClass('artwork');
        $('#lasso').removeClass('artwork');
    }

    function on19fourClick() {
        $('#juicy, #rubber, #lasso, #untitled, #silly, #aftermath, #god').addClass('artwork');
        $('#untitled').removeClass('artwork');
    }

    function on18oneClick() {
        $('#juicy, #rubber, #lasso, #untitled, #silly, #aftermath, #god').addClass('artwork');
        $('#silly').removeClass('artwork');
    }

    function on18twoClick() {
        $('#juicy, #rubber, #lasso, #untitled, #silly, #aftermath, #god').addClass('artwork');
        $('#aftermath').removeClass('artwork');
    }

    function on18threeClick() {
        $('#juicy, #rubber, #lasso, #untitled, #silly, #aftermath, #god').addClass('artwork');
        $('#god').removeClass('artwork');
    }

    $('.list-19>#one').click(on19oneClick);
    $('.list-19>#two').click(on19twoClick);
    $('.list-19>#three').click(on19threeClick);
    $('.list-19>#four').click(on19fourClick);
    $('.list-18>#one').click(on18oneClick);
    $('.list-18>#two').click(on18twoClick);
    $('.list-18>#three').click(on18threeClick);






    // add images by loop without flooding html
    const imageDirJuicy = 'Zack Thesis Portfolio/Images/Davis_Zachary_04_Juicy Fruit Falling from Yonder Blue_mixed media_8x4x3ft_Sculpture_2019/'
    const imagePathsJuicy = ['04 Center.jpg', '04 Detail 1.jpg', '04 Detail 2.jpg', '04 Detail 3.jpg', 'P1070110.JPG', 'P1070122 2.JPG', 'P1070197 3.jpg']

    const imageDirRubber = 'Zack Thesis Portfolio/Images/Davis_Zachary_05_Rubber Puppy Interrogation_mixed media_6x6x4ft_sculpture_2019/'
    const imagePathsRubber = ['05 Center.JPG', '05 Detail.JPG', '05 Right.JPG']
    
    const imageDirLasso = 'Zack Thesis Portfolio/Images/Davis_Zachary_06_The Lasso is Cut With the Strike of a Match_mixed media_1.5x4x4ft_Sculpture_2019/'
    const imagePathsLasso = ['06 Center.JPG', '06 Detail 1.JPG', '06 Detail 2.JPG', '06 Detail 3.JPG', '06 Right.JPG']

    const imageDirUntitled = 'Zack Thesis Portfolio/Images/Davis Zachary 07/'
    const imagePathsUntitled = ['15.JPG', 'P1260691.JPG', 'P1260706.JPG', 'P1280132.JPG', 'P1280134.JPG', 'P1280137.JPG', 'P1280138.JPG', 'P1280158.JPG', 'Screen Shot 2018-11-25 at 8.59.42 PM.png', 'Screen Shot 2018-12-17 at 5.13.24 PM.png', 'Screen Shot 2018-12-17 at 5.14.43 PM.png']

    const imageDirSilly = 'Zack Thesis Portfolio/Images/Davis_Zachary_01_Silly Monkey Who Lost His head and a Leg and Fell From a Tree and Died Before He Could Count to Three_mixed media_2x1x5ft_sculpture_2018/'
    const imagePathsSilly = ['01 Left.JPG', '01 Right.JPG', '01 Detail.JPG']

    const imageDirAftermath = 'Zack Thesis Portfolio/Images/Davis_Zachary_02_Aftermathmatic Reverse Dissection_mixed media_3x4x6ft ft_Sculpture_2018./'
    const imagePathsAftermath = ['02 Right.JPG', '02 Left.JPG', '02 Center.JPG', '_1030963.JPG']

    const imageDirGod = 'Zack Thesis Portfolio/Images/Davis_Zachary_03_God’s in Heaven; Feeding Us the Precious Nectar Straight from the Divine Teat; All’s Right with the World_Mixed Media_6x7x3ft_sculpture_2018/'
    const imagePathsGod = ['03 Center.JPG', '03 Detail 1.JPG', '03 Detail 2.JPG', 'P1320089.JPG', 'Screen Shot 2019-05-13 at 4.48.24 PM.png', 'tumblr_pjwiugPfc11r23pupo1_500.jpg']

    var i

    for (i = 0; i < imagePathsJuicy.length; i++) {
        juicyImage = '<img src="' + imageDirJuicy + imagePathsJuicy[i] + '" alt=juicy height=200 width=200>';
        $('#juicy').append(juicyImage);
    }

    for (i = 0; i < imagePathsRubber.length; i++) {
        rubberImage = '<img src="' + imageDirRubber + imagePathsRubber[i] + '" alt=rubber height=200 width=200>';
        $('#rubber').append(rubberImage);
    }

    for (i = 0; i < imagePathsLasso.length; i++) {
        lassoImage = '<img src="' + imageDirLasso + imagePathsLasso[i] + '" alt=lasso height=200 width=200>';
        $('#lasso').append(lassoImage);
    }

    for (i = 0; i < imagePathsUntitled.length; i++) {
        untitledImage = '<img src="' + imageDirUntitled + imagePathsUntitled[i] + '" alt=untitled height=200 width=200>';
        $('#untitled').append(untitledImage);
    }

    for (i = 0; i < imagePathsSilly.length; i++) {
        sillyImage = '<img src="' + imageDirSilly + imagePathsSilly[i] + '" alt=silly height=200 width=200>';
        $('#silly').append(sillyImage);
    }

    for (i = 0; i < imagePathsAftermath.length; i++) {
        aftermathImage = '<img src="' + imageDirAftermath + imagePathsAftermath[i] + '" alt=aftermath height=200 width=200>';
        $('#aftermath').append(aftermathImage);
    }

    for (i = 0; i < imagePathsGod.length; i++) {
        godImage = '<img src="' + imageDirGod + imagePathsGod[i] + '" alt=agod height=200 width=200>';
        $('#god').append(godImage);
    }

}

$('document').ready(onReady);








