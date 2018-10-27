// 
// $(document).ready(function(){
//   $('backimage').cover({
//     ratio: 1080 / 1920
//   });
//
//   $(window).resize(function() {
//     $('backimage').cover('set');
//   });
// });

$(document).ready(function(){
          $(".contact-icon") // select your element (supports CSS selectors)
    .hover(function(){ // trigger the mouseover event
        $("#contact-tooltip") // select the element to show (can be anywhere)
            .show(); // show the element
    }, function(){ // trigger the mouseout event
        $("#contact-tooltip") // select the same element
            .hide(); // hide it
    });
});

$(document).ready(function(){
          $(".story-icon") // select your element (supports CSS selectors)
    .hover(function(){ // trigger the mouseover event
        $("#story-tooltip") // select the element to show (can be anywhere)
            .show(); // show the element
    }, function(){ // trigger the mouseout event
        $("#story-tooltip") // select the same element
            .hide(); // hide it
    });
});

$(document).ready(function(){
          $(".methods-icon") // select your element (supports CSS selectors)
    .hover(function(){ // trigger the mouseover event
        $("#methods-tooltip") // select the element to show (can be anywhere)
            .show(); // show the element
    }, function(){ // trigger the mouseout event
        $("#methods-tooltip") // select the same element
            .hide(); // hide it
    });
});

$(document).ready(function(){
          $(".inspiration-icon") // select your element (supports CSS selectors)
    .hover(function(){ // trigger the mouseover event
        $("#inspiration-tooltip") // select the element to show (can be anywhere)
            .show(); // show the element
    }, function(){ // trigger the mouseout event
        $("#inspiration-tooltip") // select the same element
            .hide(); // hide it
    });
});

$(document).ready(function(){
          $(".hobbies-icon") // select your element (supports CSS selectors)
    .hover(function(){ // trigger the mouseover event
        $("#hobbies-tooltip") // select the element to show (can be anywhere)
            .show(); // show the element
    }, function(){ // trigger the mouseout event
        $("#hobbies-tooltip") // select the same element
            .hide(); // hide it
    });
});

$(document).ready(function(){
          $(".creations-icon") // select your element (supports CSS selectors)
    .hover(function(){ // trigger the mouseover event
        $("#creations-tooltip") // select the element to show (can be anywhere)
            .show(); // show the element
    }, function(){ // trigger the mouseout event
        $("#creations-tooltip") // select the same element
            .hide(); // hide it
    });
});


// $(document).ready(function(){
//           $(".story-icon") // select your element (supports CSS selectors)
//     .hover(function(){ // trigger the mouseover event
//         $('.backimage').css('background', 'url(img/homepic-wall2.jpg)');
//     }, function(){ // trigger the mouseout event
//         $('.backimage').css('background', 'url(img/hero-blue-angle.jpg)');
//     });
// });
