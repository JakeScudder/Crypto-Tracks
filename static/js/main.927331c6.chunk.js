(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{69:function(e,c,t){},70:function(e,c,t){},95:function(e,c,t){"use strict";t.r(c);var a=t(0),s=t(14),n=t.n(s),i=t(17),r=t(50),l=t(51),o=t(58),h=t(40),j="SEARCH_COIN",d={keyword:"",recentKeywords:[]},p=Object(i.combineReducers)({coinSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case j:return Object(h.a)(Object(h.a)({},e),{},{keyword:c.payload,recentKeywords:[].concat(Object(o.a)(e.recentKeywords),[c.payload])});default:return e}}}),b=[r.a],m=Object(i.createStore)(p,{},Object(l.composeWithDevTools)(i.applyMiddleware.apply(void 0,b))),u=t(19),x=t.p+"static/media/tree.512693fd.svg",g=t(21),O=t(6),f=(t(69),t(70),t(20)),y=t.n(f),N=t(28),_=t(24),v=t(54),k=t.n(v),w=t(25),C=t.n(w),F=t(2),S=function(e){var c=e.history,t=Object(a.useState)([]),s=Object(_.a)(t,2),n=s[0],i=s[1],r=Object(a.useState)([]),l=Object(_.a)(r,2),o=l[0],h=l[1],j=Object(u.c)((function(e){return e.coinSearch})).keyword;Object(a.useEffect)((function(){n&&n.length>0?console.log("Coins loaded:",n):d();j&&function(e){console.log("searching");var t=[];n.forEach((function(c){c.id.includes(e)&&t.push(c)})),h(t),c.push("/search/".concat(e))}(j)}),[n,j,c]);var d=function(){var e=Object(N.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetching coins"),e.next=3,k.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd").then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(e){return e.length>15?"".concat(e.substring(0,12),"..."):e},b=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};return Object(F.jsxs)("div",{id:"crypto-list-div",children:[Object(F.jsx)("h2",{children:"Crypto Tracks"}),Object(F.jsxs)("table",{className:"coin-table",children:[Object(F.jsx)("thead",{className:"thead-light",children:Object(F.jsxs)("tr",{children:[Object(F.jsx)("th",{className:"image-thead"}),Object(F.jsx)("th",{children:"Name"}),Object(F.jsx)("th",{children:"Symbol"}),Object(F.jsx)("th",{children:"Current Price"}),Object(F.jsx)("th",{children:"24h Price Change"}),Object(F.jsx)("th",{children:"24h % Change"}),Object(F.jsx)("th",{children:"24h Low"}),Object(F.jsx)("th",{children:"24h High"}),Object(F.jsx)("th",{children:"Coins in Circulation"}),Object(F.jsx)("th",{children:"Market Cap"})]})}),Object(F.jsx)("tbody",{children:n&&n.length>10&&""===j?n.slice(0,100).map((function(e){return Object(F.jsxs)("tr",{height:"50px",className:"coin-container",children:[Object(F.jsx)("td",{className:"image-container",children:Object(F.jsx)("img",{className:"coin-image",alt:e.name,src:e.image})}),Object(F.jsx)("td",{className:"coin-list-name",children:p(e.name)}),Object(F.jsx)("td",{className:"coin-list-symbol",children:e.symbol.toUpperCase()}),Object(F.jsxs)("td",{className:"coin-list-price",children:["$",b(e.current_price.toFixed(2))]}),Math.sign(e.price_change_24h)>0?Object(F.jsxs)("td",{className:"coin-list-price-change",style:{color:"#1c8815"},children:["$",b(e.price_change_24h.toFixed(2))]}):Object(F.jsxs)("td",{className:"coin-list-price-change",style:{color:"#c12a2a"},children:["$",b(e.price_change_24h.toFixed(2))]}),Math.sign(e.price_change_percentage_24h)>0?Object(F.jsxs)("td",{className:"coin-list-percent-change",style:{color:"#1c8815"},children:[e.price_change_percentage_24h.toFixed(2),"%"]}):Object(F.jsxs)("td",{className:"coin-list-price-change",style:{color:"#c12a2a"},children:[e.price_change_percentage_24h.toFixed(2),"%"]}),Object(F.jsxs)("td",{className:"coin-list-24low",children:["$",b(e.low_24h.toFixed(2))]}),Object(F.jsxs)("td",{className:"coin-list-24high",children:["$",b(e.high_24h.toFixed(2))]}),Object(F.jsx)("td",{className:"coin-list-circulation",children:e.circulating_supply?C()(e.circulating_supply).format("0.0a").toUpperCase():"null"}),Object(F.jsxs)("td",{className:"coin-list-total-volume",children:["$",C()(e.market_cap).format("0.0a").toUpperCase()]})]},e.id)})):o.map((function(e){return Object(F.jsxs)("tr",{height:"50px",className:"coin-container",children:[Object(F.jsx)("td",{className:"image-container",children:Object(F.jsx)("img",{className:"coin-image",alt:e.name,src:e.image})}),Object(F.jsx)("td",{className:"coin-list-name",children:p(e.name)}),Object(F.jsx)("td",{className:"coin-list-symbol",children:e.symbol.toUpperCase()}),Object(F.jsxs)("td",{className:"coin-list-price",children:["$",b(e.current_price.toFixed(2))]}),Math.sign(e.price_change_24h)>0?Object(F.jsxs)("td",{className:"coin-list-price-change",style:{color:"#1c8815"},children:["$",b(e.price_change_24h.toFixed(2))]}):Object(F.jsxs)("td",{className:"coin-list-price-change",style:{color:"#c12a2a"},children:["$",b(e.price_change_24h.toFixed(2))]}),Math.sign(e.price_change_percentage_24h)>0?Object(F.jsxs)("td",{className:"coin-list-percent-change",style:{color:"#1c8815"},children:[e.price_change_percentage_24h.toFixed(2),"%"]}):Object(F.jsxs)("td",{className:"coin-list-price-change",style:{color:"#c12a2a"},children:[e.price_change_percentage_24h.toFixed(2),"%"]}),Object(F.jsxs)("td",{className:"coin-list-24low",children:["$",b(e.low_24h.toFixed(2))]}),Object(F.jsxs)("td",{className:"coin-list-24high",children:["$",b(e.high_24h.toFixed(2))]}),Object(F.jsx)("td",{className:"coin-list-circulation",children:e.circulating_supply?C()(e.circulating_supply).format("0.0a").toUpperCase():"null"}),Object(F.jsxs)("td",{className:"coin-list-total-volume",children:["$",C()(e.market_cap).format("0.0a").toUpperCase()]})]},e.id)}))})]})]})},$=function(e){return function(){var c=Object(N.a)(y.a.mark((function c(t){return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:t({type:j,payload:e});case 1:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()},A=t(99),M=t(101),U=t(100),E=t(57),B=t(98),D=function(){var e=Object(a.useState)(""),c=Object(_.a)(e,2),t=c[0],s=c[1],n=Object(u.b)();return Object(F.jsxs)(A.a,{bg:"primary",variant:"dark",style:{display:"flex",flexDirection:"row",flexWrap:"wrap",overflow:"hidden"},children:[Object(F.jsx)(A.a.Brand,{className:"App-title",href:"#",children:"Crypto Tracks v2"}),Object(F.jsxs)(M.a,{style:{verticalAlign:"middle"},className:"mr-auto",children:[Object(F.jsx)(g.b,{className:"nav-links",onClick:function(){n($(""))},exact:!0,to:"/",children:"Home"}),Object(F.jsx)(g.b,{className:"nav-links",to:"https://github.com/JakeScudder",children:Object(F.jsx)("i",{class:"fab fa-github"})}),Object(F.jsx)(g.b,{className:"nav-links",to:"#",children:Object(F.jsx)("i",{class:"fab fa-instagram"})})]}),Object(F.jsxs)(U.a,{onSubmit:function(e){e.preventDefault(),console.log(t);var c=t.toLowerCase();n($(c))},inline:!0,children:[Object(F.jsx)(E.a,{type:"text",placeholder:"Search",className:"mr-sm-2 search-input",onChange:function(e){return s(e.target.value)}}),Object(F.jsx)(B.a,{type:"submit",variant:"outline-light",children:"Search"})]})]})},H=t.p+"static/media/tracks.0a43b862.svg",J=function(){return Object(F.jsxs)("div",{id:"traintrack-border",children:[Object(F.jsx)("img",{src:H,className:"traintracks",alt:"logo"}),Object(F.jsx)("img",{src:H,className:"traintracks",alt:"logo"}),Object(F.jsx)("img",{src:H,className:"traintracks three",alt:"logo"}),Object(F.jsx)("img",{src:H,className:"traintracks four",alt:"logo"})]})};var K=function(){return Object(F.jsx)(g.a,{children:Object(F.jsxs)("div",{className:"App",children:[Object(F.jsx)("header",{className:"App-header",children:Object(F.jsx)("img",{src:x,className:"App-logo",alt:"logo"})}),Object(F.jsx)(D,{}),Object(F.jsx)(J,{}),Object(F.jsx)(O.a,{path:"/home",component:S}),Object(F.jsx)(O.a,{path:"/search/:keyword",component:S}),Object(F.jsx)(O.a,{path:"/",component:S,exact:!0})]})})};n.a.render(Object(F.jsx)(u.a,{store:m,children:Object(F.jsx)(K,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.927331c6.chunk.js.map