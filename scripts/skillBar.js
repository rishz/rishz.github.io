/**
 * Created by rishabhshukla on 06/05/17.
 */

// jQuery(document).ready(function(){
//     jQuery('.skillbar').each(function(){
//         jQuery(this).find('.skillbar-bar').animate({
//             width:jQuery(this).attr('data-percent')
//         },6000);
//     });
// });

// $(window).scroll(function() {
//     var hT = $('#skills').offset().top,
//         hH = $('#skills').outerHeight(),
//         wH = $(window).height(),
//         wS = $(this).scrollTop();
//     if (wS > (hT+hH-wH)){
//         console.log("HIHIHIHIHIHI")
//         alert('you have scrolled to the h1!');
//     }
// });

var element_position = $('#about').offset().top;

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = element_position;

    if(y_scroll_pos > scroll_pos_test) {
        jQuery('.skillbar').each(function(){
            jQuery(this).find('.skillbar-bar').animate({
                width:jQuery(this).attr('data-percent')
            },6000);
        });
    }
});
