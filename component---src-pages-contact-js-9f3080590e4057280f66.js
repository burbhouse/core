(window.webpackJsonp=window.webpackJsonp||[]).push([[2,7],{151:function(e,n,t){"use strict";t.r(n),t.d(n,"pageQuery",function(){return c});t(36);var a=t(0),r=t.n(a),i=t(166),o=t.n(i),l=t(164);n.default=function(e){var n=o()(e,"data.contentfulPage");return r.a.createElement(l.a,Object.assign({},e,n),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.body.childMarkdownRemark.html}}),r.a.createElement("div",null,e.children))};var c="1540473544"},154:function(e,n,t){"use strict";t.r(n),t.d(n,"pageQuery",function(){return c});t(36);var a=t(0),r=t.n(a),i=t(166),o=t.n(i),l=t(151);n.default=function(e){var n=o()(e,"data.site.siteMetadata.email");return r.a.createElement(l.default,Object.assign({location:e.location},e),r.a.createElement("h2",{className:"section-headline"},"Get in Touch"),r.a.createElement("form",{action:"https://formspree.io/"+n,method:"POST"},r.a.createElement("fieldset",{className:"name"},r.a.createElement("legend",null,"Name"),r.a.createElement("p",null,r.a.createElement("input",{type:"text",name:"nameFirst"}),r.a.createElement("label",{htmlFor:"nameFirst"},"First")),r.a.createElement("p",null,r.a.createElement("input",{type:"text",name:"nameLast"}),r.a.createElement("label",{htmlFor:"nameLast"},"Last"))),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"_replyto"})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"phone"},"Phone"),r.a.createElement("input",{type:"tel",name:"phone",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",placeholder:"561-555-1234"})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"message"},"Message"),r.a.createElement("textarea",{name:"message",rows:"4"})),r.a.createElement("input",{type:"submit",value:"Send Message"})))};var c="2893670786"},159:function(e,n,t){"use strict";t.d(n,"b",function(){return s});var a=t(0),r=t.n(a),i=t(5),o=t.n(i),l=t(35),c=t.n(l);t.d(n,"a",function(){return c.a});t(160);var u=r.a.createContext({});function m(e){var n=e.staticQueryData,t=e.data,a=e.query,i=e.render,o=t?t.data:n[a]&&n[a].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var n=e.data,t=e.query,a=e.render,i=e.children;return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement(m,{data:n,query:t,render:a||i,staticQueryData:e})})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},160:function(e,n,t){var a;e.exports=(a=t(161))&&a.default||a},161:function(e,n,t){"use strict";t.r(n);t(36);var a=t(0),r=t.n(a),i=t(5),o=t.n(i),l=t(61),c=function(e){var n=e.location,t=e.pageResources;return t?r.a.createElement(l.a,Object.assign({location:n,pageResources:t},t.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=c},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Burbhouse",logo:"/images/logo.png"}}}}},163:function(e){e.exports={primary:{"/":"Home","/events/":"Events","/news/":"News","/contact/":"Contact"},secondary:{"/":"Home","/board/":"Board","/projects/":"Projects","/events/":"Events","/news/":"News","/contact/":"Contact"}}},164:function(e,n,t){"use strict";var a=t(157),r=t.n(a),i=t(0),o=t.n(i),l=t(168),c=t.n(l),u=t(158),m=(t(36),t(90),t(60),t(37),t(169),t(159)),s=t(170),d=t(162);function p(){var e=r()(["\n    height: 70px;\n    width: auto;\n    @media (max-width: 768px) {\n      margin-left: -10px;\n      height: 60px;\n    }\n  "]);return p=function(){return e},e}function f(){var e=r()(["\n    display: inline-flex;\n    flex-grow: 1;\n    align-items: center;\n    font-size: var(--font-size-xl);\n    margin-left: 1em;\n    text-decoration: none;\n  "]);return f=function(){return e},e}var v=function(e){var n=Object(u.a)(m.a)(f()),t=u.a.img(p());return o.a.createElement(m.b,{query:"2005248036",render:function(e){return o.a.createElement(n,{to:"/"},o.a.createElement(t,{alt:e.site.siteMetadata.title,src:e.site.siteMetadata.logo}))},data:d})};function h(){var e=r()(["\n    color: var(--color-menu-link-primary);\n    text-decoration: none;\n    &:hover {\n      color: var(--color-menu-link-primary-hover);\n      border-bottom: solid 2px var(--color-menu-link-primary-hover);\n      margin-bottom: -2px;\n    }\n  "]);return h=function(){return e},e}function g(){var e=r()(["\n    display: inline-flex;\n    align-items: center;\n    margin: 0 1em;\n  "]);return g=function(){return e},e}function E(){var e=r()(["\n    display: inline-flex;\n    justify-content: center;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    height: 15vh;\n    max-height: 90px;\n    font-size: var(--font-size-lg);\n    @media (max-width: 768px) {\n      visibility: hidden;\n    }\n  "]);return E=function(){return e},e}function y(){var e=r()(["\n    display: flex;\n    position: fixed;\n    z-index: 1;\n    width: 90vw;\n    background: var(--color-header);\n    padding-right: 10vw;\n  "]);return y=function(){return e},e}var b=function(e){var n=u.a.header(y()),a=u.a.ul(E()),r=u.a.li(g()),i=Object(u.a)(m.a)(h()),l=t(163);try{l=t(!function(){var e=new Error("Cannot find module '../../site/menu.json'");throw e.code="MODULE_NOT_FOUND",e}())}catch(c){"MODULE_NOT_FOUND"===c.code&&console.log("Site menu not found.")}return o.a.createElement("div",null,o.a.createElement(n,null,o.a.createElement(v,null),o.a.createElement(a,null,Object.keys(l.primary).map(function(e){return o.a.createElement(r,{key:"primary_"+e},o.a.createElement(i,{to:e},l.primary[e]))}))),o.a.createElement(s.slide,Object.assign({right:!0},e),Object.keys(l.secondary).map(function(e){return o.a.createElement(m.a,{key:"secondary_"+e,to:e},l.secondary[e])})))};function x(){var e=r()(["\n    overflow: auto;\n    max-width: 1180px;\n    margin: 0 auto;\n    position: relative;\n    top: 8em;\n    background: var(--color-white);\n    @media (max-width: 1180px) {\n      top: 5.5em;\n    }\n  "]);return x=function(){return e},e}function w(){var e=r()(["\n    height: 100vh;\n  "]);return w=function(){return e},e}var k=function(e){var n=u.a.div(w()),t=u.a.div(x());return o.a.createElement(n,{id:"App"},o.a.createElement(b,{pageWrapId:"page-wrap",outerContainerId:"App"}),o.a.createElement(t,{id:"page-wrap"},e.children))},O=t(167),j=t.n(O);function F(){var e=r()(["\n    width: calc(100% - 10vmin);\n    margin: 0 auto;\n    padding: 2vmin 0;\n    font-size: var(--font-size-xl);\n  "]);return F=function(){return e},e}function M(){var e=r()(["\n    position: absolute;\n    background: rgba(0, 0, 0, 0.8);\n    left: 50%;\n    bottom: 0;\n    transform: translate(-50%, 0);\n    padding: 0 0.5em;\n    width: 100%;\n  "]);return M=function(){return e},e}function N(){var e=r()(["\n    display: block;\n    height: calc(var(--font-size-xl) * 2.8);\n    background-color: var(--color-black)\n  "]);return N=function(){return e},e}function _(){var e=r()(["\n    height: 31.8vh;\n    max-height: 400px;\n  "]);return _=function(){return e},e}function q(){var e=r()(["\n    position: relative;\n    background: var(--color-gray-light);\n    color: var(--color-white);\n  "]);return q=function(){return e},e}var z=function(e){var n=u.a.section(q()),t=Object(u.a)(j.a)(_()),a=u.a.div(N()),r=u.a.div(M()),i=u.a.h1(F()),l=e.image?o.a.createElement(t,{alt:e.title?e.title:"",fluid:e.image.fluid}):o.a.createElement(a,null);return o.a.createElement(n,null,l,e.title&&o.a.createElement(r,null,o.a.createElement(i,null,e.title)))};function T(){var e=r()(["\n    width: calc(100% - 10vmin);\n    margin: 0 auto;\n    padding: 5vmin 0;\n  "]);return T=function(){return e},e}n.a=function(e){var n=u.a.div(T());return o.a.createElement(k,{location:e.location},o.a.createElement(c.a,{title:e.title+" | "+e.siteTitle}),o.a.createElement(z,{title:e.title,image:e.heroImage}),o.a.createElement(n,null,e.children))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-9f3080590e4057280f66.js.map