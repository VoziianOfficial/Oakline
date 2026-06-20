'use strict';

window.SiteConfig = {
    company: {
        name: 'Oakline',
        nameFirst: 'Oak',
        nameAccent: 'line',
        companyId: 'OKL-TREE-2048',
        address: 'USA Service Area',
    },

    contact: {
        phoneRaw: '+18885550148',
        phoneDisplay: '(888) 555-0148',
        phoneButtonText: 'Call Oakline',
        email: 'hello@oakline.com',
        supportHours: 'Mon–Fri, 8:00 AM–7:00 PM'
    },

    footer: {
        description:
            'Oakline is an independent Tree Removal provider-matching platform that helps property owners compare local service options for tree removal, emergency tree help, trimming, stump clearing, storm cleanup and land clearing.',
        copyright: 'All rights reserved.'
    },

    legal: {
        disclaimer:
            'Disclaimer: Oakline is an independent provider-matching platform. Oakline does not directly perform tree removal, trimming, stump grinding, storm cleanup, land clearing, inspections, repairs or emergency services. Service availability, provider qualifications, pricing and timelines vary by location and provider. Users are responsible for reviewing provider details and choosing the option that fits their needs.',
        privacyUpdated: '2026',
        termsUpdated: '2026',
        cookiesUpdated: '2026'
    },

    navigation: [
        {
            label: 'Home',
            url: 'index.html'
        },
        {
            label: 'About',
            url: 'about.html'
        },
        {
            label: 'Services',
            url: 'all-services.html'
        },
        {
            label: 'All Services',
            url: 'all-services.html'
        },
        {
            label: 'Contact',
            url: 'contact.html'
        }
    ],

    services: [
        {
            title: 'Tree Removal',
            url: 'tree-removal.html',
            icon: 'tree-pine',
            image: 'assets/images/services/service-tree-removal.jpg',
            heroImage: 'assets/images/services/service-tree-removal.jpg',
            overviewImage: 'assets/images/home/problem-leaning-tree.jpg',
            relatedImage: 'assets/images/home/problem-fallen-tree.jpg',
            shortText: 'Careful removal for dead, leaning or unwanted trees.',
            previewText:
                'For dead, leaning, damaged or unwanted trees that need careful removal around homes, yards and structures.',
            heroText:
                'Start a tree removal request for dead, leaning, damaged or unwanted trees and compare local service options for safer property clearing.',
            overviewTitle: 'Clearer next steps for trees that need to come down.',
            overviewText:
                'Oakline helps property owners start tree removal requests when a tree is dead, leaning, damaged, unwanted or positioned too close to important outdoor areas. The platform helps organize the situation so users can compare local service options with more confidence.'
        },
        {
            title: 'Emergency Tree Removal',
            url: 'emergency-tree-removal.html',
            icon: 'siren',
            image: 'assets/images/service-pages/related-emergency-tree-removal.jpg',
            heroImage: 'assets/images/home/problem-fallen-tree.jpg',
            overviewImage: 'assets/images/home/problem-storm-branches.jpg',
            relatedImage: 'assets/images/service-pages/related-emergency-tree-removal.jpg',
            shortText: 'Urgent help for fallen trees and hazardous limbs.',
            previewText:
                'Fast request support for fallen trees, dangerous limbs and urgent storm-related tree hazards.',
            heroText:
                'Start an urgent request for fallen trees, hazardous limbs or storm-related tree risks that need fast attention around your property.',
            overviewTitle: 'Urgent tree concerns need a clear request path.',
            overviewText:
                'Oakline helps property owners start emergency tree removal requests for fallen trees, dangerous limbs, blocked access areas and urgent storm-related tree hazards. The goal is to help organize the request and move toward available local service options.'
        },
        {
            title: 'Tree Trimming & Pruning',
            url: 'tree-trimming-pruning.html',
            icon: 'scissors',
            image: 'assets/images/services/service-tree-trimming-pruning.jpg',
            heroImage: 'assets/images/services/service-tree-trimming-pruning.jpg',
            overviewImage: 'assets/images/home/problem-overgrown-yard.jpg',
            relatedImage: 'assets/images/home/problem-leaning-tree.jpg',
            shortText: 'Trim branches, improve clearance and reduce risk.',
            previewText:
                'Shape overgrown branches, reduce risk, improve clearance and keep trees healthier around the property.',
            heroText:
                'Explore trimming and pruning request options for overgrown branches, clearance issues, tree shape and safer outdoor spaces.',
            overviewTitle: 'Better branch control around the property.',
            overviewText:
                'Oakline helps property owners start trimming and pruning requests for overgrown limbs, low clearance, crowded branches and trees that need shaping. Users can better understand the category before comparing possible local provider options.'
        },
        {
            title: 'Stump Grinding & Removal',
            url: 'stump-grinding-removal.html',
            icon: 'drill',
            image: 'assets/images/services/service-stump-grinding-removal.jpg',
            heroImage: 'assets/images/services/service-stump-grinding-removal.jpg',
            overviewImage: 'assets/images/home/problem-stump-roots.jpg',
            relatedImage: 'assets/images/home/problem-stump-roots.jpg',
            shortText: 'Clear old stumps, roots and leftover tree bases.',
            previewText:
                'Clear old stumps, roots and leftover tree bases so the yard is safer and easier to reuse.',
            heroText:
                'Start a stump removal request for old stumps, exposed roots and leftover tree bases that make your yard harder to use.',
            overviewTitle: 'Make the yard easier to reuse after tree removal.',
            overviewText:
                'Oakline helps property owners start stump grinding and stump removal requests for leftover bases, old stumps, exposed roots and hard-to-use yard areas. The platform helps organize the need before moving toward local service options.'
        },
        {
            title: 'Storm Damage Cleanup',
            url: 'storm-damage-cleanup.html',
            icon: 'cloud-lightning',
            image: 'assets/images/services/service-storm-damage-cleanup.jpg',
            heroImage: 'assets/images/services/service-storm-damage-cleanup.jpg',
            overviewImage: 'assets/images/home/problem-storm-branches.jpg',
            relatedImage: 'assets/images/home/problem-fallen-tree.jpg',
            shortText: 'Clean up broken branches, debris and storm impact.',
            previewText:
                'Remove broken limbs, scattered branches and tree debris after heavy wind, rain or storm impact.',
            heroText:
                'Start a cleanup request for broken branches, fallen limbs, scattered debris and tree damage after heavy wind, rain or storms.',
            overviewTitle: 'Storm debris can be easier to explain with the right request.',
            overviewText:
                'Oakline helps property owners start storm damage cleanup requests for fallen limbs, broken branches, scattered debris and blocked outdoor areas after heavy weather. Users can describe the situation and review the right service category.'
        },
        {
            title: 'Land & Lot Clearing',
            url: 'land-lot-clearing.html',
            icon: 'tractor',
            image: 'assets/images/services/service-land-lot-clearing.jpg',
            heroImage: 'assets/images/services/service-land-lot-clearing.jpg',
            overviewImage: 'assets/images/home/problem-lot-clearing.jpg',
            relatedImage: 'assets/images/home/problem-overgrown-yard.jpg',
            shortText: 'Prepare overgrown lots, yards and outdoor spaces.',
            previewText:
                'Prepare larger areas, lots, backyards and overgrown spaces for new use, access or improvement.',
            heroText:
                'Explore land and lot clearing request options for overgrown spaces, outdoor access, yard preparation and larger property cleanup.',
            overviewTitle: 'A cleaner starting point for overgrown outdoor spaces.',
            overviewText:
                'Oakline helps property owners start land and lot clearing requests for overgrown yards, larger outdoor areas, brush-heavy spaces and lots that need clearer access before the next project or improvement.'
        }
    ],

    serviceOptions: [
        'Tree Removal',
        'Emergency Tree Removal',
        'Tree Trimming & Pruning',
        'Stump Grinding & Removal',
        'Storm Damage Cleanup',
        'Land & Lot Clearing',
        'Not Sure Yet'
    ],

    relatedServices: {
        'tree-removal.html': [
            'Emergency Tree Removal',
            'Tree Trimming & Pruning',
            'Stump Grinding & Removal'
        ],
        'emergency-tree-removal.html': [
            'Tree Removal',
            'Storm Damage Cleanup',
            'Land & Lot Clearing'
        ],
        'tree-trimming-pruning.html': [
            'Tree Removal',
            'Stump Grinding & Removal',
            'Land & Lot Clearing'
        ],
        'stump-grinding-removal.html': [
            'Tree Removal',
            'Tree Trimming & Pruning',
            'Land & Lot Clearing'
        ],
        'storm-damage-cleanup.html': [
            'Emergency Tree Removal',
            'Tree Removal',
            'Land & Lot Clearing'
        ],
        'land-lot-clearing.html': [
            'Tree Removal',
            'Stump Grinding & Removal',
            'Storm Damage Cleanup'
        ]
    },

    testimonials: [
        {
            name: 'Megan R.',
            type: 'Tree removal request',
            text:
                'Oakline made it easier to understand what kind of tree removal help we needed. The request process felt clear, and we could compare options without calling around all day.'
        },
        {
            name: 'Daniel P.',
            type: 'Storm cleanup request',
            text:
                'After a storm left branches across our yard, Oakline helped us start the right cleanup request quickly. The process was simple and easy to follow.'
        },
        {
            name: 'Laura M.',
            type: 'Stump removal request',
            text:
                'We had an old stump that made the yard hard to use. Oakline helped us find clear next steps for stump grinding and removal options.'
        },
        {
            name: 'Chris W.',
            type: 'Hazardous tree concern',
            text:
                'The tree near our driveway was leaning and we were not sure what to do first. Oakline helped organize the request so we could review service options with more confidence.'
        },
        {
            name: 'Amanda S.',
            type: 'Tree trimming request',
            text:
                'I liked that the information was straightforward. No confusing process, just a clear way to start a trimming request and compare possible local help.'
        },
        {
            name: 'Robert H.',
            type: 'Lot clearing request',
            text:
                'Our lot was overgrown and we needed clearing before planning the next step. Oakline helped us start the request in a clean and organized way.'
        }
    ],

    faq: {
        about: [
            {
                question: 'Is Oakline a tree removal company?',
                answer:
                    'Oakline is a service request and provider-matching platform. It helps property owners start tree removal and outdoor clearing requests, then compare available local service options.'
            },
            {
                question: 'What tree services can I request?',
                answer:
                    'You can start requests for tree removal, emergency tree removal, trimming and pruning, stump grinding, storm damage cleanup, and land or lot clearing.'
            },
            {
                question: 'Can I request help after a storm?',
                answer:
                    'Yes. Oakline can help you start a storm cleanup request for fallen trees, broken limbs, blocked access areas and scattered tree debris.'
            },
            {
                question: 'Do I have to choose the first provider?',
                answer:
                    'No. The goal is to give you clearer options so you can review details and choose the provider that fits your property needs.'
            },
            {
                question: 'Can I request stump removal separately?',
                answer:
                    'Yes. Stump grinding and stump removal can be requested as a separate service if the tree has already been removed or the stump is old.'
            },
            {
                question: 'How do I start?',
                answer:
                    'Use the request form or contact button, share the tree or yard concern, and Oakline helps organize the next step toward matching service options.'
            }
        ],

        services: [
            {
                question: 'Which service should I choose for a risky tree?',
                answer:
                    'For dead, leaning, damaged or unwanted trees, start with Tree Removal. If the tree has already fallen or creates urgent risk, Emergency Tree Removal may fit better.'
            },
            {
                question: 'What is the difference between trimming and removal?',
                answer:
                    'Tree Trimming & Pruning is for branches, clearance and shape. Tree Removal is for removing the full tree when it is unsafe, dead, damaged or no longer wanted.'
            },
            {
                question: 'Can stump removal be requested separately?',
                answer:
                    'Yes. Stump Grinding & Removal can be requested on its own if a tree was already removed or an old stump is still in the yard.'
            },
            {
                question: 'Which service fits storm damage?',
                answer:
                    'Storm Damage Cleanup is best for broken limbs, fallen branches, scattered debris, blocked access areas and outdoor cleanup after heavy weather.'
            },
            {
                question: 'What is land and lot clearing for?',
                answer:
                    'Land & Lot Clearing is for larger overgrown areas, outdoor spaces, lots and yards that need clearing before access, improvement or future use.'
            },
            {
                question: 'Can I compare more than one service option?',
                answer:
                    'Yes. Oakline helps property owners start clear requests and review service categories so they can compare local provider options before choosing the next step.'
            }
        ]
    },

    cta: {
        footer: {
            image: 'assets/images/cta/footer-cta-logs.jpg',
            title: 'Need help choosing the right tree service?',
            text:
                'Start a clear request and compare local provider options through Oakline.',
            buttonText: 'Start Your Request',
            buttonUrl: 'contact.html#contact-form'
        },
        service: {
            image: 'assets/images/cta/footer-cta-logs.jpg',
            titlePrefix: 'Ready to start your',
            titleSuffix: 'request?',
            text:
                'Share the situation and Oakline will help organize the next step toward local service options.',
            buttonText: 'Start Your Request',
            buttonUrl: 'contact.html#contact-form'
        }
    },

    images: {
        homeHero: 'assets/images/home/hero-log-background.jpg',
        homeAbout: 'assets/images/home/about-forestry-machine.jpg',
        homeCta: 'assets/images/cta/footer-cta-logs.jpg',
        aboutHero: 'assets/images/about/about-hero.jpg',
        contactHero: 'assets/images/contact/contact-hero.jpg',
        contactSplit: 'assets/images/contact/contact-split-photo.jpg',
        allServicesHero: 'assets/images/services/all-services-hero.jpg'
    }
};
