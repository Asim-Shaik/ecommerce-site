(this["webpackJsonpcrafter-yard"]=this["webpackJsonpcrafter-yard"]||[]).push([[0],{57:function(e,n){},58:function(e,n){},92:function(e,n,t){},93:function(e,n,t){},94:function(e,n,t){},95:function(e,n,t){"use strict";t.r(n);var c,a,r,i,s,o,l,j,b,d,p,h,u,x,O,g,f,m,v,y,w,k,C=t(1),N=t(24),S=t.n(N),I=t(8),z=t(13),R=t(25),E=Object(R.b)({name:"cart",initialState:{products:[],quantity:0,total:0},reducers:{addProduct:function(e,n){e.quantity+=1,e.products.push(n.payload),e.total+=n.payload.price*n.payload.quantity},clear:function(e){e.quantity=0,e.products=[],e.total=0}}}),P=E.actions,A=P.addProduct,T=P.clear,D=E.reducer,U=Object(R.b)({name:"user",initialState:{currentUser:null,isFetching:!1,error:!1},reducers:{loginStart:function(e){e.isFetching=!0},loginSuccess:function(e,n){e.isFetching=!1,e.currentUser=n.payload},loginFailure:function(e){e.isFetching=!1,e.error=!0},logout:function(e){e.currentUser=null,e.isFetching=!1,e.error=!1}}}),Y=U.actions,F=Y.loginStart,_=Y.loginSuccess,q=Y.loginFailure,L=Y.logout,M=U.reducer,J=t(21),B=t(52),G={key:"root",version:1,storage:t.n(B).a},H=Object(z.b)({user:M,cart:D}),X=Object(J.g)(G,H),W=Object(R.a)({reducer:X,middleware:function(e){return e({serializableCheck:{ignoredActions:[J.a,J.f,J.b,J.c,J.d,J.e]}})}}),V=Object(J.h)(W),Q=t(53),Z=t(9),K=t.n(Z),$=t(15),ee=t(39),ne=t(6),te=t(2),ce=t(118),ae=t(119),re=t(5),ie=t(3),se=t(110),oe=t(111),le=t(112),je=t(113),be=t(114),de=t(115),pe=t(116),he=function(e){return Object(ie.a)(c||(c=Object(te.a)(["\n    @media only screen and (max-width: 380px) {\n      ","\n    }\n  "])),e)},ue=t(0),xe=ie.b.div(a||(a=Object(te.a)(["\n  display: flex;\n  ","\n"])),he({flexDirection:"column"})),Oe=ie.b.div(r||(r=Object(te.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n"]))),ge=ie.b.h1(i||(i=Object(te.a)([""]))),fe=ie.b.p(s||(s=Object(te.a)(["\n  margin: 20px 0px;\n"]))),me=ie.b.div(o||(o=Object(te.a)(["\n  display: flex;\n"]))),ve=ie.b.div(l||(l=Object(te.a)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  color: white;\n  background-color: #",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n"])),(function(e){return e.color})),ye=ie.b.div(j||(j=Object(te.a)(["\n  flex: 1;\n  padding: 20px;\n  ","\n"])),he({display:"none"})),we=ie.b.h3(b||(b=Object(te.a)(["\n  margin-bottom: 30px;\n"]))),ke=(ie.b.ul(d||(d=Object(te.a)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n"]))),ie.b.li(p||(p=Object(te.a)(["\n  width: 50%;\n  margin-bottom: 10px;\n"]))),ie.b.div(h||(h=Object(te.a)(["\n  flex: 1;\n  padding: 20px;\n  ","\n"])),he({backgroundColor:"#fff8f8"}))),Ce=ie.b.div(u||(u=Object(te.a)(["\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n"]))),Ne=ie.b.img(x||(x=Object(te.a)(["\n  width: 50%;\n"]))),Se=function(){return Object(ue.jsxs)(xe,{children:[Object(ue.jsxs)(Oe,{children:[Object(ue.jsx)(ge,{children:"Your Garden"}),Object(ue.jsx)(fe,{children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\u2019t look even slightly believable."}),Object(ue.jsxs)(me,{children:[Object(ue.jsx)(ve,{color:"3B5999",children:Object(ue.jsx)(se.a,{})}),Object(ue.jsx)(ve,{color:"E4405F",children:Object(ue.jsx)(oe.a,{})}),Object(ue.jsx)(ve,{color:"55ACEE",children:Object(ue.jsx)(le.a,{})}),Object(ue.jsx)(ve,{color:"E60023",children:Object(ue.jsx)(je.a,{})})]})]}),Object(ue.jsx)(ye,{}),Object(ue.jsxs)(ke,{children:[Object(ue.jsx)(we,{children:"Contact"}),Object(ue.jsxs)(Ce,{children:[Object(ue.jsx)(be.a,{style:{marginRight:"10px"}})," Comba, behind loyola high school"]}),Object(ue.jsxs)(Ce,{children:[Object(ue.jsx)(de.a,{style:{marginRight:"10px"}})," +91 64738 784374"]}),Object(ue.jsxs)(Ce,{children:[Object(ue.jsx)(pe.a,{style:{marginRight:"10px"}})," samplemail@gmail.com"]}),Object(ue.jsx)(Ne,{src:"https://i.ibb.co/Qfvn4z6/payment.png"})]})]})},Ie=t(117),ze=t(37),Re=t.n(ze),Ee=t(10),Pe=ie.b.div(O||(O=Object(te.a)(["\n  height: 60px;\n"]))),Ae=ie.b.div(g||(g=Object(te.a)(["\n  padding: 10px 20px;\n  display: flex;\n  justify-content: space-between;\n"]))),Te=ie.b.div(f||(f=Object(te.a)(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n"]))),De=ie.b.button(m||(m=Object(te.a)(["\n  width: 25%;\n  padding: 5px;\n  height: 75%;\n  background-color: black;\n  color: white;\n  font-weight: 600;\n  margin-left: 10px;\n"]))),Ue=ie.b.div(v||(v=Object(te.a)(["\n  flex: 1;\n  text-align: center;\n"]))),Ye=ie.b.h1(y||(y=Object(te.a)(["\n  font-wieght: bold;\n"]))),Fe=ie.b.div(w||(w=Object(te.a)(["\n  flex: 1;\n  display: flex;\n  align-item: center;\n  justify-content: flex-end;\n"]))),_e=ie.b.div(k||(k=Object(te.a)(["\n  margin-left: 25px;\n  font-size: 1.2rem;\n  cursor: pointer;\n"])));var qe,Le,Me,Je,Be,Ge,He,Xe,We,Ve,Qe,Ze,Ke,$e,en,nn,tn,cn,an,rn,sn,on,ln,jn,bn,dn,pn,hn,un,xn,On,gn,fn,mn,vn=function(){var e=Object(I.b)(),n=Object(I.c)((function(e){return e.cart.quantity}));return console.log(n),Object(ue.jsx)(Pe,{children:Object(ue.jsxs)(Ae,{children:[Object(ue.jsx)(Te,{children:Object(ue.jsx)(De,{onClick:function(n){n.preventDefault(),e(L())},children:"Logout"})}),Object(ue.jsx)(Ue,{children:Object(ue.jsx)(Ye,{children:Object(ue.jsx)("i",{children:"Your Garden"})})}),Object(ue.jsxs)(Fe,{children:[Object(ue.jsx)(Ee.b,{to:"/register",children:Object(ue.jsx)(_e,{children:"Register"})}),Object(ue.jsx)(Ee.b,{to:"/login",children:Object(ue.jsx)(_e,{children:"Sign in"})}),Object(ue.jsx)(Ee.b,{to:"/cart",children:Object(ue.jsx)(_e,{children:Object(ue.jsx)(Ie.a,{badgeContent:n,color:"primary",children:Object(ue.jsx)(Re.a,{})})})})]})]})})},yn=t(16),wn=t.n(yn),kn="http://localhost:5000/api",Cn=wn.a.create({baseURL:kn}),Nn=(wn.a.create({baseURL:kn,header:{token:"Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDdmZmUyNDY5NDRhMzljY2M3MGJhNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDkzNTM4NjAsImV4cCI6MTY0OTYxMzA2MH0.3dvMnCWtve9FY9983qYNc08F_LufoXsByJf50T7uvfs")}}),ie.b.div(qe||(qe=Object(te.a)([""])))),Sn=ie.b.div(Le||(Le=Object(te.a)(["\n  padding: 50px;\n  display: flex;\n  ","\n"])),he({padding:"10px",flexDirection:"column"})),In=ie.b.div(Me||(Me=Object(te.a)(["\n  flex: 1;\n"]))),zn=ie.b.img(Je||(Je=Object(te.a)(["\n  width: 100%;\n  height: 90vh;\n  object-fit: cover;\n  ","\n"])),he({height:"40vh"})),Rn=ie.b.div(Be||(Be=Object(te.a)(["\n  flex: 1;\n  padding: 0px 50px;\n  ","\n"])),he({padding:"10px"})),En=ie.b.h1(Ge||(Ge=Object(te.a)(["\n  font-weight: 200;\n"]))),Pn=ie.b.p(He||(He=Object(te.a)(["\n  margin: 20px 0px;\n  font-size:1.5rem;\n"]))),An=ie.b.span(Xe||(Xe=Object(te.a)(["\n  font-weight: 100;\n  font-size: 40px;\n"]))),Tn=ie.b.div(We||(We=Object(te.a)(["\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  ","\n"])),he({width:"100%"})),Dn=ie.b.div(Ve||(Ve=Object(te.a)(["\n  display: flex;\n  align-items: center;\n  font-weight: 700;\n"]))),Un=ie.b.span(Qe||(Qe=Object(te.a)(["\n  width: 30px;\n  height: 30px;\n  border-radius: 10px;\n  border: 1px solid teal;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0px 5px;\n"]))),Yn=ie.b.button(Ze||(Ze=Object(te.a)(["\n  padding: 15px;\n  border: 2px solid teal;\n  background-color: white;\n  cursor: pointer;\n  font-weight: 500;\n\n  &:hover {\n    background-color: #f8f4f4;\n  }\n"]))),Fn=function(){var e=Object(re.e)().pathname.split("/")[2],n=Object(C.useState)({}),t=Object(ne.a)(n,2),c=t[0],a=t[1],r=Object(C.useState)(1),i=Object(ne.a)(r,2),s=i[0],o=i[1],l=Object(I.b)(),j=function(e){"desc"===e?s>1&&o(s-1):o(s+1)};return Object(C.useEffect)((function(){var n=function(){var n=Object($.a)(K.a.mark((function n(){var t;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Cn.get("/products/".concat(e));case 3:t=n.sent,a(t.data),console.log(t.data),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),Object(ue.jsxs)(Nn,{children:[Object(ue.jsx)(vn,{}),Object(ue.jsxs)(Sn,{children:[Object(ue.jsx)(In,{children:Object(ue.jsx)(zn,{src:c.image})}),Object(ue.jsxs)(Rn,{children:[Object(ue.jsx)(En,{children:c.name}),Object(ue.jsx)(Pn,{children:c.description}),Object(ue.jsxs)(An,{children:["Rs ",c.price]}),Object(ue.jsxs)(Tn,{children:[Object(ue.jsxs)(Dn,{children:[Object(ue.jsx)(ce.a,{onClick:function(){return j("desc")}}),Object(ue.jsx)(Un,{children:s}),Object(ue.jsx)(ae.a,{onClick:function(){return j("inc")}})]}),Object(ue.jsx)(Yn,{onClick:function(){l(A(Object(ee.a)(Object(ee.a)({},c),{},{quantity:s})))},children:"ADD TO CART"})]})]})]}),Object(ue.jsx)(Se,{})]})},_n=(ie.b.div(Ke||(Ke=Object(te.a)(["\n  height: 30px;\n  background-color: teal;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 500;\n"]))),[{id:1,img:"https://images.pexels.com/photos/5760879/pexels-photo-5760879.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",title:"Sell your craft",desc:"get your craft to others",bg:"f5fafd"},{id:2,img:"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",title:"technology",desc:"get your craft to others",bg:"fcf1ed"},{id:3,img:"https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",title:"fashion",desc:"get your craft to others",bg:"fbf0f4"}]),qn=[{id:1,img:"https://images.pexels.com/photos/6598664/pexels-photo-6598664.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",title:"Arts & Handicrafts",cat:"handicrafts "},{id:2,img:"https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 ",title:"Technology",cat:"technology"},{id:3,img:"https://images.pexels.com/photos/1078958/pexels-photo-1078958.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",title:"Fashion",cat:"fashion"}],Ln=ie.b.div($e||($e=Object(te.a)(["\n  flex: 1;\n  margin: 3px;\n  height: 70vh;\n  position: relative;\n"]))),Mn=ie.b.img(en||(en=Object(te.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  ","\n"])),he({height:"20vh"})),Jn=ie.b.div(nn||(nn=Object(te.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),Bn=ie.b.h1(tn||(tn=Object(te.a)(["\n  color: white;\n  margin: 20px;\n"]))),Gn=ie.b.button(cn||(cn=Object(te.a)(["\n  border: none;\n  padding: 10px;\n  background-color: white;\n  color: grey;\n  cursor: pointer;\n  font-weight: 600;\n"]))),Hn=function(e){var n=e.item;return Object(ue.jsx)(Ln,{children:Object(ue.jsxs)(Ee.b,{to:"/products/".concat(n.cat),children:[Object(ue.jsx)(Mn,{src:n.img}),Object(ue.jsxs)(Jn,{children:[Object(ue.jsx)(Bn,{children:n.title}),Object(ue.jsx)(Gn,{children:"Shop now"})]})]})})},Xn=ie.b.div(an||(an=Object(te.a)(["\n  display: flex;\n  padding: 20px;\n  justify-content: center;\n"]))),Wn=function(){return Object(ue.jsx)(Xn,{children:qn.map((function(e){return Object(ue.jsx)(Hn,{item:e},e.id)}))})},Vn=t(120),Qn=ie.b.div(rn||(rn=Object(te.a)(["\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n"]))),Zn=ie.b.div(sn||(sn=Object(te.a)(["\n  flex: 1;\n  margin: 5px;\n  min-width: 280px;\n  height: 350px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: lightgrey;\n  position: relative;\n  transition: all 0.5s ease;\n\n  &:hover "," {\n    opacity: 1;\n  }\n"])),Qn),Kn=ie.b.div(on||(on=Object(te.a)(["\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background-color: white;\n  position: absolute;\n"]))),$n=ie.b.img(ln||(ln=Object(te.a)(["\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  z-index: 2;\n"]))),et=ie.b.div(jn||(jn=Object(te.a)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 10px;\n  transition: all 0.5s ease;\n\n  &:hover {\n    background-color: lightcyan;\n    transform: scale(1.1);\n  }\n"]))),nt=function(e){var n=e.item;return Object(ue.jsxs)(Zn,{children:[Object(ue.jsx)(Kn,{}),Object(ue.jsx)($n,{src:n.image}),Object(ue.jsx)(Qn,{children:Object(ue.jsx)(et,{children:Object(ue.jsx)(Ee.b,{to:"/product/".concat(n._id),children:Object(ue.jsx)(Vn.a,{})})})})]})},tt=ie.b.div(bn||(bn=Object(te.a)(["\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]))),ct=function(e){var n=e.cat,t=Object(C.useState)([]),c=Object(ne.a)(t,2),a=c[0],r=c[1];return Object(C.useEffect)((function(){var e=function(){var e=Object($.a)(K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,wn.a.get(n?"http://localhost:5000/api/products?cat=".concat(n):"http://localhost:5000/api/products");case 3:t=e.sent,r(t.data.products),console.log(t.data),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),Object(ue.jsx)(tt,{children:a.map((function(e){return Object(ue.jsx)(nt,{item:e},e._id)}))})},at=t(121),rt=t(122),it=ie.b.div(dn||(dn=Object(te.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  position: relative;\n  overflow: hidden;\n  ","\n"])),he({display:"none"})),st=ie.b.div(pn||(pn=Object(te.a)(["\n  width: 50px;\n  height: 50px;\n  background-color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: ",";\n  right: ",";\n  margin: auto;\n  cursor: pointer;\n  opacity: 0.5;\n  z-index: 2;\n"])),(function(e){return"left"===e.direction&&"10px"}),(function(e){return"right"===e.direction&&"10px"})),ot=ie.b.div(hn||(hn=Object(te.a)(["\n  height: 100%;\n  display: flex;\n  transition: all 1.5s ease;\n  transform: translateX(","vw);\n"])),(function(e){return-100*e.slideIndex})),lt=ie.b.div(un||(un=Object(te.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  background-color:#e7ebe1;\n"]))),jt=ie.b.div(xn||(xn=Object(te.a)(["\n  // height: 100%;\n  flex: 1;\n"]))),bt=ie.b.img(On||(On=Object(te.a)(["\n  height: 80%;\n"]))),dt=ie.b.div(gn||(gn=Object(te.a)(["\n  flex: 1;\n  padding: 50px;\n"]))),pt=ie.b.h1(fn||(fn=Object(te.a)(["\n  font-size: 70px;\n  text-transform: capitalize;   \n"]))),ht=ie.b.p(mn||(mn=Object(te.a)(["\n  margin: 50px 0px;\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 3px;\n"]))),ut=function(){var e=Object(C.useState)(0),n=Object(ne.a)(e,2),t=n[0],c=n[1],a=function(e){c("left"===e?t>0?t-1:2:t<2?t+1:0)};return Object(ue.jsxs)(it,{children:[Object(ue.jsx)(st,{direction:"left",onClick:function(){return a("left")},children:Object(ue.jsx)(at.a,{})}),Object(ue.jsx)(ot,{slideIndex:t,children:_n.map((function(e){return Object(ue.jsxs)(lt,{bg:e.bg,children:[Object(ue.jsx)(jt,{children:Object(ue.jsx)(bt,{src:e.img})}),Object(ue.jsxs)(dt,{children:[Object(ue.jsx)(pt,{children:e.title}),Object(ue.jsx)(ht,{children:e.desc})]})]},e.id)}))}),Object(ue.jsx)(st,{direction:"right",onClick:function(){return a("right")},children:Object(ue.jsx)(rt.a,{})})]})};var xt,Ot,gt,ft,mt,vt,yt,wt,kt,Ct,Nt,St,It,zt,Rt,Et,Pt,At,Tt,Dt,Ut,Yt,Ft,_t,qt,Lt,Mt,Jt,Bt,Gt,Ht,Xt,Wt,Vt,Qt,Zt,Kt,$t,ec,nc,tc,cc,ac,rc,ic=function(){return Object(ue.jsxs)("div",{children:[Object(ue.jsx)(vn,{}),Object(ue.jsx)(ut,{}),Object(ue.jsx)(Wn,{}),Object(ue.jsx)(ct,{}),Object(ue.jsx)(Se,{})]})},sc=ie.b.div(xt||(xt=Object(te.a)([""]))),oc=ie.b.h1(Ot||(Ot=Object(te.a)(["\n  margin: 20px;\n  font-size:2rem;\n  text-transform:capitalize;\n  text-align:center;\n"]))),lc=function(){var e=Object(re.e)().pathname.split("/")[2];return Object(ue.jsxs)(sc,{children:[Object(ue.jsx)(vn,{}),Object(ue.jsx)(oc,{children:e}),Object(ue.jsx)(ct,{cat:e}),Object(ue.jsx)(Se,{})]})},jc=ie.b.div(gt||(gt=Object(te.a)(['\n  width: 100vw;\n  height: 100vh;\n  background: linear-gradient(\n      rgba(255, 255, 255, 0.5),\n      rgba(255, 255, 255, 0.5)\n    ),\n    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")\n      center;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n']))),bc=ie.b.div(ft||(ft=Object(te.a)(["\n  width: 40%;\n  padding: 20px;\n  background-color: white;\n  ","\n"])),he({width:"75%"})),dc=ie.b.h1(mt||(mt=Object(te.a)(["\n  font-size: 24px;\n  font-weight: 300;\n"]))),pc=ie.b.form(vt||(vt=Object(te.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),hc=ie.b.input(yt||(yt=Object(te.a)(["\n  flex: 1;\n  min-width: 40%;\n  margin: 20px 10px 0px 0px;\n  padding: 10px;\n"]))),uc=ie.b.span(wt||(wt=Object(te.a)(["\n  font-size: 12px;\n  margin: 20px 0px;\n"]))),xc=ie.b.button(kt||(kt=Object(te.a)(["\n  width: 40%;\n  border: none;\n  padding: 15px 20px;\n  background-color: teal;\n  color: white;\n  cursor: pointer;\n"]))),Oc=function(){var e=Object(C.useState)(""),n=Object(ne.a)(e,2),t=n[0],c=n[1],a=Object(C.useState)(""),r=Object(ne.a)(a,2),i=r[0],s=r[1],o=Object(C.useState)(""),l=Object(ne.a)(o,2),j=l[0],b=l[1],d=function(){var e=Object($.a)(K.a.mark((function e(n){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,wn.a.post("http://localhost:5000/api/user",{username:t,email:j,password:i});case 4:e.sent.data&&window.location.replace("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}();return Object(ue.jsx)(jc,{children:Object(ue.jsxs)(bc,{children:[Object(ue.jsx)(dc,{children:"CREATE AN ACCOUNT"}),Object(ue.jsxs)(pc,{children:[Object(ue.jsx)(hc,{placeholder:"name",onChange:function(e){return c(e.target.value)}}),Object(ue.jsx)(hc,{type:"password",placeholder:"password",onChange:function(e){return s(e.target.value)}}),Object(ue.jsx)(hc,{placeholder:"email",onChange:function(e){return b(e.target.value)}}),Object(ue.jsxs)(uc,{children:["By creating an account, I consent to the processing of my personal data in accordance with the ",Object(ue.jsx)("b",{children:"PRIVACY POLICY"})]}),Object(ue.jsx)(xc,{onClick:d,children:"CREATE"})]})]})})},gc=function(){var e=Object($.a)(K.a.mark((function e(n,t){var c;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(F()),e.prev=1,e.next=4,Cn.post("/login",t);case 4:c=e.sent,n(_(c.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(q());case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t){return e.apply(this,arguments)}}(),fc=ie.b.div(Ct||(Ct=Object(te.a)(['\n  width: 100vw;\n  height: 100vh;\n  background: linear-gradient(\n      rgba(255, 255, 255, 0.5),\n      rgba(255, 255, 255, 0.5)\n    ),\n    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")\n      center;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n']))),mc=ie.b.div(Nt||(Nt=Object(te.a)(["\n  width: 25%;\n  padding: 20px;\n  background-color: white;\n  ","\n"])),he({width:"75%"})),vc=ie.b.h1(St||(St=Object(te.a)(["\n  font-size: 24px;\n  font-weight: 300;\n"]))),yc=ie.b.form(It||(It=Object(te.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),wc=ie.b.input(zt||(zt=Object(te.a)(["\n  flex: 1;\n  min-width: 40%;\n  margin: 10px 0;\n  padding: 10px;\n"]))),kc=ie.b.button(Rt||(Rt=Object(te.a)(["\n  width: 40%;\n  border: none;\n  padding: 15px 20px;\n  background-color: teal;\n  color: white;\n  cursor: pointer;\n  margin-bottom: 10px;\n  &:disabled {\n    color: green;\n    cursor: not-allowed;\n  }\n"]))),Cc=ie.b.a(Et||(Et=Object(te.a)(["\n  margin: 5px 0px;\n  font-size: 12px;\n  text-decoration: underline;\n  cursor: pointer;\n"]))),Nc=ie.b.span(Pt||(Pt=Object(te.a)(["\n  color: red;\n"]))),Sc=function(){var e=Object(C.useState)(""),n=Object(ne.a)(e,2),t=n[0],c=n[1],a=Object(C.useState)(""),r=Object(ne.a)(a,2),i=r[0],s=r[1],o=Object(I.b)(),l=Object(I.c)((function(e){return e.user})),j=l.isFetching,b=l.error;return Object(ue.jsx)(fc,{children:Object(ue.jsxs)(mc,{children:[Object(ue.jsx)(vc,{children:"SIGN IN"}),Object(ue.jsxs)(yc,{children:[Object(ue.jsx)(wc,{placeholder:"username",onChange:function(e){return c(e.target.value)}}),Object(ue.jsx)(wc,{placeholder:"password",type:"password",onChange:function(e){return s(e.target.value)}}),Object(ue.jsx)(kc,{onClick:function(e){e.preventDefault(),gc(o,{username:t,password:i})},disabled:j,children:"LOGIN"}),b&&Object(ue.jsx)(Nc,{children:"Something went wrong..."}),Object(ue.jsx)(Cc,{children:"CREATE A NEW ACCOUNT"})]})]})})},Ic=t(57),zc=t.n(Ic),Rc=(t(91),ie.b.div(At||(At=Object(te.a)([""])))),Ec=ie.b.div(Tt||(Tt=Object(te.a)(["\n  padding: 20px;\n  ","\n"])),he({padding:"10px"})),Pc=ie.b.h1(Dt||(Dt=Object(te.a)(["\n  font-weight: 300;\n  text-align: center;\n"]))),Ac=ie.b.div(Ut||(Ut=Object(te.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n"]))),Tc=ie.b.button(Yt||(Yt=Object(te.a)(["\n  padding: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  border: ",";\n  background-color: ",";\n  color: ",";\n"])),(function(e){return"filled"===e.type&&"none"}),(function(e){return"filled"===e.type?"black":"transparent"}),(function(e){return"filled"===e.type&&"white"})),Dc=ie.b.div(Ft||(Ft=Object(te.a)(["\n  ","\n"])),he({display:"none"})),Uc=(ie.b.span(_t||(_t=Object(te.a)(["\n  text-decoration: underline;\n  cursor: pointer;\n  margin: 0px 10px;\n"]))),ie.b.div(qt||(qt=Object(te.a)(["\n  display: flex;\n  justify-content: space-between;\n  ","\n"])),he({flexDirection:"column"}))),Yc=ie.b.div(Lt||(Lt=Object(te.a)(["\n  flex: 3;\n"]))),Fc=ie.b.div(Mt||(Mt=Object(te.a)(["\n  display: flex;\n  justify-content: space-between;\n  ","\n"])),he({flexDirection:"column"})),_c=ie.b.div(Jt||(Jt=Object(te.a)(["\n  flex: 2;\n  display: flex;\n"]))),qc=ie.b.img(Bt||(Bt=Object(te.a)(["\n  width: 200px;\n"]))),Lc=ie.b.div(Gt||(Gt=Object(te.a)(["\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n"]))),Mc=ie.b.span(Ht||(Ht=Object(te.a)([""]))),Jc=ie.b.span(Xt||(Xt=Object(te.a)([""]))),Bc=ie.b.div(Wt||(Wt=Object(te.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),Gc=ie.b.div(Vt||(Vt=Object(te.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),Hc=ie.b.div(Qt||(Qt=Object(te.a)(["\n  font-size: 24px;\n  margin: 5px;\n  ","\n"])),he({margin:"5px 15px"})),Xc=ie.b.div(Zt||(Zt=Object(te.a)(["\n  font-size: 30px;\n  font-weight: 200;\n  ","\n"])),he({marginBottom:"20px"})),Wc=ie.b.hr(Kt||(Kt=Object(te.a)(["\n  background-color: #eee;\n  border: none;\n  height: 1px;\n"]))),Vc=ie.b.div($t||($t=Object(te.a)(["\n  flex: 1;\n  border: 0.5px solid lightgray;\n  border-radius: 10px;\n  padding: 20px;\n  height: 50vh;\n"]))),Qc=ie.b.h1(ec||(ec=Object(te.a)(["\n  font-weight: 200;\n"]))),Zc=ie.b.div(nc||(nc=Object(te.a)(["\n  margin: 30px 0px;\n  display: flex;\n  justify-content: space-between;\n  font-weight: ",";\n  font-size: ",";\n"])),(function(e){return"total"===e.type&&"500"}),(function(e){return"total"===e.type&&"24px"})),Kc=ie.b.span(tc||(tc=Object(te.a)([""]))),$c=ie.b.span(cc||(cc=Object(te.a)([""]))),ea=ie.b.button(ac||(ac=Object(te.a)(["\n  width: 100%;\n  padding: 10px;\n  background-color: black;\n  color: white;\n  font-weight: 600;\n  margin:10px;\n"]))),na=function(){var e=Object(I.b)(),n=Object(I.c)((function(e){return e.cart}));return console.log(n),Object(ue.jsxs)(Rc,{children:[Object(ue.jsx)(vn,{}),Object(ue.jsxs)(Ec,{children:[Object(ue.jsx)(Pc,{children:"YOUR BAG"}),Object(ue.jsxs)(Ac,{children:[Object(ue.jsx)(Tc,{children:"CONTINUE SHOPPING"}),Object(ue.jsx)(Dc,{})]}),Object(ue.jsxs)(Uc,{children:[Object(ue.jsxs)(Yc,{children:[0===n.products.length?Object(ue.jsxs)("div",{children:[Object(ue.jsx)("i",{className:"fa fa-shopping-bag icon"}),Object(ue.jsx)("div",{className:"text",children:"Your cart is empty. Go shop!"})]}):n.products.map((function(e){return Object(ue.jsxs)(Fc,{children:[Object(ue.jsxs)(_c,{children:[Object(ue.jsx)(qc,{src:e.image}),Object(ue.jsxs)(Lc,{children:[Object(ue.jsxs)(Mc,{children:[Object(ue.jsx)("b",{children:"Product:"}),e.name]}),Object(ue.jsxs)(Jc,{children:[Object(ue.jsx)("b",{children:"ID:"})," ",e._id]})]})]}),Object(ue.jsxs)(Bc,{children:[Object(ue.jsxs)(Gc,{children:[Object(ue.jsx)(ae.a,{}),Object(ue.jsx)(Hc,{children:e.quantity}),Object(ue.jsx)(ce.a,{})]}),Object(ue.jsx)(Xc,{children:e.price*e.quantity})]})]})})),Object(ue.jsx)(Wc,{})]}),Object(ue.jsxs)(Vc,{children:[Object(ue.jsx)(Qc,{children:"ORDER SUMMARY"}),Object(ue.jsxs)(Zc,{type:"total",children:[Object(ue.jsx)(Kc,{children:"Total"}),Object(ue.jsx)($c,{children:n.total})]}),Object(ue.jsx)(Ee.b,{to:"/order",children:Object(ue.jsx)(ea,{children:"CHECKOUT NOW"})}),Object(ue.jsx)(ea,{onClick:function(n){n.preventDefault(),e(T())},children:"Clear"})]})]})]}),Object(ue.jsx)(Se,{})]})},ta=t(58),ca=t.n(ta),aa=(t(92),t(93),t.p+"static/media/do.9960037a.png"),ra=ie.b.div(rc||(rc=Object(te.a)(["\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"])));var ia=function(){var e=Object(C.useState)([]),n=Object(ne.a)(e,2),t=n[0],c=n[1],a=Object(re.e)().pathname.split("/")[2];return Object(C.useEffect)((function(){var e=function(){var e=Object($.a)(K.a.mark((function e(){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,wn.a.get("http://localhost:5000/api/products?shop=".concat(a));case 3:n=e.sent,c(n.data.products),console.log(n.data),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[a]),Object(ue.jsx)("div",{className:"singleshop",children:Object(ue.jsxs)("div",{className:"details",children:[Object(ue.jsxs)("div",{className:"shop-top",children:[Object(ue.jsx)("div",{className:"shop-image-container",children:Object(ue.jsx)("img",{src:aa,alt:"",className:"shopimage"})}),Object(ue.jsxs)("div",{className:"shopdetails",children:[Object(ue.jsx)("h2",{children:"Shop name"}),Object(ue.jsx)("p",{children:"Lorem ipsum dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, tempore."})]})]}),Object(ue.jsx)("div",{className:"shop-lower",children:Object(ue.jsx)(ra,{children:t.map((function(e){return Object(ue.jsx)(nt,{item:e},e._id)}))})})]})})},sa=(t(94),function(){var e=Object(I.c)((function(e){return e.cart})),n=Object(I.c)((function(e){return e.user})),t=Object(C.useState)(),c=Object(ne.a)(t,2),a=c[0],r=c[1],i=Object(C.useState)(),s=Object(ne.a)(i,2),o=s[0],l=s[1],j=Object(C.useState)(),b=Object(ne.a)(j,2),d=b[0],p=b[1],h=Object(C.useState)(),u=Object(ne.a)(h,2),x=u[0],O=u[1],g=Object(C.useState)([]),f=Object(ne.a)(g,2),m=f[0],v=f[1],y=Object(C.useState)({}),w=Object(ne.a)(y,2),k=w[0],N=w[1],S=Object(C.useState)(),z=Object(ne.a)(S,2),R=z[0],E=z[1],P=Object(C.useState)(),A=Object(ne.a)(P,2),T=A[0],D=A[1],U=Object(C.useState)(),Y=Object(ne.a)(U,2),F=Y[0],_=Y[1],q=Object(C.useState)(),L=Object(ne.a)(q,2),M=L[0],J=L[1],B=Object(C.useState)(),G=Object(ne.a)(B,2),H=G[0],X=G[1],W=function(){var t=Object($.a)(K.a.mark((function t(c){var i,s,j,b;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),console.log(x),t.next=4,v(n.currentUser._id);case 4:return console.log(m),i={orders:{productdetails:{productname:a,productimage:o,productquantity:d},userId:m,shopId:x,landmarks:R,address:k,pincode:T,phone:F,email:M,name:H}},s={key:"rzp_live_UH49MSqCjEE8OR",key_secret:"tHDfOSSXtso0KBEaNvbd3kX5",amount:100*e.total,currency:"INR",name:"STARTUP_PROJECTS",description:"for testing purpose",handler:function(e){alert(e.razorpay_payment_id)},prefill:{name:"Velmurugan",email:"mvel1620r@gmail.com",contact:"7904425033"},notes:{address:"Razorpay Corporate office"},theme:{color:"#3399cc"}},new window.Razorpay(s).open(),console.log(i),t.prev=10,t.next=13,e.products.map((function(e){r(e.name),l(e.image),p(e.quantity);var n=e.shopname,t=function(){var e=Object($.a)(K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,wn.a.get("http://localhost:5000/api/shop?shop=".concat(n));case 2:t=e.sent,O(t.data.shop.map((function(e){return e._id})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t()}));case 13:return t.next=15,wn.a.patch("http://localhost:5000/api/shop/".concat(x),i);case 15:j=t.sent,console.log(j),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(10),console.log(t.t0);case 22:return t.prev=22,t.next=25,wn.a.patch("http://localhost:5000/api/user/".concat(m),i);case 25:b=t.sent,console.log(b),t.next=32;break;case 29:t.prev=29,t.t1=t.catch(22),console.log(t.t1);case 32:case"end":return t.stop()}}),t,null,[[10,19],[22,29]])})));return function(e){return t.apply(this,arguments)}}();return Object(ue.jsx)("div",{className:"conatiner",children:Object(ue.jsxs)("div",{className:"newProduct",children:[Object(ue.jsx)("h1",{className:"addProductTitle",children:"Order details"}),Object(ue.jsxs)("form",{className:"addProductForm",children:[Object(ue.jsxs)("div",{className:"addProductItem",children:[Object(ue.jsx)("label",{children:"Email"}),Object(ue.jsx)("input",{name:"email",type:"email",placeholder:"james@mail.com",onChange:function(e){return J(e.target.value)}})]}),Object(ue.jsxs)("div",{className:"addProductItem",children:[Object(ue.jsx)("label",{children:"Name"}),Object(ue.jsx)("input",{name:"name",type:"text",placeholder:"eg: Asim shaik",onChange:function(e){return X(e.target.value)}})]}),Object(ue.jsxs)("div",{className:"addProductItem",children:[Object(ue.jsx)("label",{children:"Address"}),Object(ue.jsx)("input",{name:"Address",type:"textarea",placeholder:"Home address",onChange:function(e){return N(e.target.value)}})]}),Object(ue.jsxs)("div",{className:"addProductItem",children:[Object(ue.jsx)("label",{children:"Landmarks"}),Object(ue.jsx)("input",{name:"landmarks",type:"text",placeholder:"eg: Hotel hayatt",onChange:function(e){return E(e.target.value)}})]}),Object(ue.jsxs)("div",{className:"addProductItem",children:[Object(ue.jsx)("label",{children:"Pincode"}),Object(ue.jsx)("input",{name:"Pincode",type:"text",placeholder:"eg: 403601",onChange:function(e){return D(e.target.value)}})]}),Object(ue.jsxs)("div",{className:"addProductItem",children:[Object(ue.jsx)("label",{children:"Phone Number"}),Object(ue.jsx)("input",{name:"Phone number",type:"text",placeholder:"eg: 7972926489",onChange:function(e){return _(e.target.value)}})]}),n?Object(ue.jsx)("button",{onClick:W,className:"addProductButton",children:"Place order"}):Object(ue.jsx)(Ee.b,{to:"/login",children:"login please"})]})]})})});var oa=function(){var e=Object(I.c)((function(e){return e.user.currentUser}));return console.log(e),Object(ue.jsx)("div",{className:"App",children:Object(ue.jsx)(Ee.a,{children:Object(ue.jsxs)(re.c,{children:[Object(ue.jsx)(re.a,{exact:!0,path:"/",element:Object(ue.jsx)(ic,{})}),Object(ue.jsx)(re.a,{path:"/products/:category",element:Object(ue.jsx)(lc,{})}),Object(ue.jsx)(re.a,{path:"/products/newproduct",element:Object(ue.jsx)(ca.a,{})}),Object(ue.jsx)(re.a,{path:"/product/:id",element:Object(ue.jsx)(Fn,{})}),Object(ue.jsx)(re.a,{path:"/shop/createshop",element:Object(ue.jsx)(zc.a,{})}),Object(ue.jsx)(re.a,{path:"/shop/:shopname",element:Object(ue.jsx)(ia,{})}),Object(ue.jsx)(re.a,{path:"/cart",element:Object(ue.jsx)(na,{})}),Object(ue.jsx)(re.a,{path:"/order",element:Object(ue.jsx)(sa,{})}),Object(ue.jsx)(re.a,{path:"/login",element:e?Object(ue.jsx)(ic,{}):Object(ue.jsx)(Sc,{})}),Object(ue.jsx)(re.a,{path:"/register",element:e?Object(ue.jsx)(ic,{}):Object(ue.jsx)(Oc,{})})]})})})};S.a.render(Object(ue.jsx)(I.a,{store:W,children:Object(ue.jsx)(Q.a,{loading:null,persistor:V,children:Object(ue.jsx)(oa,{})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.0fa7343a.chunk.js.map