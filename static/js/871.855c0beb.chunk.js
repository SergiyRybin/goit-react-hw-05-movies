(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[871],{669:function(e,t,n){"use strict";n.r(t);var r=n(885),o=n(791),c=n(871),i=n(665),s=n(184);t.default=function(){var e=(0,o.useState)(""),t=(0,r.Z)(e,2),n=t[0],a=t[1],u=(0,c.UO)();return 0===n.length&&(0,i.s6)(u.id).then((function(e){return a(e)})),(0,s.jsx)("div",{children:(0,s.jsxs)("ul",{style:{listStyle:"none"},children:[n&&n.results.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h3",{children:["Author: ",e.author]}),(0,s.jsx)("p",{children:e.content})]},e.id)})),0===n.total_results&&(0,s.jsx)("p",{children:"We don't have any reviews for this movie "})]})})}},665:function(e,t,n){"use strict";n.d(t,{Ch:function(){return i},h5:function(){return a},h_:function(){return s},s6:function(){return u},ue:function(){return c}});var r=n(7),o=n.n(r),c=function(){return fetch("https://api.themoviedb.org/3/trending/all/week?api_key=946fd192c485f6dbf39faf2135c337c0\n    ").then((function(e){return e.ok?e.json():Promise.reject(new Error("Error: ".concat(e.status," ").concat(e.statusText)))}))},i=function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=946fd192c485f6dbf39faf2135c337c0&language=en-US&query=".concat(e,"&page=1&include_adult=false\n    ")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Error: ".concat(e.status," ").concat(e.statusText)))}))},s=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=946fd192c485f6dbf39faf2135c337c0&language=en-US\n    ")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Error: ".concat(e.status," ").concat(e.statusText)))}))},a=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=946fd192c485f6dbf39faf2135c337c0\n    ")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Error: ".concat(e.status," ").concat(e.statusText)))}))},u=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=946fd192c485f6dbf39faf2135c337c0\n    ")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Error: ".concat(e.status," ").concat(e.statusText)))}))};i.propTypes={query:o().string.isRequired},a.propTypes={id:o().number.isRequired},u.propTypes={id:o().number.isRequired}},888:function(e,t,n){"use strict";var r=n(47);function o(){}function c(){}c.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,c,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:o};return n.PropTypes=n,n}},7:function(e,t,n){e.exports=n(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=871.855c0beb.chunk.js.map