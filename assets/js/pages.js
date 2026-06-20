'use strict';

(function () {
    const config = window.SiteConfig || {};

    document.addEventListener('DOMContentLoaded', () => {
        renderTestimonials();
        renderFaqAccordions();
        renderServicesMarquee();
        renderAllServicesSwitcher();

        initFaqAccordions();
        initTestimonialsSwiper();
        initServicesSwitcher();
        initContactForms();

        refreshIcons();
        refreshAos();
    });

    function refreshIcons() {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    function refreshAos() {
        if (window.AOS) {
            window.setTimeout(() => {
                window.AOS.refreshHard();
            }, 80);
        }
    }

    /* ================================
       Testimonials
    ================================ */

    function renderTestimonials() {
        const wrapper = document.querySelector('[data-testimonials-wrapper]');
        if (!wrapper) return;

        const testimonials = config.testimonials || [];

        wrapper.innerHTML = testimonials.map((item) => `
            <div class="swiper-slide">
                <article class="testimonial-card shine-card">
                    <span class="testimonial-card__quote" aria-hidden="true">
                        <i data-lucide="quote"></i>
                    </span>

                    <p class="testimonial-card__text">
                        “${item.text}”
                    </p>

                    <div class="testimonial-card__bottom">
                        <div class="testimonial-card__author">
                            <strong>${item.name}</strong>
                            <span>${item.type}</span>
                        </div>

                        <div class="testimonial-stars" aria-label="Five star rating">
                            <i data-lucide="star" aria-hidden="true"></i>
                            <i data-lucide="star" aria-hidden="true"></i>
                            <i data-lucide="star" aria-hidden="true"></i>
                            <i data-lucide="star" aria-hidden="true"></i>
                            <i data-lucide="star" aria-hidden="true"></i>
                        </div>
                    </div>
                </article>
            </div>
        `).join('');
    }

    function initTestimonialsSwiper() {
        const swiperElement = document.querySelector('.testimonials-swiper');

        if (!swiperElement || !window.Swiper) return;

        new window.Swiper('.testimonials-swiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            speed: 650,
            grabCursor: true,
            pagination: {
                el: '.testimonials-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.testimonials-next',
                prevEl: '.testimonials-prev'
            }
        });
    }

    /* ================================
       FAQ Accordions
    ================================ */

    function renderFaqAccordions() {
        document.querySelectorAll('[data-faq]').forEach((accordion) => {
            const type = accordion.dataset.faq || 'about';
            const items = config.faq?.[type] || [];

            accordion.innerHTML = items.map((item, index) => {
                const itemId = `${type}-faq-${index + 1}`;
                const isOpen = index === 0;

                return `
                    <div class="accordion-item">
                        <button
                            class="accordion-button"
                            type="button"
                            id="${itemId}-button"
                            aria-expanded="${isOpen ? 'true' : 'false'}"
                            aria-controls="${itemId}-panel"
                            data-accordion-button
                        >
                            <span>${item.question}</span>
                            <i data-lucide="plus" aria-hidden="true"></i>
                        </button>

                        <div
                            class="accordion-panel ${isOpen ? 'is-open' : ''}"
                            id="${itemId}-panel"
                            role="region"
                            aria-labelledby="${itemId}-button"
                            data-accordion-panel
                        >
                            <div class="accordion-panel__inner">
                                <p>${item.answer}</p>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        });
    }

    function initFaqAccordions() {
        document.querySelectorAll('.accordion').forEach((accordion) => {
            const buttons = accordion.querySelectorAll('[data-accordion-button]');

            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                    const currentPanel = document.getElementById(button.getAttribute('aria-controls'));
                    const isExpanded = button.getAttribute('aria-expanded') === 'true';

                    buttons.forEach((otherButton) => {
                        const otherPanel = document.getElementById(otherButton.getAttribute('aria-controls'));

                        otherButton.setAttribute('aria-expanded', 'false');

                        if (otherPanel) {
                            otherPanel.classList.remove('is-open');
                        }
                    });

                    if (!isExpanded) {
                        button.setAttribute('aria-expanded', 'true');

                        if (currentPanel) {
                            currentPanel.classList.add('is-open');
                        }
                    }
                });
            });
        });
    }

    /* ================================
       Services Marquee
    ================================ */

    function renderServicesMarquee() {
        const mount = document.querySelector('[data-services-marquee]');
        if (!mount) return;

        const services = config.services || [];

        const group = services.map((service) => `
            <a class="services-marquee__link shine-card" href="${service.url}" aria-label="${service.title}">
                <i data-lucide="${service.icon}" aria-hidden="true"></i>
            </a>
        `).join('');

        mount.innerHTML = `
            <div class="services-marquee__track">
                <div class="services-marquee__group">
                    ${group}
                </div>

                <div class="services-marquee__group" aria-hidden="true">
                    ${group}
                </div>
            </div>
        `;
    }

    /* ================================
       All Services Switcher
    ================================ */

    function renderAllServicesSwitcher() {
        const mount = document.querySelector('[data-services-switcher]');
        if (!mount) return;

        const services = config.services || [];
        const firstService = services[0];

        if (!firstService) return;

        mount.innerHTML = `
            <div class="services-switcher__grid">
                <a
                    class="services-switcher__media-link shine-photo"
                    href="${firstService.url}"
                    data-switcher-link
                    aria-label="Open ${firstService.title}"
                    data-aos="fade-right"
                >
                    <img
                        class="services-switcher__image"
                        src="${firstService.image}"
                        alt="${firstService.title} service category"
                        width="920"
                        height="760"
                        loading="lazy"
                        data-switcher-image
                    />

                    <div class="services-switcher__media-caption">
                        <h3 data-switcher-title>${firstService.title}</h3>
                        <span>
                            <i data-lucide="arrow-up-right" aria-hidden="true"></i>
                        </span>
                    </div>
                </a>

                <div class="services-switcher__list" data-aos="fade-left">
                    ${services.map((service, index) => `
                        <button
                            class="service-row ${index === 0 ? 'is-active' : ''}"
                            type="button"
                            data-service-row
                            data-title="${escapeAttribute(service.title)}"
                            data-text="${escapeAttribute(service.shortText)}"
                            data-image="${service.image}"
                            data-url="${service.url}"
                            data-icon="${service.icon}"
                            aria-pressed="${index === 0 ? 'true' : 'false'}"
                        >
                            <i data-lucide="${service.icon}" aria-hidden="true"></i>

                            <span class="service-row__text">
                                <strong>${service.title}</strong>
                                <span>${service.shortText}</span>
                            </span>

                            <span class="service-row__arrow" aria-hidden="true">
                                <i data-lucide="arrow-right"></i>
                            </span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    function initServicesSwitcher() {
        const switcher = document.querySelector('[data-services-switcher]');
        if (!switcher) return;

        const rows = switcher.querySelectorAll('[data-service-row]');
        const image = switcher.querySelector('[data-switcher-image]');
        const title = switcher.querySelector('[data-switcher-title]');
        const link = switcher.querySelector('[data-switcher-link]');

        if (!rows.length || !image || !title || !link) return;

        const activateRow = (row) => {
            const nextTitle = row.dataset.title;
            const nextImage = row.dataset.image;
            const nextUrl = row.dataset.url;

            rows.forEach((item) => {
                item.classList.remove('is-active');
                item.setAttribute('aria-pressed', 'false');
            });

            row.classList.add('is-active');
            row.setAttribute('aria-pressed', 'true');

            image.style.opacity = '0';

            window.setTimeout(() => {
                image.src = nextImage;
                image.alt = `${nextTitle} service category`;
                title.textContent = nextTitle;
                link.href = nextUrl;
                link.setAttribute('aria-label', `Open ${nextTitle}`);
                image.style.opacity = '1';
            }, 160);
        };

        rows.forEach((row) => {
            row.addEventListener('mouseenter', () => {
                activateRow(row);
            });

            row.addEventListener('click', () => {
                activateRow(row);
            });

            row.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    activateRow(row);
                }
            });
        });
    }

    /* ================================
       Contact Forms
    ================================ */

    function initContactForms() {
        document.querySelectorAll('[data-contact-form]').forEach((form) => {
            const message = form.querySelector('[data-form-message]');

            form.addEventListener('submit', (event) => {
                event.preventDefault();

                if (!form.checkValidity()) {
                    form.reportValidity();
                    return;
                }

                if (message) {
                    message.textContent = 'Thank you. Your Oakline request details were prepared successfully.';
                    message.classList.add('is-visible');
                }

                form.reset();
            });
        });
    }

    /* ================================
       Helpers
    ================================ */

    function escapeAttribute(value) {
        return String(value || '')
            .replaceAll('&', '&amp;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#039;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;');
    }
})();

