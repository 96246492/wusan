
const config = require("./index.json");

module.exports = {
    title: 'Ten Petal Moon',
    description: 'Ten Petal Moon 个人网站',
    base: config.base,
    themeConfig: {
        nav: [
            {
                text: '首页',
                link: '/'
            }, {
                text: '关于我',
                link: '/about/index.md'
            }, {
                text: "留言板",
                link: '/message/index.md'
            }
        ],
        lastUpdated: true, // string | boolean
        siteTitle: 'Ten Petal Moon',
        algolia: {
            apiKey: 'your_api_key',
            indexName: 'index_name'
        }
    }
}



