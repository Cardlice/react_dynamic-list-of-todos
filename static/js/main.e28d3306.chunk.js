(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),d=(c(10),c(11),c(12),c(3)),i=c.n(d),o=c(0),r=function(e){var t=e.todos,c=e.selectedTodoId,s=e.setSelectedTodoId;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),Object(o.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:i()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e.id)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:i()("far",{"fa-eye":c!==e.id,"fa-eye-slash":c===e.id})})})})})]},e.id)}))})]})},j=function(e){var t=e.option,c=e.setOption,s=e.query,a=e.setQuery;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){return c(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),s&&Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})},u=(c(14),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})});function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var h=function(e){var t=e.todo,c=e.setSelectedTodoId,s=Object(l.useState)(null),a=Object(n.a)(s,2),d=a[0],r=a[1],j=Object(l.useState)(!1),h=Object(n.a)(j,2),m=h[0],O=h[1];return Object(l.useEffect)((function(){var e;O(!0),(e=t.userId,b("/users/".concat(e))).then((function(e){return r(e)})).finally((function(){return O(!1)}))}),[t.userId]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),m?Object(o.jsx)(u,{}):Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(0)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(o.jsx)("strong",{className:i()({"has-text-success":t.completed,"has-text-danger":!t.completed}),children:t.completed?"Done":"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(null===d||void 0===d?void 0:d.email),children:null===d||void 0===d?void 0:d.name})]})]})]})]})},m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)("all"),d=Object(n.a)(a,2),i=d[0],m=d[1],O=Object(l.useState)(""),x=Object(n.a)(O,2),f=x[0],p=x[1],v=Object(l.useState)(!1),N=Object(n.a)(v,2),y=N[0],g=N[1],S=Object(l.useState)(0),k=Object(n.a)(S,2),I=k[0],T=k[1];Object(l.useEffect)((function(){g(!0),b("/todos").then((function(e){return s(e)})).finally((function(){return g(!1)}))}),[]);var C=Object(l.useMemo)((function(){var e=c;return"active"===i&&(e=c.filter((function(e){return!e.completed}))),"completed"===i&&(e=c.filter((function(e){return e.completed}))),f?e.filter((function(e){return e.title.toLocaleLowerCase().includes(f.toLowerCase())})):e}),[c,i,f]),w=Object(l.useMemo)((function(){return c.find((function(e){return e.id===I}))}),[I,c]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{option:i,setOption:m,query:f,setQuery:p})}),Object(o.jsx)("div",{className:"block",children:y?Object(o.jsx)(u,{}):Object(o.jsx)(r,{todos:C,selectedTodoId:I,setSelectedTodoId:T})})]})})}),w&&Object(o.jsx)(h,{todo:w,setSelectedTodoId:T})]})};a.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e28d3306.chunk.js.map