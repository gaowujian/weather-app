(window["webpackJsonpweather-app"]=window["webpackJsonpweather-app"]||[]).push([[0],{129:function(e,n,t){e.exports=t(305)},303:function(e,n,t){},304:function(e,n){},305:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(52),i=t.n(c),o=t(23),u=t(15),l=t(123),p=t(35);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(t,!0).forEach(function(n){Object(p.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var m={isFetched:!1,currentCityId:null,data:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_CURRENT":return d({},e,{isFetched:!0,data:n.payload});case"CHANGE_CITY":return d({},e,{currentCityId:n.data});default:return e}};function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(t,!0).forEach(function(n){Object(p.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var v={isFetched:!1,data:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_FORECAST":return b({},e,{isFetched:!0,data:n.payload});default:return e}};function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(t,!0).forEach(function(n){Object(p.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var x={isFetched:!1,data:null},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_NEWS":return y({},e,{isFetched:!0,data:n.payload});default:return e}},j=Object(o.c)({currentWeatherReducer:f,forecastReducer:g,newsReducer:w}),E=t(18),k=t(19),C=t(21),N=t(20),P=t(22),S=t(30),T=t.n(S),_=t(54),D=t(55),R=t(307),F=t(306),I=t(78),G=t.n(I),W=t(56),M=t.n(W),A=function(){var e=Object(D.a)(T.a.mark(function e(n,t){var r,a,c,i,o,u,l,p,s,d,m,f,h,b,v,g,O,y;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t(),a=r.currentWeatherReducer.currentCityId?r.currentWeatherReducer.currentCityId:"2147714",e.next=4,M.a.get("".concat("https://api.openweathermap.org/data/2.5/weather","?id=").concat(a,"&appid=").concat("dd7a88618d8df6c29500943ea9758455"));case 4:c=e.sent,i=c.data,o=i.name,u=i.main,l=u.temp,p=u.temp_max,s=u.temp_min,d=Object(_.a)(i.weather,1),m=d[0],f=m.main,h=m.icon,b=i.dt,v=i.timezone,g=b+v,O=Object(R.a)(Object(F.a)(g),"iiii"),l=Number(l-273.15).toFixed(0),p=Number(p-273.15).toFixed(0),s=Number(s-273.15).toFixed(0),h=String(h).replace("n","d"),y="http://openweathermap.org/img/wn/".concat(h,"@2x.png"),n({type:"GET_CURRENT",payload:{name:o,temp:l,weatherDes:f,temp_max:p,temp_min:s,weekday:O,iconSrc:y}});case 14:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),z=function(){var e=Object(D.a)(T.a.mark(function e(n,t){var r,a,c,i,o;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t(),a=r.currentWeatherReducer.currentCityId?r.currentWeatherReducer.currentCityId:"2147714",e.next=4,M.a.get("".concat("https://api.openweathermap.org/data/2.5/forecast","?id=").concat(a,"&appid=").concat("dd7a88618d8df6c29500943ea9758455"));case 4:c=e.sent,i=c.data.list,u=i,o=G.a.chunk(u,8).map(function(e){var n=G.a.nth(e,3),t=n.main.temp,r=Object(_.a)(n.weather,1)[0],a=r.main,c=r.icon,i=n.dt+36e3,o=Object(R.a)(Object(F.a)(i),"iiii");return t=Number(t-273.15).toFixed(0),c=String(c).replace("n","d"),{timeStamp:i,weekday:o,iconSrc:"http://openweathermap.org/img/wn/".concat(c,"@2x.png"),temp:t,desc:a}}),n({type:"GET_FORECAST",payload:o});case 8:case"end":return e.stop()}var u},e)}));return function(n,t){return e.apply(this,arguments)}}(),L=function(){var e=Object(D.a)(T.a.mark(function e(n){var t,r;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"au",e.next=3,M.a.get("".concat("https://newsapi.org/v2/top-headlines","?country=").concat("au","&apiKey=").concat("ca1cc463ddcd43939022f3aad58b9252"));case 3:t=e.sent,r=t.data.articles.slice(0,5).map(function(e){return{title:e.title,description:e.description,url:e.url,urlToImage:e.urlToImage}}),n({type:"GET_NEWS",payload:r});case 6:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),U=t(1),H=t(2);function J(){var e=Object(U.a)(["\n  margin: 5px;\n"]);return J=function(){return e},e}function V(){var e=Object(U.a)(["\n  margin: 5px;\n"]);return V=function(){return e},e}function X(){var e=Object(U.a)(["\n  margin: 5px;\n"]);return X=function(){return e},e}function Y(){var e=Object(U.a)(["\n  margin: 5px;\n"]);return Y=function(){return e},e}function B(){var e=Object(U.a)([""]);return B=function(){return e},e}function K(){var e=Object(U.a)([""]);return K=function(){return e},e}function q(){var e=Object(U.a)([""]);return q=function(){return e},e}function Q(){var e=Object(U.a)(["\n  & > option:hover{\n    transform:scale(1.5)\n  }\n"]);return Q=function(){return e},e}function Z(){var e=Object(U.a)(["\n  margin: 0.5em;\n"]);return Z=function(){return e},e}function $(){var e=Object(U.a)(['\n  background-image:url("https://images.pexels.com/photos/2876652/pexels-photo-2876652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");\n  margin: 20px 0;\n  border-radius: 5px;\n  .vertical {\n    display: flex;\n    flex-flow: row;\n    justify-content: space-around;\n    align-items: center;\n    div {\n      margin: 10px;\n    }\n    img {\n      max-width: 30px;\n    }\n  }\n  @media (min-width: 576px) {\n    .vertical {\n      display: flex;\n      flex-flow: column;\n      align-items: center;\n      img {\n        max-width: initial;\n      }\n    }\n  }\n  .horizontal {\n    display: flex;\n    flex-flow: row;\n    justify-content: space-between;\n    div {\n      margin: 10px;\n    }\n  }\n']);return $=function(){return e},e}var ee=H.a.div($()),ne=H.a.h1(Z()),te=H.a.select(Q()),re=H.a.p(q()),ae=H.a.p(K()),ce=H.a.img(B()),ie=H.a.span(Y()),oe=H.a.span(X()),ue=H.a.span(V()),le=H.a.span(J()),pe=function(e){function n(){return Object(E.a)(this,n),Object(C.a)(this,Object(N.a)(n).apply(this,arguments))}return Object(P.a)(n,e),Object(k.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.current,n=e.isFetched,t=e.data;return a.a.createElement(ee,null,a.a.createElement("div",{className:"vertical"},a.a.createElement(ne,null,n?t.name:""),a.a.createElement(te,{className:"selectCity",defaultValue:"Sydney",style:{width:80},onChange:this.props.changeCity},a.a.createElement("option",{value:"2147714"},"Sydney"),a.a.createElement("option",{value:"2158177"},"Melbourne"),a.a.createElement("option",{value:"2172517"},"Canberra"),a.a.createElement("option",{value:"2063523"},"Perth"),a.a.createElement("option",{value:"2078025"},"Adelaide")),a.a.createElement(ce,{src:t.iconSrc,alt:"loading"}),a.a.createElement(re,null,n?t.weatherDes:""),a.a.createElement(ae,null,n?t.temp:"",a.a.createElement("sup",null,"\xb0"),"C")),a.a.createElement("div",{className:"horizontal"},a.a.createElement("div",null,a.a.createElement(ie,null,n?t.weekday:""),a.a.createElement(oe,null,"Today")),a.a.createElement("div",null,a.a.createElement(ue,null,n?t.temp_max:"",a.a.createElement("sup",null,"\xb0"),"C"),a.a.createElement(le,null,n?t.temp_min:"",a.a.createElement("sup",null,"\xb0"),"C"))))}}]),n}(r.Component),se=Object(u.b)(function(e){return{current:e.currentWeatherReducer}},function(e){return{getCurrent:function(){return e(A)},changeCity:function(n){e({type:"CHANGE_CITY",data:n.target.value}),e(A),e(z)}}})(pe);function de(){var e=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  /* background-color: lightblue; */\n"]);return de=function(){return e},e}var me=H.a.div(de());function fe(){var e=Object(U.a)(["\n  flex: 1;\n  text-align: center;\n"]);return fe=function(){return e},e}function he(){var e=Object(U.a)(["\n  flex: 1;\n  text-align: center;\n"]);return he=function(){return e},e}function be(){var e=Object(U.a)(["\n  max-width: 30px;\n  flex: 1;\n"]);return be=function(){return e},e}function ve(){var e=Object(U.a)(["\n  text-align: center;\n  flex: 1;\n"]);return ve=function(){return e},e}function ge(){var e=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  margin: 5px;\n  border-radius:5px;\n  background-color: lightsalmon;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  &:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n"]);return ge=function(){return e},e}var Oe=H.a.div(ge()),ye=H.a.span(ve()),xe=H.a.img(be()),we=H.a.div(he()),je=H.a.span(fe()),Ee=function(e){var n=e.weekday,t=e.iconSrc,r=e.temp,c=e.desc;return a.a.createElement(Oe,null,a.a.createElement(ye,null,n),a.a.createElement(xe,{src:t}),a.a.createElement(we,null,r,a.a.createElement("sup",null,"\xb0"),"C"),a.a.createElement(je,null,c))},ke=function(e){function n(){return Object(E.a)(this,n),Object(C.a)(this,Object(N.a)(n).apply(this,arguments))}return Object(P.a)(n,e),Object(k.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.forecasts,n=e.isFetched,t=e.data;return a.a.createElement(me,{className:"forecast"},n&&t.map(function(e){return a.a.createElement(Ee,{key:e.timeStamp,weekday:e.weekday,iconSrc:e.iconSrc,temp:e.temp,desc:e.desc})}))}}]),n}(a.a.Component),Ce=Object(u.b)(function(e){return{forecasts:e.forecastReducer}},function(e){return{getForecast:function(){return e(z)}}})(ke);function Ne(){var e=Object(U.a)(["\n  /* background: lightslategrey; */\n"]);return Ne=function(){return e},e}var Pe=H.a.div(Ne()),Se=(t(303),t(304),function(e){var n=e.title,t=e.description,r=e.url,c=e.urlToImage;return a.a.createElement("div",{className:"news-card"},a.a.createElement("div",{className:"thumbnail"},c&&a.a.createElement("img",{src:c,alt:"Loading"}),c&&a.a.createElement("div",{className:"category"},"Photos")),a.a.createElement("div",{className:"post-content"},a.a.createElement("h2",{className:"title"},n),a.a.createElement("p",{className:"description"},t),a.a.createElement("div",{className:"post-meta"},a.a.createElement("span",{className:"comments"},a.a.createElement("i",{className:"fa fa-comments"}),a.a.createElement("a",{href:r},"Read More")))))}),Te=function(e){function n(){return Object(E.a)(this,n),Object(C.a)(this,Object(N.a)(n).apply(this,arguments))}return Object(P.a)(n,e),Object(k.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.news,n=e.isFetched,t=e.data;return a.a.createElement(Pe,{className:"news"},n&&t.map(function(e){return a.a.createElement(Se,{key:e.title,title:e.title,description:e.description,url:e.url,urlToImage:e.urlToImage})}))}}]),n}(a.a.Component),_e=Object(u.b)(function(e){return{news:e.newsReducer}},function(e){return{getNews:function(){return e(L)}}})(Te);function De(){var e=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  overflow: overlay;\n  @media (min-width: 576px) {\n    flex-direction: row-reverse;\n    min-height:580px;\n    max-height:600px;\n    & > div:nth-child(2) {\n      flex: 1 1 40%;\n      overflow: overlay;\n    }\n    & > div:nth-child(1) {\n      flex: 1 1 60%;\n      display: flex;\n      flex-flow: row;\n      & > div {\n        display: flex;\n        flex-flow: column;\n        flex: 1;\n\n        justify-content:space-around;\n        & > img {\n          width: 80%;\n          max-width: 100px;\n          max-height: 100px;\n        }\n        & > * {\n          flex:0;\n        }\n      }\n    }\n  }\n"]);return De=function(){return e},e}function Re(){var e=Object(U.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  /* padding-right: 15px;\n  padding-left: 15px; */\n  margin-right: auto;\n  margin-left: auto;\n  @media (min-width: 576px) {\n    max-width: 540px;\n  }\n  @media (min-width: 768px) {\n    max-width: 720px;\n  }\n  @media (min-width: 1200px) {\n    max-width: 1140px;\n  }\n"]);return Re=function(){return e},e}var Fe=H.a.div(Re()),Ie=H.a.div(De());function Ge(){var e=Object(U.a)(["\n  background-color: black;\n  border-radius: 50%;\n  width: 10px;\n  height: 10px;\n  margin: 30px 5px 0 5px;\n  /* Animation */\n  animation: "," 0.5s linear infinite;\n  animation-delay: ",";\n"]);return Ge=function(){return e},e}function We(){var e=Object(U.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n"]);return We=function(){return e},e}function Me(){var e=Object(U.a)(["\n  0% { margin-bottom: 0; }\n  50% { margin-bottom: 25px }\n  100% { margin-bottom: 0 }\n"]);return Me=function(){return e},e}var Ae=Object(H.b)(Me()),ze=H.a.div(We()),Le=H.a.div(Ge(),Ae,function(e){return e.delay});var Ue=function(){return a.a.createElement(ze,null,a.a.createElement("h1",null,"Loading"),a.a.createElement(Le,{delay:"0s"}),a.a.createElement(Le,{delay:".1s"}),a.a.createElement(Le,{delay:".2s"}))},He=function(e){function n(e){var t;return Object(E.a)(this,n),(t=Object(C.a)(this,Object(N.a)(n).call(this,e))).state={loading:!0},t}return Object(P.a)(n,e),Object(k.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.loading(),setTimeout(function(){e.setState({loading:!1})},1e3)}},{key:"render",value:function(){return this.state.loading?a.a.createElement(Ue,null):a.a.createElement(Fe,{id:"weather-app"},a.a.createElement(se,null),a.a.createElement(Ie,null,a.a.createElement(Ce,null),a.a.createElement(_e,null)))}}]),n}(a.a.Component),Je=Object(u.b)(function(e){return e},function(e){return{loading:function(){e(A),e(z),e(L)}}})(He),Ve=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,Xe=Object(o.e)(j,Ve(Object(o.a)(l.a)));i.a.render(a.a.createElement(u.a,{store:Xe},a.a.createElement(Je,null)),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.b2515b74.chunk.js.map