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
                title: 'Getting Started',
                children: [
                    {
                    title: 'Introduction',
                    directory: false,
                    path: '/guides/intro'
                },
                {
                    title: 'Public Mantle chains',
                    directory: false,
                    path: '/guides/public-chains'
                },
                {
                    title: 'Runing a Node',
                    directory: false,
                    path: '/guides/runing-a-node'
                }
                ]
            },{
                title: 'How Mantle works',
                children: []
            },
            {
                title: 'Developer Docs',
                children:[
                    {
                        title: 'Building on Mantle',
                        directory: true,
                        path: '/developers/building'

                    },
                    {
                        title: 'Bridging L1 and L2',
                        directory: true,
                        path: '/developers/bridging'

                    },
                    {
                        title: 'SDK',
                        directory: true,
                        path: '/developers/sdk'
                    },
                ]
            }
            
            ]
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
    }
};
