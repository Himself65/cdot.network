/*! For license information please see app.chunk.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),i=a.n(o),c=a(10),l=a(68),s=(a(93),a(81)),d=a(22),m=a(78),p=a(131),g=a(135),u=a(137),h=a(130),f=Object(c.o)({nav:{display:"flex",height:"867px",flexDirection:"column",alignItems:"center",alignContent:"center",justifyContent:"center"},banner:{marginTop:"64px",paddingTop:"9rem",paddingBottom:"5rem",height:"100%",width:"100%",background:"no-repeat center center",backgroundColor:"black",backgroundAttachment:"scroll",backgroundSize:"cover",backgroundImage:"url(/assets/images/background/bg1.png)",selectors:{"@media(min-width: 1024px)":{backgroundImage:"url(/assets/images/background/bg1@2x.png)"}}},commandBar:{position:"absolute",top:0,left:0,width:"100%",height:"64px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",background:"transparent",color:"white",backgroundColor:"#000"},commandBarTitle:{marginLeft:"5rem",fontSize:"30px",color:"#fff",selectors:{"@media(max-width: 640px)":{marginLeft:"1rem"}}},narrowCommandBar:{display:"none",backgroundColor:"transparent",selectors:{"@media(max-width: 640px)":{display:"initial"}}},commandBarItems:{marginRight:"5rem",fontSize:"24px"},commandBarItem:{color:"#DEDEDE",textDecoration:"none",fontWeight:"400",paddingLeft:"5rem",selectors:{"@media(max-width: 640px)":{display:"none"}}},textArea:{selectors:{"@media(max-width: 640px)":{padding:"0 1rem"}}},sayingText:{color:"#CACACA",fontWeight:"lighter",selectors:{"@media(max-width: 640px)":{fontSize:"40px"}}},companyText:{fontSize:"90px",fontWeight:"900"}}),x=function(e){var t=e.items;return r.a.createElement("div",{className:f.commandBar},r.a.createElement("div",{className:f.commandBarTitle},r.a.createElement("span",null,"cdot.network")),r.a.createElement("div",{className:f.commandBarItems},t.map((function(e,t){return r.a.createElement("a",{className:f.commandBarItem,key:e.name,href:e.url||"#"},e.name)}))),r.a.createElement(p.a,{className:f.narrowCommandBar,styles:{root:{backgroundColor:"transparent",padding:0}},items:[],overflowItems:t.map((function(e){return{key:e.name,text:e.name}}))}))},b=function(e){var t=e.items;return r.a.createElement("div",{className:Object(c.p)(f.nav)},r.a.createElement(x,{items:t}),r.a.createElement("div",{className:f.banner},r.a.createElement(g.a,{styles:{root:f.textArea},tokens:{padding:"0 7rem",childrenGap:"40px"}},r.a.createElement(g.a.Item,null,r.a.createElement(u.a,{className:f.companyText},"cdot.")),r.a.createElement(g.a.Item,null,r.a.createElement(u.a,{variant:"mega",className:f.sayingText},"A secured Hub to serve heterogeneous ledgers for assert transfer")),r.a.createElement(g.a.Item,null,r.a.createElement(h.a,{styles:{root:{height:"53px",width:"183px",transition:"ease-in-out 0.2s"},rootHovered:{backgroundColor:"#fff",transition:"ease-in-out 0.2s"},label:{color:"#030303",fontWeight:"400"}}},"Get started")))))},w=a(134),E=(a(94),Object(c.o)({root:{display:"flex",width:"88px",height:"88px",justifyContent:"center",alignItems:"center"}})),v=function(e){var t=e.style,a=e.children;return r.a.createElement("div",{style:t,className:Object(c.p)("cdot-participant-circle",E.root)},a)},k=Object(c.o)({root:{height:"1275px"},title:{fontSize:"56px"},ledgers:{borderRadius:"4px"}}),y={title:"Ledgers",description:"Ledgers deposit CDOT into reserve account  voluntarily is to provide deposit insurance for  incoming inter-ledger transactions.",icon:function(){return r.a.createElement(v,{style:{backgroundColor:"#282E2E"}},r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 15px)",gridTemplateRows:"repeat(3, 15px)"}},r.a.createElement("div",{className:k.ledgers,style:{backgroundColor:"#4AE7B3",gridRow:"1",gridColumn:"1 / 3",width:"28px",height:"28px"}}),r.a.createElement("div",{className:k.ledgers,style:{backgroundColor:"#35A985",gridRow:"1",width:"14px",height:"28px"}}),r.a.createElement("div",{className:k.ledgers,style:{backgroundColor:"#2D9071",gridRow:"3",height:"12px",width:"45px"}})))}},C={title:"Validators",description:"Ledgers deposit CDOT into reserve account  voluntarily is to provide deposit insurance for  incoming inter-ledger transactions.",icon:function(){return r.a.createElement(v,{style:{backgroundColor:"#342C21"}},r.a.createElement("div",null,r.a.createElement("div",{style:{backgroundColor:"#F9D63F",height:"20px",width:"20px",borderRadius:"5px",transform:"rotate(-45deg)"}},r.a.createElement("div",{style:{backgroundColor:"#F9D63F",position:"absolute",left:"-12px",height:"21px",width:"10px",borderRadius:"10px"}}),r.a.createElement("div",{style:{backgroundColor:"#F9D63F",position:"absolute",left:"22px",height:"21px",width:"10px",borderRadius:"10px"}}),r.a.createElement("div",{style:{backgroundColor:"#F9D63F",position:"absolute",left:"6px",width:"10px",height:"43px",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px"}})),r.a.createElement("div",{style:{backgroundColor:"#F9D63F",position:"relative",borderRadius:"10px",height:"7px",width:"28px",left:"-10px",bottom:"-18px"}})))}},z={title:"Relayers",description:"Ledgers deposit CDOT into reserve account  voluntarily is to provide deposit insurance for  incoming inter-ledger transactions.",icon:function(){return r.a.createElement(v,{style:{backgroundColor:"#2F1B1F"}},r.a.createElement("div",null,r.a.createElement("div",{className:"cdot-icon-relayers",style:{width:"25px",height:"25px"}},r.a.createElement("div",{style:{position:"absolute",left:"-10px",top:"-10px",width:"20px",height:"20px",borderRadius:"5px",backgroundColor:"#EC5758"}}),r.a.createElement("div",{style:{position:"absolute",right:"-10px",bottom:"-10px",width:"20px",height:"20px",borderRadius:"5px",backgroundColor:"#EC5758"}}))))}},I={title:"Fishermen",description:"Ledgers deposit CDOT into reserve account  voluntarily is to provide deposit insurance for  incoming inter-ledger transactions.",icon:function(){return r.a.createElement(v,{style:{backgroundColor:"#232536"}},r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 26px)",gridTemplateRows:"repeat(2, 26px)",gridRowGap:"3px",gridColumnGap:"3px"}},r.a.createElement("div",{style:{backgroundColor:"#409EFF",width:"26px",height:"26px",borderRadius:"5px"}}),r.a.createElement("div",{style:{backgroundColor:"#0071C7",width:"26px",height:"26px",borderRadius:"5px"}}),r.a.createElement("div",{style:{backgroundColor:"#024B86",width:"26px",height:"26px",borderRadius:"5px"}}),r.a.createElement("svg",{width:"26px",height:"26px"},r.a.createElement("polygon",{strokeLinejoin:"round",stroke:"#459EFF",strokeWidth:"10",fill:"#459EFF",points:"5,5 15,5 5,15"}),r.a.createElement("polygon",{style:{rotate:"45deg"},points:"7,5 5,7 18,20 20,18",strokeLinejoin:"round",stroke:"#459EFF",strokeWidth:"7",fill:"#459EFF"}))))}},A={title:"Users",description:"Ledgers deposit CDOT into reserve account  voluntarily is to provide deposit insurance for  incoming inter-ledger transactions.",icon:function(){return r.a.createElement(v,{style:{backgroundColor:"#222737"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{style:{backgroundColor:"#C754FF",height:"23px",borderRadius:"50px",width:"23px"}}),r.a.createElement("div",{style:{backgroundColor:"#C754FF",marginTop:"4px",borderRadius:"10px",width:"40px",height:"20px"}})))}},S=a(133),N=a(50),B=Object(c.o)({root:{width:"650px",minWidth:"650px",height:"174px",selectors:{"@media(max-width: 1024px)":{minWidth:"100%",width:"100%"}}},iconArea:{padding:"1rem",selectors:{"@media(max-width: 1024px)":{padding:"0.6rem"}}}}),L=function(e){var t=e.title,a=e.description,o=e.imgUrl,i=Object(n.useState)(window.screen.width),c=i[0],l=i[1];return Object(n.useEffect)((function(){var e=function(){l(window.screen.width)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),r.a.createElement(S.a,{horizontal:!0,className:B.root,styles:{root:{backgroundColor:"#0B0C0E",justifyContent:"center",alignItems:"center"}}},r.a.createElement(S.a.Item,null,r.a.createElement(N.a,{className:B.iconArea,width:c>1024?86:64,height:c>1024?86:64,src:c>640?o.large:o.default})),r.a.createElement(S.a.Section,null,r.a.createElement(u.a,{styles:{root:{fontSize:"28px",fontWeight:"400",color:"#fff",selectors:{"@media(max-width: 1024px)":{fontSize:"18px"}}}}},t),r.a.createElement(u.a,{styles:{root:{fontSize:"20px",color:"#BCBCBC",selectors:{"@media(max-width: 1024px)":{fontSize:"15px"}}}},block:!0},a)))},j=function(){return(j=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},O=[{title:"Seamless Interoperation",description:"Ledgers of any type may get involved effortlessly via Cdot WASM Plug-in",imgUrl:{default:"/assets/images/introduction/icon1.png",large:"/assets/images/introduction/icon1@2x.png"}},{title:"Settlement Assurance",description:"When risk becomes a measurable estimate, all transactions could be settled with confidence.",imgUrl:{default:"/assets/images/introduction/icon2.png",large:"/assets/images/introduction/icon2@2x.png"}},{title:"Long-term Sustainability",description:"A mechanism ensures the fair of wealth to all participants.",imgUrl:{default:"/assets/images/introduction/icon3.png",large:"/assets/images/introduction/icon3@2x.png"}}],T=Object(c.o)({root:{width:"100%",height:"1000px",padding:"20rem 0rem"},banner:{background:"no-repeat center center",backgroundColor:"black",backgroundAttachment:"scroll",backgroundSize:"cover",backgroundImage:"url(/assets/images/background/bg2.png)",selectors:{"@media(min-width: 1024px)":{backgroundImage:"url(/assets/images/background/bg2@2x.png)"},"@media(max-width: 1024px)":{flexDirection:"column"}}},textArea:{paddingLeft:"4rem",width:"400px",selectors:{"@media(max-width: 1024px)":{margin:0,padding:"0 1rem",width:"calc(100% - 1rem)"},"@media(min-width: 1024px)":{width:"500px"},"@media(min-width: 1366px)":{width:"700px"}}},introductionTitle:{fontSize:"50px",fontWeight:"400",selectors:{"@media(max-width: 1024px)":{fontSize:"35px"}}},introductionText:{fontSize:"24px",color:"#B3B3B3",fontWeight:"400",selectors:{"@media(max-width: 1024px)":{fontSize:"20px"}}}}),F=function(){var e=Object(n.useState)(window.screen.width),t=(e[0],e[1]);return Object(n.useEffect)((function(){var e=function(){t(window.screen.width)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),r.a.createElement("div",{className:T.root},r.a.createElement(g.a,{className:T.banner,horizontal:!0,verticalAlign:"center",horizontalAlign:"space-between"},r.a.createElement(g.a.Item,null,r.a.createElement(g.a,{className:T.textArea,tokens:{childrenGap:"1rem"}},r.a.createElement(g.a.Item,null,r.a.createElement(u.a,{className:T.introductionTitle},"A Closer Look at Cdot Network")),r.a.createElement(g.a.Item,null,r.a.createElement(u.a,{className:T.introductionText},"Cdot addresses key barriers facing blockchain innovation:Trustless Interoperation, Secure Transaction, Sustainable Mechanism.")),r.a.createElement(g.a.Item,null,r.a.createElement(h.a,{styles:{root:{height:"53px",width:"183px",transition:"ease-in-out 0.2s"},rootHovered:{backgroundColor:"#fff",transition:"ease-in-out 0.2s"},label:{color:"#030303",fontWeight:"400"}}},"Learn More")))),r.a.createElement(g.a.Item,null,r.a.createElement(g.a,{styles:{root:{paddingRight:"10rem",selectors:{"@media(max-width: 1024px)":{paddingRight:"0",paddingTop:"1rem"}}}},tokens:{childrenGap:25}},O.map((function(e){return r.a.createElement(L,j({key:e.title},e))}))))))},W=Object(c.o)({root:{minHeight:"1009px"},banner:{display:"flex",justifyContent:"center",height:"657px",width:"100%",background:"no-repeat center center",backgroundColor:"black",backgroundAttachment:"scroll",backgroundSize:"cover",backgroundImage:"url(/assets/images/background/bg4.png)",selectors:{"@media(min-width: 1024px)":{backgroundImage:"url(/assets/images/background/bg4@2x.png)"}}},title:{fontSize:"50px",marginBottom:"2rem",selectors:{"@media(max-width: 1024px)":{marginBottom:"1rem",padding:"0 1rem",fontSize:"35px"}}},introduction:{maxWidth:"716px",fontSize:"26px",color:"#BCBCBC",selectors:{"@media(max-width: 1024px)":{padding:"0 1rem",fontSize:"20px"}}}}),D=function(){return r.a.createElement("div",{className:W.root},r.a.createElement(g.a,{horizontalAlign:"center",verticalAlign:"center"},r.a.createElement(g.a.Item,null,r.a.createElement(u.a,{block:!0,className:W.title},"A Rendezvous for Web3 Innovation")),r.a.createElement(g.a.Item,{className:W.banner},r.a.createElement(u.a,{block:!0,className:W.introduction},"Cdot is aiming to be a core component infrastructure for Web3 that empowers next generation of blockchain innovation"))))},R=Object(c.o)({root:{width:"100%",height:"1009px"},partners:{fontSize:"56px"},card:{width:"322px",minWidth:"322px",height:"140px",marginLeft:"2rem",backgroundColor:"#131313",justifyContent:"center",alignItems:"center",selectors:{"@media(max-width: 1023px)":{margin:"0 0 1rem",width:"100%",minWidth:"100%"}}}}),G=function(e){var t=e.partners,a=Object(n.useState)(window.screen.width),o=a[0],i=a[1];return Object(n.useEffect)((function(){var e=function(){i(window.screen.width)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),r.a.createElement("div",{className:R.root},r.a.createElement(g.a,{tokens:{childrenGap:"5rem"}},r.a.createElement(g.a.Item,{align:"center"},r.a.createElement(u.a,{className:R.partners},"Partners")),r.a.createElement(g.a.Item,{styles:{root:{width:"100%"}},align:"center"},r.a.createElement(g.a,{wrap:!0,tokens:{childrenGap:20},horizontal:!0,horizontalAlign:"center"},t.map((function(e){var t=e.name,a=e.imgUrl,n=e.width,i=e.height;return r.a.createElement(g.a.Item,{key:t},r.a.createElement(S.a,{className:R.card},r.a.createElement(S.a.Section,null,r.a.createElement(N.a,{width:n,height:i,src:o>640?a.large:a.default}))))}))))))},U=a(82),P=Object(c.o)({root:{minHeight:"1009px",selectors:{"@media(max-width: 1024px)":{height:"auto"}}},banner:{background:"no-repeat center center",backgroundColor:"black",backgroundAttachment:"scroll",backgroundSize:"cover",backgroundImage:"url(/assets/images/background/bg5.png)",selectors:{"@media(min-width: 1024px)":{backgroundImage:"url(/assets/images/background/bg5@2x.png)"}}},newsTitle:{fontSize:"50px",fontWeight:"400",selectors:{"@media(max-width: 1024px)":{fontSize:"30px"}}},card:{width:"398px",minWidth:"398px",height:"424px",minHeight:"424px",backgroundColor:"#000",selectors:{"@media(max-width: 1024px)":{width:"100%",minWidth:"100%"},"@media(max-width: 1920px)":{width:"398px",height:"424px"},":hover":{backgroundColor:"#E0E0E0",transition:"ease-in-out 0.5s",selectors:{":hover span":{color:"#000"},":hover .cdot-hover-description":{color:"#666"}}}}},cardBody:{padding:"2rem 1rem"},cardTitle:{height:"103px",fontSize:"28px",fontWeight:"400",selectors:{"@media(max-width: 1024px)":{fontSize:"22px"}}},cardDescription:{height:"89px",color:"#666666",fontSize:"20px",fontWeight:"400",selectors:{"@media(max-width: 1024px)":{fontSize:"18px"}}}}),H=function(e){var t=e.news,a=Object(n.useState)(window.screen.width),o=a[0],i=a[1];return Object(n.useEffect)((function(){var e=function(){i(window.screen.width)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),r.a.createElement("div",{className:Object(c.p)(P.root,P.banner)},r.a.createElement(g.a,{tokens:{childrenGap:"5rem"}},r.a.createElement(g.a.Item,{align:"center"},r.a.createElement(u.a,{className:P.newsTitle},"Latest News")),r.a.createElement(g.a.Item,{styles:{root:{width:"100%"}},align:"center"},r.a.createElement(g.a,{tokens:{childrenGap:o>1024?44:10},wrap:!0,horizontalAlign:"center",verticalAlign:"center",horizontal:o>1024},t.map((function(e){var t=e.title,a=e.description;return r.a.createElement(S.a,{className:P.card,key:t},r.a.createElement(S.a.Section,{tokens:{childrenGap:o>1024?"3rem":10},className:P.cardBody},r.a.createElement(u.a,{className:P.cardTitle},t),r.a.createElement(u.a,{className:Object(c.p)("cdot-hover-description",P.cardDescription)},a)),r.a.createElement(S.a.Section,null,r.a.createElement(U.a,{styles:{root:{backgroundColor:"transparent",border:"none",width:"150px"},rootHovered:{backgroundColor:"transparent"},label:{width:"103px",fontSize:"20px",fontWeight:"400",color:"#fff"}}},"Learn more")))}))))))},M=Object(c.o)({root:{minHeight:"1275px"},title:{fontSize:"56px"},card:{},cardTitle:{},cardDescription:{background:"linear-gradient(#BCBCBC, #525052)"}}),_=function(e){var t=e.participants;return r.a.createElement("div",{className:M.root},r.a.createElement(g.a,{verticalAlign:"center",horizontalAlign:"center",tokens:{childrenGap:"5rem"}},r.a.createElement(g.a.Item,null,r.a.createElement(g.a,{tokens:{childrenGap:50},verticalAlign:"center",horizontalAlign:"center"},r.a.createElement(g.a.Item,null,r.a.createElement(u.a,{className:M.title},"Participants")),r.a.createElement(g.a.Item,null,r.a.createElement(h.a,{styles:{root:{height:"53px",width:"183px",transition:"ease-in-out 0.2s"},rootHovered:{backgroundColor:"#fff",transition:"ease-in-out 0.2s"},label:{color:"#030303",fontWeight:"400"}}},"Learn More")))),r.a.createElement(g.a.Item,{align:"center"},r.a.createElement("div",{className:"ms-Grid",dir:"ltr"},r.a.createElement("div",{className:"ms-Grid-row"},t.map((function(e){return r.a.createElement("div",{key:e.title,className:Object(c.p)("ms-Grid-col","ms-md4","ms-sm12",{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"4rem"})},r.a.createElement(S.a,{className:M.card},r.a.createElement(S.a.Section,null,e.icon(),r.a.createElement(u.a,{className:M.cardTitle},e.title),r.a.createElement(u.a,{className:Object(c.p)("cdot-text-gradual-change",M.cardDescription)},e.description))))})))))))},J=a(138),Q=a(38),V=a(77),$=a(51),q=Object(c.o)({root:{height:"200px"},banner:{background:"no-repeat center center",backgroundColor:"black",backgroundAttachment:"scroll",backgroundSize:"cover",backgroundImage:"url(/assets/images/background/footer.png)",selectors:{"@media(min-width: 1024px)":{backgroundImage:"url(/assets/images/background/footer@2x.png)"}}},left:{marginLeft:"6rem",selectors:{"@media(max-width: 1024px)":{marginLeft:"1rem"}}},right:{marginRight:"6rem",selectors:{"@media(max-width: 1024px)":{marginRight:"1rem"}}},copyright:{color:"#DBDBDB",fontSize:"18px"}}),K=function(){var e=Object(n.useState)(window.screen.width),t=e[0],a=e[1];return Object(n.useEffect)((function(){var e=function(){a(window.screen.width)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),r.a.createElement(g.a,{horizontal:t>640,horizontalAlign:t>640?"space-between":"center",verticalAlign:"center",tokens:{childrenGap:t>640?0:"2rem"},className:Object(c.p)(q.root,q.banner)},r.a.createElement(g.a.Item,null,r.a.createElement(g.a,{className:q.left,tokens:{childrenGap:"1rem"},horizontal:!0,horizontalAlign:"center",verticalAlign:"center"},r.a.createElement(g.a.Item,null,r.a.createElement(N.a,{width:109,height:38,src:"/assets/images/logo.png"})),r.a.createElement(g.a.Item,null,r.a.createElement(J.a,{styles:{root:{height:"36px"}},vertical:!0})),r.a.createElement(g.a.Item,null,r.a.createElement(u.a,{className:q.copyright},"Copyright \xa9 2019 cdot.network foundation. All rights reserved.")))),r.a.createElement(g.a.Item,null,r.a.createElement(g.a,{className:q.right,tokens:{childrenGap:"3rem"},horizontal:!0},r.a.createElement(g.a.Item,null,r.a.createElement(Q.a,{color:"rgb(136, 136, 136)",size:"2x",icon:$.b})),r.a.createElement(g.a.Item,null,r.a.createElement(Q.a,{color:"rgb(136, 136, 136)",size:"2x",icon:$.a})),r.a.createElement(g.a.Item,null,r.a.createElement(Q.a,{color:"rgb(136, 136, 136)",size:"2x",icon:$.c})),r.a.createElement(g.a.Item,null,r.a.createElement(Q.a,{color:"rgb(136, 136, 136)",size:"2x",icon:V.a})))))},X=(a(99),[{title:"A thorough interpretation on the architecture of Polkadot.",description:"In this article, Louis Liu shared his insights on the future trend of Appchains.",to:""},{title:"Insight: \u2018The governance of applications\u2019, that\u2019s the Achilles' Heel of Dapp.",description:"Talking about blockchain, the most noticeable merits it brings about is cutting down the transaction costs as it\u2026",to:""},{title:"A brief history about Web3 \u2013 to all the genuine blockchain startups.",description:"From open society to cypher punk, from Bitcoin to Ethereum then to Polkadot, the development of Web3 has always\u2026",to:""},{title:"The key to protocol governance: achieving network effect by \u2026",description:"Self-mockery has always been popular among Chinese retail investors. However, these retail investors are the ones\u2026",to:""}]),Y=[{name:"polkadot",imgUrl:{default:"/assets/images/partner/Polkadot.png",large:"/assets/images/partner/Polkadot@2x.png"},width:216,height:49},{name:"rust.cc",imgUrl:{default:"/assets/images/partner/rust.cc.png",large:"/assets/images/partner/rust.cc@2x.png"},width:203,height:55},{name:"polkbase.",imgUrl:{default:"/assets/images/partner/polkabase.png",large:"/assets/images/partner/polkabase@2x.png"},width:270,height:50},{name:"one block+",imgUrl:{default:"/assets/images/partner/one_block+.png",large:"/assets/images/partner/one_block+@2x.png"},width:169,height:58}],Z=[y,C,z,I,A],ee=function(){return r.a.createElement(w.a,{className:Object(c.p)({backgroundColor:"#000"})},r.a.createElement(b,{items:[{name:"About",url:"/contact"},{name:"Github",url:"https://github.com/cdot-network"},{name:"Blog",url:"/contact"}]}),r.a.createElement(F,null),r.a.createElement(D,null),r.a.createElement(_,{participants:Z}),r.a.createElement(H,{news:X}),r.a.createElement(G,{partners:Y}),r.a.createElement(K,null))};Object(s.a)();var te=function(){return r.a.createElement(m.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:ee})))};Object(c.n)({defaultFontStyle:{fontFamily:"Alata, Alata-Regular, sans-serif",color:"white"},palette:{themePrimary:"#DBDBDB",themeLighterAlt:"#eff6fc",themeLighter:"#deecf9",themeLight:"#c7e0f4",themeTertiary:"#FFFFFF",themeSecondary:"#E0E0E0",themeDarkAlt:"#E0E0E0",themeDark:"#E0E0E0",themeDarker:"#939496",neutralLighterAlt:"#f8f8f8",neutralLighter:"#f4f4f4",neutralLight:"#eaeaea",neutralQuaternaryAlt:"#dadada",neutralQuaternary:"#d0d0d0",neutralTertiaryAlt:"#c8c8c8",neutralTertiary:"#c2c2c2",neutralSecondary:"#858585",neutralPrimaryAlt:"#4b4b4b",neutralPrimary:"#333333",neutralDark:"#272727",black:"#1d1d1d",white:"#ffffff"}}),i.a.render(r.a.createElement(te,null),document.getElementById("root")),l.a()},68:function(e,t,a){"use strict";(function(e){function n(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(t){console.error("swUrl:",e),console.error("Error during service worker registration:",t)}))}a.d(t,"a",(function(){return o}));var r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(t){if("serviceWorker"in navigator){if(new URL(e.env.PUBLIC_URL,window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="/cdot.network//service-worker.js";r?(!function(e,t){fetch(e).then((function(a){var r=a.headers.get("content-type");404===a.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):n(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):n(e,t)}))}}}).call(this,a(66))},93:function(e,t,a){},94:function(e,t,a){},99:function(e,t,a){}},[[102,1,2]]]);