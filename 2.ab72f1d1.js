(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{93:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(12),r=a.n(n),l=a(13),o=a.n(l),c=a(20),s=a.n(c),i=a(14),u=a.n(i),m=a(15),f=a.n(m),p=a(11),d=a.n(p),h=a(26),y=a.n(h),E=a(0),g=a.n(E),v=a(91),w=a(81),C=a(82);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=d()(e);if(t){var r=d()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return f()(this,a)}}var b=function(e){u()(a,e);var t=x(a);function a(){var e;r()(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return e=t.call.apply(t,[this].concat(l)),y()(s()(e),"openNewPage",(function(){window.open(e.props.htmlUrl)})),e}return o()(a,[{key:"render",value:function(){var e=this.props,t=e.listNum,a=e.avatar,n=e.name,r=e.starsCount,l=e.forksCount,o=e.openIssuesCount;return g.a.createElement("div",{className:"MyCard hoverable",onClick:this.openNewPage,title:n},g.a.createElement(v.a,{className:"Card",style:{marginBottom:30,backgroundColor:"#b8e2f2"}},g.a.createElement("div",{className:"CardNum",style:{textAlign:"center"}},"#",t),g.a.createElement(v.a.Img,{className:"CardImg img-fluid img-thumbnail lazyload",style:{width:"100%",padding:20},variant:"top","data-src":a}),g.a.createElement(v.a.Body,null,g.a.createElement(v.a.Title,{className:"CardTitle",style:{textAlign:"center",fontSize:15,color:"red",textTransform:"uppercase"}},n),g.a.createElement("div",null,g.a.createElement("div",{style:{marginBottom:"5px"}},g.a.createElement(w.a,{style:{color:"#ffbf74",width:20},icon:C.f}),g.a.createElement("span",null," ",n)),g.a.createElement("div",{style:{marginBottom:"5px"}},g.a.createElement(w.a,{style:{color:"#ffd700",width:20},icon:C.d}),g.a.createElement("span",null,r," stars")),g.a.createElement("div",{style:{marginBottom:"5px"}},g.a.createElement(w.a,{style:{color:"#82c3f5",width:20},icon:C.c}),g.a.createElement("span",null,l," forks")),g.a.createElement("div",null,g.a.createElement(w.a,{style:{color:"#f18a92",width:20},icon:C.a}),g.a.createElement("span",null,o," open Issues"))))))}}]),a}(E.Component);b.defaultProps={listNum:"???",avatar:"???",name:"???",starsCount:"???",forksCount:"???",openIssuesCount:"???"}},95:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return R}));var n=a(83),r=a.n(n),l=a(84),o=a.n(l),c=a(12),s=a.n(c),i=a(13),u=a.n(i),m=a(20),f=a.n(m),p=a(14),d=a.n(p),h=a(15),y=a.n(h),E=a(11),g=a.n(E),v=a(0),w=a.n(v),C=a(85),x=a.n(C),b=(a(93),a(87)),k=a(89),B=a(90),N=a(91),T=a(92),_=a(81),z=a(82);function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=g()(e);if(t){var r=g()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return y()(this,a)}}var R=function(e){d()(n,e);var t,a=I(n);function n(e){var t;return s()(this,n),(t=a.call(this,e)).state={playerOne:{owner:{avatar_url:""},stargazers_count:0},playerTwo:{owner:{avatar_url:""},stargazers_count:0},winner:"",errorContent:{},error:!1},t.resetTo=t.resetTo.bind(f()(t)),t.fetchGet=t.fetchGet.bind(f()(t)),t}return u()(n,[{key:"componentDidMount",value:function(){this.fetchGet()}},{key:"fetchGet",value:(t=o()(r.a.mark((function e(){var t,a,n,l,o,c,s,i,u,m,f,p,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={},a={},!this.props.location.state){e.next=7;break}t=this.props.location.state.playerOne,a=this.props.location.state.playerTwo,e.next=20;break;case 7:if(n={},window.location.href.includes("?")&&window.location.href.includes("user1=")&&window.location.href.includes("user2=")&&window.location.href.includes("&"))for(l=window.location.href.split("?")[1].split("&"),o=0;o<l.length;o++)c=l[o].split("="),n[c[0]]=c[1];else alert("参数缺失，返回battle页"),this.props.history.replace("/battle");return s=n.user1,i=n.user2,u="https://api.github.com/search/repositories?q=".concat(s),m="https://api.github.com/search/repositories?q=".concat(i),e.next=14,x.a.get(u);case 14:return f=e.sent,e.next=17,x.a.get(m);case 17:p=e.sent,t=f.data.items[0],a=p.data.items[0];case 20:d="",t.stargazers_count>a.stargazers_count?d=t.name:t.stargazers_count<a.stargazers_count&&(d=a.name),this.setState({winner:d,playerOne:t,playerTwo:a});case 23:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"resetTo",value:function(){this.props.history.push({pathname:"/Battle"})}},{key:"render",value:function(){var e=this.state,t=e.playerOne,a=e.playerTwo,n=e.winner;return w.a.createElement(b.a,null,w.a.createElement(k.a,null,w.a.createElement(B.a,{lg:6,md:6,sm:6},w.a.createElement(N.a,{className:"Card",style:{marginBottom:30,backgroundColor:"#b8e2f2"}},w.a.createElement("div",{className:"CardNum",style:{textAlign:"center"}},"#",n===t.name?"Winner":""===n?"Draw":"Loser"),w.a.createElement(N.a.Img,{className:"CardImg img-fluid img-thumbnail",style:{width:"100%",padding:20},variant:"top",src:t.owner.avatar_url}),w.a.createElement(N.a.Body,null,w.a.createElement(N.a.Title,{className:"CardTitle",style:{textAlign:"center",fontSize:15,color:"red",textTransform:"uppercase"}},name),w.a.createElement("div",null,w.a.createElement("div",{style:{marginBottom:"5px"}},w.a.createElement(_.a,{style:{color:"#ffbf74",width:20},icon:z.f}),w.a.createElement("span",null," ",t.owner.login," ")),w.a.createElement("div",{style:{marginBottom:"5px"}},w.a.createElement(_.a,{style:{color:"#ffd700",width:20},icon:z.d}),w.a.createElement("span",null,t.stargazers_count," stars")),w.a.createElement("div",{style:{marginBottom:"5px"}},w.a.createElement(_.a,{style:{color:"#82c3f5",width:20},icon:z.c}),w.a.createElement("span",null,t.forks_count," forks")),w.a.createElement("div",null,w.a.createElement(_.a,{style:{color:"#f18a92",width:20},icon:z.a}),w.a.createElement("span",null,t.open_issues_count," open Issues")))))),w.a.createElement(B.a,{lg:6,md:6,sm:6},w.a.createElement(N.a,{className:"Card",style:{marginBottom:30,backgroundColor:"#b8e2f2"}},w.a.createElement("div",{className:"CardNum",style:{textAlign:"center"}},"#",n===a.name?"Winner":""===n?"Draw":"Loser"),w.a.createElement(N.a.Img,{className:"CardImg img-fluid img-thumbnail",style:{width:"100%",padding:20},variant:"top",src:a.owner.avatar_url}),w.a.createElement(N.a.Body,null,w.a.createElement(N.a.Title,{className:"CardTitle",style:{textAlign:"center",fontSize:15,color:"red",textTransform:"uppercase"}},name),w.a.createElement("div",null,w.a.createElement("div",{style:{marginBottom:"5px"}},w.a.createElement(_.a,{style:{color:"#ffbf74",width:20},icon:z.f}),w.a.createElement("span",null," ",a.owner.login," ")),w.a.createElement("div",{style:{marginBottom:"5px"}},w.a.createElement(_.a,{style:{color:"#ffd700",width:20},icon:z.d}),w.a.createElement("span",null,a.stargazers_count," stars")),w.a.createElement("div",{style:{marginBottom:"5px"}},w.a.createElement(_.a,{style:{color:"#82c3f5",width:20},icon:z.c}),w.a.createElement("span",null,a.forks_count," forks")),w.a.createElement("div",null,w.a.createElement(_.a,{style:{color:"#f18a92",width:20},icon:z.a}),w.a.createElement("span",null,a.open_issues_count," open Issues"))))))),w.a.createElement("div",{style:{textAlign:"center",marginTop:50}},w.a.createElement(T.a,{onClick:this.resetTo},"再来一次")))}}]),n}(v.Component)}}]);
//# sourceMappingURL=2.ab72f1d1.js.map