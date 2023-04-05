"use strict";(self.webpackChunkepos=self.webpackChunkepos||[]).push([[280],{5280:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var s=a(9439),r=a(2791),n=a(4165),l=a(5861),c=a(7689),u=a(1788),o=a(9434),i=a(1840),m=(a(9806),a(7561)),x=a(184),d=function(e){var t=e.switchRegister,a=e.role,u=(0,c.s0)(),d=(0,o.I0)(),p=((0,c.TH)().state||{from:{pathname:"/"}}).from,g=(0,o.v9)(m.gs),b=(0,r.useState)(""),f=(0,s.Z)(b,2),h=f[0],y=f[1],j=(0,r.useState)(!1),N=(0,s.Z)(j,2),w=N[0],v=N[1],k=(0,r.useState)(""),Z=(0,s.Z)(k,2),P=Z[0],C=Z[1],S=(0,r.useState)(!1),D=(0,s.Z)(S,2),A=D[0],E=D[1];(0,r.useEffect)((function(){g&&u("/")}),[g]),(0,r.useEffect)((function(){y(""),C("")}),[]);var U=function(e){var t={message:"",status:!1};if(0===e)0===h.length?(t.message="Please input email",t.status=!1,v(!0)):/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(h)?0===P.length?(t.message="Please input password",t.status=!1,E(!0)):(t.message="",t.status=!0):(t.message="Invalid Email!",t.status=!1,v(!0));return t},W=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=U(0)).status){e.next=4;break}return d((0,i.jW)({message:t.message,status:"error"})),e.abrupt("return");case 4:d((0,m.jf)(h,P,a,p.pathname));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{className:"w-full px-[3rem] text-xl",children:[(0,x.jsxs)("div",{className:"flex flex-col my-[1rem] mb-[3rem] mt-[2rem]",children:[(0,x.jsx)("label",{className:"block uppercase tracking-wide text-gray-100 mb-2",children:"Email:"}),(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"email",value:h,onChange:function(e){y(e.target.value),v(!1)}}),(0,x.jsx)("p",{className:"".concat(w?"text-red-400":"text-[#404040]"," text-sm select-none"),children:"Email Address is not recognised. Please check again or register."})]}),(0,x.jsxs)("div",{className:"flex flex-col my-[1rem] mb-[3rem]",children:[(0,x.jsx)("label",{className:"block uppercase tracking-wide text-gray-100 mb-2",children:"Password:"}),(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"password",value:P,onChange:function(e){C(e.target.value),E(!1)}}),(0,x.jsx)("p",{className:"".concat(A?"text-red-400":"text-[#404040]"," text-sm select-none"),children:"Password incorrect/not found. Please check and try again."})]}),(0,x.jsxs)("div",{className:"flex justify-between",children:[(0,x.jsx)("button",{className:"w-[8rem] text-xl text-gray-100 text-left underline decoration-1 leading-[2.6rem]",onClick:function(){return t()},children:"Register"}),(0,x.jsx)("button",{className:"w-[8rem] text-xl leading-[2.6rem] rounded-[0.6rem] bg-[#D9D9D9] text-gray-800",onClick:function(){return W()},children:"Login"})]})]})},p=(a(1467),function(e){var t=e.switchLogin,a=e.role,d=e.currentGroup,p=e.setCurrentGroup,g=(0,c.s0)(),b=(0,o.I0)(),f=((0,o.v9)(m.mU),(0,o.v9)(m.xv)),h=(0,r.useState)(!1),y=(0,s.Z)(h,2),j=(y[0],y[1]),N=(0,r.useState)(""),w=(0,s.Z)(N,2),v=w[0],k=w[1],Z=(0,r.useState)(""),P=(0,s.Z)(Z,2),C=P[0],S=P[1],D=(0,r.useState)(""),A=(0,s.Z)(D,2),E=A[0],U=A[1],W=(0,r.useState)(""),I=(0,s.Z)(W,2),G=I[0],B=I[1],L=(0,r.useState)(""),R=(0,s.Z)(L,2),$=R[0],T=R[1],_=(0,r.useState)(""),H=(0,s.Z)(_,2),M=H[0],V=H[1],q=(0,r.useState)(""),z=(0,s.Z)(q,2),F=z[0],J=z[1],K=(0,r.useState)(""),O=(0,s.Z)(K,2),Q=O[0],X=O[1],Y=(0,r.useState)([]),ee=(0,s.Z)(Y,2),te=ee[0],ae=ee[1],se=(0,r.useState)([]),re=(0,s.Z)(se,2),ne=re[0],le=re[1],ce=(0,r.useState)([]),ue=(0,s.Z)(ce,2),oe=ue[0],ie=ue[1],me=(0,r.useState)(!1),xe=(0,s.Z)(me,2),de=xe[0],pe=xe[1],ge=(0,r.useState)(!1),be=(0,s.Z)(ge,2),fe=be[0],he=be[1],ye=(0,r.useState)(!1),je=(0,s.Z)(ye,2),Ne=je[0],we=je[1],ve=(0,r.useState)(!1),ke=(0,s.Z)(ve,2),Ze=ke[0],Pe=ke[1],Ce=(0,r.useState)(!1),Se=(0,s.Z)(Ce,2),De=Se[0],Ae=Se[1],Ee=(0,r.useState)(!1),Ue=(0,s.Z)(Ee,2),We=Ue[0],Ie=Ue[1],Ge=(0,r.useState)(!1),Be=(0,s.Z)(Ge,2),Le=Be[0],Re=Be[1],$e=(0,r.useState)(!1),Te=(0,s.Z)($e,2),_e=Te[0],He=Te[1],Me=(0,r.useState)(!1),Ve=(0,s.Z)(Me,2),qe=Ve[0],ze=Ve[1],Fe=(0,r.useState)(!1),Je=(0,s.Z)(Fe,2),Ke=Je[0],Oe=Je[1],Qe="merchant"===a?[(0,x.jsxs)("div",{className:"w-full h-full",children:[(0,x.jsxs)("div",{className:"flex flex-col mb-[0.5rem] mt-[1rem]",children:[(0,x.jsx)("label",{className:"block uppercase tracking-wide text-gray-100 mb-1",children:"Email:"}),(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"email",value:v,onChange:function(e){k(e.target.value),pe(!1)}}),(0,x.jsx)("p",{className:"".concat(de?"text-red-400":"text-[#404040]"," text-sm select-none"),children:"Email format incorrect. Please check and try again."})]}),(0,x.jsxs)("div",{className:"flex flex-col mb-[0.5rem]",children:[(0,x.jsx)("label",{className:"block uppercase tracking-wide text-gray-100 mb-1",children:"Password:"}),(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"password",value:C,onChange:function(e){S(e.target.value),he(!1)}}),(0,x.jsx)("p",{className:"".concat(fe?"text-red-400":"text-[#404040]"," text-sm select-none"),children:"Password must be alphanumeric, > 8 characters and contain one symbol."})]}),(0,x.jsxs)("div",{className:"flex flex-col mb-[0.5rem]",children:[(0,x.jsx)("label",{className:"block uppercase tracking-wide text-gray-100 mb-1",children:"Confirm Password:"}),(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"password",value:E,onChange:function(e){U(e.target.value),we(!1)}}),(0,x.jsx)("p",{className:"".concat(Ne?"text-red-400":"text-[#404040]"," text-sm select-none"),children:"Passwords do not match"})]})]},1),(0,x.jsxs)("div",{className:"w-full h-full",children:[(0,x.jsxs)("div",{className:"flex flex-col mb-[0.5rem] mt-[1rem]",children:[(0,x.jsx)("label",{className:"block uppercase tracking-wide text-gray-100 mb-1",children:"Business Name:"}),(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:G,onChange:function(e){B(e.target.value),Pe(!1)}}),(0,x.jsx)("p",{className:"".concat(Ze?"text-red-400":"text-[#404040]"," text-sm select-none"),children:"Business Name must be >2 characters"})]}),(0,x.jsxs)("div",{className:"flex flex-col mb-[0.5rem]",children:[(0,x.jsx)("label",{className:"block uppercase tracking-wide text-gray-100 mb-1",children:"Address:"}),(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:$,onChange:function(e){T(e.target.value),Ae(!1)}}),(0,x.jsx)("p",{className:"".concat(De?"text-red-400":"text-[#404040]"," text-sm select-none"),children:"Address must not be empty"})]}),(0,x.jsxs)("div",{className:"flex flex-col mb-[0.5rem]",children:[(0,x.jsx)("label",{className:"block uppercase tracking-wide text-gray-100 mb-1",children:"Postcode:"}),(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:M,onChange:function(e){V(e.target.value),Ie(!1)}}),(0,x.jsx)("p",{className:"".concat(We?"text-red-400":"text-[#404040]"," text-sm select-none"),children:"Postcode must not be empty"})]})]},2),(0,x.jsxs)("div",{className:"w-full h-full",children:[(0,x.jsx)("div",{className:"text-2xl font-bold mt-4 text-gray-100",children:"Add Users?"}),(0,x.jsxs)("div",{className:"w-full h-[13rem] overflow-y-auto",children:[te.map((function(e,t){return(0,x.jsx)("div",{children:(0,x.jsxs)("div",{className:"flex flex-row items-center",children:[(0,x.jsx)("div",{className:"flex flex-col mb-[0.5rem] mt-[1rem] w-[55%]",children:(0,x.jsxs)("div",{className:"flex flex-row items-center",children:[(0,x.jsx)("label",{className:"block uppercase tracking-wide text-gray-100 mb-1",children:"Name:"}),(0,x.jsx)("div",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",children:e.username})]})}),(0,x.jsx)("div",{className:"flex flex-col mb-[0.5rem] mt-[1rem] w-[40%]",children:(0,x.jsxs)("div",{className:"flex flex-row items-center",children:[(0,x.jsx)("label",{className:"block uppercase tracking-wide text-gray-100 mb-1",children:"PIN:"}),(0,x.jsx)("div",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",children:e.userpin})]})})]})},t)})),(0,x.jsxs)("div",{className:"flex flex-row items-center",children:[(0,x.jsxs)("div",{className:"flex flex-col mb-[0.5rem] mt-[1rem] w-[55%]",children:[(0,x.jsxs)("div",{className:"flex flex-row items-center",children:[(0,x.jsx)("label",{className:"block uppercase tracking-wide text-gray-100 mb-1",children:"Name:"}),(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:ne,onChange:function(e){le(e.target.value),ze(!1)}})]}),(0,x.jsx)("p",{className:"".concat(qe?"text-red-400":"text-[#404040]"," text-sm select-none"),children:"Name must be >2 characters"})]}),(0,x.jsxs)("div",{className:"flex flex-col mb-[0.5rem] mt-[1rem] w-[40%]",children:[(0,x.jsxs)("div",{className:"flex flex-row items-center",children:[(0,x.jsx)("label",{className:"block uppercase tracking-wide text-gray-100 mb-1",children:"PIN:"}),(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:oe,onChange:function(e){ie(e.target.value),Oe(!1)}})]}),(0,x.jsx)("p",{className:"".concat(Ke?"text-red-400":"text-[#404040]"," text-sm select-none"),children:"PIN should be 4 digits"})]}),(0,x.jsx)("div",{className:"flex flex-col mb-[0.5rem] mt-[1rem] w-[5%]",children:(0,x.jsx)("button",{className:"w-[2rem] h-[2rem] text-xl rounded-[0.6rem] leading-[2rem] bg-[#D9D9D9] text-gray-800",onClick:function(){return lt()},children:"+"})})]})]}),(0,x.jsx)("div",{className:"text-xl text-gray-100 mt-[3rem]",children:"Click next if no other users needed"})]},3)]:[(0,x.jsxs)("div",{className:"w-full h-full",children:[(0,x.jsxs)("div",{className:"flex flex-col mb-[0.5rem] mt-[1rem]",children:[(0,x.jsx)("label",{className:"block uppercase tracking-wide text-gray-100 mb-1",children:"Email:"}),(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"email",value:v,onChange:function(e){k(e.target.value),pe(!1)}}),(0,x.jsx)("p",{className:"".concat(de?"text-red-400":"text-[#404040]"," text-sm select-none"),children:"Email format incorrect. Please check and try again."})]}),(0,x.jsxs)("div",{className:"flex flex-col mb-[0.5rem]",children:[(0,x.jsx)("label",{className:"block uppercase tracking-wide text-gray-100 mb-1",children:"Password:"}),(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"password",value:C,onChange:function(e){S(e.target.value),he(!1)}}),(0,x.jsx)("p",{className:"".concat(fe?"text-red-400":"text-[#404040]"," text-sm select-none"),children:"Password must be alphanumeric, > 8 characters and contain one symbol."})]}),(0,x.jsxs)("div",{className:"flex flex-col mb-[0.5rem]",children:[(0,x.jsx)("label",{className:"block uppercase tracking-wide text-gray-100 mb-1",children:"Confirm Password:"}),(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"password",value:E,onChange:function(e){U(e.target.value),we(!1)}}),(0,x.jsx)("p",{className:"".concat(Ne?"text-red-400":"text-[#404040]"," text-sm select-none"),children:"Passwords do not match"})]})]},1),(0,x.jsxs)("div",{className:"w-full h-full",children:[(0,x.jsxs)("div",{className:"flex flex-col mb-[0.5rem] mt-[1rem]",children:[(0,x.jsx)("label",{className:"block uppercase tracking-wide text-gray-100 mb-1",children:"Username:"}),(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:G,onChange:function(e){B(e.target.value),Pe(!1)}}),(0,x.jsx)("p",{className:"".concat(Ze?"text-red-400":"text-[#404040]"," text-sm select-none"),children:"Username must be >2 characters"})]}),(0,x.jsxs)("div",{className:"flex flex-col mb-[0.5rem]",children:[(0,x.jsx)("label",{className:"block uppercase tracking-wide text-gray-100 mb-1",children:"Address:"}),(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:$,onChange:function(e){T(e.target.value),Ae(!1)}}),(0,x.jsx)("p",{className:"".concat(De?"text-red-400":"text-[#404040]"," text-sm select-none"),children:"Address must not be empty"})]}),(0,x.jsxs)("div",{className:"flex flex-col mb-[0.5rem]",children:[(0,x.jsx)("label",{className:"block uppercase tracking-wide text-gray-100 mb-1",children:"Postcode:"}),(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:M,onChange:function(e){V(e.target.value),Ie(!1)}}),(0,x.jsx)("p",{className:"".concat(We?"text-red-400":"text-[#404040]"," text-sm select-none"),children:"Postcode must not be empty"})]})]},2),(0,x.jsxs)("div",{className:"w-full h-full",children:[(0,x.jsxs)("div",{className:"flex flex-col mb-[0.5rem] mt-[1rem]",children:[(0,x.jsx)("label",{className:"block uppercase tracking-wide text-gray-100 mb-1",children:"Telephone:"}),(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:F,onChange:function(e){J(e.target.value),Re(!1)}}),(0,x.jsx)("p",{className:"".concat(Le?"text-red-400":"text-[#404040]"," text-sm select-none"),children:"Telephone must not be empty"})]}),(0,x.jsxs)("div",{className:"flex flex-col mb-[7.6rem]",children:[(0,x.jsx)("label",{className:"block uppercase tracking-wide text-gray-100 mb-1",children:"Notes:"}),(0,x.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:Q,onChange:function(e){X(e.target.value),He(!1)}}),(0,x.jsx)("p",{className:"".concat(_e?"text-red-400":"text-[#404040]"," text-sm select-none"),children:"Notes must not be empty"})]})]},3)],Xe=Qe.reduce((function(e,t,a){return e[a]=(0,r.createRef)(),e}),{}),Ye=Qe.length,et=function(e){p(e),Xe[e].current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})},tt=function(e){var t={message:"",status:!1};switch(e){case 0:0===v.length?(t.message="Please input email",t.status=!1,pe(!0)):/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v)?0===C.length?(t.message="Please input password",t.status=!1,he(!0)):C.length<6?(t.message="Password must be > 5 characters",t.status=!1,he(!0)):0===E.length?(t.message="Please type confirm password",t.status=!1,we(!0)):C!==E?(t.message="Not match password",t.status=!1,we(!0)):(t.message="",t.status=!0):(t.message="Invalid Email!",t.status=!1,pe(!0));break;case 1:0===G.length?(t.message="merchant"===a?"Please input businessname":"Please input username",t.status=!1,Pe(!0)):0===$.length?(t.message="Please input address",t.status=!1,Ae(!0)):0===M.length?(t.message="Please input postcode",t.status=!1,Ie(!0)):(t.message="",t.status=!0);break;case 2:0===F.length?(t.message="Please input telephone",t.status=!1,Re(!0)):0===Q.length?(t.message="Please input notes",t.status=!1,He(!0)):(t.message="",t.status=!0)}return t},at=function(){var e={message:"",status:!1};return 0===ne.length||ne.length<2?(ze(!0),e.status=!1):0===oe.length||!0===isNaN(oe)||oe.length<4||oe.length>4?(Oe(!0),e.status=!1):(e.message="",e.status=!0),e},st=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(){var t,s,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==d){e.next=13;break}if((t=tt(0)).status){e.next=5;break}return b((0,i.jW)({message:t.message,status:"error"})),e.abrupt("return");case 5:return e.next=7,u.W.checkUserByEmail(v,a);case 7:if(!e.sent.result){e.next=11;break}return b((0,i.jW)({message:"User with email: ".concat(v," already exists. Please check your email."),status:"error"})),e.abrupt("return");case 11:e.next=40;break;case 13:if(1!==d){e.next=20;break}if((s=tt(1)).status){e.next=18;break}return b((0,i.jW)({message:s.message,status:"error"})),e.abrupt("return");case 18:e.next=40;break;case 20:if(2!==d){e.next=40;break}if("merchant"!==a){e.next=33;break}if(!(ne.length>0||oe.length>0)){e.next=30;break}if(at().status){e.next=26;break}return e.abrupt("return");case 26:if(!nt(ne)){e.next=30;break}return b((0,i.jW)({message:"User with username: ".concat(ne," already exists. Please retype your username."),status:"error"})),e.abrupt("return");case 30:b((0,m.a$)({businessname:G,address:$,postcode:M,email:v,password:C,role:a,userproxy:te,username:ne,userpin:oe,token:void 0})),e.next=38;break;case 33:if((r=tt(2)).status){e.next=37;break}return b((0,i.jW)({message:r.message,status:"error"})),e.abrupt("return");case 37:b((0,m.a$)({businessname:G,address:$,postcode:M,email:v,password:C,role:a,userproxy:[],tel:F,notes:Q,username:"",userpin:"",token:void 0}));case 38:return j(!0),e.abrupt("return");case 40:d>=Ye-1||et(d+1);case 41:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),rt=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0!==d&&et(d-1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),nt=function(e){return te.filter((function(t){return t.username===e})).length>0},lt=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(at().status){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,u.W.checkUserByProxyName(ne);case 5:if(!e.sent.result){e.next=9;break}return b((0,i.jW)({message:"User with username: ".concat(ne," already exists. Please retype your username."),status:"error"})),e.abrupt("return");case 9:if(!nt(ne)){e.next=13;break}return b((0,i.jW)({message:"User with username: ".concat(ne," already exists. Please retype your username."),status:"error"})),e.abrupt("return");case 13:(t=te).push({username:ne,userpin:oe}),ae(t),le(""),ie("");case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){f&&g("/")}),[f]),(0,x.jsxs)("div",{className:"w-full px-[3rem] text-xl",children:[(0,x.jsx)("div",{className:"relative w-full h-full",children:(0,x.jsx)("div",{className:"carousel w-full h-full",children:Qe.map((function(e,t){return(0,x.jsx)("div",{className:"w-full h-full flex-shrink-0",ref:Xe[t],children:e},t)}))})}),(0,x.jsxs)("div",{className:"flex justify-between",children:[(0,x.jsx)("button",{className:"w-[5rem] text-xl text-gray-100 text-left underline decoration-1 leading-[2.6rem]",onClick:function(){return 0===d?t():rt()},children:0===d?"Login":"Back"}),(0,x.jsx)("button",{className:"w-[8rem] text-xl leading-[2.6rem] rounded-[0.6rem] bg-[#D9D9D9] text-gray-800",onClick:function(){return st()},children:"Next"})]})]})}),g=function(){var e=(0,r.useState)(!1),t=(0,s.Z)(e,2),a=t[0],n=t[1],l=(0,r.useState)("merchant"),c=(0,s.Z)(l,2),u=c[0],i=c[1],m=(0,r.useState)(0),g=(0,s.Z)(m,2),b=g[0],f=g[1],h=((0,o.I0)(),function(e){b>0||i(e)});return(0,x.jsx)("div",{className:"w-full h-[100vh] flex justify-center items-center",children:(0,x.jsxs)("div",{className:"w-[50vw] max-w-[1000px] min-w-[380px] min-h-[460px] rounded-[1rem] border border-white",children:[(0,x.jsxs)("div",{className:"flex border-b border-gray-300",children:[(0,x.jsx)("button",{className:"w-full text-xl leading-[3.6rem] rounded-t-[1rem] ".concat("merchant"===u?"bg-[#D9D9D9] text-gray-800":"bg-transparent text-gray-100"),onClick:function(){return h("merchant")},children:"Merchants"}),(0,x.jsx)("button",{className:"w-full text-xl leading-[3.6rem] rounded-t-[1rem] ".concat("customer"===u?"bg-[#D9D9D9] text-gray-800":"bg-transparent text-gray-100"),onClick:function(){return h("customer")},children:"Customers"})]}),a?(0,x.jsx)(p,{switchLogin:function(){n(!1)},role:u,currentGroup:b,setCurrentGroup:f}):(0,x.jsx)(d,{switchRegister:function(){n(!0)},role:u,currentGroup:b,setCurrentGroup:f})]})})},b=function(){return(0,x.jsx)(g,{})}}}]);
//# sourceMappingURL=280.f438092d.chunk.js.map