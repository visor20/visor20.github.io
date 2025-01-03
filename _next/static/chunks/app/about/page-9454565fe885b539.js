(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{1683:(e,t,r)=>{Promise.resolve().then(r.bind(r,263))},263:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(7437),a=r(2265),o=r(4668),s=r.n(o),i=r(6066),l=r(9721),c=r(1810),u=r(3582),d=r.n(u);let m=e=>{let{slides:t,interval:r=3e3}=e,[o,s]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=setInterval(()=>{s(e=>(e+1)%t.length)},r);return()=>clearInterval(e)},[t,r]),(0,n.jsx)("div",{className:d().outer,children:(0,n.jsx)("div",{className:d().inner,style:{transform:"translateX(-".concat(33*o,"%)")},children:t.map((e,t)=>(0,n.jsx)("div",{className:d().slideItem,children:(0,n.jsx)("img",{src:e,alt:"slide ".concat(t+1),className:d().slideImage})},t))})})};var b=r(6356);let f=["/grad.jpg","/pp-1.jpg","/boots2.jpg"],p=()=>{let e=(0,a.useRef)(null);return(0,n.jsx)(i.Z,{children:(0,n.jsxs)("div",{className:s().mainAboutContainer,children:[(0,n.jsx)(m,{slides:f,interval:4e3}),(0,n.jsx)("div",{className:s().aboutButton,onClick:()=>{e.current&&e.current.scrollIntoView({behavior:"smooth",block:"center"})},children:(0,n.jsx)(c.Pd.Provider,{value:{size:"50px",className:"".concat(s().downArrow)},children:(0,n.jsx)(b.KEG,{})})}),(0,n.jsx)("div",{className:s().aboutTextContainer,ref:e,children:(0,n.jsxs)("div",{className:s().aboutText,children:[(0,n.jsx)("div",{className:s().aboutIcon,children:(0,n.jsx)(c.Pd.Provider,{value:{size:"50px"},children:(0,n.jsx)(l.Lqe,{})})}),(0,n.jsx)("div",{className:s().aboutTitle,children:(0,n.jsx)("h2",{children:"About Me"})}),(0,n.jsxs)("p",{className:s().spaceAfter,children:["I am a graduate of Stanford University who specializes in full stack software development. I graduated in June of 2024, with a GPA of 3.81 in ",(0,n.jsx)("a",{className:s().textLink,href:"https://symsys.stanford.edu/",target:"_blank",children:"Symbolic Systems. "}),"I took classes such as Data Structures and Algorithms, Computer Systems, and Probability and Statistics for Computer Scientists while also studying Linguistics, Philosophy, and Human-Computer Interaction."]}),(0,n.jsxs)("p",{children:["Outside of Stanford, I worked as a Software Engineering Intern at Dolby Laboratories on their new",(0,n.jsx)("a",{className:s().textLink,href:"https://www.dolby.com/technologies/dolby-atmos/dolby-atmos-flexconnect/",target:"_blank",children:" FlexConnect API. "}),"Initially, I worked with the research team to design and implement new features for the FlexConnect backend in C, C++, and Python. After 3 months, my internship was extended and I was given the opportunity to create a full stack application for internal use. For this project, I used Python, React, and Next to implement a useful tool for my team members."]})]})})]})})}},6066:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(7437);r(2265);var a=r(1957),o=r.n(a),s=r(3162);let i=e=>{let{children:t,handleMouseMove:r}=e;return(0,n.jsx)(s.E.div,{className:o().background,onMouseMove:r||null,style:{background:"linear-gradient(to bottom right, #748b8c, #ffffff)",backgroundSize:"300% 200%"},animate:{backgroundPosition:["0% 50%","100% 50%","0% 50%"]},transition:{duration:10,repeat:1/0,repeatType:"loop",ease:"linear"},children:t})}},4668:e=>{e.exports={mainAboutContainer:"Page_mainAboutContainer__OSn0U",aboutTextContainer:"Page_aboutTextContainer___ygCe",aboutIcon:"Page_aboutIcon__McPkb",aboutButton:"Page_aboutButton__txX2j",downArrow:"Page_downArrow__3xmn2",spaceAfter:"Page_spaceAfter__3VivL",aboutTitle:"Page_aboutTitle__4NNeJ",aboutText:"Page_aboutText__EXQA1",textLink:"Page_textLink__Xuj0Q"}},1957:e=>{e.exports={background:"Background_background__0_8FJ"}},3582:e=>{e.exports={outer:"Slideshow_outer__lr4I_",inner:"Slideshow_inner___qV_u",slideItem:"Slideshow_slideItem__LktmT",slideImage:"Slideshow_slideImage__VSzRR"}},1810:(e,t,r)=>{"use strict";r.d(t,{w_:()=>u,Pd:()=>o});var n=r(2265),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),s=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var n,a;n=t,a=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,i({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:a,size:o,title:l}=e,u=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,s),d=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==o?n.createElement(o.Consumer,null,e=>t(e)):t(a)}}},e=>{var t=t=>e(e.s=t);e.O(0,[14,980,51,305,162,130,215,744],()=>t(1683)),_N_E=e.O()}]);