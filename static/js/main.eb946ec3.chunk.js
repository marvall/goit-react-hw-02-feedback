(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),r=a(9),o=a.n(r),s=a(10),i=a(3),d=a(4),b=a(6),u=a(5),l=a(7),j=a.n(l),p=a(0),h=function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props.setFeedBack;return Object(p.jsxs)("div",{className:j.a.wrapper,children:[Object(p.jsx)("button",{className:"".concat(j.a.button," ").concat(j.a.good),type:"button",name:"good",onClick:t,children:"Good"}),Object(p.jsx)("button",{className:"".concat(j.a.button," ").concat(j.a.neutral),type:"button",name:"neutral",onClick:t,children:"Neutral"}),Object(p.jsx)("button",{className:"".concat(j.a.button," ").concat(j.a.bad),type:"button",name:"bad",onClick:t,children:"Bad"})]})}}]),a}(c.Component),O=a(2),g=a.n(O),k=function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props,e=t.good,a=t.neutral,c=t.bad,n=t.total,r=t.positivePercentage;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{className:"".concat(g.a.description," ").concat(g.a.good),children:["Good: ",e]}),Object(p.jsxs)("p",{className:g.a.description,children:["Neutral:",a]}),Object(p.jsxs)("p",{className:"".concat(g.a.description," ").concat(g.a.bad),children:["Bad:",c]}),Object(p.jsxs)("p",{className:g.a.description,children:["Total: ",n()]}),Object(p.jsxs)("p",{className:r()>50?"".concat(g.a.description," ").concat(g.a.good):"".concat(g.a.description," ").concat(g.a.bad),children:["Percentage: ",r()," %"]})]})}}]),a}(c.Component),v=function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props,e=t.title,a=t.children;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:e}),a]})}}]),a}(c.Component),f=function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props.message;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("p",{children:t})})}}]),a}(c.Component),m=function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).handleClickButton=function(e){var a=e.currentTarget.name;t.setState((function(t){return Object(s.a)({},a,t[a]+1)}))},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=t.state.good;return Math.floor(e/t.countTotalFeedback()*100)},t.state={good:0,neutral:0,bad:0},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,c=t.bad;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v,{title:"Please Leave Feedback",children:Object(p.jsx)(h,{setFeedBack:this.handleClickButton})}),this.countTotalFeedback()>0?Object(p.jsx)(v,{title:"Statistics",children:Object(p.jsx)(k,{good:e,neutral:a,bad:c,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage})}):Object(p.jsx)(f,{message:"No feedback given"})]})}}]),a}(c.Component);o.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root"))},2:function(t,e,a){t.exports={description:"Statistics_description__3WzS6",good:"Statistics_good__3CDUs",bad:"Statistics_bad__DnyNs"}},7:function(t,e,a){t.exports={wrapper:"CreateFeedback_wrapper__1iDlI",button:"CreateFeedback_button__H_vaJ",good:"CreateFeedback_good__3q2UA",neutral:"CreateFeedback_neutral__7rVGX",bad:"CreateFeedback_bad__1iXF8"}}},[[16,1,2]]]);
//# sourceMappingURL=main.eb946ec3.chunk.js.map