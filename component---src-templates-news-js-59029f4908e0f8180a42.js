(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{152:function(n,e,t){"use strict";t.r(e),t.d(e,"pageQuery",function(){return m});t(36);var r=t(157),a=t.n(r),i=t(0),o=t.n(i),c=t(166),u=t.n(c),l=t(158),d=t(164);function s(){var n=a()(["\n    display: 'block';\n  "]);return s=function(){return n},n}e.default=function(n){var e=l.a.p(s()),t=u()(n,"data.contentfulNews"),r=u()(n,"data.site.siteMetadata.title");return o.a.createElement(d.a,Object.assign({},n,t,{siteTitle:r}),o.a.createElement(e,null,t.publishDate),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.body.childMarkdownRemark.html}}))};var m="1920353291"},159:function(n,e,t){"use strict";t.d(e,"b",function(){return s});var r=t(0),a=t.n(r),i=t(5),o=t.n(i),c=t(35),u=t.n(c);t.d(e,"a",function(){return u.a});t(160);var l=a.a.createContext({});function d(n){var e=n.staticQueryData,t=n.data,r=n.query,i=n.render,o=t?t.data:e[r]&&e[r].data;return a.a.createElement(a.a.Fragment,null,o&&i(o),!o&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(n){var e=n.data,t=n.query,r=n.render,i=n.children;return a.a.createElement(l.Consumer,null,function(n){return a.a.createElement(d,{data:e,query:t,render:r||i,staticQueryData:n})})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},160:function(n,e,t){var r;n.exports=(r=t(161))&&r.default||r},161:function(n,e,t){"use strict";t.r(e);t(36);var r=t(0),a=t.n(r),i=t(5),o=t.n(i),c=t(61),u=function(n){var e=n.location,t=n.pageResources;return t?a.a.createElement(c.a,Object.assign({location:e,pageResources:t},t.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},162:function(n){n.exports={data:{site:{siteMetadata:{title:"Burbhouse",logo:"/images/logo.png"}}}}},163:function(n){n.exports={primary:{"/":"Home","/events/":"Events","/news/":"News","/contact/":"Contact"},secondary:{"/":"Home","/board/":"Board","/projects/":"Projects","/events/":"Events","/news/":"News","/contact/":"Contact"}}},164:function(n,e,t){"use strict";var r=t(157),a=t.n(r),i=t(0),o=t.n(i),c=t(168),u=t.n(c),l=t(158),d=(t(36),t(90),t(60),t(37),t(169),t(159)),s=t(170),m=t(162);function f(){var n=a()(["\n    height: 70px;\n    width: auto;\n    @media (max-width: 768px) {\n      margin-left: -10px;\n      height: 60px;\n    }\n  "]);return f=function(){return n},n}function v(){var n=a()(["\n    display: inline-flex;\n    flex-grow: 1;\n    align-items: center;\n    font-size: var(--font-size-xl);\n    margin-left: 1em;\n    text-decoration: none;\n  "]);return v=function(){return n},n}var p=function(n){var e=Object(l.a)(d.a)(v()),t=l.a.img(f());return o.a.createElement(d.b,{query:"2005248036",render:function(n){return o.a.createElement(e,{to:"/"},o.a.createElement(t,{alt:n.site.siteMetadata.title,src:n.site.siteMetadata.logo}))},data:m})};function g(){var n=a()(["\n    color: var(--color-menu-link-primary);\n    text-decoration: none;\n    &:hover {\n      color: var(--color-menu-link-primary-hover);\n      border-bottom: solid 2px var(--color-menu-link-primary-hover);\n      margin-bottom: -2px;\n    }\n  "]);return g=function(){return n},n}function h(){var n=a()(["\n    display: inline-flex;\n    align-items: center;\n    margin: 0 1em;\n  "]);return h=function(){return n},n}function y(){var n=a()(["\n    display: inline-flex;\n    justify-content: center;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    height: 15vh;\n    max-height: 90px;\n    font-size: var(--font-size-lg);\n    @media (max-width: 768px) {\n      visibility: hidden;\n    }\n  "]);return y=function(){return n},n}function E(){var n=a()(["\n    display: flex;\n    position: fixed;\n    z-index: 1;\n    width: 90vw;\n    background: var(--color-header);\n    padding-right: 10vw;\n  "]);return E=function(){return n},n}var x=function(n){var e=l.a.header(E()),r=l.a.ul(y()),a=l.a.li(h()),i=Object(l.a)(d.a)(g()),c=t(163);try{c=t(!function(){var n=new Error("Cannot find module '../../site/menu.json'");throw n.code="MODULE_NOT_FOUND",n}())}catch(u){"MODULE_NOT_FOUND"===u.code&&console.log("Site menu not found.")}return o.a.createElement("div",null,o.a.createElement(e,null,o.a.createElement(p,null),o.a.createElement(r,null,Object.keys(c.primary).map(function(n){return o.a.createElement(a,{key:"primary_"+n},o.a.createElement(i,{to:n},c.primary[n]))}))),o.a.createElement(s.slide,Object.assign({right:!0},n),Object.keys(c.secondary).map(function(n){return o.a.createElement(d.a,{key:"secondary_"+n,to:n},c.secondary[n])})))};function b(){var n=a()(["\n    overflow: auto;\n    max-width: 1180px;\n    margin: 0 auto;\n    position: relative;\n    top: 8em;\n    background: var(--color-white);\n    @media (max-width: 1180px) {\n      top: 5.5em;\n    }\n  "]);return b=function(){return n},n}function w(){var n=a()(["\n    height: 100vh;\n  "]);return w=function(){return n},n}var k=function(n){var e=l.a.div(w()),t=l.a.div(b());return o.a.createElement(e,{id:"App"},o.a.createElement(x,{pageWrapId:"page-wrap",outerContainerId:"App"}),o.a.createElement(t,{id:"page-wrap"},n.children))},j=t(167),O=t.n(j);function q(){var n=a()(["\n    width: calc(100% - 10vmin);\n    margin: 0 auto;\n    padding: 2vmin 0;\n    font-size: var(--font-size-xl);\n  "]);return q=function(){return n},n}function z(){var n=a()(["\n    position: absolute;\n    background: rgba(0, 0, 0, 0.8);\n    left: 50%;\n    bottom: 0;\n    transform: translate(-50%, 0);\n    padding: 0 0.5em;\n    width: 100%;\n  "]);return z=function(){return n},n}function M(){var n=a()(["\n    display: block;\n    height: calc(var(--font-size-xl) * 2.8);\n    background-color: var(--color-black)\n  "]);return M=function(){return n},n}function _(){var n=a()(["\n    height: 31.8vh;\n    max-height: 400px;\n  "]);return _=function(){return n},n}function D(){var n=a()(["\n    position: relative;\n    background: var(--color-gray-light);\n    color: var(--color-white);\n  "]);return D=function(){return n},n}var N=function(n){var e=l.a.section(D()),t=Object(l.a)(O.a)(_()),r=l.a.div(M()),a=l.a.div(z()),i=l.a.h1(q()),c=n.image?o.a.createElement(t,{alt:n.title?n.title:"",fluid:n.image.fluid}):o.a.createElement(r,null);return o.a.createElement(e,null,c,n.title&&o.a.createElement(a,null,o.a.createElement(i,null,n.title)))};function T(){var n=a()(["\n    width: calc(100% - 10vmin);\n    margin: 0 auto;\n    padding: 5vmin 0;\n  "]);return T=function(){return n},n}e.a=function(n){var e=l.a.div(T());return o.a.createElement(k,{location:n.location},o.a.createElement(u.a,{title:n.title+" | "+n.siteTitle}),o.a.createElement(N,{title:n.title,image:n.heroImage}),o.a.createElement(e,null,n.children))}}}]);
//# sourceMappingURL=component---src-templates-news-js-59029f4908e0f8180a42.js.map