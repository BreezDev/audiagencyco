// ainimate sider
(function ($) {
    var Spanizer = (function () {
        var settings = {
            letters: $('.js-letters'),
        };
        return {
            init: function () {
                this.bind();
            },
            bind: function () {
                Spanizer.doSpanize();
            },
            doSpanize: function () {
                settings.letters.html(function (i, el) {
                    var spanize = $.trim(el).split("");
                    var template = '<span>' + spanize.join('</span><span>') + '</span>'
                    return template;
                });
            },
        };
    })();
    // Let's GO!
    Spanizer.init();
})(jQuery);
//  slider
var swiper = new Swiper(".brand-logo", {
    loop: true,
    slidesPerView: 2,

    autoplay: {
        delay: 0.3,
        reverseDirection: true,
    },
    freeMode: true,
    speed: 4000,
    disableOnInteraction: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 90,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 90,
        },
    },
});
var swiper = new Swiper(".brand-logo2", {
    loop: true,
    slidesPerView: 2,
    autoplay: {
        delay: 0.3,
        reverseDirection: true,
    },
    freeMode: true,
    speed: 4000,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        600: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 50,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 80,
        },
    },
});
var swiper = new Swiper(".marque-text-slide", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 90,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    reverseDirection: true,
    autoplay: {
        delay: 0.3,
    },
    freeMode: true,
    speed: 4000,
    disableOnInteraction: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
var swiper = new Swiper(".case-studies-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".mySwiper-testimonial1", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 1
        },
        991: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        },
    },
});
var swiper = new Swiper(".mySwipertes3", {
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".my-project-slider", {
    slidesPerView: 2.5,
    spaceBetween: 30,
    freeMode: true,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".myfeed-back", {
    slidesPerView: 2,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    spaceBetween: 30,
    loop: true,
    autoplay: {
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 1
        },
        991: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 2
        },
    },
});
var swiper = new Swiper(".collection-1", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1.5
        },
        600: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 5
        },
    },
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    reverseDirection: true,
    autoplay: {
        delay: 0.3,
    },
    freeMode: true,
    speed: 4000,
    disableOnInteraction: true
});
$(".collection-1,.collection-2").hover(function () {
    (this).swiper.autoplay.stop();
},
    function () {
        (this).swiper.autoplay.start();
    });
var swiper = new Swiper(".collection-2", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1.5
        },
        600: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 5
        },
    },
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    autoplay: {
        delay: 0.3,
        reverseDirection: true,
    },
    freeMode: true,
    speed: 5000,
    disableOnInteraction: true
});
var swiper = new Swiper(".myFeature-4", {
    slidesPerView: 1.75,
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        600: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 1
        },
        1380: {
            slidesPerView: 1.75
        },
    },
});
var swiper = new Swiper(".brand-home4", {
    slidesPerView: 5,
    spaceBetween: 73,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});
var swiper = new Swiper(".myportfolio", {
    slidesPerView: 2.43,
    spaceBetween: 70,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 30,
        },
        600: {
            slidesPerView: 1.4,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 2.4
        },
    },
});
var swiper = new Swiper(".myteshome5", {
    spaceBetween: 130,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".slider-Swiper-it", {
    slidesPerView: 1,
    effect: "fade",
    // autoplay: {
    //     delay: 6000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".myteam-member", {
    slidesPerView: 5.8,
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },
        600: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 5.8
        },
    },
});
