"use strict";(self.webpackChunkepos=self.webpackChunkepos||[]).push([[380],{9380:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var r=a(9439),n=a(2791),s=a(432),i=a(709),l=a(9806),c=a(1632),o=a(3793),d=a(9593),m=a(9434),u=a(2322),x=a(1840),p=a(4768),h=a(184),g=function(e){var t=e.isModal,a=e.setIsModal,s=(0,m.I0)(),i=(0,n.useState)(""),l=(0,r.Z)(i,2),c=l[0],g=l[1],f=(0,m.v9)(p.dy);return(0,n.useEffect)((function(){t&&g("")}),[t]),(0,h.jsx)(o.u,{appear:!0,show:t,as:n.Fragment,children:(0,h.jsxs)(d.V,{as:"div",onClose:function(){},className:"relative z-50",children:[(0,h.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,h.jsx)("div",{className:"fixed inset-0 backdrop-blur-sm bg-[#FFFFFF44]","aria-hidden":"true"})}),(0,h.jsx)("div",{className:"fixed inset-0 flex items-center bg-transparent justify-center ",children:(0,h.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,h.jsx)(d.V.Panel,{className:" max-w-full transform transition-all md:max-w-full",children:(0,h.jsxs)("div",{className:"relative bg-[#404040] w-[30vw] max-w-[1000px] min-w-[380px] min-h-[160px] rounded-[1rem] drop-shadow-md p-6 text-center shadow-xl",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Please enter category name:"})}),(0,h.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,h.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:c,onChange:function(e){return g(e.target.value)}})}),(0,h.jsxs)("div",{className:"absolute right-6 bottom-4",children:[(0,h.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#404040] border border-[#D9D9D9] text-gray-100 mr-6",onClick:function(){return a(!1)},children:"Cancel"}),(0,h.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#D9D9D9] text-gray-800",onClick:function(){0!==c.length?(s((0,u.lb)(0,{name:c,createdBy:f._id})),g(""),a(!1)):s((0,x.jW)({message:"Please input category name.",status:"error"}))},children:"Confirm"})]})]})})})})]})})},f=a(4165),v=a(5861),j=a(7492),y=a(7577),b=a(5169),N=function(){var e=(0,v.Z)((0,f.Z)().mark((function e(t){var a,r;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",body:t},r=fetch("".concat(b.Sg,"/upload/image"),a),e.next=4,(0,y._y)(r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w={uploadFiles:N},D=function(e){var t=e.isModal,a=e.setIsModal,s=e.categories,i=(0,m.I0)(),l=(0,n.useState)(""),c=(0,r.Z)(l,2),u=c[0],g=c[1],y=(0,n.useState)(""),b=(0,r.Z)(y,2),N=b[0],D=b[1],F=(0,n.useState)(0),C=(0,r.Z)(F,2),k=C[0],Z=C[1],I=(0,n.useState)(""),S=(0,r.Z)(I,2),_=S[0],T=S[1],M=(0,n.useState)(""),P=(0,r.Z)(M,2),E=P[0],V=P[1],B=(0,n.useState)(""),U=(0,r.Z)(B,2),z=U[0],A=U[1],K=(0,m.v9)(p.dy),L=function(){var e=function(){var e={message:"",status:!1};return 0===u.length?(e.message="Please input product name",e.status=!1):N.length<2?(e.message="Please input description",e.status=!1):0===k.length?(e.message="Please input price",e.status=!1):(e.message="",e.status=!0),e}();e.status?(i((0,j.if)(0,{name:u,desc:N,price:k,sku:E,photo:z,categoryId:_,createdBy:K._id})),g(""),D(""),Z(0),T(s[0]._id),V(""),A(""),a(!1)):i((0,x.jW)({message:e.message,status:"error"}))};(0,n.useEffect)((function(){s[0]&&T(s[0]._id)}),[s[0]]),(0,n.useEffect)((function(){t&&(g(""),D(""),Z(0),T(s[0]._id),V(""),A(""))}),[t]);var O=function(){var e=(0,v.Z)((0,f.Z)().mark((function e(t){var a,r,n;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.target.files&&t.target.files.length>0)){e.next=9;break}return a=document.getElementById("image_photo").files[0],(r=new FormData).append("file",a),r.append("name",a.name),e.next=7,w.uploadFiles(r);case 7:"success"===(n=e.sent).status&&A(n.result);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,h.jsx)(o.u,{appear:!0,show:t,as:n.Fragment,children:(0,h.jsxs)(d.V,{as:"div",onClose:function(){},className:"relative z-50",children:[(0,h.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,h.jsx)("div",{className:"fixed inset-0 backdrop-blur-sm bg-[#FFFFFF44]","aria-hidden":"true"})}),(0,h.jsx)("div",{className:"fixed inset-0 flex items-center bg-transparent justify-center ",children:(0,h.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,h.jsx)(d.V.Panel,{className:" max-w-full transform transition-all md:max-w-full",children:(0,h.jsxs)("div",{className:"relative bg-[#404040] w-[30vw] max-w-[1000px] min-w-[380px] min-h-[160px] rounded-[1rem] drop-shadow-md p-6 text-center shadow-xl",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Product Name:"})}),(0,h.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,h.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:u,onChange:function(e){return g(e.target.value)}})}),(0,h.jsx)("div",{className:"",children:(0,h.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Description:"})}),(0,h.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,h.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:N,onChange:function(e){return D(e.target.value)}})}),(0,h.jsxs)("div",{className:"flex min-h-[2rem] gap-4",children:[(0,h.jsxs)("div",{className:"w-[40%]",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Price:"})}),(0,h.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,h.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"number",value:k,onChange:function(e){return Z(e.target.value)}})})]}),(0,h.jsxs)("div",{className:"w-[60%]",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Category:"})}),(0,h.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,h.jsx)("select",{className:"bg-[#404040] border-b border-gray-300 text-gray-100 text-sm block w-full p-2.5 focus:outline-none",onChange:function(e){return function(e){T(e.target.value)}(e)},children:s.map((function(e,t){return(0,h.jsx)("option",{value:e._id,children:e.name},t)}))})})]})]}),(0,h.jsxs)("div",{className:"flex min-h-[8rem] gap-4",children:[(0,h.jsxs)("div",{className:"w-[50%]",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"SKU:"})}),(0,h.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,h.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:E,onChange:function(e){return V(e.target.value)}})})]}),(0,h.jsxs)("div",{className:"w-[50%]",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Image:"})}),(0,h.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,h.jsxs)("div",{className:"w-full flex flex-col text-ato-form-text text-sm  justify-center px-3 py-2 font-universLight ",children:[(0,h.jsx)("div",{children:(0,h.jsx)("div",{className:"relative cursor-pointer",onClick:function(e){var t;null===(t=document.getElementById("image_photo"))||void 0===t||t.click()},children:(0,h.jsx)("div",{className:"w-full h-[2rem] rounded-[0.6rem] m-auto border border-gray-300 text-gray-300 leading-[2rem]",children:"Upload"})})}),(0,h.jsx)("input",{id:"image_photo",accept:"image/*",type:"file",onChange:O,className:"hidden",name:"avatar"})]})})]})]}),(0,h.jsxs)("div",{className:"absolute right-6 bottom-4",children:[(0,h.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#404040] border border-[#D9D9D9] text-gray-100 mr-6",onClick:function(){return a(!1)},children:"Cancel"}),(0,h.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#D9D9D9] text-gray-800",onClick:function(){return L()},children:"Confirm"})]})]})})})})]})})},F=function(e){var t=e.isModal,a=e.setIsModal,s=e.category,i=e.setCategory,l=(0,m.I0)(),c=(0,n.useState)(""),x=(0,r.Z)(c,2),g=x[0],f=x[1],v=(0,m.v9)(p.dy);return(0,n.useEffect)((function(){s&&s._id&&f(s.name)}),[s._id]),(0,h.jsx)(o.u,{appear:!0,show:t,as:n.Fragment,children:(0,h.jsxs)(d.V,{as:"div",onClose:function(){},className:"relative z-50",children:[(0,h.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,h.jsx)("div",{className:"fixed inset-0 backdrop-blur-sm bg-[#FFFFFF44]","aria-hidden":"true"})}),(0,h.jsx)("div",{className:"fixed inset-0 flex items-center bg-transparent justify-center ",children:(0,h.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,h.jsx)(d.V.Panel,{className:" max-w-full transform transition-all md:max-w-full",children:(0,h.jsxs)("div",{className:"relative bg-[#404040] w-[30vw] max-w-[1000px] min-w-[380px] min-h-[160px] rounded-[1rem] drop-shadow-md p-6 text-center shadow-xl",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Please enter category name:"})}),(0,h.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,h.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:g,onChange:function(e){return f(e.target.value)}})}),(0,h.jsxs)("div",{className:"absolute right-6 bottom-4",children:[(0,h.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#404040] border border-[#D9D9D9] text-gray-100 mr-6",onClick:function(){return a(!1)},children:"Cancel"}),(0,h.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#D9D9D9] text-gray-800",onClick:function(){return l((0,u.lb)(s._id,{name:g,createdBy:v._id})),f(""),i([]),void a(!1)},children:"Update"})]})]})})})})]})})},C=function(e){var t=e.isModal,a=e.setIsModal,s=e.categories,i=e.product,l=e.setProduct,c=(0,m.I0)(),u=(0,n.useState)(""),x=(0,r.Z)(u,2),g=x[0],y=x[1],b=(0,n.useState)(""),N=(0,r.Z)(b,2),D=N[0],F=N[1],C=(0,n.useState)(0),k=(0,r.Z)(C,2),Z=k[0],I=k[1],S=(0,n.useState)(""),_=(0,r.Z)(S,2),T=_[0],M=_[1],P=(0,n.useState)(""),E=(0,r.Z)(P,2),V=E[0],B=E[1],U=(0,n.useState)(""),z=(0,r.Z)(U,2),A=z[0],K=z[1],L=(0,m.v9)(p.dy);(0,n.useEffect)((function(){s[0]&&M(s[0]._id)}),[s[0]]),(0,n.useEffect)((function(){i&&i._id&&(y(i.name),F(i.description),I(i.price),M(i.categoryId),B(i.sku),K(i.photo))}),[i._id]);var O=function(){var e=(0,v.Z)((0,f.Z)().mark((function e(t){var a,r,n;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.target.files&&t.target.files.length>0)){e.next=9;break}return a=document.getElementById("image_photo").files[0],(r=new FormData).append("file",a),r.append("name",a.name),e.next=7,w.uploadFiles(r);case 7:"success"===(n=e.sent).status&&K(n.result);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,h.jsx)(o.u,{appear:!0,show:t,as:n.Fragment,children:(0,h.jsxs)(d.V,{as:"div",onClose:function(){},className:"relative z-50",children:[(0,h.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,h.jsx)("div",{className:"fixed inset-0 backdrop-blur-sm bg-[#FFFFFF44]","aria-hidden":"true"})}),(0,h.jsx)("div",{className:"fixed inset-0 flex items-center bg-transparent justify-center ",children:(0,h.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,h.jsx)(d.V.Panel,{className:" max-w-full transform transition-all md:max-w-full",children:(0,h.jsxs)("div",{className:"relative bg-[#404040] w-[30vw] max-w-[1000px] min-w-[380px] min-h-[160px] rounded-[1rem] drop-shadow-md p-6 text-center shadow-xl",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Product Name:"})}),(0,h.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,h.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:g,onChange:function(e){return y(e.target.value)}})}),(0,h.jsx)("div",{className:"",children:(0,h.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Description:"})}),(0,h.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,h.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:D,onChange:function(e){return F(e.target.value)}})}),(0,h.jsxs)("div",{className:"flex min-h-[7rem] gap-4",children:[(0,h.jsxs)("div",{className:"w-[40%]",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Price:"})}),(0,h.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,h.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"number",value:Z,onChange:function(e){return I(e.target.value)}})})]}),(0,h.jsxs)("div",{className:"w-[60%]",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Category:"})}),(0,h.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,h.jsx)("select",{className:"bg-[#404040] border-b border-gray-300 text-gray-100 text-sm block w-full p-2.5 focus:outline-none",onChange:function(e){return function(e){M(e.target.value)}(e)},children:s.map((function(e,t){return(0,h.jsx)("option",{value:e._id,children:e.name},t)}))})})]})]}),(0,h.jsxs)("div",{className:"flex min-h-[8rem] gap-4",children:[(0,h.jsxs)("div",{className:"w-[50%]",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"SKU:"})}),(0,h.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,h.jsx)("input",{className:"appearance-none bg-transparent border-b border-gray-300 w-full text-gray-100 mr-3 py-1 px-2 leading-[2rem] focus:outline-none",type:"text",value:V,onChange:function(e){return B(e.target.value)}})})]}),(0,h.jsxs)("div",{className:"w-[50%]",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)("h1",{className:"text-md text-left text-[#D9D9D9] select-none",children:"Image:"})}),(0,h.jsx)("div",{className:"min-h-[2rem] pb-[0.5rem]",children:(0,h.jsxs)("div",{className:"w-full flex flex-col text-ato-form-text text-sm  justify-center px-3 py-2 font-universLight ",children:[(0,h.jsx)("div",{children:(0,h.jsx)("div",{className:"relative cursor-pointer",onClick:function(e){var t;null===(t=document.getElementById("image_photo"))||void 0===t||t.click()},children:(0,h.jsx)("div",{className:"w-full h-[2rem] rounded-[0.6rem] m-auto border border-gray-300 text-gray-300 leading-[2rem]",children:"Upload"})})}),(0,h.jsx)("input",{id:"image_photo",accept:"image/*",type:"file",onChange:O,className:"hidden",name:"avatar"})]})})]})]}),(0,h.jsxs)("div",{className:"absolute right-6 bottom-4",children:[(0,h.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#404040] border border-[#D9D9D9] text-gray-100 mr-6",onClick:function(){return a(!1)},children:"Cancel"}),(0,h.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#D9D9D9] text-gray-800",onClick:function(){return c((0,j.if)(i._id,{name:g,desc:D,price:Z,sku:V,photo:A,categoryId:T,createdBy:L._id})),y(""),F(""),I(0),B(""),K(""),M(s[0]._id),l([]),void a(!1)},children:"Update"})]})]})})})})]})})},k=function(e){var t=e.isModal,a=e.setIsModal,r=e.category,s=(0,m.I0)();return(0,h.jsx)(o.u,{appear:!0,show:t,as:n.Fragment,children:(0,h.jsxs)(d.V,{as:"div",onClose:function(){},className:"relative z-50",children:[(0,h.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,h.jsx)("div",{className:"fixed inset-0 backdrop-blur-sm bg-[#FFFFFF44]","aria-hidden":"true"})}),(0,h.jsx)("div",{className:"fixed inset-0 flex items-center bg-transparent justify-center ",children:(0,h.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,h.jsx)(d.V.Panel,{className:" max-w-full transform transition-all md:max-w-full",children:(0,h.jsxs)("div",{className:"relative bg-[#404040] w-[30vw] max-w-[1000px] min-w-[380px] min-h-[160px] rounded-[1rem] drop-shadow-md p-6 text-center shadow-xl",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)("div",{className:"px-[2rem] text-xl mb-2 text-[#D9D9D9] font-bold",children:"Are you sure you wish to delete category?"})}),(0,h.jsx)("div",{className:"min-h-[6rem] pb-[0.5rem]"}),(0,h.jsxs)("div",{className:"absolute right-6 bottom-4",children:[(0,h.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#404040] border border-[#D9D9D9] text-gray-100 mr-6",onClick:function(){return a(!1)},children:"Cancel"}),(0,h.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#D9D9D9] text-gray-800",onClick:function(){return s((0,u.uu)(r._id)),void a(!1)},children:"Confirm"})]})]})})})})]})})},Z=function(e){var t=e.isModal,a=e.setIsModal,r=e.product,s=(0,m.I0)();return(0,h.jsx)(o.u,{appear:!0,show:t,as:n.Fragment,children:(0,h.jsxs)(d.V,{as:"div",onClose:function(){},className:"relative z-50",children:[(0,h.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,h.jsx)("div",{className:"fixed inset-0 backdrop-blur-sm bg-[#FFFFFF44]","aria-hidden":"true"})}),(0,h.jsx)("div",{className:"fixed inset-0 flex items-center bg-transparent justify-center ",children:(0,h.jsx)(o.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,h.jsx)(d.V.Panel,{className:" max-w-full transform transition-all md:max-w-full",children:(0,h.jsxs)("div",{className:"relative bg-[#404040] w-[30vw] max-w-[1000px] min-w-[380px] min-h-[160px] rounded-[1rem] drop-shadow-md p-6 text-center shadow-xl",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)("div",{className:"px-[2rem] text-xl mb-2 text-[#D9D9D9] font-bold",children:"Are you sure you wish to delete product?"})}),(0,h.jsx)("div",{className:"min-h-[6rem] pb-[0.5rem]"}),(0,h.jsxs)("div",{className:"absolute right-6 bottom-4",children:[(0,h.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#404040] border border-[#D9D9D9] text-gray-100 mr-6",onClick:function(){return a(!1)},children:"Cancel"}),(0,h.jsx)("button",{className:"w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#D9D9D9] text-gray-800",onClick:function(){return s((0,j.Ir)(r._id)),void a(!1)},children:"Confirm"})]})]})})})})]})})},I=a(7689),S=function(){var e=(0,I.s0)(),t=(0,m.I0)(),a=(0,n.useState)(!1),o=(0,r.Z)(a,2),d=o[0],x=o[1],p=(0,n.useState)(!1),f=(0,r.Z)(p,2),v=f[0],y=f[1],b=(0,n.useState)(!1),N=(0,r.Z)(b,2),w=N[0],S=N[1],_=(0,n.useState)(!1),T=(0,r.Z)(_,2),M=T[0],P=T[1],E=(0,n.useState)(!1),V=(0,r.Z)(E,2),B=V[0],U=V[1],z=(0,n.useState)(!1),A=(0,r.Z)(z,2),K=A[0],L=A[1],O=(0,n.useState)([]),R=(0,r.Z)(O,2),W=R[0],G=R[1],J=(0,n.useState)([]),X=(0,r.Z)(J,2),Y=X[0],q=X[1],H=(0,m.v9)(u.us),Q=(0,m.v9)(j.nR);(0,n.useEffect)((function(){t((0,u.CP)()),t((0,j.Xp)())}),[]);var $=function(e){var t=H.filter((function(t){return t._id===e}));return t[0]?t[0].name:""};return(0,h.jsxs)(s.Z,{classes:"bg-[#404040] h-full",children:[(0,h.jsxs)("div",{className:"flex flex-row",children:[(0,h.jsxs)("div",{className:"w-full h-[calc(100vh-80px)]",children:[(0,h.jsxs)("div",{className:"text-gray-100 text-2xl flex flex-row items-center px-[2rem] mt-6",children:[(0,h.jsx)(l.G,{icon:c.J9Y,className:"cursor-pointer",onClick:function(){return e("/")}}),(0,h.jsx)("p",{className:"ml-2 font-bold",children:"Inventory"})]}),(0,h.jsxs)("div",{className:"w-[50%] flex px-[2rem] mt-[2rem] text-gray-100 text-xl italic",children:[(0,h.jsx)("button",{className:"w-[10rem] text-md leading-[2.1rem] rounded-[0.6rem] bg-[#D9D9D9] text-gray-800",onClick:function(){return x(!0)},children:"Add Category"}),(0,h.jsx)("button",{className:"w-[10rem] text-md leading-[2.1rem] rounded-[0.6rem] bg-[#D9D9D9] text-gray-800 ml-6",onClick:function(){return y(!0)},children:"Add Product"})]}),(0,h.jsxs)("div",{className:"text-md divide-y divide-gray-400 py-1 mt-2 px-[2rem]",children:[(0,h.jsx)("div",{className:"text-xl font-bold uppercase text-gray-100 mb-2",children:"Categories"}),(0,h.jsx)("div",{className:"h-[28vh] overflow-y-auto",children:H.map((function(e,t){return(0,h.jsxs)("div",{className:"w-full flex text-gray-100 leading-[1.4rem]",children:[(0,h.jsx)("p",{className:"w-[70%]",children:e.name}),(0,h.jsx)("p",{className:"w-[15%] text-center select-none cursor-pointer",onClick:function(){S(!0),G(e)},children:"Edit"}),(0,h.jsx)("p",{className:"w-[15%] text-center select-none cursor-pointer",onClick:function(){U(!0),G(e)},children:"Delete"})]},t)}))})]}),(0,h.jsxs)("div",{className:"text-md divide-y divide-gray-400 py-1 mt-2 px-[2rem]",children:[(0,h.jsx)("div",{className:"text-xl font-bold uppercase text-gray-100 mb-2",children:"PRODUCTS"}),(0,h.jsx)("div",{className:"h-[28vh] overflow-y-auto",children:Q.map((function(e,t){return(0,h.jsxs)("div",{className:"w-full flex text-gray-100 leading-[1.4rem]",children:[(0,h.jsxs)("p",{className:"w-[70%]",children:[e.name," > ",$(e.categoryId)]}),(0,h.jsx)("p",{className:"w-[15%] text-center select-none cursor-pointer",onClick:function(){P(!0),q(e)},children:"Edit"}),(0,h.jsx)("p",{className:"w-[15%] text-center select-none cursor-pointer",onClick:function(){L(!0),q(e)},children:"Delete"})]},t)}))})]})]}),(0,h.jsx)(i.Z,{})]}),(0,h.jsx)(g,{isModal:d,setIsModal:x}),(0,h.jsx)(D,{isModal:v,setIsModal:y,categories:H}),(0,h.jsx)(F,{isModal:w,setIsModal:S,category:W,setCategory:G}),(0,h.jsx)(C,{isModal:M,setIsModal:P,categories:H,product:Y,setProduct:q}),(0,h.jsx)(k,{isModal:B,setIsModal:U,category:W}),(0,h.jsx)(Z,{isModal:K,setIsModal:L,product:Y})]})}}}]);
//# sourceMappingURL=380.6abfc214.chunk.js.map