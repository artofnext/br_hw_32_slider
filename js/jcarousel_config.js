$(() => {

    console.log("Here");

    $('.jcarousel')
        .on('jcarousel:create jcarousel:reload', function () {
            var element = $(this),
                width = element.innerWidth();

            if (width > 1000) {
                width = width / 3;
            } else if (width > 900) {
                width = width / 2;
            } else if (width > 600) {
                width = width;
            }
            element.jcarousel('items').css('width', width + 'px');
        })
        .jcarousel({
            // Your configurations options
        });

    $('.jcarousel').jcarousel({
        transitions: true
    });
    $('.jcarousel-prev').click(function () {
        $('.jcarousel').jcarousel('scroll', '-=1');
    });

    $('.jcarousel-next').click(function () {
        $('.jcarousel').jcarousel('scroll', '+=1');
    });

    $('.jcarousel').jcarousel({
        animation: {
            duration: 500,
            easing: 'ease-in-out',
            complete: function () {
            }
        }
    });

    $('.jcarousel ul')
        .append('<li>Item 1</li>')
        .append('<li>Item 2</li>');

    // Reload carousel
    $('.jcarousel').jcarousel('reload');

});