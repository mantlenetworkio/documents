module.exports = {
    theme: 'cosmos',
    title: 'Mantle Documentation',
    locales: {
        '/': {
            lang: 'en-US'
        },
    },
    markdown: {
        extendMarkdown: (md) => {
            md.use(require("markdown-it-katex"));
        },
    },
    head: [
        [
            "link",
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css",
            },
        ],
        [
            "link",
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css",
            },
        ],
    ],
    base: process.env.VUEPRESS_BASE || '/',
    plugins: [
        'vuepress-plugin-element-tabs'
    ],
    head: [
        // ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
        ['link', { rel: "manifest", href: "/site.webmanifest" }],
        ['meta', { name: "msapplication-TileColor", content: "#2e3148" }],
        ['meta', { name: "theme-color", content: "#ffffff" }],
        ['link', { rel: "icon", type: "image/svg", href: "/favicon.svg" }],
        // ['link', { rel: "apple-touch-icon-precomposed", href: "/apple-touch-icon-precomposed.png" }],
    ],
    themeConfig: {
        repo: 'bitnetworkio/mantle',
        docsRepo: 'bitnetworkio/documents',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinks: true,
        custom: true,
        project: {
            name: 'Mantle'
        },
        logo: {
            src: '/logo.svg',
        },
        algolia: {
            id: 'BH4D9OD16A',
            key: 'a5d55fe5f540cc3bd28fa2c72f2b5bd8',
            index: 'mantle',
        },
        topbar: {
            banner: false
        },
        sidebar: {
            auto: false,
            nav: [{
                title: 'Introducing Mantle',
                children: [
                    {
                        title: 'Basic Concepts',
                        directory: false,
                        path: '/introduction/basic-concepts/'
                    },{
                        title: 'What is Mantle',
                        directory: false,
                        path: '/introduction/what-is-mantle'
                    },{
                        title: 'Development Roadmap' ,
                        directory: false,
                        path: '/introduction/development-roadmap'
                    },{
                        title: 'Get Involved',
                        directory: false,
                        path: '/introduction/get-involved'
                   }
                ]
            },{
                title: 'Getting Started',
                children: [
                    {
                        title: 'How to get started',
                        directory: false,
                        path: '/guides/get-start'
                    },
                    {
                        title: 'Bridging',
                        directory: false,
                        path: '/guides/bridging'
                    }
                ]
            },{
                title: 'Network Architecture',
                children: [
                    {
                        title: "How Mantle Works",
                        directory: false,
                        path: '/architecture/how-work'
                    }
                ]
            },
            {
                title: 'Tools And SDK',
                children:[
                    {
                        title: 'Network Faucets',
                        directory: false,
                        path: '/developers/network-faucets'
                    },{
                        title: 'Block Explorers',
                        directory: false,
                        path: '/developers/block-explorers'
                    },{
                        title: 'Building on Mantle',
                        directory: true,
                        path: '/developers/building'
                    },{
                        title: 'SDK',
                        directory: false,
                        path: '/developers/sdk'
                    }
                ]
            },
            {
                title: 'Validators',
                children: [
                    {
                        title: 'Validator Overview',
                        directory: false,
                        path: '/protocol/validator'
                    },{
                        title: 'Core Concepts',
                        directory: true,
                        path: '/protocol/concepts'
                    },{
                        title: 'Running a Node',
                        directory: true,
                        path: '/protocol/run-node'
                    }
                ]
            },
            
            ],
        },
        footer: {
            logo: '/logo.svg',
            textLink: {
                text: 'mantle',
                url: ''
            },
            services: [
                {
                    service: 'github',
                    url: 'https://github.com/bitnetworkio/mantle'
                },
            ],
            smallprint: 'This website is maintained by Mantle'
        },
        versions: [{
            "label": "main",
            "key": "main"
        },],
    },
};
