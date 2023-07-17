//////////////////////////////////////////////////////////////////
// [ Collapse responsive navbar when toggler is visible ]
// const navbarToggler = document.body.querySelector('.navbar-toggler');
// const responsiveNavItems = [].slice.call(
//     document.querySelectorAll('#navbarNav .nav-link')
// );
// responsiveNavItems.map(function (responsiveNavItem) {
//     responsiveNavItem.addEventListener('click', () => {
//         if (window.getComputedStyle(navbarToggler).display !== 'none') {
//             navbarToggler.click();
//         }
//     });
// });

//////////////////////////////////////////////////////////////////
// [ Headroom ]
(function () {
    const body = document.querySelector('body');
    const headroom = new Headroom(body, {
        tolerance: {
            down: 10,
            up: 20
        },
        offset: 15
    });
    headroom.init();
})();


//////////////////////////////////////////////////////////////////
// [ Back to Top Button ]
const scrollBtn = document.querySelector('.back-to-top');
const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtn.classList.add('activated');
    } else {
        scrollBtn.classList.remove('activated');
    }
};
document.addEventListener('scroll', () => {
    btnVisibility();
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//////////////////////////////////////////////////////////////////
// [ Smooth Scroll ]
// const makeNavLinksSmooth = () => {
//     const navLinks = document.querySelectorAll('.smooth-link');

//     for (let n in navLinks) {
//         if (navLinks.hasOwnProperty(n)) {
//             navLinks[n].addEventListener('click', e => {
//                 e.preventDefault();
//                 document.querySelector(navLinks[n].hash)
//                     .scrollIntoView({
//                         behavior: "smooth"
//                     });
//             });
//         }
//     }
// }
// makeNavLinksSmooth();

//////////////////////////////////////////////////////////////////
// [ Spy Scrolling ]
// const spyScrolling = () => {
//     const sections = document.querySelectorAll('.section-spy');

//     window.onscroll = () => {
//         const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

//         for (let s in sections)
//             if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos + 300) {
//                 const id = sections[s].id;
//                 document.querySelector('.sidebar-nav .smooth-link.active').classList.remove('active');
//                 document.querySelector(`a[href*=${id}]`).classList.add('active');
//             }
//     }
// }
// spyScrolling();

//////////////////////////////////////////////////////////////////
// [ Swiper ]
// const activitySwiper = new Swiper('.activitySwiper', {
//     slidesPerView: 1.15,
//     spaceBetween: 15,
//     freeMode: true,
//     mousewheel: true,
//     scrollbar: {
//         el: '.swiper-scrollbar',
//         hide: true,
//     },
//     breakpoints: {
//         768: {
//             slidesPerView: 1.5,
//             spaceBetween: 20,
//         },
//         992: {
//             slidesPerView: 1.75,
//             spaceBetween: 30,
//         },
//         1200: {
//             slidesPerView: 2.15,
//             spaceBetween: 30,
//         },
//     },
// });

const testimonialSwiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
});

const projectSwiper = new Swiper('.projectSwiper', {
    slidesPerView: 1.25,
    spaceBetween: 15,
    freeMode: true,
    mousewheel: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
    breakpoints: {
        992: {
            slidesPerView: 1.5,
            spaceBetween: 30,
        },
        1600: {
            slidesPerView: 1.75,
            spaceBetween: 30,
        },
    },
});

const worksSwiper = new Swiper('.worksSwiper', {
    slidesPerView: 2.05,
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        992: {
            slidesPerView: 4.5,
            spaceBetween: 30,
        },
    },
});

const teamSwiper = new Swiper('.teamSwiper', {
    slidesPerView: 1.25,
    spaceBetween: 15,
    freeMode: true,
    mousewheel: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
    breakpoints: {
        992: {
            slidesPerView: 1.5,
            spaceBetween: 30,
        },
        1600: {
            slidesPerView: 1.75,
            spaceBetween: 30,
        },
    },
});

const blogSwiper = new Swiper('.blogSwiper', {
    slidesPerView: 1.25,
    spaceBetween: 15,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 72,
        },
    },
});

//////////////////////////////////////////////////////////////////
// [ GLightbox ]
const lightboxMainVideo = GLightbox({
    selector: '.glightbox-video-01'
});

const lightboxTestimonial = GLightbox({
    selector: '.glightbox-testimonial-01'
});

const lightboxProjectItem = GLightbox({
    selector: '.glightbox-project-01'
});

const lightboxCompany = GLightbox({
    selector: '.glightbox-team-01'
});

const lightboxBlogItem = GLightbox({
    selector: '.glightbox-post-01'
});



//////////////////////////////////////////////////////////////////
// [ PHONE MASK ]
// const phoneMask = IMask(
//     document.getElementById('InputPhone1'), {
//     mask: '+{7}(000)000-00-00'
// });

var maskPhone = document.querySelectorAll('.maskPhone')
var maskDate = document.querySelectorAll('.maskDate')

maskPhone.forEach(function(el) {
    IMask(el, {
        mask: '+{7}(000)000-00-00'
    });
});

maskDate.forEach(function(el) {
    IMask(el, {
        mask: Date,
        min: new Date(1900, 0, 1),
        lazy: false
    });
});

//////////////////////////////////////////////////////////////////
// [ Enable Fancybox ]

Fancybox.bind("[data-fancybox]", {
    Thumbs: {
        type: "classic",
    },
    Toolbar: {
        display: {
          left: [],
          middle: ["close"],
          right: [],
        },
    },
});