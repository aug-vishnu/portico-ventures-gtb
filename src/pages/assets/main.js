import $ from 'jquery'

// Fun for contact page
$("form").submit(function() {
    // alert("Submitted");
    $('#sucessModal').modal('show');
    window.location.href = "/about.html";
    console.log("sf");
});


// Function for scrolling fade effect 
$(function() { // $(document).ready shorthand
    $('.monster').fadeIn('slow');
});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll(function() {
        if ($(window).scrollTop() > 10) {
            $('#navBar').addClass('floatingNav');
        } else {
            $('#navBar').removeClass('floatingNav');
        }
        /* Check the location of each desired element */
        $('.vent').each(function(i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            // console.log(bottom_of_object, bottom_of_window);

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({
                    'opacity': '1',
                    'marginTop': '0em',
                }, 1200, );

            }

        });

    });

});