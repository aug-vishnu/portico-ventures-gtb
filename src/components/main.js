import $ from 'jquery'
// document.getElementsByClassName('.navbar-toggler').addEventListener("click", function () {
//     console.log("ghhhhhhhhhhhh");
// });
if (typeof window !== `undefined`) {
    $(".navbar-toggler").click(function () {
        $('.navbar-collapse').toggleClass('show');
        console.log("sf");
    });
    // Fun for contact page
    $("form").submit(function () {
        // alert("Submitted");
        $('#sucessModal').modal('show');
        document.location.href = "/about.html";
    });


    console.log("Loadsedssssssssssssssssssss !");

    // Function for scrolling fade effect 
    $(function () { // $(document).ready shorthand
        $('.monster').fadeIn('slow');
    });

    $(document).ready(function () {
        $('#navBar').addClass('floatingNav');

        /* Every time the window is scrolled ... */
        $(document).scroll(function () {
            if ($(document).scrollTop() > 10) {
                $('#navBar').addClass('floatingNav');
            } else {
                $('#navBar').removeClass('floatingNav');
            }
            /* Check the location of each desired element */
            $('.vent').each(function (i) {

                var bottom_of_object = $(this).position().top + $(this).outerHeight();
                var bottom_of_window = $(document).scrollTop() + $(document).height();
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
}