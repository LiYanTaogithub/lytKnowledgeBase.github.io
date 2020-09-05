module.exports = {
    title: 'leahtao\'s blog',
    description: 'leahtao 的前端知识库',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', {rel: 'icon', href: ''}], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        // 导航栏配置
        nav: [ 
            {
                text: '前端知识库', 
                items: [
                    {text: 'Javascript', link: '/blog/frontend/js'},
                    {text: 'Vue', link: '/frontend/vue'},
                    {text: 'React', link: '/frontend/react'},
                    {text: 'Nodejs', link: '/frontend/node'},
                    {text: '计算机网路', link: '/frontend/network/'},
                    {text: '浏览器原理与实践', link: '/frontend/compiler/'},
                ]
            },
            {
                text: '数据结构与算法',
                items: [
                    {text: '数据结构', link: '/algorithmStructure/dataStructure/'},
                    {text: '算法', link: '/algorithmStructure/algorithm/'},
                    {text: '刷题', link: '/algorithmStructure/solveProblem/'},
                ]
            },
            {text: 'github', link: 'https://github.com/LiYanTaogithub/lytKnowledgeBase.github.io'}
        ],
        // 侧边栏配置
        sidebar: [
            {
                title: 'Javascript',  // required
                // path: '/frontend/js/',       // optional, which should be a absolute path.
                collapsable: true,                 // optional, defaults to true
                sidebarDepth: 1,                   // optional, defaults to 1
                // displayAllHeaders: true, // 默认值：false
                children: [
                    {
                        title: 'this',
                        path: '/blog/frontend/js/this.md',
                    },
                    {
                        title: '高阶函数',
                        path: '/blog/frontend/js/高阶函数.md',
                    },
                    {
                        title: '防抖节流',
                        path: '/blog/frontend/js/防抖节流.md',
                    },
                ]
            }
            // '/js/':{
            //     title: 'Javascript',  // required
            //     // path: '/frontend/js/',       // optional, which should be a absolute path.
            //     collapsable: true,                 // optional, defaults to true
            //     sidebarDepth: 1,                   // optional, defaults to 1
            //     // displayAllHeaders: true, // 默认值：false
            //     children: [
            //         'this.md',
            //         '高阶函数.md',
            //         '防抖节流.md',
            //     ]
            // },
            // '/vue/': [{
            //     title: 'vue全家桶',  // required
            //     // path: '/frontend/vue/',       // optional, which should be a absolute path.
            //     collapsable: true,                 // optional, defaults to true
            //     sidebarDepth: 1,                   // optional, defaults to 1
            //     children: [
            //         './frontend/vue/1',
            //     ]
            // }],
            // '/react/': [{
            //     title: 'react全家桶',  // required
            //     // path: '/frontend/react/',       // optional, which should be a absolute path.
            //     collapsable: true,                 // optional, defaults to true
            //     sidebarDepth: 1,                   // optional, defaults to 1
            //     children: [
            //         './frontend/react/1',
            //     ]
            // }],
            // '/node/': [{
            //     title: 'nodeJs',  // required
            //     // path: '/frontend/node/',       // optional, which should be a absolute path.
            //     collapsable: true,                 // optional, defaults to true
            //     sidebarDepth: 1,                   // optional, defaults to 1
            //     children: [
            //         './frontend/node/1',
            //     ]
            // }],
            // '/network/': [{
            //     title: 'network',  // required
            //     // path: '/frontend/network/',       // optional, which should be a absolute path.
            //     collapsable: true,                 // optional, defaults to true
            //     sidebarDepth: 1,                   // optional, defaults to 1
            //     children: [
            //         './frontend/network/1',
            //     ]
            // }],
            // '/compiler/': [{
            //     title: '编译模式',  // required
            //     // path: '/frontend/compiler/',       // optional, which should be a absolute path.
            //     collapsable: true,                 // optional, defaults to true
            //     sidebarDepth: 1,                   // optional, defaults to 1
            //     children: [
            //         './frontend/compiler/1',
            //     ]
            // }],
            // './algorithmStructure/dataStructure/': [{
            //     title: '数据结构',  // required
            //     // path: '/algorithmStructure/dataStructure/',       // optional, which should be a absolute path.
            //     collapsable: true,                 // optional, defaults to true
            //     sidebarDepth: 1,                   // optional, defaults to 1
            //     children: [
            //         './algorithmStructure/dataStructure/1',
            //     ]
            // }],
            // './algorithmStructure/algorithm/': [{
            //     title: '算法',  // required
            //     path: './algorithmStructure/algorithm/',       // optional, which should be a absolute path.
            //     collapsable: true,                 // optional, defaults to true
            //     sidebarDepth: 1,                   // optional, defaults to 1
            //     children: [
            //         './algorithmStructure/algorithm/1',
            //     ]
            // }],
            // './algorithmStructure/solveProblem/': [{
            //     title: '刷题汇总',  // required
            //     // path: '/algorithmStructure/solveProblem/',       // optional, which should be a absolute path.
            //     collapsable: true,                 // optional, defaults to true
            //     sidebarDepth: 1,                   // optional, defaults to 1
            //     children: [
            //         './algorithmStructure/solveProblem/1',
            //     ]
            // }],
        ]
        //   sidebarDepth: 3, // 侧边栏显示2级
    }
}