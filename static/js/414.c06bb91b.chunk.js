"use strict";(self.webpackChunkepos=self.webpackChunkepos||[]).push([[414],{4414:function(e,r,s){s.r(r);var t=s(432),n=s(709),i=s(9806),c=s(1632),l=s(7689),d=s(1168),a=s(7492),o=s(2791),x=s(9434),m=s(7577),u=s(5169),h=s(184);r.default=function(){var e=(0,l.s0)(),r=(0,x.I0)(),s=(0,x.v9)(d.U9),f=(0,x.v9)(a.nR);(0,o.useEffect)((function(){r((0,d.r6)())}),[]);var p=function(e){return f.filter((function(r){return r._id===e}))[0]},v=function(e){for(var r=0,s=0;s<e.length;s++){var t=p(e[s].productId);r=t?(0,m.pD)(r,(0,m.J$)(t.price,e[s].amount)):(0,m.pD)(r,0)}return r.toFixed(2)};return(0,h.jsx)(t.Z,{classes:"bg-[#404040] h-full",children:(0,h.jsxs)("div",{className:"flex flex-row",children:[(0,h.jsxs)("div",{className:"w-full h-[calc(100vh-80px)]",children:[(0,h.jsxs)("div",{className:"text-gray-100 text-2xl flex flex-row items-center px-[2rem] mt-6",children:[(0,h.jsx)(i.G,{icon:c.J9Y,className:"cursor-pointer",onClick:function(){return e("/")}}),(0,h.jsx)("p",{className:"ml-2 font-bold",children:"Orders"})]}),(0,h.jsx)("div",{className:"text-md text-gray-100 mt-8 h-[calc(100vh-112px-3.5rem)] overflow-y-auto",children:s.map((function(e,s){var t=JSON.parse(e.order.order);return(0,h.jsxs)("div",{className:"collapse border-b border-[#444444]",children:[(0,h.jsx)("input",{type:"checkbox"}),(0,h.jsxs)("div",{className:"collapse-title w-full flex items-center bg-[#333333] px-[2rem] py-[0rem]",style:{minHeight:"0px"},children:[(0,h.jsx)("div",{className:"w-[10%] text-left",children:s+1}),(0,h.jsx)("div",{className:"w-[40%] text-center",children:e.merchant.username?e.merchant.username:e.merchant.businessname}),(0,h.jsx)("div",{className:"w-[40%] text-center",children:e.customer?e.customer.businessname:"None"}),(0,h.jsx)("div",{className:"w-[10%] collapse-title text-right cursor-pointer py-[1rem] pr-[0px]",children:(0,h.jsx)(i.G,{icon:c.eW2})})]}),(0,h.jsxs)("div",{className:"collapse-content bg-[#333333] px-[2rem]",children:[t.map((function(e,r){var t=p(e.productId);return(0,h.jsx)("div",{className:"py-1",children:(0,h.jsxs)("div",{className:"flex justify-between text-md",children:[(0,h.jsxs)("div",{children:[t.name," X ",e.amount]}),(0,h.jsx)("div",{children:(0,m.J$)(t.price,e.amount).toFixed(2)})]})},r+2e4*s)})),(0,h.jsxs)("div",{className:"flex justify-between py-1 text-md font-bold border-t border-[#464646]",children:[(0,h.jsx)("div",{children:"SUBTOTAL"}),(0,h.jsx)("div",{children:v(t)})]}),(0,h.jsxs)("div",{className:"flex justify-between py-1 text-md font-bold",children:[(0,h.jsx)("div",{children:"CRYPTO RECEIVED:"}),(0,h.jsxs)("div",{children:[e.order.coinAmount.toFixed(2)," ",u.BL[e.order.coinType]]})]}),(0,h.jsxs)("div",{className:"flex justify-between mt-2",children:[(0,h.jsx)("button",{className:"min-w-[6rem] h-[2rem] text-md leading-[2rem] bg-[#333333] border-b border-[#D9D9D9] text-gray-100 mr-6",children:"Print Customer Receipt"}),(0,h.jsx)("button",{className:"px-2 min-w-[6rem] h-[2rem] text-md rounded-[0.6rem] leading-[2rem] bg-[#D9D9D9] text-gray-800",onClick:function(){return s=e.order._id,void r((0,d.xC)(s));var s},children:"Refund"})]})]})]},s)}))})]}),(0,h.jsx)(n.Z,{})]})})}}}]);
//# sourceMappingURL=414.c06bb91b.chunk.js.map