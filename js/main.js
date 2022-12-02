(function ($) {
    'use strict';

})(jQuery);

// Back to Top Button
//Get the button
const mybutton = document.getElementById('back-top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
    ) {
        mybutton.classList.add('show');
    } else {
        mybutton.classList.remove('show');
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Smooth Scroll and Spy Scrolling JS
const makeNavLinksSmooth = () => {
    const navLinks = document.querySelectorAll('.smooth-link');

    for (let n in navLinks) {
        if (navLinks.hasOwnProperty(n)) {
            navLinks[n].addEventListener('click', e => {
                e.preventDefault();
                document.querySelector(navLinks[n].hash)
                    .scrollIntoView({
                        behavior: "smooth"
                    });
            });
        }
    }
}
makeNavLinksSmooth();

const spyScrolling = () => {
    const sections = document.querySelectorAll('.section-spy');

    window.onscroll = () => {
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

        for (let s in sections)
            if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos + 300) {
                const id = sections[s].id;
                document.querySelector('.sidebar-nav .smooth-link.active').classList.remove('active');
                document.querySelector(`a[href*=${id}]`).classList.add('active');
            }
    }
}
spyScrolling();

// Слайдер на странице index.html
const activitySwiper = new Swiper('.activitySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    mousewheel: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
});

// Слайдер на странице index.html
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

// Слайдер на странице project-item.html
const projectSwiper = new Swiper('.projectSwiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    mousewheel: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
});

// Слайдер на странице project-item.html
const worksSwiper = new Swiper('.worksSwiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1500: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
});

// Слайдер на странице company.html
const companyGallerySwiper = new Swiper('.companyGallerySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
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


// Попап видео на index.html
const lightboxMainVideo = GLightbox({
    selector: '.main-video-glightbox1'
});

// Попап видеоотзывов
const lightboxTestimonial = GLightbox({
    selector: '.testimonial-glightbox1'
});

// Попап галереи на project-item.html
const lightboxProjectItem = GLightbox({
    selector: '.project-item-glightbox1'
});

// Попап галереи на company.html
const lightboxCompany = GLightbox({
    selector: '.glightbox1'
});

// Попап изображений на blog-item.html
const lightboxBlogItem = GLightbox({
    selector: '.blog-item-glightbox1'
});

// PHONE MASK
// const phoneMask = IMask(
//     document.getElementById('InputPhone1'), {
//     mask: '+{7}(000)000-00-00'
// });