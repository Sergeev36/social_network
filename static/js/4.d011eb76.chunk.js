(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{225:function(t,e,s){t.exports={warning:"FormsControls_warning__3zCki",errorMessage:"FormsControls_errorMessage__1Qk8O",formError:"FormsControls_formError__2dVxI",test:"FormsControls_test__1L5SY"}},226:function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"a",(function(){return r}));var n=function(t){if(!t)return"Field is required"},r=function(t){return function(e){if(e.length>t)return"Max length is ".concat(t," symbols")}}},227:function(t,e,s){"use strict";s.d(e,"b",(function(){return p})),s.d(e,"a",(function(){return j}));var n=s(2),r=s(3),o=s(235),a=s(0),i=s.n(a),c=s(225),u=s.n(c),l=function(t){return function(e){var s=e.input,a=e.meta,c=Object(o.a)(e,["input","meta"]),l=a.error&&a.touched;return Object(n.jsxs)("div",{className:l?u.a.warning:"",children:[Object(n.jsxs)("div",{children:[" ",i.a.createElement(t,Object(r.a)(Object(r.a)({},s),c))]}),l&&Object(n.jsx)("span",{className:u.a.errorMessage,children:a.error})]})}},p=l("textarea"),j=l("input")},234:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s(60);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],n=!0,r=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done)&&(s.push(a.value),!e||s.length!==e);n=!0);}catch(c){r=!0,o=c}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return s}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},250:function(t,e,s){},251:function(t,e,s){t.exports={post:"Post_post__HfZML",postText:"Post_postText__DzXuF",likes:"Post_likes__21i-v",likesNumbers:"Post_likesNumbers__2huYw"}},252:function(t,e,s){t.exports={newPost:"MyPosts_newPost__14BRI",posts:"MyPosts_posts__wDSQo"}},293:function(t,e,s){t.exports={postsBlock:"ProfileInfo_postsBlock__2BPor",fon:"ProfileInfo_fon__OaCZH",photo:"ProfileInfo_photo__6KNe0"}},305:function(t,e,s){"use strict";s.r(e);var n=s(3),r=s(2),o=s(33),a=s(34),i=s(36),c=s(35),u=s(0),l=s.n(u),p=s(250),j=s.n(p),d=s(251),f=s.n(d),b=function(t){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:f.a.post,children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:t.avatar,alt:""})}),Object(r.jsx)("div",{className:f.a.postText,children:t.message})]}),Object(r.jsxs)("div",{className:f.a.likes,children:[Object(r.jsx)("img",{src:"https://pngimg.com/uploads/like/like_PNG29.png",alt:""}),Object(r.jsx)("div",{className:f.a.likesNumbers,children:Object(r.jsx)("b",{children:t.likesCount})})]})]})},h=s(252),O=s.n(h),m=s(107),x=s(108),v=s(226),_=s(227),g=Object(v.a)(30),k=Object(x.a)({form:"newPostText"})((function(t){return Object(r.jsxs)("form",{onSubmit:t.handleSubmit,className:O.a.newPost,children:[Object(r.jsx)("h3",{children:"New Post"}),Object(r.jsx)("div",{className:O.a.newText,children:Object(r.jsx)(m.a,{name:"postText",component:_.b,placeholder:"Post message",validate:[v.b,g]})}),Object(r.jsx)("div",{className:O.a.button,children:Object(r.jsx)("button",{children:"Add post"})})]})})),P=function(t){var e=t.profilePage.posts.map((function(t){return Object(r.jsx)(b,{message:t.message,likesCount:t.likesCount,avatar:t.avatar},t.id)}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(k,{onSubmit:function(e){t.addPost(e.postText)}})}),Object(r.jsx)("div",{className:O.a.posts,children:e})]})},y=s(61),S=s(28),N=Object(S.b)((function(t){return{profilePage:t.profilePage}}),{addPost:y.a})(P),w=s(293),T=s.n(w),C=s(53),I=s(234),M=function(t){var e=Object(u.useState)(!1),s=Object(I.a)(e,2),n=s[0],o=s[1],a=Object(u.useState)(t.status),i=Object(I.a)(a,2),c=i[0],l=i[1];Object(u.useEffect)((function(){l(t.status)}),[t.status]);return Object(r.jsxs)("div",{children:[!n&&Object(r.jsx)("div",{children:Object(r.jsx)("span",{onDoubleClick:function(){o(!0)},children:t.status||"status"})}),n&&Object(r.jsx)("div",{children:Object(r.jsx)("input",{onChange:function(t){l(t.target.value)},onBlur:function(){o(!1),t.updateStatus(c)},autoFocus:!0,value:c})})]})},F=function(t){return t.profile?Object(r.jsx)("div",{className:T.a.profileInfo,children:Object(r.jsxs)("div",{className:T.a.profile,children:[Object(r.jsx)("img",{className:T.a.photo,src:t.profile.photos.large||"https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg",alt:""}),Object(r.jsx)(M,{status:t.status,updateStatus:t.updateStatus})]})}):Object(r.jsx)(C.a,{})},A=function(t){return Object(r.jsxs)("div",{className:j.a.content,children:[Object(r.jsx)(F,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(r.jsx)(N,{})]})},B=s(7),E=s(24),D=function(t){Object(i.a)(s,t);var e=Object(c.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(a.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authUserId)||this.props.history.push("/login"),this.props.profileThunk(t),this.props.getStatusThunk(t)}},{key:"render",value:function(){return Object(r.jsx)(A,Object(n.a)(Object(n.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusThunk}))}}]),s}(l.a.Component);e.default=Object(E.d)(Object(S.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authUserId:t.auth.id,isAuth:t.auth.isAuth}}),{profileThunk:y.d,getStatusThunk:y.c,updateStatusThunk:y.e}),B.f)(D)}}]);
//# sourceMappingURL=4.d011eb76.chunk.js.map