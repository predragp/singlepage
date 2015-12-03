$(document).ready(function() {

    $('section#screenshots a').on('click', function () {



             $('div#modal img').attr('src', $(this).attr('data-image-url' ));


        });


    var nav = $('.navbar-fixed-top');
    var distance = $('.navbar-fixed-top').offset();


    if (distance.top >= 300) { // works if you refresh page at the bottom

        nav.addClass('effect');

    }

    $(window).scroll(function() { // works when position >= 300

        var scroll = $(window).scrollTop();
        console.log(scroll);

        if (scroll >= 300) {

            nav.addClass('effect');

        } else {

            nav.removeClass('effect');
        }

    });

    $('.features-image img').waypoint(function() { // waypoint
        console.log('you have entered'); //

        $('.features-image img').addClass('animated rubberBand')

    }, {
        offset: '50%'

    });

    $('#about .blue-circle').waypoint(function() { // waypoint

        $('#about .blue-circle').addClass('animated fadeInUp')

    }, {
        offset: '50%'

    });

    $('#features .blue-circle').waypoint(function() { // waypoint
        console.log(this.element);
        $(this.element).addClass('animated fadeInUp')

    }, {
        offset: '50%'

    });

    $('#screenshots .col-xs-4').waypoint(function() { // waypoint
        console.log(this.element);
        $(this.element).addClass('animated zoomIn');
        $(this.element).css({'opacity': 1});

    }, {
        offset: '50%'

    });

    $('#download div.phone img').waypoint(function() { // waypoint
        console.log(this.element);
        $(this.element).addClass('animated fadeInRight');
        $(this.element).css({'opacity': 1});

    }, {
        offset: '50%'

    });


    $('#download .platforms .col-md-5').waypoint(function() { // waypoint
        console.log(this.element);
        $(this.element).addClass('animated fadeInUp');
        $(this.element).css({'opacity': 1});

    }, {
        offset: '50%'

    });
// form validation
    $('#form').bootstrapValidator({

        message: 'This message is not valid',
        feedbackIcons: {

            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'

        },

        fields: {

            name: {
                validators: {
                    notEmpty: {
                        message: 'This field is required and cannot be empty'
                    }

                }
            },

            email: {
                validators: {

                    notEmpty: {

                        message: 'This field is required and cannot be ampty'
                    },
                    emailAddress: {

                        message: 'This field is required and cannot be empty'
                    }
                }

            },

            message: {

                validators: {

                    notEmpty: {

                        message: 'The message cannot be ampty, leave a message'
                    }
                }
            }
        }




    }).on('success.form.bv', function(e) {

        e.preventDefault();

        var $form= $(e.target);

        var bv = $form.data('bootstrapValidator');

        $.post($form.attr('action'), $form.serialize(), function(result) {

            console.log(result);
        }, 'json' );

    });
// end form validation

});






smoothScroll.init({

    speed: 700,
    easing:'easeInOutQuad',
    updateURL:true,
    offset: 30
});