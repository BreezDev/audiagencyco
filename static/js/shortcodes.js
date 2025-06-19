/**
  * isMobile
  * Parallax
  * flatCounter
  * swClick
  * goTop
  * WOW
  * toggleMenu
  * flatProgressBar
  * popUpLightBox
  * Preloader
  * video
  * hover_ActiveThumb
  * search
*/

; (function ($) {

    "use strict";

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var Parallax = function () {
        if ($().parallax && isMobile.any() == null) {
            $(".parallax").parallax("50%", 0.2);
        }
    };

    var flatCounter = function () {
        if ($(document.body).hasClass('counter-scroll')) {
            var a = 0;
            $(window).scroll(function () {
                var oTop = $('.tf-counters').offset().top - window.innerHeight;
                if (a === 0 && $(window).scrollTop() > oTop) {
                    if ($().countTo) {
                        $('.tf-counters').find('.numbers').each(function () {
                            var to = $(this).data('to'),
                                speed = $(this).data('speed');

                            $(this).countTo({
                                to: to,
                                speed: speed
                            });
                        });
                    }
                    a = 1;
                }
            });
        }
    };

    var goTop = function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('#scroll-top').addClass('show');
            } else {
                $('#scroll-top').removeClass('show');
            }
        });

        $('#scroll-top').on('click', function () {
            $("html, body").animate({ scrollTop: 0 }, 300, 'easeInOutExpo');
            return false;
        });
    };

    new WOW().init();

    var toggleMenu = function () {
        $(".header-menu").on("click", function () {
            $(".side-menu__block").addClass("active");
        });

        $(".side-menu__block-overlay,.side-menu__toggler, .scrollToLink").on(
            "click",
            function (e) {
                $(".side-menu__block").removeClass("active");
                e.preventDefault();
            }
        );
    }
    var flatProgressBar = function () {
        $('.couter').appear(function () {
            $('.chart').easyPieChart({
                easing: 'easeOut',
                lineWidth: 5,
                size: 110,
                scaleColor: false,
                barColor: '#C297654D',
                trackColor: '#F6F6F6',
                animate: 5000,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                },
                rotate: 275,
            });

        }, {
            offset: 400
        });
    };

    var flatProgressBar2 = function () {
        $('.couter2').appear(function () {
            $('.chart2').easyPieChart({
                easing: 'easeOut',
                lineWidth: 5,
                size: 80,
                scaleColor: false,
                barColor: '#086AD8',
                trackColor: '#F6F6F6',
                animate: 5000,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent2').text(Math.round(percent));
                },
                rotate: 275,
            });

        }, {
            offset: 400
        });
    };

    var popUpLightBox = function () {
        if ($(".lightbox-image").length) {
            $(".lightbox-image").fancybox({
                openEffect: "fade",
                closeEffect: "fade",
                helpers: {
                    media: {}
                }
            });
        }
    };

    var Preloader = function () {
        setTimeout(function () {
            $(".preload").fadeOut("slow", function () {
                $(this).remove();
            });
        }, 400);
    };

    var video = function () {
        if ($('div').hasClass('video-wrap')) {
            $('.widget-videos').magnificPopup({
                type: 'iframe'
            });
        }
    };

    var hover_ActiveThumb = function() {
        if ($(".group-team-style1").length > 0) {
            $('.group-team-style1 .content-right .team-post:first').addClass('active-thumb');
            $(".content-left .team-post").hover(function() {
                var item_id = $(this).attr('data-id');
                $('.content-right .team-post').removeClass('active-thumb');
                $('.content-right .team-post-'+item_id).addClass('active-thumb');
            });
        }
    }

    $(".header-search a").on("click", function (e) {
        $(".search-wrap").addClass("open");
        
    });

    $(".search-close").on("click", function (e) {
        $(".search-wrap").removeClass("open");
    });

    var width = $(window).width();
    if (width < 1500) {
        $(".js-letters").removeClass("wow").show();
    }
    var tftabs = function() {   
     
        $('.tf-tabs').each( function() {
            $(this).find('.toggle-btn-tabs .btn-tog').on('click', function(){
                var tab_id = $(this).attr('data-tab');

                $(this).siblings().removeClass('active').removeClass('set-active-tab').addClass('inactive');
                $(this).closest('.tf-tabs').find('.tf-tabcontent').children().removeClass('active').removeClass('set-active-tab').addClass('inactive');
                
                $(this).addClass('active').removeClass('inactive');
                $(this).closest('.tf-tabs').find('.tf-tabcontent').children('.'+tab_id).addClass('active').removeClass('inactive');
            });

            $(this).find('.toggle-btn-tabs .btn-tog.btn-2').on('click', function(){
                $(this).closest('.tf-tabs').find('.toggle-btn-tabs').addClass('active');
            });
            $(this).find('.toggle-btn-tabs .btn-tog.btn-1').on('click', function(){
                $(this).closest('.tf-tabs').find('.toggle-btn-tabs').removeClass('active');
            });
           
        });
    }
    

    // Dom Ready
    $(function () {
        video();
        goTop();
        popUpLightBox();
        toggleMenu();
        Parallax();
        flatCounter();
        flatProgressBar();
        flatProgressBar2();
        hover_ActiveThumb();
        tftabs();
        Preloader();
    });

})(jQuery);

