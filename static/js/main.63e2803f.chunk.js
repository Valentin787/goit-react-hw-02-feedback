(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={container:"App_container__1MQN3"}},function(e,t,n){e.exports={section:"Section_section__Ap5Zy"}},function(e,t,n){e.exports={button:"FeedbackOptions_button__3n-hy"}},function(e,t,n){e.exports={item:"Statistics_item__1vE2T"}},function(e,t,n){e.exports={message:"Notification_message__eciZi"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(3),s=n.n(o),i=(n(18),n(4)),r=n(5),u=n(6),b=n(13),d=n(12),l=n(7),h=n.n(l),j=n(8),f=n.n(j),p=n(0),k=function(e){var t=e.title,n=e.children;return Object(p.jsxs)("section",{className:f.a.section,children:[Object(p.jsx)("h2",{children:t}),Object(p.jsx)("div",{children:n})]})},v=n(9),O=n.n(v),m=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(p.jsx)("button",{className:O.a.button,onClick:n,children:e},e)}))},x=n(10),g=n.n(x),_=function(e){return Object.keys(e).map((function(t){return Object(p.jsxs)("span",{className:g.a.item,children:[t,": ",e[t]]},t)}))},y=n(11),F=n.n(y),C=function(e){var t=e.message;return Object(p.jsx)("span",{className:F.a.message,children:t})},N=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleLeaveFeedback=function(t){var n=t.target.innerText.toLowerCase();e.setState((function(e){return Object(i.a)({},n,e[n]+1)}))},e}return Object(u.a)(n,[{key:"countTotalFeedback",value:function(){return Object.values(this.state).reduce((function(e,t){return e+t}),0)}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.countTotalFeedback();return e?Math.round(100*this.state.good/e):0}},{key:"createFeedbackOptionsComponent",value:function(e){return Object(p.jsx)(m,{options:e,onLeaveFeedback:this.handleLeaveFeedback})}},{key:"createStatisticsComponent",value:function(e,t){return Object(p.jsx)(_,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,goodPercentage:"".concat(t," %")})}},{key:"render",value:function(){var e=Object.keys(this.state),t=this.countTotalFeedback(),n=this.countPositiveFeedbackPercentage(),a=this.createFeedbackOptionsComponent(e),c=this.createStatisticsComponent(t,n),o=Object(p.jsx)(C,{message:"There is no feedback."});return Object(p.jsxs)("div",{className:h.a.container,children:[Object(p.jsx)(k,{title:"Please leave feedback",children:a}),Object(p.jsx)(k,{title:"Statistics",children:t?c:o})]})}}]),n}(c.a.Component);s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.63e2803f.chunk.js.map