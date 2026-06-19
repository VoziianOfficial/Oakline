'use strict';

(function () {
    document.addEventListener('DOMContentLoaded', () => {
        initHomeServiceCards();
        initHomeProblemCards();
        initHeroParallax();
        refreshIcons();
    });

    function initHomeServiceCards() {
        const row = document.querySelector('.services-preview__row');
        if (!row) return;

        const cards = row.querySelectorAll('.service-preview-card');

        cards.forEach((card) => {
            card.addEventListener('mouseenter', () => {
                cards.forEach((item) => {
                    if (item !== card) {
                        item.classList.add('is-muted');
                    }
                });
            });

            card.addEventListener('mouseleave', () => {
                cards.forEach((item) => {
                    item.classList.remove('is-muted');
                });
            });
        });

        row.addEventListener(
            'wheel',
            (event) => {
                const isScrollable = row.scrollWidth > row.clientWidth;

                if (!isScrollable || Math.abs(event.deltaY) < Math.abs(event.deltaX)) {
                    return;
                }

                event.preventDefault();
                row.scrollLeft += event.deltaY;
            },
            { passive: false }
        );
    }

    function initHomeProblemCards() {
        const cards = document.querySelectorAll('.problem-card');
        if (!cards.length) return;

        cards.forEach((card) => {
            const title = card.querySelector('h3');
            if (!title) return;

            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', title.textContent.trim());

            card.addEventListener('focus', () => {
                card.classList.add('is-focused');
            });

            card.addEventListener('blur', () => {
                card.classList.remove('is-focused');
            });
        });
    }

    function initHeroParallax() {
        const hero = document.querySelector('.home-hero');
        if (!hero) return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) return;

        let ticking = false;

        const updateHero = () => {
            const offset = Math.min(window.scrollY * 0.16, 90);
            hero.style.backgroundPosition = `center calc(50% + ${offset}px)`;
            ticking = false;
        };

        window.addEventListener(
            'scroll',
            () => {
                if (!ticking) {
                    window.requestAnimationFrame(updateHero);
                    ticking = true;
                }
            },
            { passive: true }
        );
    }

    function refreshIcons() {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
})();