(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{758:function(t,s,a){"use strict";a.r(s);var e=a(17),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍 "),a("GitHubLink",{attrs:{repo:"vuepress-reco/vuepress-plugin-comments/"}})],1),t._v(" "),a("p",[t._v("Comments plugin for vuepress-theme-reco or other vuepress theme.")]),t._v(" "),a("h3",{attrs:{id:"名字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名字"}},[t._v("#")]),t._v(" 名字")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("As plugin")]),t._v(": "),a("code",[t._v("@vuepress-reco/vuepress-plugin-comments")])]),t._v(" "),a("li",[a("strong",[t._v("As component")]),t._v(": "),a("code",[t._v("Comments (评论)")]),t._v(" / "),a("code",[t._v("AccessNumber (使用 Valine 时的访问量)")]),t._v("（主题开发时使用）")])]),t._v(" "),a("h2",{attrs:{id:"option-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-api"}},[t._v("#")]),t._v(" Option API")]),t._v(" "),a("p",[t._v("组件会在 "),a("code",[t._v("$themeConfig")]),t._v(" 注入一个参数 "),a("code",[t._v("commentsSolution")]),t._v("，如果使用 "),a("code",[t._v("Valine")]),t._v("，其值为 "),a("code",[t._v("valine")]),t._v("，如果使用 "),a("code",[t._v("Vssue")]),t._v("，其值为 "),a("code",[t._v("vssue")]),t._v("，可以使用这个参数来主题中做差异化处理，比如是否显示阅读数量。")]),t._v(" "),a("h3",{attrs:{id:"valine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#valine"}},[t._v("#")]),t._v(" Valine")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reco'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    valineConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      appId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your appId")]),t._v("\n      appKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your appKey")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("或者：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reco'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress-reco/comments'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    solution"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'valine'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      appId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your appId")]),t._v("\n      appKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your appKey")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"vssue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vssue"}},[t._v("#")]),t._v(" Vssue")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reco'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vssueConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      platform"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'github'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      owner"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OWNER_OF_REPO'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NAME_OF_REPO'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      clientId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YOUR_CLIENT_ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      clientSecret"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YOUR_CLIENT_SECRET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("或者：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reco'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress-reco/comments'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    solution"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vssue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-theme-reco'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      platform"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'github'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      owner"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OWNER_OF_REPO'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NAME_OF_REPO'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      clientId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YOUR_CLIENT_ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      clientSecret"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YOUR_CLIENT_SECRET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[a("code",[t._v("options")]),t._v(" 详解：")])]),t._v(" "),a("ul",[a("li",[t._v("title: 在这里设置当前页面的 "),a("code",[t._v("Issue")]),t._v(" 标题")]),t._v(" "),a("li",[t._v("platform: 支持的代码托管平台")]),t._v(" "),a("li",[t._v("owner: 对应 "),a("code",[t._v("repository")]),t._v(" 的拥有者帐号或者团队")]),t._v(" "),a("li",[t._v("repo: 用来存储评论的 repository")]),t._v(" "),a("li",[t._v("clientId: "),a("code",[t._v("OAuth App")]),t._v(" 的 "),a("code",[t._v("client id")])]),t._v(" "),a("li",[t._v("clientSecret: "),a("code",[t._v("OAuth App")]),t._v(" 的 "),a("code",[t._v("client secret")]),t._v("（只有在使用某些平台时需要）")])]),t._v(" "),a("p",[a("strong",[a("code",[t._v("platform")]),t._v(" 详解（点击查看"),a("a",{attrs:{href:"https://vssue.js.org/zh/guide/supported-platforms.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("支持的代码托管平台"),a("OutboundLink")],1),t._v("）：")])]),t._v(" "),a("ul",[a("li",[t._v("github: "),a("code",[t._v("@vssue/api-github-v3")])]),t._v(" "),a("li",[t._v("github-v4: "),a("code",[t._v("@vssue/api-github-v4")])]),t._v(" "),a("li",[t._v("gitlab: "),a("code",[t._v("@vssue/api-gitlab-v4")])]),t._v(" "),a("li",[t._v("bitbucket: "),a("code",[t._v("@vssue/api-bitbucket-v2")])]),t._v(" "),a("li",[t._v("gitee: "),a("code",[t._v("@vssue/api-gitee-v5")])]),t._v(" "),a("li")]),t._v(" "),a("h3",{attrs:{id:"accessnumber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessnumber"}},[t._v("#")]),t._v(" AccessNumber")]),t._v(" "),a("blockquote",[a("p",[t._v("仅在 使用 "),a("code",[t._v("Valine")]),t._v(" 时才有效。")])]),t._v(" "),a("h4",{attrs:{id:"idval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idval"}},[t._v("#")]),t._v(" idVal")]),t._v(" "),a("ul",[a("li",[t._v("description: valine 记录浏览数的 id 值")]),t._v(" "),a("li",[t._v("type: "),a("code",[t._v("String")])])]),t._v(" "),a("h4",{attrs:{id:"numstyle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#numstyle"}},[t._v("#")]),t._v(" numStyle")]),t._v(" "),a("ul",[a("li",[t._v("description: 浏览量的数字样式（用于调整不同位置的显示风格）")]),t._v(" "),a("li",[t._v("type: "),a("code",[t._v("Object")])])]),t._v(" "),a("h4",{attrs:{id:"flagtitle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flagtitle"}},[t._v("#")]),t._v(" flagTitle")]),t._v(" "),a("ul",[a("li",[t._v("description: 文章标题")]),t._v(" "),a("li",[t._v("type: "),a("code",[t._v("String")])])]),t._v(" "),a("h2",{attrs:{id:"贡献者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贡献者"}},[t._v("#")]),t._v(" 贡献者")]),t._v(" "),a("Contributors",{attrs:{user:"vuepress-reco",repo:"vuepress-plugin-comments"}})],1)}),[],!1,null,null,null);s.default=n.exports}}]);