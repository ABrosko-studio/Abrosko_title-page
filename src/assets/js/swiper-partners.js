import Swiper, { Navigation, Autoplay, EffectCoverflow } from "swiper";
// import { Navigation } from "swiper";

export function partnersSlider() {
    const swiper = new Swiper('.swiper__partners', {
        slidesPerView: 4,
        spaceBetween: 40,
        loop: true,
        speed: 2000,
        modules: [Autoplay, EffectCoverflow, Navigation],
        autoplay: {
            delay: 500,
        },
        // effect: 'coverflow',
        // centeredSlides: true,
        // coverflowEffect: {
        //     rotate: 0,
        //     stretch: 80,
        //     scale: 1,
        //     depth: 100,
        //     modifier: 1,
        //     slideShadows: true,
        // },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
