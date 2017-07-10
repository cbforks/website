!function(){"use strict";var t=function(t,e){for(var n,r=arguments,a=[],o=[],i=arguments.length;i-- >2;)a[a.length]=r[i];for(;a.length;)if(Array.isArray(n=a.pop()))for(i=n.length;i--;)a[a.length]=n[i];else null!=n&&!0!==n&&!1!==n&&("number"==typeof n&&(n+=""),o[o.length]=n);return"string"==typeof t?{tag:t,data:e||{},children:o}:t(e,o)},e=function(e,n){return t("main",e,n)},n=function(e,n){return t("svg",e,n)},r=function(t){return n({},c(t))},a=function(e,n){return t("h1",e,n)},o=function(e,n){return t("span",e,n)},i=function(e,n){return t("a",e,n)},c=function(e){return t("use",{oncreate:function(t){return t.setAttributeNS("http://www.w3.org/1999/xlink","href","/icons.svg#"+e)}})};!function(t){function e(t,n,i){Object.keys(n||[]).map(function(c){var u=n[c],f=i?i+"."+c:c;"function"==typeof u?t[c]=function(t){var e=u(d,g,r("action",{name:f,data:t}).data,r);if(null==e||"function"==typeof e.then)return e;a(d=o(d,r("update",e)),v)}:e(t[c]||(t[c]={}),u,f)})}function n(){a(d,v),r("loaded")}function r(t,e){return(y[t]||[]).map(function(t){var n=t(d,g,e,r);null!=n&&(e=n)}),e}function a(e,n){h=s(t.root||(t.root=document.body),h,p,p=r("render",n)(e,g))}function o(t,e){var n={};if("object"!=typeof e||Array.isArray(e))return e;for(var r in t)n[r]=t[r];for(var r in e)n[r]=e[r];return n}function i(t,e){if("string"==typeof t)n=document.createTextNode(t);else{for(var n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag),r=0;r<t.children.length;)n.appendChild(i(t.children[r++],e));for(var r in t.data)"oncreate"===r?t.data[r](n):c(n,r,t.data[r])}return n}function c(t,e,n,r){if("key"===e);else if("style"===e)for(var a in o(r,n=n||{}))t.style[a]=n[a]||"";else{try{t[e]=n}catch(t){}"function"!=typeof n&&(n?t.setAttribute(e,n):t.removeAttribute(e))}}function u(t,e,n){for(var r in o(e,n)){var a=n[r],i="value"===r||"checked"===r?t[r]:e[r];"onupdate"===r&&a?a(t):a!==i&&c(t,r,a,i)}}function f(t){if(t&&(t=t.data))return t.key}function l(t,e,n){function r(){t.removeChild(e)}(n.data&&n.data.onremove||r)(e,r)}function s(t,e,n,r){if(null==n)e=t.insertBefore(i(r),e);else if(r.tag&&r.tag===n.tag){u(e,n.data,r.data);for(var a=r.children.length,o=n.children.length,c={},p=[],h={},d=0;d<o;d++)g=e.childNodes[d],p[d]=g,null!=(A=f(y=n.children[d]))&&(c[A]=[g,y]);for(var d=0,v=0;v<a;){var g=p[d],y=n.children[d],m=r.children[v];if(h[A=f(y)])d++;else{var b=f(m),w=c[b]||[];null==b?(null==A&&(s(e,g,y,m),v++),d++):(A===b?(s(e,w[0],w[1],m),d++):w[0]?(e.insertBefore(w[0],g),s(e,w[0],w[1],m)):s(e,g,null,m),v++,h[b]=m)}}for(;d<o;){var A=f(y=n.children[d]);null==A&&l(e,p[d],y),d++}for(var d in c){var k=(w=c[d])[1];h[k.data.key]||l(e,w[0],k)}}else r!==n&&(d=e,t.replaceChild(e=i(r),d));return e}for(var p,h,d={},v=t.view,g={},y={},m=-1,b=t.mixins||[];m<b.length;m++){var w=b[m]?b[m](t):t;null!=w.mixins&&w!==t&&(b=b.concat(w.mixins)),null!=w.state&&(d=o(d,w.state)),e(g,w.actions),Object.keys(w.events||[]).map(function(t){y[t]=(y[t]||[]).concat(w.events[t])})}"l"!==document.readyState[0]?n():addEventListener("DOMContentLoaded",n)}({state:{},actions:{},events:{},view:function(n,c){return e({},[r("hyperapp"),a({},"1 KB JavaScript library for building frontend applications"),t("row-",{class:"social",gap:"1"},[i({href:"https://github.com/hyperapp/hyperapp"},[r("github"),o({},"GITHUB")]),i({href:"https://hyperappjs.herokuapp.com"},[r("slack"),o({},"SLACK")]),i({href:"https://twitter.com/hyperappjs"},[r("twitter"),o({},"TWITTER")])]),t("row-",{class:"reading",gap:"1"},[i({href:"https://github.com/hyperapp/hyperapp/tree/master/src"},[o({},"READ THE CODE")]),i({href:"https://github.com/hyperapp/hyperapp/blob/master/docs/getting-started.md#hello-world"},[o({},"READ THE DOCS")])])])}})}();