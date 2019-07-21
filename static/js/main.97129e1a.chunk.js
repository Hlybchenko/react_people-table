(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,a){e.exports=a(77)},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),c=(a(52),a(19)),i=a(20),s=a(21),m=a(23),u=a(22),h=a(24),d=a(18),p=a.n(d),f=a(17),b=a(29),E=function(){return fetch("https://cors-anywhere.herokuapp.com/https://mate-academy.github.io/react_people-table/api/people.json").then(function(e){return e.json()})},g=function(e){var t="";return e.born<1650&&(t+="born-before-1650"),e.died>1800&&(t+="died-after-1800 font-weight-bolder"),t},v=function(e){var t="person person--lived-in-".concat(e.century);return"m"===e.sex&&(t+=" person--male"),"f"===e.sex&&(t+=" person--female"),e.age>65&&(t+=" over-65"),"f"===e.sex&&e.children.length>0&&(t+=" person--mother"),"m"===e.sex&&e.children.length>0&&(t+=" person--father"),t},C=function(e){var t=e.person;return r.a.createElement("tr",{className:v(t),tabIndex:"0"},r.a.createElement("td",null,t.id),r.a.createElement("td",{className:g(t)},t.name),r.a.createElement("td",null,t.sex),r.a.createElement("td",null,t.born),r.a.createElement("td",null,t.died),r.a.createElement("td",null,t.age),r.a.createElement("td",null,t.century),r.a.createElement("td",null,t.father),r.a.createElement("td",null,t.mother),r.a.createElement("td",null,t.children))},w=function(e){var t=e.people;return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(C,{person:e,key:e.id})}))},y=a(11),j=a(42),O=a(82),S=a(80),k=a(81),x=a(46),N=function(e){function t(e){var a,n=e.people,r=e.forID,l=Object(j.a)(e,["people","forID"]);return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,Object(f.a)({people:n,forID:r},l)))).handleSubmit=function(e){e.preventDefault(),(0,a.props.handleFormSubmit)(a.state.newPerson),a.setState({show:!1})},a.handleChange=function(e){var t=e.target.value.replace(/[^\w\d\s]/g,""),n=e.target.name,r=a.state.newPerson;a.setState(function(e){var l;return{newPerson:Object(f.a)({},r,(l={},Object(y.a)(l,n,"born"===n||"died"===n?Number(t):t),Object(y.a)(l,"id",Number(a.props.forID.length+1)),Object(y.a)(l,"age",r.died-r.born),Object(y.a)(l,"century",Math.ceil(r.died/100)),Object(y.a)(l,"children",e.people.filter(function(e){return e.father===r.name||e.mother===r.name}).map(function(e){return e.name}).join(", ")),l))}})},a.handleShow=function(){return a.setState({show:!0})},a.handleClose=function(){return a.setState({show:!1})},a.state={people:n,newPerson:{id:"",name:"",sex:"",died:0,born:0,mother:"",father:"",age:0,century:0,children:""},show:!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.newPerson,t=e.name,a=e.sex,n=e.born,l=e.died,o=e.mother,c=e.father;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{variant:"outline-info text-monospace",onClick:this.handleShow},"\u271a Add person"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(S.a,{show:this.state.show,onHide:this.handleClose,onSubmit:this.handleSubmit},r.a.createElement(S.a.Header,{closeButton:!0},r.a.createElement(S.a.Title,null,"\u271a Add person")),r.a.createElement(S.a.Body,null,r.a.createElement(k.a,null,r.a.createElement(k.a.Group,null,r.a.createElement(k.a.Label,null,"Name"),r.a.createElement(k.a.Control,{placeholder:"Enter name",onChange:this.handleChange,name:"name",title:"Name cannot be shorter than 2 characters",isValid:t.length>2,value:t.replace(/[^\w\d\s]/g,"")})),r.a.createElement(k.a.Group,{title:"Please, choose gender"},r.a.createElement("label",{htmlFor:"male-Radio"},r.a.createElement("input",{onChange:this.handleChange,name:"sex",type:"radio",value:"m",id:"male-Radio"}),r.a.createElement("span",{className:"male-radio"},"\u2642 Male"))," / ",r.a.createElement("label",{htmlFor:"female-Radio"},r.a.createElement("input",{onChange:this.handleChange,name:"sex",type:"radio",value:"f",id:"female-Radio"}),r.a.createElement("span",{className:"female-radio"},"\u2640 Female"))),r.a.createElement(k.a.Row,null,r.a.createElement(k.a.Group,{as:x.a},r.a.createElement(k.a.Label,null,"Born"),r.a.createElement(k.a.Control,{onChange:this.handleChange,placeholder:"Date of birth",value:this.state.born,name:"born",title:"Date of birth must be after 1500",isValid:n>1500&&n<2019})),r.a.createElement(k.a.Group,{as:x.a},r.a.createElement(k.a.Label,null,"Died"),r.a.createElement(k.a.Control,{onChange:this.handleChange,placeholder:"Date of death",name:"died",title:"Date of death can not be earlier than the date of birth",isValid:l>1500&&l<2019&&l>n}))),r.a.createElement(k.a.Row,null,r.a.createElement(k.a.Group,{as:x.a},r.a.createElement(k.a.Label,null,"Mother"),r.a.createElement(k.a.Control,{as:"select",onChange:this.handleChange,name:"mother"},r.a.createElement("option",{value:"none"},"choose a mother"),this.state.people.map(function(e){return r.a.createElement("option",{value:e.mother,key:e.id},e.mother)}))),r.a.createElement(k.a.Group,{as:x.a},r.a.createElement(k.a.Label,null,"Father"),r.a.createElement(k.a.Control,{as:"select",onChange:this.handleChange,name:"father"},r.a.createElement("option",{value:"none"},"choose a father"),this.state.people.map(function(e){return r.a.createElement("option",{value:e.father,key:e.id},e.father)})))))),r.a.createElement(S.a.Footer,null,r.a.createElement(O.a,{variant:"danger",onClick:this.handleClose},"Close"),r.a.createElement(O.a,{variant:t.length<3||n<1500||n>2019||l<1500||l>2019||a.length<1||o.length<1||c.length<1?"active":"info",type:"submit",onClick:this.handleSubmit,disabled:t.length<3||n<1500||n>2019||l<1500||l>2019||a.length<1||o.length<1||c.length<1},"\u271a Add person")))))}}]),t}(r.a.Component),P=(a(76),function(){var e=Object(b.a)(p.a.mark(function e(){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:return t=e.sent,e.abrupt("return",t.map(function(e,a){return Object(f.a)({},e,{id:a+1,age:e.died-e.born,century:Math.ceil(e.died/100),children:t.filter(function(t){return t.father===e.name||t.mother===e.name}).map(function(e){return e.name}).join(", ")})}));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()),D=function(e){return function(t,a){switch(typeof t[e]){case"string":return t[e].localeCompare(a[e]);case"number":case"boolean":return t[e]-a[e];default:return 0}}},F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={people:[],forID:[],visiblePeople:[],isLoaded:!1,sortField:""},a.loadData=Object(b.a)(p.a.mark(function e(){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:t=e.sent,a.setState({people:t,visiblePeople:Object(c.a)(t),forID:Object(c.a)(t),isLoaded:!0});case 4:case"end":return e.stop()}},e)})),a.onSortPeopleBy=function(e){e!==a.state.sortField?a.setState(function(t){return{visiblePeople:t.visiblePeople.sort(D(e)),sortField:e}}):a.setState(function(e){return{visiblePeople:e.visiblePeople.reverse()}})},a.onSearchByName=function(e){var t=e.target.value.toLowerCase();a.setState(function(e){return{visiblePeople:e.people.filter(function(e){return[e.name,e.mother,e.father].join("").toLowerCase().includes(t)})}})},a.handleFormSubmit=function(e){a.setState(function(t){return{visiblePeople:[].concat(Object(c.a)(t.visiblePeople),[e]),forID:[].concat(Object(c.a)(t.visiblePeople),[e])}})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.forID,a=e.visiblePeople,n=e.isLoaded,l=this.onSortPeopleBy;return r.a.createElement("div",{className:"page "},r.a.createElement("header",{className:"text-monospace"},r.a.createElement("h1",null,a.length,"People in TABLE"),r.a.createElement("h6",null,"\u21f5 People sorted by:",this.state.sortField.toUpperCase())),n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"filter-box"},r.a.createElement("label",{className:"filter",htmlFor:"search"},r.a.createElement("input",{className:"form-control filter-input text-monospace",id:"search",type:"text",placeholder:" start search by name",onChange:this.onSearchByName})),r.a.createElement("div",{className:"add-btn"},r.a.createElement(N,{people:a,forID:t,handleFormSubmit:this.handleFormSubmit}))),r.a.createElement("table",{className:"PeopleTable table-borderless"},r.a.createElement("thead",{className:"table-header text-monospace"},r.a.createElement("tr",null,r.a.createElement("th",{onClick:function(){return l("id")}},"ID"),r.a.createElement("th",{onClick:function(){return l("name")}},"Name"),r.a.createElement("th",{onClick:function(){return l("sex")}},"Sex"),r.a.createElement("th",{onClick:function(){return l("born")}},"Born"),r.a.createElement("th",{onClick:function(){return l("died")}},"Died"),r.a.createElement("th",{onClick:function(){return l("age")}},"Age"),r.a.createElement("th",{onClick:function(){return l("century")}},"Century"),r.a.createElement("th",{onClick:function(){return l("father")}},"Father"),r.a.createElement("th",{onClick:function(){return l("mother")}},"Mother"),r.a.createElement("th",{onClick:function(){return l("children")}},"Children"))),r.a.createElement("tbody",{className:"font-weight-light"},r.a.createElement(w,{people:a})))):r.a.createElement("div",{className:"start-btn"},r.a.createElement("button",{className:"btn btn-info btn-lg text-monospace",onClick:this.loadData,type:"button"},"Open TABLE")))}}]),t}(r.a.Component);o.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.97129e1a.chunk.js.map