(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,a){e.exports=a(37)},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),c=a(12),m=a(40),o=a(41),s=a(23),u=function(e){return r.a.createElement(m.a,{className:"bg-blue justify-content-between"},r.a.createElement(m.a.Brand,{href:"#"}," Employee Directory "),r.a.createElement(o.a,{inline:!0},r.a.createElement(s.a,{name:"term",type:"text",placeholder:"Search",className:"mr-sm-2",value:e.search,onChange:e.onSearch,id:"term"})))},d=a(25),p=a(39),f=a(42),h=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=r.a.useState(t),n=Object(c.a)(a,2),l=n[0],i=n[1],m=r.a.useMemo((function(){var t=Object(d.a)(e);return null!==l&&t.sort((function(e,t){return e[l.key]<t[l.key]?"ascending"===l.direction?-1:1:e[l.key]>t[l.key]?"ascending"===l.direction?1:-1:0})),t}),[e,l]),o=function(e){var t="ascending";l&&l.key===e&&"ascending"===l.direction&&(t="descending"),i({key:e,direction:t})};return{employees:m,requestSort:o,sortConfig:l}}(e.employees),a=t.employees,n=t.requestSort,l=t.sortConfig,i=function(e){if(l)return l.key===e?l.direction:void 0};return r.a.createElement(p.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null," ",r.a.createElement(f.a,{onClick:function(){return n("id")},className:i("id")}," Employee ID ")," "),r.a.createElement("th",null," Image "),r.a.createElement("th",null," Title "),r.a.createElement("th",null," ",r.a.createElement(f.a,{onClick:function(){return n("firstName")},className:i("firstName")}," First Name ")," "),r.a.createElement("th",null," ",r.a.createElement(f.a,{onClick:function(){return n("lastName")},className:i("lastName")}," Last Name ")," "),r.a.createElement("th",null," ",r.a.createElement(f.a,{onClick:function(){return n("email")},className:i("email")}," E-mail ")," "),r.a.createElement("th",null," ",r.a.createElement(f.a,{onClick:function(){return n("phone")},className:i("phone")}," Phone ")," "))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.id),r.a.createElement("td",null," ",r.a.createElement("img",{src:e.picture,alt:"Employee Photograph"})," "),r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.firstName),r.a.createElement("td",null,e.lastName),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.phone))}))))},g=[{id:1,picture:"https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/359/420/618/636272697874197438.png",firstName:"Fighter",lastName:"Man",title:"Dr.",phone:"0411 348 363",email:"Best.Swacker@gmail.com"},{id:3,picture:"https://media-waterdeep.cursecdn.com/attachments/thumbnails/6/191/350/620/pyromancer.png",firstName:"Wizard",lastName:"Girl",title:"Ms.",phone:"0411 522 666",email:"4d6Kaboom@gmail.com"},{id:6,picture:"https://i.pinimg.com/originals/29/f6/94/29f69466cd87196601cb87b1dc1bd281.png",firstName:"Monk",lastName:"Sensei",title:"Mr.",phone:"0411 669 762",email:"unarmedAndDeadly@gmail.com"},{id:12,picture:"https://i.pinimg.com/originals/e5/af/06/e5af06834f26fe465ae65ed9fc48064f.png",firstName:"Rogue",lastName:"Holy-Stabby",title:"Mrs.",phone:"0411 765 285",email:"angstyBackstoryIsRequired@gmail.com"},{id:53,picture:"https://i.pinimg.com/originals/51/9b/f9/519bf955cad48f57fda9c41996a64744.png",firstName:"Paladin",lastName:"Holy-Stabby",title:"Mr.",phone:"0411 764 837",email:"holyAndSwole@gmail.com"},{id:25,picture:"https://6lhz4vrtni-flywheel.netdna-ssl.com/wp-content/uploads/2020/06/unnamed1-512x481.jpg",firstName:"Ranger",lastName:"Danger",title:"Ms.",phone:"0411 469 453",email:"professionalEcoWarrior@gmail.com"},{id:13,picture:"https://i.pinimg.com/1200x/c5/c7/aa/c5c7aac7fb4ff96bd2053a554a8279c3.jpg",firstName:"Cleric",lastName:"Padre",title:"Dr.",phone:"0411 378 643",email:"heals4Days@gmail.com"}],E=function(){var e=r.a.useState(g),t=Object(c.a)(e,1)[0],a=r.a.useState(""),n=Object(c.a)(a,2),l=n[0],i=n[1],m=t.filter((function(e){var t=e.lastName.toLowerCase().includes(l.toLowerCase()),a=e.firstName.toLowerCase().includes(l.toLowerCase()),n=e.title.toLowerCase().includes(l.toLowerCase()),r=e.phone.toLowerCase().includes(l.toLowerCase()),i=e.email.toLowerCase().includes(l.toLowerCase());return t||a||n||r||i}));return r.a.createElement("div",null,r.a.createElement(u,{onSearch:function(e){i(e.target.value)},search:l}),r.a.createElement(h,{employees:m}))};a(36);i.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.4283fbdd.chunk.js.map