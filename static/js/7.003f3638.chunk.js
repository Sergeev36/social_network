(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{225:function(e,r,n){e.exports={warning:"FormsControls_warning__3zCki",errorMessage:"FormsControls_errorMessage__1Qk8O",formError:"FormsControls_formError__2dVxI",test:"FormsControls_test__1L5SY"}},226:function(e,r,n){"use strict";n.d(r,"b",(function(){return t})),n.d(r,"a",(function(){return o}));var t=function(e){if(!e)return"Field is required"},o=function(e){return function(r){if(r.length>e)return"Max length is ".concat(e," symbols")}}},227:function(e,r,n){"use strict";n.d(r,"b",(function(){return j})),n.d(r,"a",(function(){return l}));var t=n(2),o=n(3),i=n(235),s=n(0),c=n.n(s),a=n(225),u=n.n(a),d=function(e){return function(r){var n=r.input,s=r.meta,a=Object(i.a)(r,["input","meta"]),d=s.error&&s.touched;return Object(t.jsxs)("div",{className:d?u.a.warning:"",children:[Object(t.jsxs)("div",{children:[" ",c.a.createElement(e,Object(o.a)(Object(o.a)({},n),a))]}),d&&Object(t.jsx)("span",{className:u.a.errorMessage,children:s.error})]})}},j=d("textarea"),l=d("input")},304:function(e,r,n){"use strict";n.r(r),n.d(r,"LoginForm",(function(){return b}));var t=n(2),o=(n(0),n(107)),i=n(108),s=n(227),c=n(226),a=n(28),u=n(25),d=n(7),j=n(225),l=n.n(j),b=function(e){return Object(t.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(t.jsx)("div",{children:Object(t.jsx)(o.a,{name:"email",component:s.a,validate:[c.b],placeholder:"Email"})}),Object(t.jsx)("div",{children:Object(t.jsx)(o.a,{name:"password",component:s.a,type:"password",validate:[c.b],placeholder:"Password"})}),Object(t.jsxs)("div",{children:[Object(t.jsx)(o.a,{name:"rememberMe",component:s.a,type:"Checkbox"}),"remember me"]}),e.error&&Object(t.jsx)("div",{className:l.a.formError,children:e.error}),Object(t.jsx)("div",{children:Object(t.jsx)("button",{children:"Login"})})]})},m=Object(i.a)({form:"login"})(b);r.default=Object(a.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginThunk:u.d})((function(e){return e.isAuth?Object(t.jsx)(d.a,{to:"profile"}):Object(t.jsxs)("div",{children:[" ",Object(t.jsx)("h1",{children:"Login"}),Object(t.jsx)(m,{onSubmit:function(r){e.loginThunk(r.email,r.password,r.rememberMe)}})]})}))}}]);
//# sourceMappingURL=7.003f3638.chunk.js.map