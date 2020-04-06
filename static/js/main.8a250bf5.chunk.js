(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{18:function(e,t,n){e.exports=n(29)},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),u=n(1),i=n(4),l=n(12),m=n(13),b=n(16),s=n(14),p=n(17),h=n(3),f=n(31),g=Object(h.b)("phoneBook/addContact",(function(e,t){return{payload:{contact:{id:Object(f.a)(),name:e,number:t}}}})),O=Object(h.b)("phoneBook/deleteContact"),y=Object(h.b)("phoneBook/filteredContacts"),j=Object(h.b)("phoneBook/clearFilterValue"),d=Object(h.b)("phoneBook/nightRegimeToggler");var v=n(5),E=n.n(v),k=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",number:""},n.handleInputChange=function(e){e.preventDefault();var t=e.target,a=t.name,r=t.value;n.setState(Object(i.a)({},a,r))},n.handleSubmit=function(e){if(e.preventDefault(),t=n.props.contacts,a=n.state.name,t.some((function(e){return e.name===a})))return alert("".concat(n.state.name," is already exists in contacts!"));var t,a;n.props.submitContactInfo(n.state),n.setState({name:"",number:""})},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=this.props.night;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",{className:a&&E.a.night},"Name"),r.a.createElement("input",{type:"name",value:t,onChange:this.handleInputChange,name:"name"}),r.a.createElement("h3",{className:a&&E.a.night},"Number"),r.a.createElement("input",{type:"number",value:n,onChange:this.handleInputChange,name:"number"}),r.a.createElement("button",{type:"submit"},"Add contact")))}}]),t}(a.Component),C=Object(u.b)((function(e){return{contacts:e.phonebook.contacts}}),(function(e){return{submitContactInfo:function(t){var n=t.name,a=t.number;return e(g(n,a))}}}))(k);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var w=Object(u.b)((function(e,t){var n=e.phonebook,a=t.id;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.contacts.find((function(e){return e.id===a})))}),(function(e,t){return{deleteItem:function(){return e(O(t.id))}}}))((function(e){var t=e.name,n=e.number,a=e.deleteItem,c=e.night;return r.a.createElement("li",null,r.a.createElement("p",{className:c&&E.a.night},t,": ",n),r.a.createElement("button",{type:"button",onClick:a},"Delete ",t," from contact list"))}));var D=Object(u.b)((function(e){return{contactList:e.phonebook.contacts.filter((function(t){return t.name.toLowerCase().includes(e.phonebook.filter.toLowerCase())}))}}))((function(e){var t=e.contactList;return r.a.createElement("ul",null,t.map((function(e){var t=e.id;return r.a.createElement(w,{key:t,id:t})})))}));var R,_,F={onChangeFilter:y,clearFilter:j},I=Object(u.b)((function(e){return{value:e.filter,contacts:e.phonebook.contacts}}),F)((function(e){var t=e.contacts,n=e.value,a=e.onChangeFilter,c=e.clearFilter;return 1===t.length&&c(),r.a.createElement(r.a.Fragment,null,t.length>1&&r.a.createElement("div",null,r.a.createElement("input",{value:n,onChange:function(e){return a(e.target.value)}})))})),P={onToggle:d},S=Object(u.b)((function(e){return{nightRegime:e.phonebook.nightRegime}}),P)((function(e){var t=e.nightRegime,n=e.onToggle;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:function(){return n()}},t?"Night Regime":"Day Regime"))})),B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(C,null),r.a.createElement(I,null),r.a.createElement(D,null))},L=Object(u.b)((function(e){return{nightRegime:e.phonebook.nightRegime}}))((function(e){var t=e.children,n=e.nightRegime;return r.a.createElement("div",{className:n?E.a.layoutDay:E.a.layoutNight},r.a.createElement("div",{className:E.a.container},t))})),x=function(){return r.a.createElement(L,null,r.a.createElement(B,null))},T=n(15),A=n(2),J=Object(h.c)([],(R={},Object(i.a)(R,g.type,(function(e,t){var n=t.payload;return[].concat(Object(T.a)(e),[n.contact])})),Object(i.a)(R,O.type,(function(e,t){var n=t.payload;return e.filter((function(e){return n!==e.id}))})),R)),V=Object(h.c)("",(_={},Object(i.a)(_,j.type,(function(e,t){return""})),Object(i.a)(_,y.type,(function(e,t){return t.payload})),_)),q=Object(h.c)(!0,Object(i.a)({},d,(function(e){return!e}))),z=Object(A.c)({contacts:J,nightRegime:q,filter:V}),G=Object(h.a)({reducer:{phonebook:z}});o.a.render(r.a.createElement(u.a,{store:G},r.a.createElement(x,null)),document.getElementById("root"))},5:function(e,t,n){e.exports={layoutDay:"styles_layoutDay__NLbta",layoutNight:"styles_layoutNight__16lVb",night:"styles_night__1xg54"}}},[[18,1,2]]]);
//# sourceMappingURL=main.8a250bf5.chunk.js.map