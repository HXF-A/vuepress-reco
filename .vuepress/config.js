module.exports = {
  "title": "博客",
  "base": "/vuepress-reco/",
  "description": "HXF博客",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "plugins": [
    ['@vuepress-reco/comments', {
    "solution": 'vssue',
    "options": {
      "title": 'vuepress-theme-reco',
      "platform": 'github-v4',
      "owner": 'HXF-A',
      "repo": 'vuepress-reco',
      "clientId": '2de4084bd53f1f7229f8',
      "clientSecret": '4b87b6be76f4425dc1dd4be8706b8bf6d3ce37a3',
    }
  }],
  ['@vuepress-reco/vuepress-plugin-bgm-player', {
      "audios": [
        // 网络文件示例
        {
          "name": '강남역 4번 출구',
          "artist": 'Plastic / Fallin` Dild',
          "url": 'https://assets.smallsunnyfox.com/music/2.mp3',
          "cover": 'https://assets.smallsunnyfox.com/music/2.jpg'
        },
        {
          "name": '用胳膊当枕头',
          "artist": '최낙타',
          "url": 'https://assets.smallsunnyfox.com/music/3.mp3',
          "cover": 'https://assets.smallsunnyfox.com/music/3.jpg'
        }
      ],
      "position" : {
        "right": '10px',
        "top": '100px',
        "z-index": '999999'
      },
      "autoShrink" : 'true',
      "floatPosition" : 'right',
      "floatStyle" : { 
        "top": '128px',
        "z-index": '999999'
      }
  }]
],
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/HXF-A",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "HXF",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}