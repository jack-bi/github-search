(this["webpackJsonpgithub-axios"]=this["webpackJsonpgithub-axios"]||[]).push([[0],{186:function(e,t,a){},203:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(90),l=a.n(c),i=a(30),o=a(31),s=a(33),u=a(32),m=(a(186),a(91)),h=a.n(m),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchText:""},e.onSearchChange=function(t){e.setState({searchText:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSearch(e.query.value),t.currentTarget.reset()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("label",{className:"is-hidden",htmlFor:"search"},"\u641c\u5c0b"),r.a.createElement("input",{type:"search",onChange:this.onSearchChange,name:"search",ref:function(t){return e.query=t},placeholder:"\u8f38\u5165\u641c\u5c0b\u95dc\u9375\u5b57..."}))}}]),a}(n.Component),d=function(e){return r.a.createElement("p",null,r.a.createElement("a",{href:e.url,target:"_blank"},e.name),r.a.createElement("span",null,e.description))},f=function(e){return r.a.createElement("li",{className:"no-repos"},r.a.createElement("h3",null,"\u4e0d\u597d\u610f\u601d\uff0c\u627e\u7121\u7b26\u5408\u641c\u5c0b\u7684\u8cc7\u6599!"))},E=function(e){var t,a=e.data;return t=a.length?a.map((function(e){return r.a.createElement(d,{name:e.name,url:e.html_url,description:e.description,key:e.id})})):r.a.createElement(f,null),r.a.createElement("ul",{className:"repo-list"},t)},v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).performSearch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"user";h.a.get("https://api.github.com/search/repositories?q=".concat(t)).then((function(a){e.setState({query:t,repos:a.data.items,loading:!1})})).catch((function(e){console.log("Error fetching and parsing data",e)}))},e.state={repos:[],loading:!0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.performSearch()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"main-header"},r.a.createElement("div",{className:"inner"},r.a.createElement("h1",{className:"main-title"},"Github \u8cc7\u6599\u5eab\u641c\u5c0b (\u9810\u8a2d\u95dc\u9375\u5b57\u70ba\uff1auser)"),r.a.createElement(p,{onSearch:this.performSearch}))),r.a.createElement("div",{className:"main-content"},this.state.loading?r.a.createElement("p",null,"\u8f09\u5165\u4e2d..."):r.a.createElement("div",null,r.a.createElement("h2",null,"\u95dc\u9375\u5b57\uff1a",this.state.query),r.a.createElement(E,{data:this.state.repos}))))}}]),a}(n.Component);l.a.render(r.a.createElement(v,null),document.getElementById("root"))},92:function(e,t,a){e.exports=a(203)}},[[92,1,2]]]);
//# sourceMappingURL=main.59b8fa93.chunk.js.map