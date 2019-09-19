// 1 function specific to the landing page --> edit: decided not to use jquery for background slideshow, because images during transition either expanded or shrank due to different image sizes (I wanted them to be fixed & to simply fade in and out, which was made possible by css)

/* 1. make the background image automatically fade to next index item in the array every 8s */

function onReady() {

    const imagePaths = [
        'background-images/1.jpg',
        'background-images/2.jpg',
        'background-images/3.jpg',
        'background-images/4.jpg'
    ];
    const titles = [
        'The Lasso is Cut with a Strike of a Match (2019)', 
        'Rubber Puppy Interrogation (2019)',
        'Silly Monkey Who Lost His Head and a Leg and Fell From a Tree and Died Before He Could Count to Three (2018)',
        'In a Perfect World, Every Cow Would Be Exactly Identical and Have Flawless Coats of Fur With No Marks or Blemishes (2018)']
    ;
    var slideIndex = 0;

    function showSlides() {

        const currentImagePath = imagePaths[slideIndex];
        const currentTitle = titles[slideIndex];

        $('body').css('background-image', 'url("' + currentImagePath + '")'); 
        $('.title').html(currentTitle);

        slideIndex++;
        if (slideIndex >= imagePaths.length || slideIndex >= titles.length) {
            slideIndex = 0;
        }

        setTimeout(showSlides, 8000);
    }

    $('body').ready(showSlides);
}

$('document').ready(onReady);
