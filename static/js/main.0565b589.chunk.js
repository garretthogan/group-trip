(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{196:function(e,t,n){e.exports=n(337)},201:function(e,t,n){},337:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),l=n(17),s=n.n(l),r=(n(201),n(19)),o=n(20),c=n(22),u=n(21),m=n(23),p=n(121),d=n(79),h=n(24),w=n(9),E=n(16),g=n(46),C=n.n(g),b=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleInput=function(e){return function(t){n.setState(Object(h.a)({},e,t.target.value))}},n.handleExpenseAdded=function(){var e=n.state,t=e.newExpenseName,a=e.newExpenseCost,i=e.newExpenseQuantity,l=n.props.onAddExpense;l&&l({name:t,cost:a,quantity:i}),n.setState({newExpenseCost:0,newExpenseName:"",newExpenseQuantity:0})},n.state={newExpenseName:"",newExpenseQuantity:0,newExpenseCost:0},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.newExpenseName,n=e.newExpenseCost,a=e.newExpenseQuantity,l=this.props,s=l.classes,r=l.showCreateExpenseInput;return i.a.createElement(w.h,{in:r},i.a.createElement(w.k,{fullWidth:!0,label:"Expense Name",placeholder:"PAX Badges",value:t,onChange:this.handleInput("newExpenseName"),margin:"normal"}),i.a.createElement(w.k,{fullWidth:!0,label:"Quantity",type:"number",onChange:this.handleInput("newExpenseQuantity"),value:a,margin:"normal"}),i.a.createElement(w.k,{fullWidth:!0,label:"Cost",type:"number",onChange:this.handleInput("newExpenseCost"),value:n,margin:"normal"}),i.a.createElement("div",{className:s.button},i.a.createElement(w.c,{variant:"contained",color:"secondary",onClick:this.handleExpenseAdded},"Add Expense")))}}]),t}(a.Component),f=Object(E.withStyles)(function(e){return{button:{paddingTop:4,float:"right"}}})(b),y=n(123),v=n.n(y),x=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleInput=function(e){return function(t){n.setState(Object(h.a)({},e,t.target.value))}},n.toggleShowClaimInput=function(){n.setState(function(e){return{showClaimInput:!e.showClaimInput}})},n.toggleShowClaimInput=function(){n.setState(function(e){return{showClaimInput:!e.showClaimInput}})},n.toggle=function(e){return function(){n.setState(function(t){return Object(h.a)({},e,!t[e])})}},n.addNewClaim=function(){var e=n.props.onClaimAdded,t=n.state,a=t.newClaimMessage,i=t.newClaimPayment,l=t.newClaimQuantity,s=t.remainingQuantity;e&&e({message:a,payment:i,claimQuantity:l,claimedBy:"gret"}),n.setState({newClaimMessage:"",newClaimPayment:0,newClaimQuantity:0,showClaimInput:!1,remainingQuantity:s-l})},n.state={showClaimInput:!1,showClaims:!1,newClaimMessage:"",newClaimPayment:0,newClaimQuantity:0,remainingQuantity:e.quantity},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.cost,a=e.quantity,l=e.claims,s=e.createdBy,r=e.classes,o=e.remainingBalance,c=this.state,u=c.newClaimMessage,m=c.newClaimPayment,p=c.newClaimQuantity,d=c.showClaimInput,h=c.showClaims,E=c.remainingQuantity;return i.a.createElement(w.d,null,i.a.createElement(w.g,{onClick:this.toggle("showClaimInput"),title:t,subheader:s,avatar:i.a.createElement(w.b,null)}),i.a.createElement(w.f,null,i.a.createElement("div",null,"Total cost: $",n),i.a.createElement("div",null,"Remaining cost: $",o),i.a.createElement("div",null,"Total quantity: ",a),i.a.createElement("div",null,"Remaining quantity: ",E)),i.a.createElement(w.h,{in:h},i.a.createElement(w.f,{onClick:this.toggle("showClaims")},i.a.createElement("div",{style:{padding:4}},l.map(function(e,t){return i.a.createElement("div",{key:t},e.claimQuantity," ",e.message," $",e.payment," -"," ",e.claimedBy)})))),i.a.createElement(w.h,{in:d},i.a.createElement(w.f,null,i.a.createElement("div",{className:r.input},i.a.createElement(w.k,{fullWidth:!0,label:"Quantity",onChange:this.handleInput("newClaimQuantity"),value:p,type:"number"})),i.a.createElement("div",{className:r.input},i.a.createElement(w.k,{fullWidth:!0,label:"Message",onChange:this.handleInput("newClaimMessage"),value:u,placeholder:"Badge me bro"})),i.a.createElement("div",{className:r.input},i.a.createElement(w.k,{fullWidth:!0,label:"Payment",onChange:this.handleInput("newClaimPayment"),value:m,type:"number"})),i.a.createElement("div",{className:r.button},i.a.createElement(w.c,{fullWidth:!0,variant:"outlined",onClick:this.addNewClaim},"Claim")))),i.a.createElement(w.e,{className:r.actions},!d&&!h&&i.a.createElement("div",null,i.a.createElement(w.j,{onClick:this.toggle("showClaims")},i.a.createElement(v.a,null)),i.a.createElement(w.j,{onClick:this.toggle("showClaimInput")},i.a.createElement(C.a,null)))))}}]),t}(a.Component),j=Object(E.withStyles)(function(e){return{button:{paddingTop:12},input:{paddingTop:8},actions:{float:"right"}}})(x),O=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).handleClaimAdded=function(e,t){return function(a){var i=n.props.onAddNewClaim;i&&i(e,t,a)}},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.expenses,a=t.classes;return i.a.createElement("div",null,n.map(function(t,n){return i.a.createElement("div",{key:n,className:a.expenseContainer},i.a.createElement(j,Object.assign({onClaimAdded:e.handleClaimAdded(t,n)},t)))}))}}]),t}(a.Component),I=Object(E.withStyles)(function(e){return{expenseContainer:{paddingTop:12}}})(O),N=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).toggle=function(e){return function(){n.setState(function(t){return Object(h.a)({},e,!t[e])})}},n.addNewExpense=function(e){var t=e.cost,a=e.name,i=e.quantity,l=n.state.expenses;n.setState({showCreateExpenseInput:!1,expenses:[].concat(Object(d.a)(l),[{createdBy:"gret",cost:t,name:a,remainingBalance:t,quantity:i,claims:[]}])})},n.addNewClaim=function(e,t,a){var i=n.state.expenses,l=[].concat(Object(d.a)(e.claims),[a]),s=Object(p.a)({},e,{remainingBalance:e.remainingBalance-a.payment,claims:l});i.splice(t,1,s),n.setState({expenses:i})},n.state={showCreateExpenseInput:!1,expenses:[]},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.expenses,a=t.showCreateExpenseInput;return i.a.createElement("div",{className:e.container},i.a.createElement(f,{onAddExpense:this.addNewExpense,showCreateExpenseInput:a}),i.a.createElement(I,{onAddNewClaim:this.addNewClaim,expenses:n}),i.a.createElement(w.a,{position:"fixed",color:"primary",className:e.appBar},i.a.createElement(w.l,{className:e.toolbar},i.a.createElement(w.i,{color:"secondary","aria-label":"Add",className:e.fabButton,onClick:this.toggle("showCreateExpenseInput")},i.a.createElement(C.a,null)))))}}]),t}(a.Component),k=Object(E.withStyles)(function(e){return{container:{paddingTop:4,paddingBottom:4,paddingLeft:12,paddingRight:12},button:{paddingTop:4,float:"right"},expenseContainer:{paddingTop:12},appBar:{top:"auto",bottom:0},toolbar:{alignItems:"center",justifyContent:"space-between"},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}})(N),Q=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(k,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[196,1,2]]]);
//# sourceMappingURL=main.0565b589.chunk.js.map