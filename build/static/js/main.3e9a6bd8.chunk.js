(this.webpackJsonpblogreact=this.webpackJsonpblogreact||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var s=n(2),r=n.n(s),a=n(20),c=n.n(a),i=(n(25),n(3)),l=n.n(i),u=n(5),o=n(4),j=(n(27),n(28),n(29),n(30),n(1)),b=function(e){var t=e.handleRegister,n=e.name,s=e.setName,r=e.username,a=e.setUsername,c=e.password,i=e.setPassword,l=e.registerVisible,u=e.loginVisible,o=e.cancel;return Object(j.jsxs)("form",{onSubmit:t,children:[Object(j.jsxs)("div",{className:"registerName",children:[Object(j.jsx)("input",{required:!0,className:"registerName-input",type:"text",name:"name",value:n,onChange:function(e){var t=e.target;return s(t.value)}}),Object(j.jsx)("label",{className:"registerName-label",children:Object(j.jsx)("span",{className:"registerName-span",children:"name"})})]}),Object(j.jsxs)("div",{className:"registerUsername",children:[Object(j.jsx)("input",{required:!0,className:"registerUsername-input",name:"username",value:r,onChange:function(e){var t=e.target;return a(t.value)}}),Object(j.jsx)("label",{className:"registerUsername-label",children:Object(j.jsx)("span",{className:"registerUsername-span",children:"username"})})]}),Object(j.jsxs)("div",{className:"registerPassword",children:[Object(j.jsx)("input",{required:!0,className:"registerPassword-input",type:"password",name:"password",value:c,onChange:function(e){var t=e.target;return i(t.value)}}),Object(j.jsx)("label",{className:"registerPassword-label",children:Object(j.jsx)("span",{className:"registerPassword-span",children:"password"})})]}),Object(j.jsx)("button",{type:"submit",children:" Register"}),Object(j.jsx)("div",{style:{display:l||u?"":"none"},children:Object(j.jsx)("button",{className:"cancel",onClick:o,children:"Cansel"})})]})},d=function(e){var t=e.handleLogin,n=e.username,s=e.setUsername,r=e.password,a=e.setPassword,c=e.registerVisible,i=e.loginVisible,l=e.cancel;return Object(j.jsxs)("form",{onSubmit:t,className:"loginForm",children:[Object(j.jsxs)("div",{className:"loginUsername",children:[Object(j.jsx)("input",{required:!0,className:"loginUsername-input",name:"username",value:n,onChange:function(e){var t=e.target;return s(t.value)}}),Object(j.jsx)("label",{className:"loginUsername-label",children:Object(j.jsx)("span",{className:"loginUsername-span",children:"username"})})]}),Object(j.jsxs)("div",{className:"loginPassword",children:[Object(j.jsx)("input",{required:!0,className:"loginPassword-input",type:"password",name:"password",value:r,onChange:function(e){var t=e.target;return a(t.value)}}),Object(j.jsx)("label",{className:"loginPassword-label",children:Object(j.jsx)("span",{className:"loginPassword-span",children:"password"})})]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",children:"Login"}),Object(j.jsx)("div",{style:{display:c||i?"":"none"},children:Object(j.jsx)("button",{className:"cancel",onClick:l,children:"Cansel"})})]})},p=n(7),m=n.n(p),f=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("/api/login",t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",console.log(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=m.a.post("/api/users",t),e.abrupt("return",n);case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return","registered error");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),h="/api/blogs",x=null,v={getAll:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(h);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(u.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:x}},e.next=3,m.a.post(h,t,n);case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){x="bearer ".concat(e)},deleteBlog:function(){var e=Object(u.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.delete("".concat(h,"/").concat(t,"/").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),update:function(e,t){return m.a.put("".concat(h,"/").concat(e),t).then((function(e){return e.data}))},findOne:function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(h,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),unlike:function(e,t){return m.a.put("".concat(h,"/").concat(e,"/unlike"),t).then((function(e){return e.data}))}},g=n(8),k=n(9),N=n(11);var w=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(""),c=Object(o.a)(a,2),i=c[0],p=c[1],m=Object(s.useState)(""),h=Object(o.a)(m,2),x=h[0],w=h[1],y=Object(s.useState)(!1),C=Object(o.a)(y,2),S=C[0],U=C[1],T=Object(s.useState)(!1),P=Object(o.a)(T,2),D=P[0],B=P[1],I=Object(s.useState)(!0),L=Object(o.a)(I,2),V=L[0],q=L[1],F=Object(s.useState)(!0),R=Object(o.a)(F,2),A=R[0],E=R[1],J=Object(s.useState)(!1),Y=Object(o.a)(J,2),z=Y[0],M=Y[1],G=Object(s.useState)(null),H=Object(o.a)(G,2),K=H[0],Q=H[1],W=Object(s.useState)(null),X=Object(o.a)(W,2),Z=(X[0],X[1]),$=Object(s.useState)(null),_=Object(o.a)($,2),ee=(_[0],_[1]),te=Object(s.useState)([]),ne=Object(o.a)(te,2),se=ne[0],re=ne[1],ae=Object(s.useState)(""),ce=Object(o.a)(ae,2),ie=ce[0],le=ce[1],ue=Object(s.useState)(""),oe=Object(o.a)(ue,2),je=oe[0],be=oe[1],de=Object(s.useState)(""),pe=Object(o.a)(de,2),me=pe[0],fe=pe[1],Oe=Object(s.useState)(!1),he=Object(o.a)(Oe,2),xe=he[0],ve=he[1],ge=Object(s.useState)(!1),ke=Object(o.a)(ge,2),Ne=ke[0],we=ke[1],ye=Object(s.useState)(!0),Ce=Object(o.a)(ye,2),Se=Ce[0],Ue=Ce[1];Object(s.useEffect)((function(){Pe()}),[]),Object(s.useEffect)((function(){setTimeout((function(){De()}),18e6)}),[K]);var Te=Se?se:se.filter((function(e){return e.user.username===K.username}));Te.sort((function(e,t){return t.likes-e.likes})),Object(s.useEffect)((function(){var e=window.localStorage.getItem("loggedUser");if(e){var t=JSON.parse(e);Q(t),v.setToken(t.token),E(!1),M(!0)}}),[]);var Pe=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.getAll();case 3:t=e.sent,re(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message,"  this is fucking error message");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),De=function(){U(!1),B(!1),q(!0),E(!0),M(!1),Q(null),Z(""),r(""),p(""),w(""),be(""),le(""),fe(""),window.localStorage.clear()},Be=function(){var e=Object(u.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,s={name:n,username:i,password:x},i&&n){e.next=6;break}return setTimeout((function(){Z(null)}),3e3),e.abrupt("return",Z("Please fill out fields"));case 6:if(!(x.length<=5)){e.next=9;break}return setTimeout((function(){Z(null)}),3e3),e.abrupt("return",Z("Password must be minimum 5 characters"));case 9:return e.next=11,O(s);case 11:De(),setTimeout((function(){ee(null)}),3e3),ee("You registered succesfuly"),e.next=23;break;case 16:e.prev=16,e.t0=e.catch(1),setTimeout((function(){Z(null)}),3e3),Z("This username already exists"),r(""),p(""),w("");case 23:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,f({username:i,password:x});case 4:if(n=e.sent,p(""),w(""),void 0!==n){e.next=10;break}return setTimeout((function(){Z(null)}),3e3),e.abrupt("return",Z("Invalid username or password"));case 10:E(!1),M(!0),v.setToken(n.token),window.localStorage.setItem("loggedUser",JSON.stringify(n)),Q(n),p(""),w(""),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(1),p(""),w("");case 23:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t){return e.apply(this,arguments)}}(),Le=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={blog:je,title:ie,author:me},e.prev=1,e.next=4,v.create(t);case 4:Pe(),le(""),be(""),fe(""),ve(!1),we(!1),ee("added successfully"),setTimeout((function(){ee(null)})),e.next=22;break;case 14:e.prev=14,e.t0=e.catch(1),"Request failed with status code 404"===e.t0.message&&(Z("Time expired"),setTimeout((function(){Z(null)}),3e3)),le(""),be(""),fe(""),Z("Please fill out fields"),setTimeout((function(){Z(null)}),3e3);case 22:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}(),Ve=function(){De()},qe=function(){var e=Object(u.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Do you really want to delete?")){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,v.deleteBlog(t,n);case 5:Pe(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),setTimeout((function(){Z(null)}),3e3),Z("error");case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n){return e.apply(this,arguments)}}(),Fe=function(e){if(K&&e.user.username===K.username)return Object(j.jsx)("div",{className:"deleteDiv",children:Object(j.jsx)("button",{onClick:function(){return qe(e.id,K.token)},children:"delete"})})},Re=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.likerUsers.push(K.id);case 2:return e.next=4,v.update(t.id,{like:t.likes,token:K.token});case 4:return Pe(),e.abrupt("return");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.likerUsers.filter((function(e){return e!==K.id}));case 2:return t.likerUsers=e.sent,e.next=5,v.unlike(t.id,{like:t.likes,token:K.token});case 5:return Pe(),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"formDiv",style:{display:A?"":"none"},children:[Object(j.jsx)("div",{className:"logo"}),Object(j.jsxs)("div",{className:"formsDivInside",children:[Object(j.jsx)("div",{style:{display:V?"":"none"},children:Object(j.jsx)("button",{onClick:function(){B(!0),U(!1),q(!1)},children:"Register"})}),Object(j.jsx)("div",{style:{display:V?"":"none"},children:Object(j.jsx)("button",{onClick:function(){U(!0),B(!1),q(!1)},children:"Login"})}),Object(j.jsx)("div",{style:{display:S?"":"none"},children:Object(j.jsx)(d,{registerVisible:D,loginVisible:S,cancel:Ve,username:i,password:x,handleLogin:Ie,setUsername:p,setPassword:w})}),Object(j.jsx)("div",{style:{display:D?"":"none"},children:Object(j.jsx)(b,{registerVisible:D,loginVisible:S,cancel:Ve,name:n,username:i,password:x,handleRegister:Be,setName:r,setUsername:p,setPassword:w})})]})]}),Object(j.jsxs)("div",{className:"loginedUserDiv",style:{display:z?"":"none"},children:[Object(j.jsxs)("div",{className:"userNameDiv",children:[Object(j.jsx)("div",{className:"logo"}),Object(j.jsx)("div",{className:"user",children:Object(j.jsxs)("div",{className:"loggedIn",children:[Object(j.jsxs)("p",{className:"name",children:[K?K.name:null," is logged in"]}),Object(j.jsx)("p",{className:"username",children:K?K.username:null}),Object(j.jsxs)("p",{className:"create",onClick:function(){ve(!0),we(!1)},children:["  Create Your  ",Object(j.jsxs)("span",{className:"B",children:[" ",Object(j.jsx)(k.a,{})]}),"log"]}),Object(j.jsxs)("p",{className:"create",onClick:function(){Ue(!1)},children:["show your ",Object(j.jsxs)("span",{className:"B",children:[" ",Object(j.jsx)(k.a,{})]}),"log"]}),Object(j.jsxs)("p",{className:"create",onClick:function(){Ue(!0)},children:["show all  ",Object(j.jsxs)("span",{className:"B",children:[" ",Object(j.jsx)(k.a,{})]}),"log"]}),Object(j.jsxs)("button",{onClick:De,children:[Object(j.jsx)("span",{children:Object(j.jsx)(N.a,{})}),"Log out"]})]})})]}),Object(j.jsxs)("div",{className:"createBlogDiv",children:[Object(j.jsxs)("div",{className:"createBlogDiv1",style:{display:xe?"":"none"},children:[Object(j.jsx)("input",{className:"titleInput",placeholder:"Title",name:"title",value:ie,onChange:function(e){var t=e.target;return le(t.value)}}),Object(j.jsxs)("div",{className:"next",children:[Object(j.jsx)("p",{onClick:function(){ve(!1),we(!0)},children:"Next"}),Object(j.jsx)("p",{onClick:function(){return ve(!1)},children:"Cancel"})]})]}),Object(j.jsxs)("div",{style:{display:Ne?"":"none"},children:[Object(j.jsx)("textarea",{rows:"10",cols:"30",placeholder:"Blog",name:"blog",value:je,onChange:function(e){var t=e.target;return be(t.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:Le,children:"add"}),Object(j.jsx)("button",{onClick:function(){we(!1),ve(!1)},children:"Cansel"})]})]})]}),Object(j.jsx)("div",{className:"blogsDiv1",children:Object(j.jsx)("ul",{children:Te.map((function(e){return Object(j.jsx)("div",{className:"blogsDiv",children:Object(j.jsxs)("li",{className:"blogsList",children:[Fe(e),Object(j.jsx)("p",{className:"title",children:e.title}),Object(j.jsx)("p",{className:"blog",children:e.blog}),Object(j.jsxs)("div",{className:"likesDiv",children:[Object(j.jsxs)("div",{className:"likesDiv1",children:[K?e.likerUsers.includes(K.id)?Object(j.jsx)("p",{className:"unlike",onClick:function(){return Ae(e)},children:Object(j.jsx)(g.a,{className:"heart",color:"red"})}):Object(j.jsx)("p",{className:"like",onClick:function(){return Re(e)},children:Object(j.jsx)(g.b,{className:"heart"})}):"",K?null:Object(j.jsx)("p",{className:"unlike",children:Object(j.jsx)(g.a,{className:"heart"})}),Object(j.jsxs)("p",{className:"likes",children:[e.likes,"  likes"]})]}),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{className:"author",children:["author ",e.user.username]})})]})]},e.id)},e.id)}))})})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),y()}},[[50,1,2]]]);
//# sourceMappingURL=main.3e9a6bd8.chunk.js.map