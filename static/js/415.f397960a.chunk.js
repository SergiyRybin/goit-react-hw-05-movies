(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{599:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r="FilmCard_ImageItem__GbbCz",c=n(501),o=n(758),a=n(184),s=function(t){var e=t.film,n=t.state;return(0,a.jsxs)(c.rU,{to:"/movies/".concat(e.id),state:n,children:[(0,a.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):o,alt:e.title?e.title:e.name,className:r}),e.title?e.title:e.name]})},i="FilmList_FilmList__e5OOK",u=function(t){var e=t.data,n=t.state;return(0,a.jsx)("ul",{className:i,children:e&&e.map((function(t){return(0,a.jsx)(s,{film:t,state:n},t.id)}))})}},415:function(t,e,n){"use strict";n.r(e);var r=n(885),c=n(599),o=n(700),a=n(665),s=n(791),i=n(184);e.default=function(){var t=(0,s.useState)([]),e=(0,r.Z)(t,2),n=e[0],u=e[1];(0,s.useEffect)((function(){0===n.length&&(0,a.ue)().then((function(t){var e=t.results;return u({results:e})}))}),[]);var f=n.results;return(0,i.jsxs)(o.Z,{children:[(0,i.jsx)("h1",{children:"Trending today"}),(0,i.jsx)(c.Z,{data:f})]})}},665:function(t,e,n){"use strict";n.d(e,{Ch:function(){return a},h5:function(){return i},h_:function(){return s},s6:function(){return u},ue:function(){return o}});var r=n(7),c=n.n(r),o=function(){return fetch("https://api.themoviedb.org/3/trending/all/week?api_key=946fd192c485f6dbf39faf2135c337c0\n    ").then((function(t){return t.ok?t.json():Promise.reject(new Error("Error: ".concat(t.status," ").concat(t.statusText)))}))},a=function(t){return fetch("https://api.themoviedb.org/3/search/movie?api_key=946fd192c485f6dbf39faf2135c337c0&language=en-US&query=".concat(t,"&page=1&include_adult=false\n    ")).then((function(t){return t.ok?t.json():Promise.reject(new Error("Error: ".concat(t.status," ").concat(t.statusText)))}))},s=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=946fd192c485f6dbf39faf2135c337c0&language=en-US\n    ")).then((function(t){return t.ok?t.json():Promise.reject(new Error("Error: ".concat(t.status," ").concat(t.statusText)))}))},i=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=946fd192c485f6dbf39faf2135c337c0\n    ")).then((function(t){return t.ok?t.json():Promise.reject(new Error("Error: ".concat(t.status," ").concat(t.statusText)))}))},u=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=946fd192c485f6dbf39faf2135c337c0\n    ")).then((function(t){return t.ok?t.json():Promise.reject(new Error("Error: ".concat(t.status," ").concat(t.statusText)))}))};a.propTypes={query:c().string.isRequired},i.propTypes={id:c().number.isRequired},u.propTypes={id:c().number.isRequired}},888:function(t,e,n){"use strict";var r=n(47);function c(){}function o(){}o.resetWarningCache=c,t.exports=function(){function t(t,e,n,c,o,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:c};return n.PropTypes=n,n}},7:function(t,e,n){t.exports=n(888)()},47:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},758:function(t,e,n){"use strict";t.exports=n.p+"static/media/2.a2cc3895e5bdf3842824.jpeg"}}]);
//# sourceMappingURL=415.f397960a.chunk.js.map