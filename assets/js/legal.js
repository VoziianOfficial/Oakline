'use strict';

(function () {
    const config = window.SiteConfig || {};

    document.addEventListener('DOMContentLoaded', () => {
        renderLegalPage();
        refreshLibraries();
    });

    function renderLegalPage() {
        const article = document.querySelector('[data-legal-article]');
        if (!article) return;

        const pageType = document.body.dataset.legalPage || 'privacy';
        const content = getLegalContent(pageType);

        article.innerHTML = `
            <span class="legal-article__updated">
                Updated ${content.updated}
            </span>

            ${content.sections.map((section) => `
                <section class="legal-block" id="${section.id}">
                    <h2>${section.title}</h2>

                    ${section.paragraphs.map((paragraph) => `
                        <p>${paragraph}</p>
                    `).join('')}

                    ${section.list ? `
                        <ul>
                            ${section.list.map((item) => `
                                <li>${item}</li>
                            `).join('')}
                        </ul>
                    ` : ''}
                </section>
            `).join('')}

            <div class="legal-callout">
                <strong>Important platform notice</strong>
                <p>${safeText(config.legal?.disclaimer)}</p>
            </div>

            <div class="legal-contact-card">
                <a href="mailto:${safeText(config.contact?.email)}">
                    <i data-lucide="mail" aria-hidden="true"></i>
                    <span>${safeText(config.contact?.email)}</span>
                </a>

                <a href="tel:${safeText(config.contact?.phoneRaw)}">
                    <i data-lucide="phone" aria-hidden="true"></i>
                    <span>${safeText(config.contact?.phoneDisplay)}</span>
                </a>

                <span>
                    <i data-lucide="map-pin" aria-hidden="true"></i>
                    <span>${safeText(config.company?.address)}</span>
                </span>

                <span>
                    <i data-lucide="badge-check" aria-hidden="true"></i>
                    <span>${safeText(config.company?.companyId)}</span>
                </span>
            </div>
        `;
    }

    function getLegalContent(pageType) {
        const legal = config.legal || {};

        const pages = {
            privacy: {
                updated: legal.privacyUpdated || '2026',
                sections: [
                    {
                        id: 'overview',
                        title: 'Privacy overview',
                        paragraphs: [
                            'This Privacy Policy explains how Oakline may collect, use and protect information submitted through this website.',
                            'Oakline is an independent provider-matching platform. Oakline helps property owners start tree removal, trimming, stump clearing, storm cleanup and land clearing requests, but does not directly perform those services.'
                        ]
                    },
                    {
                        id: 'information',
                        title: 'Information we may collect',
                        paragraphs: [
                            'When you submit a request, Oakline may collect the information you choose to provide through forms, contact links or request fields.'
                        ],
                        list: [
                            'Name and contact details such as email address and phone number.',
                            'Property or service request details you submit in the message field.',
                            'Preferred service category, such as tree removal, emergency tree removal, trimming, stump grinding, storm cleanup or lot clearing.',
                            'Technical information such as browser type, device information and general website usage data.'
                        ]
                    },
                    {
                        id: 'use',
                        title: 'How information may be used',
                        paragraphs: [
                            'Oakline may use submitted information to organize your request, communicate with you and help route the request toward relevant provider-matching options.'
                        ],
                        list: [
                            'To respond to your request or contact inquiry.',
                            'To understand the tree, stump, storm debris or clearing situation you described.',
                            'To improve website performance, usability and request flow.',
                            'To maintain legal, safety and platform records where needed.'
                        ]
                    },
                    {
                        id: 'sharing',
                        title: 'Provider-related sharing',
                        paragraphs: [
                            'Because Oakline is a provider-matching platform, information you submit may be used to help organize possible local service options.',
                            'Third-party providers may have their own policies, terms, prices, availability and qualification standards. Users are responsible for reviewing provider details before choosing any option.'
                        ]
                    },
                    {
                        id: 'choices',
                        title: 'Your choices',
                        paragraphs: [
                            'You may choose not to submit a request through the website. You may also contact Oakline using the email listed on this page if you have questions about information you submitted.'
                        ]
                    }
                ]
            },

            terms: {
                updated: legal.termsUpdated || '2026',
                sections: [
                    {
                        id: 'overview',
                        title: 'Terms overview',
                        paragraphs: [
                            'These Terms of Service describe the general conditions for using the Oakline website and request platform.',
                            'By using the website, you understand that Oakline is an independent provider-matching platform and not a tree removal company, trimming company, stump grinding company, storm cleanup contractor or land clearing contractor.'
                        ]
                    },
                    {
                        id: 'platform-role',
                        title: 'Oakline platform role',
                        paragraphs: [
                            'Oakline helps property owners start service requests and compare potential local provider options. Oakline does not directly perform tree removal, emergency tree removal, tree trimming, stump grinding, storm cleanup, land clearing, inspections, repairs or emergency response.'
                        ],
                        list: [
                            'Oakline does not guarantee provider availability.',
                            'Oakline does not guarantee pricing, timelines or final project outcomes.',
                            'Oakline does not verify every provider detail in every location.',
                            'Oakline does not replace user review, due diligence or direct provider communication.'
                        ]
                    },
                    {
                        id: 'user-responsibility',
                        title: 'User responsibility',
                        paragraphs: [
                            'Users are responsible for submitting accurate request details and reviewing provider information before choosing any service option.'
                        ],
                        list: [
                            'Review provider qualifications, insurance, licensing and availability where applicable.',
                            'Confirm pricing, timing, scope and safety requirements directly with the provider.',
                            'Avoid entering unsafe areas or attempting hazardous tree work yourself.',
                            'For immediate danger, emergency, fire, utility or life-safety concerns, contact local emergency services or the relevant utility provider.'
                        ]
                    },
                    {
                        id: 'third-parties',
                        title: 'Third-party providers',
                        paragraphs: [
                            'Third-party providers may operate under their own terms, privacy policies, service agreements and pricing rules.',
                            'Oakline is not responsible for the acts, omissions, representations, pricing or service quality of third-party providers.'
                        ]
                    },
                    {
                        id: 'website-use',
                        title: 'Website use',
                        paragraphs: [
                            'You agree not to misuse the website, submit false information, interfere with website functionality or attempt unauthorized access to any system connected with the website.'
                        ]
                    }
                ]
            },

            cookies: {
                updated: legal.cookiesUpdated || '2026',
                sections: [
                    {
                        id: 'overview',
                        title: 'Cookie overview',
                        paragraphs: [
                            'This Cookie Policy explains how Oakline may use cookies and similar technologies on this website.',
                            'Cookies help the site remember preferences, improve performance and understand basic usage patterns.'
                        ]
                    },
                    {
                        id: 'types',
                        title: 'Types of cookies',
                        paragraphs: [
                            'Oakline may use different categories of cookies depending on website functionality and user choices.'
                        ],
                        list: [
                            'Essential cookies that support basic website functionality and security.',
                            'Preference cookies that remember choices such as cookie consent.',
                            'Analytics cookies that may help understand how visitors use the website.',
                            'Performance cookies that may help improve loading, layout and browsing quality.'
                        ]
                    },
                    {
                        id: 'consent',
                        title: 'Cookie consent',
                        paragraphs: [
                            'The cookie banner allows visitors to accept or decline optional cookie use. Your choice is stored locally so the banner does not appear on every page after a decision.',
                            'You may clear browser storage or cookies through your browser settings if you want to reset your choice.'
                        ]
                    },
                    {
                        id: 'third-party',
                        title: 'Third-party tools',
                        paragraphs: [
                            'This website may use third-party libraries or tools for icons, animations, sliders or website functionality. These tools may load assets from external sources depending on implementation.'
                        ]
                    },
                    {
                        id: 'control',
                        title: 'Managing cookies',
                        paragraphs: [
                            'Most browsers allow you to block, delete or manage cookies through browser settings. Some website features may not work as expected if essential cookies or local storage are disabled.'
                        ]
                    }
                ]
            }
        };

        return pages[pageType] || pages.privacy;
    }

    function safeText(value, fallback = '') {
        return typeof value === 'string' && value.trim() ? value : fallback;
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