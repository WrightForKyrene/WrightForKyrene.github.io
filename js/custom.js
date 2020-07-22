(function ($) {

    "use strict";

        // PRE LOADER
        $(window).load(function(){
          $('.preloader').fadeOut(1000); // set duration in brackets    
        });


        // navigation Section
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $(".nav a").on("click", function(){
          $(".nav").find(".active").removeClass("active");
          $(this).parent().addClass("active");
        });

        $(document).click(function(e) {
          if (!$(e.target).is('.panel-body')) {
              $('.collapse').collapse('hide');	    
            }
        });

        // Parallax Js
        function initParallax() {
          $('#home').parallax("50%", 50);
          // $('#service').parallax("50%", 40);
          $('#about').parallax("50%", 20);
          $('#why').parallax("50%", 30);
          $('#tenets').parallax("50%", 30);
          $('#donate').parallax("50%", 30);
          $('#contact').parallax("50%", 10);
        };

        initParallax();

        // smoothscroll js
        $(function() {
          $('#home a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
          });

          // Menu scroll
          $('#menu-home').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
          });

          $('#menu-about').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
          });

          $('#menu-why').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
          });

          $('#menu-tenets').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
          });

          $('#menu-donate').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
          });

          $('#menu-contact').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
          });
        });  

        // Scroll to top  		
        if ($('#scroll-to-top').length) {
          var scrollTrigger = 100, // px
            backToTop = function () {
              var scrollTop = $(window).scrollTop();
              if (scrollTop > scrollTrigger) {
                $('#scroll-to-top').addClass('show');
              } else {
                $('#scroll-to-top').removeClass('show');
              }
            };
          backToTop();
          $(window).on('scroll', function () {
            backToTop();
          });
          $('#scroll-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
              scrollTop: 0
            }, 700);
          });
        }

        // WOW Animation js
        new WOW({ mobile: false }).init();
        
        // Send Email
        $("#email_name").bind('blur', function() {
          var name = $("#email_name"),
            nameVal = name.val();

          if(nameVal !== "" || nameVal !== " " || nameVal !== undefined) {
            name.removeClass("is-required");
          }
        });

        $("#email_from").bind('blur', function() {
          var fromEmail = $("#email_from"),
            fromEmailVal = fromEmail.val();

          if(fromEmailVal !== "" || fromEmailVal !== " " || fromEmailVal !== undefined) {
            fromEmail.removeClass("is-required");
          }
        });

        $("#email_message").bind('blur', function() {
          var message = $("#email_message"),
            messageVal = message.val();

          if(messageVal !== "" || messageVal !== " " || messageVal !== undefined) {
            message.removeClass("is-required");
          }
        });

        $('#submit').bind('click', function(){
          var name = $("#email_name"),
            fromEmail = $("#email_from"),
            message = $("#email_message"),
            nameVal = name.val(),
            fromEmailVal = fromEmail.val(),
            messageVal = message.val();

            // Validation
            if(nameVal === "" || nameVal === " " || nameVal === undefined) {
              name.addClass("is-required");
            } else {
              name.removeClass("is-required");
            }

            if(fromEmailVal === "" || fromEmailVal === " " || fromEmailVal === undefined) {
              fromEmail.addClass("is-required");
            } else {
              fromEmail.removeClass("is-required");
            }

            if(messageVal === "" || messageVal === " " || messageVal === undefined) {
              message.addClass("is-required");
            } else {
              message.removeClass("is-required");
            }

            console.log("Name: " + nameVal);
            console.log("From: " + fromEmailVal);
            console.log("Message: " + messageVal);

            $.ajax({
              url: "https://wrightforkyrene.github.io/mail/contact_me.php",
              type: "POST",
              crossDomain: true,
              data: {
                name: nameVal,
                //phone: phone,
                email: fromEmailVal,
                message: messageVal
              },
              dataType: "json",
              success: function() {
                console.log("done");
                // Success message
                // $('#success').html("<div class='alert alert-success'>");
                // $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                //   .append("</button>");
                // $('#success > .alert-success')
                //   .append("<strong>Your message has been sent. </strong>");
                // $('#success > .alert-success')
                //   .append('</div>');
                // //clear all fields
                // $('#contactForm').trigger("reset");
              },
              error: function() {
                console.log("bad");
                // Fail message
                // $('#success').html("<div class='alert alert-danger'>");
                // $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                //   .append("</button>");
                // $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
                // $('#success > .alert-danger').append('</div>');
                // //clear all fields
                // $('#contactForm').trigger("reset");
              },
              complete: function() {
                console.log("complete");
                // setTimeout(function() {
                //   $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                // }, 1000);
              }
            });
        });
})(jQuery);
