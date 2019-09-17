// # functions specific to art page

function onReady() {

    // 1. on .year buttons click, toggle list-year menus to show/hide

    function onYearClick(listChosen) {
        if ($(listChosen).hasClass('active')) {
            $(listChosen).slideUp();
            $(listChosen).toggleClass('active');
        } else {
            $(listChosen).slideDown();
            $(listChosen).toggleClass('active');
        }
    }

    $('.year-19').click(function() {
        onYearClick('.list-19');
    });
    $('.year-18').click(function() {
        onYearClick('.list-18');
    });




    // 2. on year>artwork buttons click, (1) remove that artwork to turn off 'display:none' and (2) turn it back on for other artworks

    const artworks = ['#juicy', '#rubber', '#lasso', '#untitled', '#silly', '#aftermath', '#god']
    const artworkIndex = ['.list-19>#one', '.list-19>#two', '.list-19>#three', '.list-19>#four', '.list-18>#one', '.list-18>#two', '.list-18>#three']

    function onArtworkIndexClick(artworkClicked) {
        $('#juicy, #rubber, #lasso, #untitled, #silly, #aftermath, #god').addClass('artwork');
        $(artworkClicked).removeClass('artwork');
    }

    $(artworkIndex[0]).click(function () {
        onArtworkIndexClick(artworks[0])
    });
    $(artworkIndex[1]).click(function () {
        onArtworkIndexClick(artworks[1])
    });
    $(artworkIndex[2]).click(function () {
        onArtworkIndexClick(artworks[2])
    });
    $(artworkIndex[3]).click(function () {
        onArtworkIndexClick(artworks[3])
    });
    $(artworkIndex[4]).click(function () {
        onArtworkIndexClick(artworks[4])
    });
    $(artworkIndex[5]).click(function () {
        onArtworkIndexClick(artworks[5])
    });
    $(artworkIndex[6]).click(function () {
        onArtworkIndexClick(artworks[6])
    });




    // add images by loop without flooding html
    const imageDirJuicy = 'Zack Thesis Portfolio/Images/Davis_Zachary_04_Juicy Fruit Falling from Yonder Blue_mixed media_8x4x3ft_Sculpture_2019/'
    const imagePathsJuicy = ['04 Center.jpg', '04 Detail 1.jpg', 'P1070197 3.jpg', '04 Detail 2.jpg', 'P1070122 2.JPG', '04 Detail 3.jpg', 'P1070110.JPG']

    const imageDirRubber = 'Zack Thesis Portfolio/Images/Davis_Zachary_05_Rubber Puppy Interrogation_mixed media_6x6x4ft_sculpture_2019/'
    const imagePathsRubber = ['05 Center.JPG', '05 Right.JPG', '05 Detail.JPG']
    
    const imageDirLasso = 'Zack Thesis Portfolio/Images/Davis_Zachary_06_The Lasso is Cut With the Strike of a Match_mixed media_1.5x4x4ft_Sculpture_2019/'
    const imagePathsLasso = ['06 Right.JPG', '06 Center.JPG', '06 Detail 1.JPG', '06 Detail 3.JPG', '06 Detail 2.JPG']

    const imageDirUntitled = 'Zack Thesis Portfolio/Images/Davis Zachary 07/'
    const imagePathsUntitled = ['P1260691.JPG', 'P1260706.JPG', '15.JPG', 'P1280158.JPG', 'P1280132.JPG', 'P1280134.JPG', 'P1280137.JPG', 'P1280138.JPG', 'Screen Shot 2018-11-25 at 8.59.42 PM.png', 'Screen Shot 2018-12-17 at 5.13.24 PM.png', 'Screen Shot 2018-12-17 at 5.14.43 PM.png']

    const imageDirSilly = 'Zack Thesis Portfolio/Images/Davis_Zachary_01_Silly Monkey Who Lost His head and a Leg and Fell From a Tree and Died Before He Could Count to Three_mixed media_2x1x5ft_sculpture_2018/'
    const imagePathsSilly = ['01 Right.JPG', '01 Detail.JPG', '01 Left.JPG']

    const imageDirAftermath = 'Zack Thesis Portfolio/Images/Davis_Zachary_02_Aftermathmatic Reverse Dissection_mixed media_3x4x6ft ft_Sculpture_2018./'
    const imagePathsAftermath = ['02 Center.JPG', '02 Left.JPG', '02 Right.JPG', '_1030963.JPG']

    const imageDirGod = 'Zack Thesis Portfolio/Images/Davis_Zachary_03_God’s in Heaven; Feeding Us the Precious Nectar Straight from the Divine Teat; All’s Right with the World_Mixed Media_6x7x3ft_sculpture_2018/'
    const imagePathsGod = ['03 Center.JPG', '03 Detail 2.JPG', '03 Detail 1.JPG', 'Screen Shot 2019-05-13 at 4.48.24 PM.png', 'P1320089.JPG', 'tumblr_pjwiugPfc11r23pupo1_500.jpg']

    var i

    function imageLoads(dir, array, collection) {
        for (i = 0; i < array.length; i++) {
            image = '<img src="' + dir + array[i] + '" alt=' + collection + ' width=200 align=middle>';
            $(collection).append(image);
        }
    }

    imageLoads(imageDirJuicy, imagePathsJuicy, artworks[0]);
    imageLoads(imageDirRubber, imagePathsRubber, artworks[1]);
    imageLoads(imageDirLasso, imagePathsLasso, artworks[2]);
    imageLoads(imageDirUntitled, imagePathsUntitled, artworks[3]);
    imageLoads(imageDirSilly, imagePathsSilly, artworks[4]);
    imageLoads(imageDirAftermath, imagePathsAftermath, artworks[5]);
    imageLoads(imageDirGod, imagePathsGod, artworks[6]);
}

$('document').ready(onReady);








