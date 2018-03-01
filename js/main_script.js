$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.modal').modal();
});


function sende() {
    var subject = $("#subject").val();
    var content = $("#content").val();


    alert("Since my server does not support php you have to send your email with your favorite mail client.\n" +
        "Warning: new lines are lost in some clients!");
    location.href = "mailto:" + "matteo.cosi@live.it" + '?subject=' + subject + '&body=' + content;

}

$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
            &&
            location.hostname === this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                    }
                });
            }
        }
        $(".button-collapse").sideNav('closed');
    });

