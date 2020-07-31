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

        // Modal
        $('#signModal').on('shown.bs.modal', function () {
          $('#signModal').trigger('focus')
        });

        // Parallax Js
        function initParallax() {
          $('#home').parallax("50%", 50);
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

        // Send Sign
        var signForm = document.getElementById("sign_form");
        // var signButton = document.getElementById("my-sign-form-submit");
        var signStatus = document.getElementById("my-sign-form-status");
        var signNameField = document.getElementById("person_name");
        var signPhoneField = document.getElementById("person_phone");
        var signAddressField = document.getElementById("person_address");

        function signSuccess() {
          signForm.reset();

          $('#signModal').modal('hide');
        };
    
        function signError() {
          signStatus.innerHTML = "Oops! Something went wrong, please try again.";
        };
    
        // handle the form submission event
    
        signForm.addEventListener("submit", function(ev) {
          ev.preventDefault();

          var hasErrors = false;

          if(signNameField.value === "") {
            $(signNameField).addClass("is-required");
            hasErrors = true;
          }

          if(signAddressField.value === "") {
            $(signAddressField).addClass("is-required");
            hasErrors = true;
          }

          if(hasErrors) {
            return;
          }

          var data = new FormData(signForm);

          ajax(signForm.method, signForm.action, data, signSuccess, signError);
        });

        $("#signModal").on("hidden.bs.modal", function () {
          $(signNameField).removeClass("is-required");
          $(signAddressField).removeClass("is-required");

          signForm.reset();
        });

        $('#person_name').on('blur', function (e) {
          e.preventDefault();

          if(signNameField.value !== "") {
            $(signNameField).removeClass("is-required");
          }
        });

        $('#person_address').on('blur', function (e) {
          e.preventDefault();

          if(signAddressField.value !== "") {
            $(signAddressField).removeClass("is-required");
          }
        });

        // Send Email
        var form = document.getElementById("contact_form");
        var button = document.getElementById("my-form-submit");
        var status = document.getElementById("my-form-status");
        var nameField = document.getElementById("email_name");
        var emailField = document.getElementById("email_from");
        var messageField = document.getElementById("email_message");
    
        // Success and Error functions for after the form is submitted
        
        function success() {
          form.reset();
          button.style = "display: none ";
          status.innerHTML = "Thanks! I will reach out soon.";
          nameField.disabled = true
          emailField.disabled = true
          messageField.disabled = true
        };
    
        function error() {
          status.innerHTML = "Oops! There was a problem.";
        };
    
        form.addEventListener("submit", function(ev) {
          ev.preventDefault();

          var hasErrors = false;

          if(nameField.value === "") {
            $(nameField).addClass("is-required");
            hasErrors = true;
          }

          if(emailField.value === "") {
            $(emailField).addClass("is-required");
            hasErrors = true;
          }

          if(messageField.value === "") {
            $(messageField).addClass("is-required");
            hasErrors = true;
          }

          if(hasErrors) {
            return;
          }

          var data = new FormData(form);

          ajax(form.method, form.action, data, success, error);
        });

        $('#email_name').on('blur', function (e) {
          e.preventDefault();

          if(nameField.value !== "") {
            $(nameField).removeClass("is-required");
          }
        });

        $('#email_from').on('blur', function (e) {
          e.preventDefault();

          if(emailField.value !== "") {
            $(emailField).removeClass("is-required");
          }
        });

        $('#email_message').on('blur', function (e) {
          e.preventDefault();

          if(messageField.value !== "") {
            $(messageField).removeClass("is-required");
          }
        });

        function ajax(method, url, data, success, error) {
          var xhr = new XMLHttpRequest();
          xhr.open(method, url);
          xhr.setRequestHeader("Accept", "application/json");
          xhr.onreadystatechange = function() {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
              success(xhr.response, xhr.responseType);
            } else {
              error(xhr.status, xhr.response, xhr.responseType);
            }
          };
          xhr.send(data);
        };
})(jQuery);