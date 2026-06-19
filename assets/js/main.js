'use strict';

(function () {
    const config = window.SiteConfig || {};

    const selectors = {
        headerMount: '[data-site-header]',
        footerMount: '[data-site-footer]',
        cookieMount: '[data-cookie-banner]',
        configText: '[data-config-text]',
        configHref: '[data-config-href]',
        configYear: '[data-current-year]',
        serviceList: '[data-service-list]',
        serviceSelect: '[data-service-select]',
        globalCta: '[data-global-cta]'
    };

    const state = {
        dropdownCloseTimer: null,
        isMobileMenuOpen: false
    };

    document.addEventListener('DOMContentLoaded', () => {
        renderHeader();
        renderFooter();
        renderGlobalCta();
        renderCookieBanner();

        injectConfigText();
        injectConfigHref();
        injectCurrentYear();
        renderServiceLists();
        renderServiceSelects();

        initHeaderScroll();
        initServicesDropdown();
        initMobileMenu();
        initSmoothAnchors();
        initActiveNav();
        initCookieBanner();
        initDemoForms();
        initNoOverflowWatch();

        initOaklineLightFaq();

        initLibraries();
    });

    function getCurrentPage() {
        const path = window.location.pathname.split('/').pop();
        return path || 'index.html';
    }

    function getServiceByTitle(title) {
        return (config.services || []).find((service) => service.title === title);
    }

    function safeText(value, fallback = '') {
        return typeof value === 'string' && value.trim() ? value : fallback;
    }

    function renderHeader() {
        const mount = document.querySelector(selectors.headerMount);
        if (!mount) return;

        mount.innerHTML = `
            <header class="site-header" data-header>
                <div class="header-shell">
                    <a class="site-logo" href="index.html" aria-label="${safeText(config.company?.name, 'Oakline')} home">
                        <span class="site-logo__mark" aria-hidden="true">
                            ${getLogoSvg()}
                        </span>
                        <span class="site-logo__text">
                            Oak<span class="site-logo__accent">line</span>
                        </span>
                    </a>

                    <nav class="desktop-nav" aria-label="Main navigation">
                        <a class="nav-link" href="index.html" data-nav-link>Home</a>
                        <a class="nav-link" href="about.html" data-nav-link>About</a>

                        <div class="nav-dropdown" data-services-dropdown>
                            <a class="nav-trigger" href="all-services.html" data-nav-link data-services-trigger>
                                Services
                                <i data-lucide="chevron-down" aria-hidden="true"></i>
                            </a>

                            <div class="nav-dropdown__menu" data-services-menu>
                                ${getServicesDropdownLinks()}
                            </div>
                        </div>

                        <a class="nav-link" href="all-services.html" data-nav-link>All Services</a>
                        <a class="nav-link" href="contact.html" data-nav-link>Contact</a>
                    </nav>

                    <div class="header-actions" aria-label="Contact actions">
                        <a class="icon-btn" href="tel:${safeText(config.contact?.phoneRaw)}" aria-label="Call ${safeText(config.company?.name, 'Oakline')}">
                            <i data-lucide="phone" aria-hidden="true"></i>
                        </a>
                        <a class="icon-btn" href="contact.html#contact-form" aria-label="Open contact form">
                            <i data-lucide="mail" aria-hidden="true"></i>
                        </a>
                    </div>

                    <button class="mobile-burger" type="button" aria-label="Open menu" aria-expanded="false" data-mobile-open>
                        <i data-lucide="menu" aria-hidden="true"></i>
                    </button>
                </div>
            </header>

            <div class="mobile-menu" aria-hidden="true" data-mobile-menu>
                <div class="mobile-menu__panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">
                    <div class="mobile-menu__top">
                        <a class="site-logo" href="index.html" aria-label="${safeText(config.company?.name, 'Oakline')} home">
                            <span class="site-logo__mark" aria-hidden="true">
                                ${getLogoSvg()}
                            </span>
                            <span class="site-logo__text">
                                Oak<span class="site-logo__accent">line</span>
                            </span>
                        </a>

                        <button class="icon-btn mobile-menu__close" type="button" aria-label="Close menu" data-mobile-close>
                            <i data-lucide="x" aria-hidden="true"></i>
                        </button>
                    </div>

                    <nav class="mobile-menu__nav" aria-label="Mobile main navigation">
                        <a class="mobile-menu__link" href="index.html">Home</a>
                        <a class="mobile-menu__link" href="about.html">About</a>
                        <a class="mobile-menu__link" href="all-services.html">All Services</a>
                        <a class="mobile-menu__link" href="contact.html">Contact</a>
                    </nav>

                    <p class="mobile-menu__group-title">Services</p>

                    <div class="mobile-menu__services">
                        ${getMobileServicesLinks()}
                    </div>

                    <div class="mobile-menu__contacts">
                        <a class="mobile-menu__contact" href="tel:${safeText(config.contact?.phoneRaw)}">
                            <i data-lucide="phone" aria-hidden="true"></i>
                            <span>${safeText(config.contact?.phoneDisplay)}</span>
                        </a>

                        <a class="mobile-menu__contact" href="mailto:${safeText(config.contact?.email)}">
                            <i data-lucide="mail" aria-hidden="true"></i>
                            <span>${safeText(config.contact?.email)}</span>
                        </a>

                        <span class="mobile-menu__contact">
                            <i data-lucide="map-pin" aria-hidden="true"></i>
                            <span>${safeText(config.company?.address)}</span>
                        </span>
                    </div>
                </div>
            </div>
        `;
    }

    function renderFooter() {
        const mount = document.querySelector(selectors.footerMount);
        if (!mount) return;

        mount.innerHTML = `
            <footer class="site-footer">
                <div class="footer-main">
                    <div class="container-wide">
                        <div class="footer-grid">
                            <div class="footer-brand">
                                <a class="site-logo" href="index.html" aria-label="${safeText(config.company?.name, 'Oakline')} home">
                                    <span class="site-logo__mark" aria-hidden="true">
                                        ${getLogoSvg()}
                                    </span>
                                    <span class="site-logo__text">
                                        Oak<span class="site-logo__accent">line</span>
                                    </span>
                                </a>

                                <p>${safeText(config.footer?.description)}</p>
                            </div>

                            <div class="footer-column">
                                <h2 class="footer-title">Pages</h2>
                                <div class="footer-links">
                                    <a class="footer-link" href="index.html">Home</a>
                                    <a class="footer-link" href="about.html">About</a>
                                    <a class="footer-link" href="all-services.html">All Services</a>
                                    <a class="footer-link" href="contact.html">Contact</a>
                                </div>
                            </div>

                            <div class="footer-column">
                                <h2 class="footer-title">Services</h2>
                                <div class="footer-links">
                                    ${(config.services || []).map((service) => `
                                        <a class="footer-link" href="${service.url}">${service.title}</a>
                                    `).join('')}
                                </div>
                            </div>

                            <div class="footer-column footer-column--contact">
                                <h2 class="footer-title">Contact</h2>

                                <div class="footer-contact">
                                    <a class="footer-contact__item" href="tel:${safeText(config.contact?.phoneRaw)}">
                                        <i data-lucide="phone" aria-hidden="true"></i>
                                        <span>${safeText(config.contact?.phoneDisplay)}</span>
                                    </a>

                                    <a class="footer-contact__item" href="mailto:${safeText(config.contact?.email)}">
                                        <i data-lucide="mail" aria-hidden="true"></i>
                                        <span>${safeText(config.contact?.email)}</span>
                                    </a>

                                    <span class="footer-contact__item">
                                        <i data-lucide="map-pin" aria-hidden="true"></i>
                                        <span>${safeText(config.company?.address)}</span>
                                    </span>

                                    <span class="footer-contact__item">
                                        <i data-lucide="badge-check" aria-hidden="true"></i>
                                        <span>${safeText(config.company?.companyId)}</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p class="footer-disclaimer">
                            ${safeText(config.legal?.disclaimer)}
                        </p>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="container-wide footer-bottom__inner">
                        <p>
                            © <span data-current-year></span> ${safeText(config.company?.name, 'Oakline')}. ${safeText(config.footer?.copyright)}
                        </p>

                        <div class="footer-legal">
                            <a class="footer-link" href="privacy-policy.html">Privacy Policy</a>
                            <a class="footer-link" href="terms-of-service.html">Terms of Service</a>
                            <a class="footer-link" href="cookie-policy.html">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }

    function renderGlobalCta() {
        const mounts = document.querySelectorAll(selectors.globalCta);
        if (!mounts.length) return;

        mounts.forEach((mount) => {
            const type = mount.dataset.globalCta || 'footer';
            const pageServiceTitle = document.body.dataset.serviceTitle || '';
            const cta = type === 'service' ? config.cta?.service : config.cta?.footer;
            const image = cta?.image || config.cta?.footer?.image || 'assets/images/cta/footer-cta-logs.jpg';

            let title = cta?.title || 'Need help choosing the right tree service?';

            if (type === 'service' && pageServiceTitle) {
                title = `${cta?.titlePrefix || 'Ready to start your'} ${pageServiceTitle} ${cta?.titleSuffix || 'request?'}`;
            }

            mount.innerHTML = `
                <section class="global-cta section" aria-label="Start request">
                    <div class="container-wide">
                        <div class="global-cta__card shine-card" style="background-image: linear-gradient(var(--overlay-medium), var(--overlay-medium)), url('${image}');">
                            <div class="global-cta__content" data-aos="fade-up">
                                <p class="section-kicker section-kicker--light">Start with Oakline</p>
                                <h2>${title}</h2>
                                <p>${safeText(cta?.text, 'Start a clear request and compare local provider options through Oakline.')}</p>
                                <a class="btn btn--primary" href="${safeText(cta?.buttonUrl, 'contact.html#contact-form')}">
                                    ${safeText(cta?.buttonText, 'Start Your Request')}
                                    <i data-lucide="arrow-up-right" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        });
    }

    function renderCookieBanner() {
        const mount = document.querySelector(selectors.cookieMount);
        if (!mount) return;

        mount.innerHTML = `
            <div class="cookie-banner" data-cookie-panel role="dialog" aria-label="Cookie notice" aria-live="polite">
                <div class="cookie-banner__inner">
                    <div>
                        <h2>Cookie & privacy notice</h2>
                        <p>
                            Oakline uses essential and optional cookies to improve the browsing experience.
                            Review our
                            <a href="privacy-policy.html">Privacy Policy</a>,
                            <a href="cookie-policy.html">Cookie Policy</a> and
                            <a href="terms-of-service.html">Terms of Service</a>.
                        </p>
                    </div>

                    <div class="cookie-banner__actions">
                        <button class="btn btn--dark" type="button" data-cookie-decline>
                            Decline
                        </button>
                        <button class="btn btn--primary" type="button" data-cookie-accept>
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    function injectConfigText() {
        document.querySelectorAll(selectors.configText).forEach((element) => {
            const key = element.dataset.configText;
            const value = getConfigValue(key);

            if (value !== undefined && value !== null) {
                element.textContent = value;
            }
        });
    }

    function injectConfigHref() {
        document.querySelectorAll(selectors.configHref).forEach((element) => {
            const key = element.dataset.configHref;
            const value = getConfigValue(key);

            if (!value) return;

            if (key === 'contact.phoneRaw') {
                element.setAttribute('href', `tel:${value}`);
            } else if (key === 'contact.email') {
                element.setAttribute('href', `mailto:${value}`);
            } else {
                element.setAttribute('href', value);
            }
        });
    }

    function injectCurrentYear() {
        document.querySelectorAll(selectors.configYear).forEach((element) => {
            element.textContent = new Date().getFullYear();
        });
    }

    function getConfigValue(path) {
        if (!path) return undefined;

        return path.split('.').reduce((result, key) => {
            if (result && Object.prototype.hasOwnProperty.call(result, key)) {
                return result[key];
            }

            return undefined;
        }, config);
    }

    function renderServiceLists() {
        const lists = document.querySelectorAll(selectors.serviceList);
        if (!lists.length) return;

        lists.forEach((list) => {
            const type = list.dataset.serviceList || 'links';

            if (type === 'icon-strip') {
                list.innerHTML = (config.services || []).map((service) => `
                    <a class="icon-strip__link shine-card" href="${service.url}" aria-label="${service.title}">
                        <i data-lucide="${service.icon}" aria-hidden="true"></i>
                    </a>
                `).join('');
                return;
            }

            if (type === 'footer') {
                list.innerHTML = (config.services || []).map((service) => `
                    <a class="footer-link" href="${service.url}">${service.title}</a>
                `).join('');
                return;
            }

            list.innerHTML = (config.services || []).map((service) => `
                <a href="${service.url}">${service.title}</a>
            `).join('');
        });
    }

    function renderServiceSelects() {
        document.querySelectorAll(selectors.serviceSelect).forEach((select) => {
            const options = config.serviceOptions || [];

            select.innerHTML = `
                <option value="">Select a service</option>
                ${options.map((option) => `
                    <option value="${option}">${option}</option>
                `).join('')}
            `;
        });
    }

    function initHeaderScroll() {
        const header = document.querySelector('[data-header]');
        if (!header) return;

        const update = () => {
            header.classList.toggle('is-scrolled', window.scrollY > 20);
        };

        update();

        window.addEventListener('scroll', update, { passive: true });
    }

    function initServicesDropdown() {
        const dropdown = document.querySelector('[data-services-dropdown]');
        const trigger = document.querySelector('[data-services-trigger]');
        const menu = document.querySelector('[data-services-menu]');

        if (!dropdown || !trigger || !menu) return;

        const openDropdown = () => {
            window.clearTimeout(state.dropdownCloseTimer);
            dropdown.classList.add('is-open');
            trigger.setAttribute('aria-expanded', 'true');
        };

        const closeDropdown = () => {
            state.dropdownCloseTimer = window.setTimeout(() => {
                dropdown.classList.remove('is-open');
                trigger.setAttribute('aria-expanded', 'false');
            }, 240);
        };

        trigger.setAttribute('aria-haspopup', 'true');
        trigger.setAttribute('aria-expanded', 'false');

        dropdown.addEventListener('mouseenter', openDropdown);
        dropdown.addEventListener('mouseleave', closeDropdown);

        trigger.addEventListener('focus', openDropdown);

        menu.addEventListener('focusin', openDropdown);

        menu.addEventListener('focusout', (event) => {
            if (!dropdown.contains(event.relatedTarget)) {
                closeDropdown();
            }
        });

        trigger.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                openDropdown();

                const firstLink = menu.querySelector('a');
                if (firstLink) firstLink.focus();
            }

            if (event.key === 'Escape') {
                dropdown.classList.remove('is-open');
                trigger.setAttribute('aria-expanded', 'false');
                trigger.focus();
            }
        });
    }

    function initMobileMenu() {
        const openButton = document.querySelector('[data-mobile-open]');
        const closeButton = document.querySelector('[data-mobile-close]');
        const menu = document.querySelector('[data-mobile-menu]');
        const panel = menu?.querySelector('.mobile-menu__panel');

        if (!openButton || !closeButton || !menu || !panel) return;

        const openMenu = () => {
            state.isMobileMenuOpen = true;
            menu.classList.add('is-open');
            menu.setAttribute('aria-hidden', 'false');
            openButton.setAttribute('aria-expanded', 'true');
            document.body.classList.add('menu-open');

            window.setTimeout(() => {
                const firstLink = menu.querySelector('a, button');
                if (firstLink) firstLink.focus();
            }, 80);
        };

        const closeMenu = () => {
            state.isMobileMenuOpen = false;
            menu.classList.remove('is-open');
            menu.setAttribute('aria-hidden', 'true');
            openButton.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
            openButton.focus();
        };

        openButton.addEventListener('click', openMenu);
        closeButton.addEventListener('click', closeMenu);

        menu.addEventListener('click', (event) => {
            if (!panel.contains(event.target)) {
                closeMenu();
            }
        });

        menu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && state.isMobileMenuOpen) {
                closeMenu();
            }
        });
    }

    function initSmoothAnchors() {
        document.addEventListener('click', (event) => {
            const link = event.target.closest('a[href^="#"]');
            if (!link) return;

            const targetId = link.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();

            const headerOffset = 96;
            const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

            window.scrollTo({
                top: targetTop,
                behavior: 'smooth'
            });
        });
    }

    function initActiveNav() {
        const currentPage = getCurrentPage();

        document.querySelectorAll('[data-nav-link]').forEach((link) => {
            const linkPage = link.getAttribute('href')?.split('#')[0];

            if (linkPage === currentPage) {
                link.classList.add('is-active');
            }

            if (currentPage !== 'index.html' && linkPage === 'index.html') {
                link.classList.remove('is-active');
            }
        });
    }

    function initCookieBanner() {
        const panel = document.querySelector('[data-cookie-panel]');
        const acceptButton = document.querySelector('[data-cookie-accept]');
        const declineButton = document.querySelector('[data-cookie-decline]');

        if (!panel || !acceptButton || !declineButton) return;

        const storageKey = 'oaklineCookieConsent';
        const savedConsent = localStorage.getItem(storageKey);

        if (!savedConsent) {
            window.setTimeout(() => {
                panel.classList.add('is-visible');
            }, 650);
        }

        const saveConsent = (value) => {
            localStorage.setItem(storageKey, value);
            panel.classList.remove('is-visible');
        };

        acceptButton.addEventListener('click', () => saveConsent('accepted'));
        declineButton.addEventListener('click', () => saveConsent('declined'));
    }

    function initDemoForms() {
        document.querySelectorAll('[data-demo-form]').forEach((form) => {
            const message = form.querySelector('[data-form-message]');

            form.addEventListener('submit', (event) => {
                event.preventDefault();

                if (!form.checkValidity()) {
                    form.reportValidity();
                    return;
                }

                if (message) {
                    message.textContent = 'Thank you. Your request was prepared successfully. Oakline will help organize the next step.';
                    message.classList.add('is-visible');
                }

                form.reset();
            });
        });
    }

    function initNoOverflowWatch() {
        if (!document.documentElement) return;

        const checkOverflow = () => {
            const overflow = document.documentElement.scrollWidth > window.innerWidth + 2;
            document.documentElement.classList.toggle('has-horizontal-overflow', overflow);
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow, { passive: true });
    }

    function initLibraries() {
        if (window.AOS) {
            window.AOS.init({
                duration: 850,
                easing: 'ease-out-cubic',
                once: true,
                offset: 80
            });
        }

        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    function getServicesDropdownLinks() {
        return (config.services || []).map((service) => `
            <a class="nav-dropdown__link" href="${service.url}">
                <span>${service.title}</span>
            </a>
        `).join('');
    }

    function getMobileServicesLinks() {
        return (config.services || []).map((service) => `
            <a class="mobile-menu__service" href="${service.url}">
                <i data-lucide="${service.icon}" aria-hidden="true"></i>
                <span>${service.title}</span>
            </a>
        `).join('');
    }

    function initOaklineLightFaq() {
        const items = document.querySelectorAll('.oakline-faq-light__item');
        if (!items.length) return;

        items.forEach((item) => {
            const button = item.querySelector('.oakline-faq-light__button');
            const panel = item.querySelector('.oakline-faq-light__panel');

            if (!button || !panel) return;

            button.addEventListener('click', () => {
                const isOpen = button.getAttribute('aria-expanded') === 'true';

                items.forEach((otherItem) => {
                    const otherButton = otherItem.querySelector('.oakline-faq-light__button');
                    const otherPanel = otherItem.querySelector('.oakline-faq-light__panel');

                    if (!otherButton || !otherPanel) return;

                    otherButton.setAttribute('aria-expanded', 'false');
                    otherPanel.classList.remove('is-open');
                });

                if (!isOpen) {
                    button.setAttribute('aria-expanded', 'true');
                    panel.classList.add('is-open');
                }
            });
        });
    }

    function getLogoSvg() {
        return `
            <svg class="oakline-tree-logo" width="220" height="260" viewBox="0 0 640 760" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                    <path id="oaklineCrownShape" d="
                        M150 458
                        C98 458 56 417 56 366
                        C56 320 87 281 130 268
                        C121 221 150 174 195 154
                        C236 136 285 143 319 172
                        C336 114 388 77 445 82
                        C499 87 544 124 562 174
                        C606 160 656 176 682 214
                        C705 247 708 290 689 324
                        C731 342 759 382 759 430
                        C759 487 714 533 658 535
                        C642 568 606 588 568 588
                        C538 588 510 576 491 555
                        C464 586 419 598 380 581
                        C356 613 318 630 278 626
                        C237 622 203 598 189 563
                        C146 560 112 526 108 483
                        C122 477 136 470 150 458Z
                    "/>

                    <clipPath id="oaklineCrownClip">
                        <use href="#oaklineCrownShape"/>
                    </clipPath>
                </defs>

                <g transform="translate(-72 0) scale(.86)">
                    <use href="#oaklineCrownShape" fill="#079B00"/>

                    <g clip-path="url(#oaklineCrownClip)">
                        <path d="
                            M120 360
                            C118 310 154 270 203 267
                            C216 229 252 201 297 201
                            C346 201 386 234 397 278
                            C430 287 456 315 463 350
                            C466 366 463 383 456 398
                            C405 456 344 502 274 538
                            C228 562 180 552 151 522
                            C112 481 79 427 120 360Z
                        " fill="#23A91A"/>

                        <path d="
                            M442 83
                            C494 87 538 123 558 173
                            C589 164 624 168 651 187
                            C673 203 687 227 693 253
                            C689 290 670 319 639 339
                            C595 367 529 353 502 311
                            C475 268 487 218 454 180
                            C429 151 410 113 442 83Z
                        " fill="#087D0A" opacity="0.78"/>

                        <path d="
                            M102 382
                            C105 337 142 300 187 295
                            C200 258 235 232 278 232
                            C319 232 353 254 371 287
                            C358 319 331 348 303 375
                            C264 414 221 450 170 474
                            C127 494 94 459 102 382Z
                        " fill="#29AF20" opacity="0.72"/>
                    </g>

                    <use href="#oaklineCrownShape" fill="none" stroke="#080C12" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>

                    <path d="
                        M240 660
                        C270 616 285 576 288 536
                        C290 508 260 463 226 410
                        L249 396
                        L309 483
                        C319 498 342 494 345 476
                        L363 354
                        L394 357
                        L381 478
                        L429 413
                        L453 429
                        L403 505
                        C386 531 381 558 385 591
                        C389 618 402 641 422 660
                        H240Z
                    " fill="#C87500" stroke="#080C12" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>

                    <path d="
                        M344 492
                        C337 518 341 568 350 602
                        C356 626 367 647 381 660
                        H422
                        C402 641 389 618 385 591
                        C381 558 386 531 403 505
                        L453 429
                        L429 413
                        L381 478
                        L394 357
                        L378 355
                        L360 476
                        C358 485 353 491 344 492Z
                    " fill="#A86100" opacity="0.35"/>

                    <path d="M240 660H422" stroke="#080C12" stroke-width="22" stroke-linecap="round"/>
                </g>
            </svg>
        `;
    }
})();