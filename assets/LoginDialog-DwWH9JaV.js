import{p as Y,Z as G,a as O,_ as U,d as X,e as H,f as j,$ as J,g as K,u as Z,t as z,k as ee,a0 as te,a1 as oe,a2 as ae,a3 as le,q as ne,a4 as se,v as t,a5 as ie,a6 as re,a7 as de,a8 as P,N,A as m,B as g,C as d,H as w,I as V,K as p,r as D,R as S,z as q,D as o,X as A,P as $,E as B,S as ue,F as T,G as L,V as ce,J as me,n as xe,Y as fe,O as F,a9 as ge}from"./index-CYBvcB_e.js";import{u as ve,V as E,a as R,b as W,c as pe,d as I}from"./cart-DUBumf4H.js";import{c as M,_ as ye,V as be}from"./_plugin-vue_export-helper-DY9byVNY.js";const _e=Y({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:G,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...O(),...U({location:"top end"}),...X(),...H(),...j(),...J({transition:"scale-rotate-transition"})},"VBadge"),qe=K()({name:"VBadge",inheritAttrs:!1,props:_e(),setup(e,a){const{backgroundColorClasses:n,backgroundColorStyles:x}=Z(z(e,"color")),{roundedClasses:y}=ee(e),{t:s}=te(),{textColorClasses:b,textColorStyles:f}=oe(z(e,"textColor")),{themeClasses:c}=ae(),{locationStyles:_}=le(e,!0,i=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(i)?+(e.offsetY??0):["left","right"].includes(i)?+(e.offsetX??0):0));return ne(()=>{const i=Number(e.content),l=!e.max||isNaN(i)?e.content:i<=+e.max?i:`${e.max}+`,[r,h]=se(a.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return t(e.tag,P({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},h,{style:e.style}),{default:()=>{var v,u;return[t("div",{class:"v-badge__wrapper"},[(u=(v=a.slots).default)==null?void 0:u.call(v),t(ie,{transition:e.transition},{default:()=>{var C,k;return[re(t("span",P({class:["v-badge__badge",c.value,n.value,y.value,b.value],style:[x.value,f.value,e.inline?{}:_.value],"aria-atomic":"true","aria-label":s(e.label,i),"aria-live":"polite",role:"status"},r),[e.dot?void 0:a.slots.badge?(k=(C=a.slots).badge)==null?void 0:k.call(C):e.icon?t(N,{icon:e.icon},null):l]),[[de,e.modelValue]])]}})])]}})}),{}}}),Q={__name:"LongButton",props:{text:{type:String,default:"Login"},color:{type:String,default:"primary"}},setup(e){const a=e;return(n,x)=>(m(),g(p,{class:"w-100 text-white my-2 text-capitalize font-weight-regular",color:e.color},{default:d(()=>[w(V(a.text),1)]),_:1},8,["color"]))}},he={class:"d-flex flex-column justify-space-between",style:{height:"100%"}},ke={key:0,class:"my-15"},Ve={class:"d-flex flex-column ml-2 text-center"},Ce={class:"my-2"},we={class:"d-flex align-center text-left px-4"},Se={class:"pl-6"},Be={class:"d-inline-block text-truncate",style:{"max-width":"100px"}},$e={class:"text-12 mb-0 text-body-2"},Pe={class:"text-primary"},Ne={class:"me-3 ml-auto"},Te={class:"px-2"},Ae={__name:"CartSidebar",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const n=ve(),x=e,y=a,s=D(x.modelValue),b=()=>{s.value=!1},f=l=>{n.updateQuantity(l.title,l.quantity+1)},c=l=>{l.quantity>1&&n.updateQuantity(l.title,l.quantity-1)},_=l=>{n.removeItem(l.title)},i=()=>{n.totalPrice&&alert(`Total Price: $${n.totalPrice}`)};return S(()=>x.modelValue,l=>{s.value=l}),S(s,l=>{y("update:modelValue",l)}),(l,r)=>{const h=q("router-link"),v=Q;return m(),g(M,{modelValue:s.value,"onUpdate:modelValue":r[1]||(r[1]=u=>s.value=u),width:"320",temporary:"",location:"end",style:{position:"fixed","z-index":"1005"}},{default:d(()=>[o("div",he,[o("div",null,[t(E,{class:"px-2 font-weight-bold text-h6",density:"comfortable",color:"white"},{default:d(()=>[t(N,{icon:"mdi-shopping-outline",size:"small",color:"third"}),r[2]||(r[2]=o("span",{class:"mx-2 text-body-1 text-third font-weight-medium"}," Item",-1)),t(A),t(p,{icon:"mdi-close",color:"primary",size:"small",onClick:b})]),_:1}),t(R),$(n).cartItemCount==0?(m(),B("div",ke,[t(h,{to:"/FoodMenu",class:"text-decoration-none"},{default:d(()=>[o("div",{class:"text-grey-lighten-1 text-center text-h5 font-weight-medium",onClick:r[0]||(r[0]=u=>s.value=!s.value)},[r[4]||(r[4]=w(" Cart is empty! ")),o("div",null,[r[3]||(r[3]=w(" Start shopping! ")),t(N,{icon:"mdi-cursor-default-click",size:"small"})])])]),_:1})])):ue("",!0),(m(!0),B(T,null,L($(n).items,(u,C)=>(m(),g(W,{key:C,class:"d-flex flex-row align-center my-3"},{default:d(()=>[o("div",Ve,[t(p,{icon:"mdi-plus",variant:"outlined",color:"primary",size:"x-small",width:"28",height:"28",class:"mx-auto",onClick:k=>f(u)},null,8,["onClick"]),o("span",Ce,V(u.quantity),1),t(p,{icon:"mdi-minus",variant:"outlined",color:"primary",size:"x-small",width:"28",height:"28",class:"mx-auto",onClick:k=>c(u)},null,8,["onClick"])]),o("div",we,[t(ce,{rounded:"",style:{width:"64px",height:"64px"}},{default:d(()=>[t(me,{src:u.img},null,8,["src"])]),_:2},1024),o("div",Se,[o("h4",Be,V(u.title),1),o("p",$e," $"+V(u.price)+" x 1 ",1),o("h4",Pe," $"+V(u.discount),1)])]),o("div",Ne,[t(p,{icon:"mdi-close",color:"third",size:"small",variant:"text",onClick:k=>_(u)},null,8,["onClick"])])]),_:2},1024))),128))]),o("div",Te,[t(v,{text:`Checkout Now ($${$(n).totalPrice})`,onClick:i},null,8,["text"]),t(v,{text:"VIEW CART",variant:"outlined"})])])]),_:1},8,["modelValue"])}}},Ee={__name:"SideBar",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const n=xe(()=>[{title:"Dashboards",icon:"mdi-view-dashboard-variant-outline",items:["Review","Photos","Order List","Order History","Followers","Bookmarks"],open:!0},{title:"Resturant",icon:"mdi-silverware-fork-knife",items:["Food Menu","Resturant Two Column","Search Restutant"],open:!1}]),x=e,y=a,s=D(x.modelValue),b=()=>{s.value=!1};return S(()=>x.modelValue,f=>{s.value=f}),S(s,f=>{y("update:modelValue",f)}),(f,c)=>{const _=q("router-link");return m(),g(M,{modelValue:s.value,"onUpdate:modelValue":c[2]||(c[2]=i=>s.value=i),width:"320",temporary:"",style:{position:"fixed",height:"100%"}},{default:d(()=>[t(E,{class:"px-2 font-weight-bold text-h6 bg-white",style:{height:"45px"}},{default:d(()=>[c[3]||(c[3]=o("span",{class:"mx-3 text-body-1 font-weight-black text-grey-darken-3"},"Navbar",-1)),t(A),t(p,{size:"small",color:"third",icon:"mdi-close",onClick:c[0]||(c[0]=i=>b())})]),_:1}),t(W,null,{default:d(()=>[(m(!0),B(T,null,L(n.value,(i,l)=>(m(),g(pe,{key:l,value:i.title},{activator:d(({props:r})=>[t(I,P({color:"primary",ref_for:!0},r,{"prepend-icon":i.icon,title:i.title}),null,16,["prepend-icon","title"])]),default:d(()=>[t(_,{class:"text-decoration-none text-third",to:"/ResturantTwoColumn"},{default:d(()=>[(m(!0),B(T,null,L(i.items,(r,h)=>(m(),g(I,{key:h,title:r,value:r,color:"primary",onClick:c[1]||(c[1]=v=>s.value=!s.value)},null,8,["title","value"]))),128))]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue"])}}},Le={},Re={class:"d-flex align-center px-15"};function ze(e,a){const n=Q;return m(),g(ge,{"max-width":"450","scroll-strategy":"none"},{default:d(()=>[t(fe,null,{default:d(()=>[t(be,{class:"py-5 px-8"},{default:d(()=>[a[1]||(a[1]=o("div",{class:"mt-2 mb-5 text-center"},[o("h3",null,"Welcome To Ecommerce"),o("h5",null,"Log in with email & password")],-1)),a[2]||(a[2]=o("p",{class:"text-body-2"}," Email or Phone Number ",-1)),t(F,{placeholder:"example@mail",variant:"outlined",density:"compact"}),a[3]||(a[3]=o("p",{class:"text-body-2"}," Password ",-1)),t(F,{placeholder:"example@mail",variant:"outlined",density:"compact"}),t(n),o("div",Re,[t(R),a[0]||(a[0]=o("span",{class:"mx-4"},"on",-1)),t(R)]),t(n,{color:"indigo-darken-1","prepend-icon":"mdi-facebook",text:"Continue With Facebook"}),t(n,{color:"blue-darken-1","prepend-icon":"mdi-google",text:"Continue With Google"}),a[4]||(a[4]=o("div",{class:"text-center text-body-2 mt-2 mb-7"},[w(" Don't have account? "),o("span",{class:"text-decoration-underline"},"Sign Up")],-1))]),_:1}),a[5]||(a[5]=o("div",{class:"w-100 bg-second text-center pa-5"},[o("span",{class:"text-third"},"Forgot Your Password"),o("span",{class:"mx-2 text-decoration-underline"},"Reset It")],-1))]),_:1})]),_:1})}const We=ye(Le,[["render",ze]]);export{qe as V,We as _,Ee as a,Ae as b};
