'use strict'

// ----------TIMER----------

const deadLine = '2020-12-31';

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - new Date(),
        days = Math.floor((t / (1000 * 60 * 60 * 24))),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / (1000 * 60 * 60) % 24));

    return {
        t,
        days,
        hours,
        minutes,
        seconds
    };
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {

    const timer = document.querySelector(selector),
        days = timer.querySelector('.timer__days'),
        hours = timer.querySelector('.timer__hours'),
        minutes = timer.querySelector('.timer__minutes'),
        seconds = timer.querySelector('.timer__seconds'),
        timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.t <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('.timer', deadLine);


// ----------SLICK-SLIDER----------

$('.slider').slick({
    autoplay: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 439,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


// ----------PHONE MASK----------
const element = document.querySelector('.form__phone');
const maskOptions = {
    mask: '+{38}(000)000-00-00'
};
const mask = IMask(element, maskOptions);

// ----------HAMBURGER----------
const hamburder = document.querySelector('.nav__hamburger'),
    nav = document.querySelector('.nav__list'),
    navLink = document.querySelector('.nav__link'),
    close = document.querySelector('.nav__close');

hamburder.addEventListener('click', () => {
    nav.classList.add('nav__list--active');
});

function closeMenu() {
    nav.classList.remove('nav__list--active');
}

close.addEventListener('click', () => {
    closeMenu();
});

navLink.addEventListener('click', () => {
    closeMenu();
});