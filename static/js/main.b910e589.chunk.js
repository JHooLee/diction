(this["webpackJsonpword-react"]=this["webpackJsonpword-react"]||[]).push([[0],{10:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(11),a=c.n(s),i=(c(20),c(5)),o=c(12),j=c(13),d=c(15),l=c(14),b=(c(21),c(2)),u=(c(22),c(0));var h=function(){var e=Object(b.f)();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]}),Object(u.jsxs)("div",{className:"home-container",children:[Object(u.jsx)("br",{}),Object(u.jsx)("a",{onClick:function(){e("/words")},children:Object(u.jsx)("input",{className:"filter-word"})}),Object(u.jsx)("br",{})]})]})},O=c(6),x=c(8),f=c(4);c(10),c(24);function w(e){var t=e.children,c=e.size,r=e.color,n=e.width,s=e.handleClick,a=e.disabled;return Object(u.jsx)("button",{disabled:a,onClick:s,className:"Button ".concat(c," ").concat(r," ").concat(n),children:t})}var m=w;w.defaultProps={size:"medium",color:"tomato",disabled:!1};var p=function(){return Object(u.jsx)("h1",{children:"NOT FOUND PAGE"})},v=["to","children"];var g=function(e){var t=Object(b.g)(),c=Object(i.c)(),n=Object(f.a)(c,2),s=n[0],a=n[1],o=function(e){return e.isActive?{color:"white",padding:"15px",margin:"-15px",background:"tan"}:{}},j=function(e){var t=e.to,c=e.children,r=Object(x.a)(e,v),n=Object(b.e)();return Object(u.jsx)(i.b,Object(O.a)(Object(O.a)({to:t+n.search},r),{},{children:c}))},d=Object(r.useState)("\ub2e8\uc5b4"),l=Object(f.a)(d,2),h=l[0],w=l[1],p=e.words.filter((function(e){var t=s.get("filter");if(!t)return!1;if("\ub2e8\uc5b4"===h)return e.r_word.toLowerCase().includes(t.toLowerCase());if("\ub73b"===h)return e.r_des.toLowerCase().includes(t.toLowerCase());if("\ub2e8\uc5b4+\ub73b"===h){var c=e.r_word.toLowerCase(),r=e.r_des.toLowerCase();return c.includes(t.toLowerCase())||r.includes(t.toLowerCase())}})),g=p[t.wordId],C=[],N=0;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"input-container",children:[Object(u.jsx)("br",{}),Object(u.jsx)("select",{className:"select-box",onChange:function(e){w(e.target.value)},value:h,children:["\ub2e8\uc5b4","\ub73b","\ub2e8\uc5b4+\ub73b"].map((function(e){return Object(u.jsx)("option",{className:"select-opt",value:e,children:e},e)}))}),Object(u.jsx)("input",{className:"filter-word",value:s.get("filter")||"",onChange:function(e){var t=e.target.value;a(t?{filter:t}:{})},placeholder:"search",autoFocus:!0}),Object(u.jsx)("br",{})]}),Object(u.jsxs)("div",{className:"search-result",children:[p.map((function(e){return C.push(e),N+=1,Object(u.jsx)("div",{},N)})),Object(u.jsxs)("div",{children:["\uac80\uc0c9 \uacb0\uacfc : \xa0\xa0",C.length," \uac1c"]})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"word-list",children:p.map((function(e,t){return Object(u.jsx)(j,{to:"/words/".concat(t),className:"word-item",style:o,children:Object(u.jsxs)("div",{className:"word-list-p",children:[e.r_word,e.r_chi,Object(u.jsx)("sup",{children:e.r_seq})]})},t)}))}),g?Object(u.jsxs)("div",{className:"word-card",children:[Object(u.jsxs)("h1",{children:[g.r_word,Object(u.jsx)("sup",{children:g.r_seq})]}),Object(u.jsx)("h2",{children:g.r_chi}),Object(u.jsx)("h2",{children:g.r_pos}),Object(u.jsx)("h2",{children:g.r_des}),Object(u.jsx)("a",{href:g.r_link,children:Object(u.jsx)(m,{children:"\uc790\uc138\ud788\ubcf4\uae30"})})]}):Object(u.jsx)("div",{className:"word-card-emp"})]})]})},C=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var r;return Object(o.a)(this,c),(r=t.call(this,e)).homeMenu=[{url:"/",name:"HOME"},{url:"/words",name:"\ub2e8\uc5b4 \uac80\uc0c9"},{url:"/wordsdes",name:"\uc124\uba85 \uac80\uc0c9"}],r.state={open:!1},r.showSidebar=function(){r.setState({open:!r.state.open})},r.state={loading:!0,words:[]},r}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://dic-jhr.herokuapp.com/api/words").then((function(e){return e.json()})).then((function(t){var c=t.words;e.setState({loading:!1,words:c})}))}},{key:"render",value:function(){var e=this.state.words;return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(b.c,{children:[Object(u.jsx)(b.a,{exact:!0,path:"/",element:Object(u.jsx)(h,{words:e})}),Object(u.jsx)(b.a,{path:"/words",element:Object(u.jsx)(g,{words:e}),children:Object(u.jsx)(b.a,{path:":wordId",element:Object(u.jsx)(g,{words:e})})}),Object(u.jsx)(b.a,{path:"*",element:Object(u.jsx)(p,{})})]})})}}]),c}(r.Component);var N=function(){return Object(u.jsx)(i.a,{basename:"/diction",children:Object(u.jsx)(C,{})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,26)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),r(e),n(e),s(e),a(e)}))};a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),_()}},[[25,1,2]]]);
//# sourceMappingURL=main.b910e589.chunk.js.map