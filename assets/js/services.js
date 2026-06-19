'use strict';

(function () {
    const config = window.SiteConfig || {};

    document.addEventListener('DOMContentLoaded', () => {
        renderServicePage();
        initServicePageInteractions();
        refreshLibraries();
    });

    function renderServicePage() {
        const currentService = getCurrentService();
        if (!currentService) return;

        document.body.dataset.serviceTitle = currentService.title;

        renderServiceHero(currentService);
        renderServiceOverview(currentService);
        renderServiceSteps();
        renderRelatedServices(currentService);
        renderServiceCta(currentService);
    }

    function getCurrentPage() {
        const page = window.location.pathname.split('/').pop();
        return page || 'tree-removal.html';
    }

    function getCurrentService() {
        const currentPage = getCurrentPage();
        const bodyTitle = document.body.dataset.serviceTitle;

        if (bodyTitle) {
            return (config.services || []).find((service) => service.title === bodyTitle);
        }

        return (config.services || []).find((service) => service.url === currentPage);
    }

    function renderServiceHero(service) {
        const mount = document.querySelector('[data-service-hero]');
        if (!mount) return;

        mount.innerHTML = `
            <section
                class="page-hero section"
                aria-labelledby="service-hero-title"
                style="background-image: linear-gradient(var(--overlay-medium), var(--overlay-medium)), url('${service.heroImage}');"
            >
                <div class="page-hero__content">
                    <p class="section-kicker section-kicker--light" data-aos="fade-down">
                        Oakline Service
                    </p>

                    <h1 id="service-hero-title" data-aos="fade-up">
                        ${service.title}
                    </h1>

                    <p data-aos="fade-up" data-aos-delay="100">
                        ${service.heroText}
                    </p>

                    <div class="page-hero__buttons btn-row" data-aos="fade-up" data-aos-delay="180">
                        <a class="btn btn--primary" href="contact.html#contact-form">
                            Start Your Request
                            <i data-lucide="arrow-up-right" aria-hidden="true"></i>
                        </a>

                        <a class="btn btn--ghost" href="all-services.html">
                            View All Services
                            <i data-lucide="arrow-up-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </section>
        `;
    }

    function renderServiceOverview(service) {
        const mount = document.querySelector('[data-service-overview]');
        if (!mount) return;

        mount.innerHTML = `
            <section class="service-overview section" aria-labelledby="service-overview-title">
                <div class="container-wide">
                    <div class="service-overview__grid l-corner-wrap">
                        <div class="service-overview__content">
                            <span class="l-corner l-corner--left-bottom" aria-hidden="true" data-aos="zoom-in"></span>

                            <p class="section-kicker section-kicker--light" data-aos="fade-right">
                                About This Service
                            </p>

                            <h2 id="service-overview-title" data-aos="fade-up">
                                ${service.overviewTitle}
                            </h2>

                            <p data-aos="fade-up" data-aos-delay="100">
                                ${service.overviewText}
                            </p>

                            <a class="btn btn--primary" href="contact.html#contact-form" data-aos="fade-up" data-aos-delay="180">
                                Start This Request
                                <i data-lucide="arrow-up-right" aria-hidden="true"></i>
                            </a>
                        </div>

                        <div class="service-overview__photo-wrap" data-aos="fade-left">
                            <span class="l-corner l-corner--right-top" aria-hidden="true"></span>

                            <figure class="service-overview__photo photo-frame shine-photo">
                                <img
                                    src="${service.overviewImage}"
                                    alt="${service.title} outdoor service request overview"
                                    width="920"
                                    height="760"
                                    loading="lazy"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    function renderServiceSteps() {
        const mount = document.querySelector('[data-service-steps]');
        if (!mount) return;

        const steps = [
            {
                icon: 'clipboard-list',
                title: 'Describe the situation',
                text:
                    'Share what is happening around the tree, stump, branches, storm debris or clearing area.'
            },
            {
                icon: 'search-check',
                title: 'Match the service type',
                text:
                    'Oakline helps guide the request toward the service category that fits the property need.'
            },
            {
                icon: 'map-pin',
                title: 'Review local options',
                text:
                    'Compare available provider options and understand the next step before making a choice.'
            },
            {
                icon: 'check-circle',
                title: 'Move forward clearly',
                text:
                    'Choose the option that feels right for the property, timing and type of outdoor work.'
            }
        ];

        mount.innerHTML = `
            <section class="service-steps section" aria-labelledby="service-steps-title">
                <div class="container">
                    <div class="service-steps__grid">
                        <div class="service-steps__intro">
                            <p class="section-kicker section-kicker--light" data-aos="fade-right">
                                How It Works
                            </p>

                            <h2 id="service-steps-title" data-aos="fade-up">
                                A simpler way to start the right service request.
                            </h2>

                            <p data-aos="fade-up" data-aos-delay="100">
                                Oakline helps organize the first steps so property owners can describe the situation,
                                review the service category and move toward clearer local provider options.
                            </p>
                        </div>

                        <div class="service-steps__cards">
                            ${steps.map((step, index) => `
                                <article class="step-card shine-card" data-aos="fade-up" data-aos-delay="${index * 80}">
                                    <span class="step-card__icon" aria-hidden="true">
                                        <i data-lucide="${step.icon}"></i>
                                    </span>

                                    <div class="step-card__body">
                                        <h3>${step.title}</h3>
                                        <p>${step.text}</p>
                                    </div>
                                </article>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    function renderRelatedServices(currentService) {
        const mount = document.querySelector('[data-service-related]');
        if (!mount) return;

        const currentPage = getCurrentPage();
        const relatedTitles = config.relatedServices?.[currentPage] || [];
        const relatedServices = relatedTitles
            .map((title) => (config.services || []).find((service) => service.title === title))
            .filter(Boolean);

        if (!relatedServices.length) return;

        mount.innerHTML = `
            <section class="service-related section" aria-labelledby="service-related-title">
                <div class="container-wide">
                    <div class="service-related__top">
                        <div class="section-heading">
                            <p class="section-kicker section-kicker--light" data-aos="fade-right">
                                Other Services
                            </p>

                            <h2 id="service-related-title" data-aos="fade-up">
                                Explore more ways Oakline can help.
                            </h2>
                        </div>

                        <p data-aos="fade-left">
                            If your property needs something different, these service categories may be a better fit.
                        </p>
                    </div>

                    <div class="related-grid">
                        ${relatedServices.map((service, index) => `
                            <a
                                class="related-card shine-card"
                                href="${service.url}"
                                data-aos="zoom-in"
                                data-aos-delay="${index * 90}"
                                aria-label="View ${service.title}"
                            >
                                <img
                                    src="${service.relatedImage}"
                                    alt="${service.title} service category"
                                    width="720"
                                    height="760"
                                    loading="lazy"
                                />

                                <div class="related-card__content">
                                    <span class="related-card__icon" aria-hidden="true">
                                        <i data-lucide="${service.icon}"></i>
                                    </span>

                                    <h3>${service.title}</h3>

                                    <p>${service.shortText}</p>

                                    <span class="text-link">
                                        View Service
                                        <i data-lucide="arrow-up-right" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    function renderServiceCta(service) {
        const mount = document.querySelector('[data-service-page-cta]');
        if (!mount) return;

        mount.innerHTML = `
            <section class="service-page-cta section" aria-labelledby="service-page-cta-title">
                <div class="container-wide">
                    <div class="service-page-cta__card shine-card">
                        <div class="service-page-cta__content" data-aos="fade-up">
                            <p class="section-kicker section-kicker--light">
                                Start with Oakline
                            </p>

                            <h2 id="service-page-cta-title">
                                Ready to start your ${service.title} request?
                            </h2>

                            <p>
                                Share the situation and Oakline will help organize the next step toward local service options.
                            </p>

                            <a class="btn btn--primary" href="contact.html#contact-form">
                                Start Your Request
                                <i data-lucide="arrow-up-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    function initServicePageInteractions() {
        document.querySelectorAll('.related-card, .step-card').forEach((card) => {
            card.addEventListener('focus', () => {
                card.classList.add('is-focused');
            });

            card.addEventListener('blur', () => {
                card.classList.remove('is-focused');
            });
        });
    }

    function refreshLibraries() {
        if (window.lucide) {
            window.lucide.createIcons();
        }

        if (window.AOS) {
            window.AOS.refreshHard();
        }
    }
})();