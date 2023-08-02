//////////////////////////////////////////////////////////////////
// [ Fixed header ]

window.onscroll = function () {
    const windowScroll = window.scrollY;
    const fixedMenu = document.querySelector('.header');
    if (windowScroll > 200) {
        fixedMenu.classList.add('js-fixed');
    }
    else {
        fixedMenu.classList.remove('js-fixed');
    }
}

//////////////////////////////////////////////////////////////////
// [ Back to Top Button ]

const scrollBtn = document.querySelector('.back-to-top');
const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtn.classList.add('js-active');
    } else {
        scrollBtn.classList.remove('js-active');
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
// [ Swiper Sliders ]

const testimonialSwiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 1.15,
    spaceBetween: 15,
    freeMode: true,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
    },
    breakpoints: {
        992: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
});

const teamSwiper = new Swiper('.teamSwiper', {
    slidesPerView: 1.15,
    spaceBetween: 15,
    freeMode: true,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
    },
    breakpoints: {
        992: {
            slidesPerView: 1.5,
            spaceBetween: 30,
        },
        1200: {
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
    grabCursor: true,
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

const blogSwiper = new Swiper('.blogSwiper', {
    slidesPerView: 1.15,
    spaceBetween: 15,
    freeMode: true,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 60,
        },
    },
});

const marqueeSwiper = new Swiper('.marqueeSwiper', {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: true,
    freeMode: true,
    speed: 5000,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});

//////////////////////////////////////////////////////////////////
// [ PHONE MASK ]

var maskPhone = document.querySelectorAll('.maskPhone')
var maskDate = document.querySelectorAll('.maskDate')

maskPhone.forEach(function (el) {
    IMask(el, {
        mask: '+{7}(000)000-00-00'
    });
});

maskDate.forEach(function (el) {
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
            middle: [],
            right: ["close"],
        },
    },
});

//////////////////////////////////////////////////////////////////
// [ Show More ]

function toggleContent() {
    const content = document.getElementsByClassName("content");
    for (let i = 0; i < content.length; i++) {
      const currentHeight = content[i].style.maxHeight;
      content[i].style.maxHeight = currentHeight ? null : content[i].scrollHeight + "px";
      content[i].classList.toggle("visible");
    }
  }
  
const toggleButtons = document.querySelectorAll(".toggleButton");

toggleButtons.forEach(button => {
    button.addEventListener("click", toggleContent);
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
// [ Headroom js ]

// (function () {
//     const body = document.querySelector('body');
//     const headroom = new Headroom(body, {
//         tolerance: {
//             down: 10,
//             up: 20
//         },
//         offset: 15
//     });
//     headroom.init();
// })();