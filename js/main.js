$(document).ready(function() {

    TonichPreLoader();
    TonichHeader();
    TonichBgImgPath();
    TonichScrollIt();
    TonichContactForm();
    TonichBgVideo();
    hideshow();
    tdshow();
});

// 网盘提取链接及提取密码
function url_password() {

    var arr = [

        "链接：https://share.weiyun.com/ANPx5QA6 密码：vv44w7"

    ];
    return arr;
}

/* -------------------------------------------------------------------
 * 01.Preloader
------------------------------------------------------------------- */
function TonichPreLoader() {
    "use-scrict";

    // Variables
    let preloaderWrap = $('#preloader-wrap');
    let loaderInner = preloaderWrap.find('.preloader-inner');

    $(window).ready(function() {
        loaderInner.fadeOut();
        preloaderWrap.delay(350).fadeOut('slow');
    });
}

/* -------------------------------------------------------------------
 * 02.Header
------------------------------------------------------------------- */
function TonichHeader() {
    "use-strict";

    // Variables
    let header = $('.header');
    let logoTransparent = $('.logo-transparent');
    let scrollTopBtn = $('.scroll-top-btn');
    let logoNormal = $('.logo-normal');
    let windowWidth = $(window).innerWidth();
    let scrollTop = $(window).scrollTop();
    let $dropdown = $('.dropdown');
    let $dropdownToggle = $('.dropdown-toggle');
    let $dropdownMenu = $('.dropdown-menu');
    let showClass = 'show';

    $('body').scrollspy({
        target: '#fixedNavbar'
    });

    $('.menu-link').on('click', function() {
        $('#fixedNavbar').collapse('hide');
    });

    // When Window On Scroll
    $(window).on('scroll', function() {
        let scrollTop = $(this).scrollTop();

        if (scrollTop > 85) {
            logoTransparent.hide();
            logoNormal.show();
            header.addClass('header-shrink');
            scrollTopBtn.addClass('active');
        } else {
            logoTransparent.show();
            logoNormal.hide();
            header.removeClass('header-shrink');
            scrollTopBtn.removeClass('active');
        }
    });

    // The same process is done without page scroll to prevent errors.
    if (scrollTop > 85) {
        logoTransparent.hide();
        logoNormal.show();
        header.addClass('header-shrink');
        scrollTopBtn.addClass('active');
    } else {
        logoTransparent.show();
        logoNormal.hide();
        header.removeClass('header-shrink');
        scrollTopBtn.removeClass('active');
    }

    // Window On Resize Hover Dropdown
    $(window).on('resize', function() {
        let windowWidth = $(this).innerWidth();

        if (windowWidth > 991) {
            $dropdown.hover(
                function() {
                    let hasShowClass = $(this).hasClass(showClass);
                    if (hasShowClass !== true) {
                        $(this).addClass(showClass);
                        $(this).find($dropdownToggle).attr('aria-expanded', 'true');
                        $(this).find($dropdownMenu).addClass(showClass);
                    }
                },
                function() {
                    $(this).removeClass(showClass);
                    $(this).find($dropdownToggle).attr('aria-expanded', 'false');
                    $(this).find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off('mouseenter mouseleave');
            header.find('.main-menu').collapse('hide');
        }
    });
    // The same process is done without page scroll to prevent errors.
    if (windowWidth > 991) {
        $dropdown.hover(
            function() {
                const $this = $(this);

                var hasShowClass = $this.hasClass(showClass);

                if (hasShowClass !== true) {
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr('aria-expanded', 'true');
                    $this.find($dropdownMenu).addClass(showClass);
                }
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr('aria-expanded', 'false');
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off('mouseenter mouseleave');
    }
}

/* -------------------------------------------------------------------
 * 03.Counter Up
------------------------------------------------------------------- */
function TonichCounterUp() {
    "use-strict";

    // Variables
    let counterItem = $('.counter');

    counterItem.counterUp({
        delay: 10,
        time: 1000
    });
}

/* -------------------------------------------------------------------
 * 04.Owl Carousel
------------------------------------------------------------------- */
function TonichCarousel() {
    "use-strict";

    // Variables
    let productCarousel = $('#productCarousel');
    let testimonialCarousel = $('#testimonialCarousel');
    var hasRtl = $("body").hasClass("rtl-mode");

    if (hasRtl === true) {
        productCarousel.owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            rtl: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 1
                }
            }
        });
        testimonialCarousel.owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            rtl: true,
            nav: true,
            navText: ["<span class='fa fa-arrow-left'></span>", "<span class='fa fa-arrow-right'></span>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    } else {
        productCarousel.owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 1
                }
            }
        });

        testimonialCarousel.owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            navText: ["<span class='fa fa-arrow-left'></span>", "<span class='fa fa-arrow-right'></span>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }
}

/* -------------------------------------------------------------------
 * 05.Background Image Path
------------------------------------------------------------------- */
function TonichBgImgPath() {
    "use-scrict";

    // Variables
    let dataBgItem = $('*[data-bg-image-path]');

    dataBgItem.each(function() {
        let imgPath = $(this).attr('data-bg-image-path');
        $(this).css('background-image', 'url(' + imgPath + ')');
    });
}

/* -------------------------------------------------------------------
 * 06.Magnific Popup
------------------------------------------------------------------- */
function TonichMGFPopup() {
    "use-scrict";

    // Variables
    let youtubePopup = $('.watch-video-btn');

    youtubePopup.magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
}

/* -------------------------------------------------------------------
 * 07.Wow Js
------------------------------------------------------------------- */
function TonichWowJs() {
    "use-scrict";

    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    })
    wow.init();
}

/* -------------------------------------------------------------------
 * 08.ScrollIt
------------------------------------------------------------------- */
function TonichScrollIt() {
    "use-strict";

    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'linear', // the easing function for animation
        scrollTime: 0, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: 0 // offste (in px) for fixed top navigation
    });
}

/* -------------------------------------------------------------------
 * 09.Contact Form
------------------------------------------------------------------- */
function TonichContactForm() {
    "use-strict";
    //  Validate Input Variables
    var contactEmail = $("#contactEmail");
    var contactPhone = $("#contactPhone");
    var formControl = $('.contact-form-group .form-control');

    // Added AutoComplete Attribute Turned Off
    formControl.attr("autocomplete", "off");

    // Email Validation
    contactEmail.on("keyup", function() {
        var emailInputValue = $(this).val().trim();

        if (emailInputValue.length > 0) {
            let validate = $(this).EmailValidate();

            if (!validate === true) {
                $(this).parent().find("span").removeClass("success").addClass("error");
            } else {
                $(this).parent().find("span").removeClass("error").addClass("success");
            }
        } else {
            $(this).parent().find("span").removeAttr("class");
        }
    });

    // Phone Validation
    contactPhone.on("keyup", function() {
        var phoneInputValue = $(this).val().trim();


        if (phoneInputValue.length > 0) {
            let validate = $(this).PhoneValidate();

            if (!validate === true) {
                $(this).parent().find("span").removeClass("success").addClass("error");
            } else {
                $(this).parent().find("span").removeClass("error").addClass("success");
            }
        } else {
            $(this).parent().find("span").removeAttr("class");
            $(this).parent().find("span").addClass("error");
        }
    });

    // Form Control Validate
    $(".form-control:not('#contactEmail,#contactPhone')").on("keyup", function() {
        var formInputValue = $(this).val().trim();

        if (formInputValue.length > 0) {
            $(this).parent().find("span").removeClass("error").addClass("success");
        } else {
            $(this).parent().find("span").removeAttr("class");
            $(this).parent().find("span").addClass("error");
        }
    });

    // Popup Variables
    let termsAgree = $('#termsAgree');

    // Terms Agree
    termsAgree.on("click", function(event) {
        $("#termsCheckBox").prop("checked", true);
    });


    //  Captcha Variables    
    let textCaptcha = $("#txtCaptcha");
    let textCaptchaSpan = $('#txtCaptchaSpan');
    let textInput = $('#txtInput');

    // Generates the Random number function 
    function randomNumber() {

        let a = Math.ceil(Math.random() * 9) + '',
            b = Math.ceil(Math.random() * 9) + '',
            c = Math.ceil(Math.random() * 9) + '',
            d = Math.ceil(Math.random() * 9) + '',
            e = Math.ceil(Math.random() * 9) + '',
            code = a + b + c + d + e;

        textCaptcha.val(code);
        textCaptchaSpan.html(code);
    }

    // Called random number function
    randomNumber();

    // Validate the Entered input aganist the generated security code function   
    function validateCaptcha() {
        let str1 = textCaptcha.val();
        let str2 = textInput.val();
        if (str1 == str2) {
            return true;
        } else {
            return false;
        }
    }

    // Form Conttrol Captcha Validate
    textInput.on("keyup", function() {
        if (validateCaptcha() == true) {
            $(this).parent().find("span").removeClass("error").addClass("success");
        } else {
            $(this).parent().find("span").removeAttr("class");
            $(this).parent().find("span").addClass("error");
        }
    });

    // Contact Form Submit
    $("#contactForm").on("submit", function(event) {
        ///var $this = $(this);

        //  Contact Form Input Value 
        let $this = $(this);
        let name = $("#contactName").val().trim();
        let email = $("#contactEmail").val().trim();
        let phone = $("#contactPhone").val().trim();
        let subject = $("#contactSubject").val().trim();
        let message = $("#contactMessage").val().trim();
        let termsCheckBox = $("#termsCheckBox").prop("checked");
        let validateEmail = $("#contactEmail").EmailValidate();
        let validatePhone = $("#contactPhone").PhoneValidate();
        let selectedNull = $('#contactSubject').find("option").eq(0).val();

        if (name == '' || email == '' || phone == '' || message == '' || textInput == '') {
            $(this).parent().find("span").addClass("error");
            if ($('.empty-form').css("display") == "none") {
                $('.empty-form').stop().slideDown().delay(3000).slideUp();
            } else {
                return false;
            }
        } else if (subject == selectedNull) {
            if ($('.subject-alert').css("display") == "none") {
                $('.subject-alert').stop().slideDown().delay(3000).slideUp();
            } else {
                return false;
            }
        } else if (termsCheckBox == false) {
            if ($('.terms-alert').css("display") == "none") {
                $('.terms-alert').stop().slideDown().delay(3000).slideUp();
            } else {
                return false;
            }
        } else if (!validatePhone === true) {
            $("#contactPhone").parent().find("span").removeClass("success").addClass("error");
            if ($('.phone-invalid').css("display") == "none") {
                $('.phone-invalid').stop().slideDown().delay(3000).slideUp();
            } else {
                return false;
            }
        } else if (!validateEmail === true) {
            $("#contactEmail").parent().find("span").removeClass("success").addClass("error");
            if ($('.email-invalid').css("display") == "none") {
                $('.email-invalid').stop().slideDown().delay(3000).slideUp();
            } else {
                return false;
            }
        } else if (validateCaptcha() != true) {
            $("#textInput").parent().find("span").removeClass("success").addClass("error");
            if ($('.security-alert').css("display") == "none") {
                $('.security-alert').stop().slideDown().delay(3000).slideUp();
            } else {
                return false;
            }
        } else {
            $this.find(':submit').append('<span class="fas fa-spinner fa-pulse ml-3"></span>');
            $this.find(':submit').attr('disabled', 'true');
            $.ajax({
                url: "phpmailer/send_mail.php",
                data: {
                    contact_name: name,
                    contact_email: email,
                    contact_phone: phone,
                    contact_subject: subject,
                    contact_message: message
                },
                type: "POST",
                success: function(response) {
                    $(".form-control").parent().find("span").removeAttr("class");
                    $("#contactForm")[0].reset();
                    $(".select-selected").html(selectedNull);
                    if (response == true) {
                        $this.find(':submit').removeAttr('disabled');
                        $this.find(':submit').find("span").fadeOut();
                        $("#formSuccessModal").modal("show");
                        // Called random number function
                        randomNumber();
                    } else {
                        $this.find(':submit').removeAttr('disabled');
                        $this.find(':submit').find("span").fadeOut();
                        $("#formDangerModal").modal("show");
                        $("#formDangerModal #error_message").html(response);
                        // Called random number function
                        randomNumber();
                    }
                }
            });
        }
        event.preventDefault();
    });
}

/* -------------------------------------------------------------------
 * 10.Youtube Background Video
------------------------------------------------------------------- */
function TonichBgVideo() {
    "use-strict";

    var hasVideoBg = $("#video-background").attr("data-video-bg");

    if (hasVideoBg) {
        $("#video-background").mb_YTPlayer();
    }
}

function hideshow() {
    $("#hs").bind("click", function() {
        var wb = $("#hs").text();
        var sheight = 172;
        $(".about-inner>p").each(function() {
            sheight = sheight + $(this).outerHeight(true);
        });
        var hheight = 400;
        if (wb == "显示") {
            $(".about-inner").animate({
                height: sheight + "px"
            }, 1000);
            $("#hs").text("隐藏");
        } else if (wb == "隐藏") {
            $(".about-inner").animate({
                height: hheight + "px"
            }, 1000);
            $("#hs").text("显示");
        };
    })



    $(".yc").bind('mouseenter', function() {

        $(this).find("p").each(function() {

            $(this).show();
        })
    })


    $(".yc").bind('mouseleave', function() {
        var i = 0
        $(this).find("p").each(function() {
            if (i > 0) {
                $(this).hide();
            }
            i = i + 1
        })
    })

    $(".xz ul li span.pass").bind('click', function() {
        $(".urlpd").remove();
        var url = ""
        $(".agree").css({
            display: 'block'
        });
        $(".mznr").css({
            display: 'block'
        });
        url = $(this).parent().text().match(/[httpsf]{3,5}:\/\/([\w\-_]{0,20}\.*)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/);
        if (url != null) {
            var url1 = url[0];

            var display = $("#tmzsm").css('display');
            if (display == 'none') {
                $("#tmzsm").css({
                    display: 'block'
                });
            }
            var display = $(".mzsm").css('display');
            if (display == 'none') {
                $(".mzsm").css({
                    display: 'block'
                });
            }
            $(".agree").after('<input type = "hidden" name = "url" id="url" value = "">')
            $("#url").val(url1);
        }

    })
    $(".close").bind('click', function() {

        var display = $("#tmzsm").css('display');
        if (display == 'block') {
            $("#tmzsm").css({
                display: 'none'
            });
        }
        var display = $(".mzsm").css('display');
        if (display == 'block') {
            $(".mzsm").css({
                display: 'none'
            });
        }
        $(".urlpd").remove();

    })

    $("#ty").bind('click', function() {
        var display = $(this).css('display');
        if ($("#ty").prop("checked")) {

            $(".agree").removeClass('disabled');
            $(".agree").addClass('btn-success');
        } else {
            $(".agree").addClass('disabled');
            $(".agree").removeClass('btn-success');
        }
    })
    $(".agree").bind('click', function() {
        if ($("#ty").prop("checked")) {

            take($("#url").val());
        } else {
            alert("必须同意免责声明才能获得密码。")
        }
    })
}



function take(url) {
    var arr = url_password();
    for (var i = arr.length - 1; i >= 0; i--) {
        var str = arr[i]
        var n = str.indexOf(url)
        if (n > -1) {
            $(".mznr").css({
                display: 'none'
            });
            $(".agree").css({
                display: 'none'
            });
            $(".xz ul li").each(function() {
                if ($(this).text().indexOf(url)>-1) {
                    $(this).text(arr[i]);
                }
            })
            $(".close").click();
        }
    }
}



function tdshow() {
    // 默认执行程序，确定按纽
    $(".agree").removeClass('btn-success');
    $(".agree").addClass('disabled');

    $(".yc").each(function() {
        var i = 0
        $(this).find("p").each(function() {

            if (i == 0) {
            } else {
                $(this).hide();
            }
            i = i + 1;
        });
    });
}