(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{103:function(e,t,c){},104:function(e,t,c){},147:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(19),s=c.n(n),i=c(25),r=c(81),o=c(82),l=c(90),h=c(61),j="SEARCH_COIN",d={keyword:"",recentKeywords:[]},p=Object(i.combineReducers)({coinSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(h.a)(Object(h.a)({},e),{},{keyword:t.payload,recentKeywords:[].concat(Object(l.a)(e.recentKeywords),[t.payload])});default:return e}}}),u=[r.a],b=Object(i.createStore)(p,{},Object(o.composeWithDevTools)(i.applyMiddleware.apply(void 0,u))),g=c(30),m=c.p+"static/media/tree.512693fd.svg",x=c(21),O=c(7),f=(c(103),c(104),c(17)),v=c.n(f),y=c(28),_=c(10),N=c(13),k=c.n(N),w=c(35),D=c.n(w),F=c(2),C=function(e){var t=e.history,c=Object(a.useState)([]),n=Object(_.a)(c,2),s=n[0],i=n[1],r=Object(a.useState)([]),o=Object(_.a)(r,2),l=o[0],h=o[1],j=Object(g.c)((function(e){return e.coinSearch})).keyword;Object(a.useEffect)((function(){s&&s.length>0?console.log("Coins loaded:",s):p(),j&&d(j)}),[s,j,t]);var d=function(e){console.log("searching");var c=[];s.forEach((function(t){t.id.includes(e)&&c.push(t)})),h(c),t.push("/search/".concat(e))},p=function(){var e=Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetching coins"),e.next=3,k.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd").then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(e){return e.length>15?"".concat(e.substring(0,12),"..."):e},b=function(e){return Math.abs(e)>1?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):e};return Object(F.jsxs)("div",{id:"crypto-list-div",children:[Object(F.jsx)("h2",{id:"crypto-list-title",children:"Crypto Tracks"}),Object(F.jsxs)("table",{className:"coin-table",children:[Object(F.jsx)("thead",{className:"thead-light",children:Object(F.jsxs)("tr",{children:[Object(F.jsx)("th",{className:"image-thead"}),Object(F.jsx)("th",{children:"Name"}),Object(F.jsx)("th",{children:"Symbol"}),Object(F.jsx)("th",{children:"Current Price"}),Object(F.jsx)("th",{children:"24h Price Change"}),Object(F.jsx)("th",{children:"24h % Change"}),Object(F.jsx)("th",{children:"24h Low"}),Object(F.jsx)("th",{children:"24h High"}),Object(F.jsx)("th",{children:"Coins in Circulation"}),Object(F.jsx)("th",{children:"Market Cap"})]})}),Object(F.jsx)("tbody",{children:s&&s.length>10&&""===j?s.slice(0,100).map((function(e){return Object(F.jsxs)("tr",{height:"60px",className:"coin-container",children:[Object(F.jsx)("td",{className:"image-container",children:Object(F.jsx)("img",{className:"coin-image",alt:e.name,src:e.image})}),Object(F.jsx)("td",{className:"coin-list-name",children:Object(F.jsx)(x.b,{to:"/coin/".concat(e.id,"/history"),children:u(e.name)})}),Object(F.jsx)("td",{className:"coin-list-symbol",children:e.symbol.toUpperCase()}),Object(F.jsxs)("td",{className:"coin-list-price",children:["$",e.current_price<=.5?e.current_price.toFixed(4):e.current_price<=1?e.current_price.toFixed(3):b(e.current_price.toFixed(2))]}),Math.sign(e.price_change_24h)>0?Object(F.jsxs)("td",{className:"coin-list-price-change",style:{color:"#1c8815"},children:["$",Math.abs(e.price_change_24h)<=.1?b(e.price_change_24h.toFixed(6)):Math.abs(e.price_change_24h)<=.5?b(e.price_change_24h.toFixed(4)):b(e.price_change_24h.toFixed(2))]}):Object(F.jsxs)("td",{className:"coin-list-price-change",style:{color:"#c12a2a"},children:["$",Math.abs(e.price_change_24h)<=.1?b(e.price_change_24h.toFixed(6)):Math.abs(e.price_change_24h)<=.5?b(e.price_change_24h.toFixed(4)):b(e.price_change_24h.toFixed(2))]}),Math.sign(e.price_change_percentage_24h)>0?Object(F.jsxs)("td",{className:"coin-list-percent-change",style:{color:"#1c8815"},children:[e.price_change_percentage_24h.toFixed(2),"%"]}):Object(F.jsxs)("td",{className:"coin-list-price-change",style:{color:"#c12a2a"},children:[e.price_change_percentage_24h.toFixed(2),"%"]}),Object(F.jsxs)("td",{className:"coin-list-24low",children:["$",Math.abs(e.low_24h)<=.5?b(e.low_24h.toFixed(6)):Math.abs(e.low_24h)<=1?b(e.low_24h.toFixed(4)):b(e.low_24h.toFixed(2))]}),Object(F.jsxs)("td",{className:"coin-list-24high",children:["$",Math.abs(e.high_24h)<=.5?b(e.high_24h.toFixed(6)):Math.abs(e.high_24h)<=1?b(e.high_24h.toFixed(4)):b(e.high_24h.toFixed(2))]}),Object(F.jsx)("td",{className:"coin-list-circulation",children:e.circulating_supply?D()(e.circulating_supply).format("0.0a").toUpperCase():"null"}),Object(F.jsxs)("td",{className:"coin-list-total-volume",children:["$",D()(e.market_cap).format("0.0a").toUpperCase()]})]},e.id)})):l.map((function(e){return Object(F.jsxs)("tr",{height:"50px",className:"coin-container",children:[Object(F.jsx)("td",{className:"image-container",children:Object(F.jsx)("img",{className:"coin-image",alt:e.name,src:e.image})}),Object(F.jsx)("td",{className:"coin-list-name",children:Object(F.jsx)(x.b,{to:"/coin/".concat(e.id,"/history"),children:u(e.name)})}),Object(F.jsx)("td",{className:"coin-list-symbol",children:e.symbol.toUpperCase()}),Object(F.jsxs)("td",{className:"coin-list-price",children:["$",b(e.current_price.toFixed(2))]}),Math.sign(e.price_change_24h)>0?Object(F.jsxs)("td",{className:"coin-list-price-change",style:{color:"#1c8815"},children:["$",b(e.price_change_24h.toFixed(2))]}):Object(F.jsxs)("td",{className:"coin-list-price-change",style:{color:"#c12a2a"},children:["$",b(e.price_change_24h.toFixed(2))]}),Math.sign(e.price_change_percentage_24h)>0?Object(F.jsxs)("td",{className:"coin-list-percent-change",style:{color:"#1c8815"},children:[e.price_change_percentage_24h.toFixed(2),"%"]}):Object(F.jsxs)("td",{className:"coin-list-price-change",style:{color:"#c12a2a"},children:[e.price_change_percentage_24h.toFixed(2),"%"]}),Object(F.jsxs)("td",{className:"coin-list-24low",children:["$",b(e.low_24h.toFixed(2))]}),Object(F.jsxs)("td",{className:"coin-list-24high",children:["$",b(e.high_24h.toFixed(2))]}),Object(F.jsx)("td",{className:"coin-list-circulation",children:e.circulating_supply?D()(e.circulating_supply).format("0.0a").toUpperCase():"null"}),Object(F.jsxs)("td",{className:"coin-list-total-volume",children:["$",D()(e.market_cap).format("0.0a").toUpperCase()]})]},e.id)}))})]})]})},S=function(e){var t=e.match;Object(a.useEffect)((function(){c()}));var c=function(){var e=Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://api.coingecko.com/api/v3/coins/".concat(t.params.id)).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(F.jsx)("div",{children:Object(F.jsx)("h2",{children:"Single Coin Data"})})},M=function(e){return function(){var t=Object(y.a)(v.a.mark((function t(c){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:j,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},$=c(153),P=c(154),A=c(155),E=c(87),U=c(150),J=Object(O.f)((function(e){var t=e.history,c=Object(a.useState)(""),n=Object(_.a)(c,2),s=n[0],i=n[1],r=Object(g.b)();return Object(F.jsxs)($.a,{className:"navbar-container",variant:"dark",style:{display:"flex",flexDirection:"row",flexWrap:"wrap",overflow:"hidden"},children:[Object(F.jsx)($.a.Brand,{className:"App-title",href:"#",children:"Crypto Tracks"}),Object(F.jsxs)(P.a,{style:{verticalAlign:"middle"},className:"mr-auto",children:[Object(F.jsx)(x.b,{className:"nav-links",onClick:function(){r(M(""))},exact:!0,to:"/",children:"Home"}),Object(F.jsx)("a",{className:"nav-links",href:"https://github.com/JakeScudder",children:Object(F.jsx)("i",{className:"fab fa-github"})}),Object(F.jsx)(x.b,{className:"nav-links",to:"#",children:Object(F.jsx)("i",{className:"fab fa-instagram"})})]}),Object(F.jsxs)(A.a,{onSubmit:function(e){e.preventDefault();var c=s.toLowerCase();r(M(c)),t.push("/")},inline:!0,children:[Object(F.jsx)(E.a,{type:"text",placeholder:"Search",className:"mr-sm-2 search-input",onChange:function(e){return i(e.target.value)}}),Object(F.jsx)(U.a,{type:"submit",variant:"outline-light",children:"Search"})]})]})})),B=c.p+"static/media/tracks.0a43b862.svg",T=function(){return Object(F.jsxs)("div",{id:"traintrack-border",children:[Object(F.jsx)("img",{src:B,className:"traintracks",alt:"logo"}),Object(F.jsx)("img",{src:B,className:"traintracks",alt:"logo"}),Object(F.jsx)("img",{src:B,className:"traintracks three",alt:"logo"}),Object(F.jsx)("img",{src:B,className:"traintracks four",alt:"logo"})]})},L=c.p+"static/media/train.cf802508.svg",H=function(){return Object(F.jsx)("div",{id:"train-div",children:Object(F.jsx)("img",{src:L,className:"train",alt:"logo"})})},K=(c(128),c(24)),W=function(e){var t=e.data,c=e.yValues;return Object(F.jsxs)(K.f,{yDomain:c,xType:"ordinal",margin:{left:60,bottom:50,top:25},width:325,height:325,className:"chart",children:[Object(F.jsx)(K.d,{}),Object(F.jsx)(K.b,{}),Object(F.jsx)(K.e,{tickLabelAngle:-45,style:{fontWeight:"600"}}),Object(F.jsx)(K.g,{}),Object(F.jsx)(K.a,{xPercent:.02,yPercent:-.15,text:"Price in $",className:"alt-y-label"}),Object(F.jsx)(K.c,{color:"#61dafb",data:t})]})},I=c(151),R=c(88),V=function(e){var t=e.data;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(I.a,{className:"chart-info-header",children:[Object(F.jsx)(R.a,{className:"chart-info-header",children:"Day"}),Object(F.jsx)(R.a,{className:"chart-info-header",children:"Price"})]}),Object(F.jsx)(I.a,{className:"chart-info-container",children:t.map((function(e){return Object(F.jsxs)(I.a,{className:"chart-info-data-point",children:[Object(F.jsx)(R.a,{className:"xypoint",children:e.x}),Object(F.jsxs)(R.a,{className:"xypoint",children:["$",e.y<=.01?e.y.toFixed(8):e.y<=.5?e.y.toFixed(4):(t=e.y.toFixed(2),t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))]})]},e.x);var t}))})]})},Y=c(152),q=function(){return Object(F.jsx)(Y.a,{animation:"border",role:"status",style:{width:"40px",height:"40px",margin:"auto",display:"block"},children:Object(F.jsx)("span",{className:"sr-only",children:"Loading..."})})},z=function(e){var t=e.match,c=Object(a.useState)([]),n=Object(_.a)(c,2),s=n[0],i=n[1],r=Object(a.useState)([]),o=Object(_.a)(r,2),l=o[0],h=o[1],j=Object(a.useState)(!1),d=Object(_.a)(j,2),p=d[0],u=d[1],b=Object(a.useState)(!0),g=Object(_.a)(b,2),m=g[0],x=g[1],O=Object(a.useState)(!1),f=Object(_.a)(O,2),v=f[0],y=f[1],N=Object(a.useState)(!1),w=Object(_.a)(N,2),D=w[0],C=w[1],S=Object(a.useState)([]),M=Object(_.a)(S,2),$=M[0],P=M[1],A=Object(a.useState)([]),E=Object(_.a)(A,2),J=E[0],B=E[1],T=Object(a.useState)([]),L=Object(_.a)(T,2),H=L[0],K=L[1],I=Object(a.useState)(!0),R=Object(_.a)(I,2),Y=R[0],z=R[1];Object(a.useEffect)((function(){(v||m||D)&&setTimeout((function(){p||ne()}),1500),0===l.length&&(h(l.concat(X())),P(l.concat(Z()))),s.length>0&&p&&se()}),[h,l,s]);var G=function(e){var t=e.getDate(),c=e.getMonth()+1,a=e.getFullYear();return t<10&&(t="0"+t),c<10&&(c="0"+c),e=t+"-"+c+"-"+a},Q=function(e){var t=e.getDate(),c=e.getMonth();return"".concat(c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][c]," ").concat(t)},X=function(){for(var e=[],t=0;t<7;t++){var c=new Date;c.setDate(c.getDate()-t),e.push(G(c))}return e},Z=function(){for(var e=[],t=0;t<7;t++){var c=new Date;c.setDate(c.getDate()-t),e.push(Q(c))}return e.reverse(),e},ee=function(){for(var e=[],t=0;t<=30;t+=5){var c=new Date;c.setDate(c.getDate()-t),e.push(G(c))}return e},te=function(){for(var e=[],t=0;t<=30;t+=5){var c=new Date;c.setDate(c.getDate()-t),e.push(Q(c))}return e.reverse(),e},ce=function(){for(var e=[],t=0;t<=60;t+=10){var c=new Date;c.setDate(c.getDate()-t),e.push(G(c))}return e},ae=function(){for(var e=[],t=0;t<=60;t+=10){var c=new Date;c.setDate(c.getDate()-t),e.push(Q(c))}return e.reverse(),e},ne=function(){var e,c,a,n,s,r,o;console.log("Fetching Coin Data"),l&&l[0]&&(e="https://api.coingecko.com/api/v3/coins/".concat(t.params.id,"/history?date=").concat(l[0]),c="https://api.coingecko.com/api/v3/coins/".concat(t.params.id,"/history?date=").concat(l[1]),a="https://api.coingecko.com/api/v3/coins/".concat(t.params.id,"/history?date=").concat(l[2]),n="https://api.coingecko.com/api/v3/coins/".concat(t.params.id,"/history?date=").concat(l[3]),s="https://api.coingecko.com/api/v3/coins/".concat(t.params.id,"/history?date=").concat(l[4]),r="https://api.coingecko.com/api/v3/coins/".concat(t.params.id,"/history?date=").concat(l[5]),o="https://api.coingecko.com/api/v3/coins/".concat(t.params.id,"/history?date=").concat(l[6]));var h=k.a.get(e),j=k.a.get(c),d=k.a.get(a),p=k.a.get(n),b=k.a.get(s),g=k.a.get(r),m=k.a.get(o);Promise.all([m,g,b,p,d,j,h]).then((function(e){u(!0),console.log("coinData Fetched"),i([]),i(e)})).catch((function(e){return console.log(e)}))},se=function(){console.log("Building Chart");var e=[];s&&s[0]&&$.forEach((function(t,c){var a={x:t,y:s[c].data.market_data.current_price.usd};e.push(a)}));var t=[];e.forEach((function(e){t.push(e.y)})),t.sort((function(e,t){return e-t}));var c=t[0],a=t[6];K([c-=.1*c,a+=.1*a]),z(!1),B(e)};return Object(F.jsxs)("div",{className:"historial-coin-container",children:[Object(F.jsxs)("div",{className:"image-title-container",children:[s&&s[0]?Object(F.jsx)("img",{className:"coin-image-graph",src:s[0].data.image.small,alt:s[0].data.name}):null,Object(F.jsxs)("h4",{children:[t.params.id.toUpperCase()," ",m?"Past 7 Days":null,v?"Past 30 Days":null,D?"Past 60 Days":null]})]}),Object(F.jsxs)("div",{className:"button-graph-container",children:[Object(F.jsx)(U.a,{className:"graph-days-button",onClick:function(){z(!0),u(!1),x(!0),y(!1),C(!1);var e=[],t=X(),c=Z();h(e),P(e),h(t),P(c)},children:"7 Days"}),Object(F.jsx)(U.a,{className:"graph-days-button",onClick:function(){z(!0),u(!1),y(!0),C(!1),x(!1);var e=[],t=ee(),c=te();h(e),P(e),h(t),P(c)},children:"30 Days"}),Object(F.jsx)(U.a,{className:"graph-days-button",onClick:function(){z(!0),u(!1),C(!0),y(!1),x(!1);var e=[],t=ce(),c=ae();h(e),P(e),h(t),P(c)},children:"60 Days"})]}),Object(F.jsx)("div",{className:"coin-chart-container",children:Y?Object(F.jsx)(q,{}):J.length>0?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(W,{data:J,yValues:H}),Object(F.jsx)(V,{data:J})]}):null})]})};var G=function(){return Object(F.jsx)(x.a,{children:Object(F.jsxs)("div",{className:"App",children:[Object(F.jsx)("header",{className:"App-header",children:Object(F.jsx)("img",{src:m,className:"App-logo",alt:"logo"})}),Object(F.jsx)(J,{}),Object(F.jsx)(H,{}),Object(F.jsx)(T,{}),Object(F.jsxs)(O.c,{children:[Object(F.jsx)(O.a,{path:"/home",component:C}),Object(F.jsx)(O.a,{exact:!0,path:"/coin/:id",component:S}),Object(F.jsx)(O.a,{exact:!0,path:"/coin/:id/history",component:z}),Object(F.jsx)(O.a,{path:"/search/:keyword",component:C}),Object(F.jsx)(O.a,{path:"/",component:C,exact:!0})]})]})})};s.a.render(Object(F.jsx)(g.a,{store:b,children:Object(F.jsx)(G,{})}),document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.3446fe32.chunk.js.map