(this["webpackJsonptask-app"]=this["webpackJsonptask-app"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),i=n(9),a=n.n(i),o=(n(16),n(11)),l=n(4),r=n(3),d=n(7),j=n(1),u=function(e){var t=e.list,n=e.delHandler,c=e.editTask,s=e.completedTask;return Object(j.jsx)("section",{className:"tasks-container",children:Object(j.jsxs)("div",{className:"to-do-list",children:[Object(j.jsx)("div",{children:Object(j.jsx)("h1",{style:{color:"#00bcd4"},children:t.length?"To-Do-Tasks":"NO TASK TO DISPLAY (Add Task)"})}),t.map((function(e){var t=e.title,i=e.desc,a=e.id,o=e.completed;return Object(j.jsxs)("div",{className:"task-container",children:[o&&Object(j.jsx)("h4",{className:"time",children:"Task Completed on ".concat((new Date).toLocaleDateString())}),Object(j.jsx)("h1",{children:t}),Object(j.jsx)("p",{children:i}),Object(j.jsxs)("div",{className:"btn-container",children:[Object(j.jsxs)("button",{id:"delBtn",onClick:function(){n(a)},children:[Object(j.jsx)(d.c,{size:"1.5rem"}),Object(j.jsx)("br",{}),"Delete"]}),Object(j.jsxs)("button",{id:"editBtn",onClick:function(){c(a)},style:{color:"blue"},children:[Object(j.jsx)(d.b,{size:"1.5rem"}),Object(j.jsx)("br",{}),"Edit"]}),Object(j.jsxs)("button",{id:"comBtn",onClick:function(){s(a)},style:{color:"green"},children:[Object(j.jsx)(d.a,{size:"1.5rem"}),Object(j.jsx)("br",{}),o?"Undo":"Completed"]})]})]},a)}))]})})},b=n(10),O=function(e){var t=e.list,n=e.msg,s=e.type,i=e.removeModal;return Object(c.useEffect)((function(){var e=setTimeout((function(){i()}),2e3);return function(){return clearTimeout(e)}}),[t,i]),Object(j.jsx)("p",{className:"model ".concat(s),children:n})};var m=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(""),a=Object(r.a)(i,2),d=a[0],m=a[1],f=Object(c.useState)(localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[]),h=Object(r.a)(f,2),p=h[0],x=h[1],g=Object(c.useState)({show:!1,msg:"",type:""}),k=Object(r.a)(g,2),v=k[0],T=k[1],S=Object(c.useState)(!1),C=Object(r.a)(S,2),N=C[0],y=C[1],D=Object(c.useState)(null),w=Object(r.a)(D,2),A=w[0],E=w[1],I=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";T({show:e,msg:t,type:n})};return Object(c.useEffect)((function(){localStorage.setItem("list",JSON.stringify(p))}),[p]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"container-inner",children:[Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("h1",{children:"TASK APP"})}),Object(j.jsx)("div",{id:"form-container",children:Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),n)if(n&&N)x(p.map((function(e){return e.id===A?Object(l.a)(Object(l.a)({},e),{},{title:n,desc:d}):e}))),I(!0,"Task Edited","sucess"),y(!1),s(""),m(""),E(null);else{var t={title:n,desc:d,completed:false,id:(new Date).getTime().toString()};x((function(e){return[].concat(Object(o.a)(e),[t])})),I(!0,"Task Added","sucess"),s(""),m("")}else I(!0,"please Enter The Task Title","danger")},children:[Object(j.jsx)("input",{type:"text",name:"task-title",id:"task-title",placeholder:"Task Title",value:n,onChange:function(e){return s(e.target.value)},autoComplete:"off"}),Object(j.jsx)("input",{type:"text",name:"task-desc",id:"task-desk",placeholder:"Task Describtion",value:d,onChange:function(e){m(e.target.value)},autoComplete:"off"}),Object(j.jsxs)("button",{type:"submit",children:[Object(j.jsx)(b.a,{size:"2rem",margin:"none"}),Object(j.jsx)("br",{}),N?"Edit Task":"Add Task"]})]})}),v.show&&Object(j.jsx)(O,Object(l.a)(Object(l.a)({},v),{},{removeModal:I,list:p})),Object(j.jsx)(u,{list:p,delHandler:function(e){if(window.confirm("Are You Sure You Want To Delete The Task")){var t=p.filter((function(t){return t.id!==e}));x(t),I(!0,"Task Deleted","danger")}},editTask:function(e){var t=p.find((function(t){return t.id===e}));y(!0),E(e),s(t.title),m(t.desc)},completedTask:function(e){x(p.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t})))},completed:false})]})})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),f()}},[[18,1,2]]]);
//# sourceMappingURL=main.99d1a40a.chunk.js.map