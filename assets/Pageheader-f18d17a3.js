import{u as b}from"./menu-140f8145.js";import{l as F,y as v,o as n,c as o,a as l,t as i,F as s,d as k,n as u,g as r,C,A as x,b as m}from"./index-0f886d3f.js";const B={class:"page-header"},S={class:"main-content-title tx-24 mg-b-5"},R={class:"breadcrumb"},T={class:"d-flex"},p={class:"justify-content-center"},A=l("i",{class:"fe fe-download me-2"},null,-1),M=l("i",{class:"fe fe-filter me-2"},null,-1),$=l("i",{class:"fe fe-download-cloud me-2"},null,-1),L=["onClick"],D={__name:"Pageheader",props:{title:String,importTitle:{type:String,default:"Import"},importFunc:Function,filterTitle:{type:String,default:"Filter"},filterFunc:Function,downloadReportTitle:{type:String,default:"Download Report"},downloadReportFunc:Function,customButtons:Array},setup(t){const f=b(),d=F(()=>f.activeMenuStackList),g=y=>{f.manualActiveMenu(y)};return(y,c)=>{const h=v("router-link");return n(),o("div",B,[l("div",null,[l("h2",S,i(t.title),1),l("ol",R,[(n(!0),o(s,null,k(d.value,(e,a)=>(n(),o("li",{class:u(["breadcrumb-item",{active:a===d.value.length-1}]),key:e.path},[a===d.value.length-1?(n(),o(s,{key:0},[r(i(e.title),1)],64)):e.name?(n(),C(h,{key:1,to:{name:e.name},onClick:w=>g(e.name)},{default:x(()=>[r(i(e.title),1)]),_:2},1032,["to","onClick"])):(n(),o(s,{key:2},[r(i(e.title),1)],64))],2))),128))])]),l("div",T,[l("div",p,[t.importFunc?(n(),o("button",{key:0,onClick:c[0]||(c[0]=(...e)=>t.importFunc&&t.importFunc(...e)),class:"btn btn-white btn-icon-text my-2 me-2"},[A,r(" "+i(t.importTitle),1)])):m("",!0),t.filterFunc?(n(),o("button",{key:1,onClick:c[1]||(c[1]=(...e)=>t.filterFunc&&t.filterFunc(...e)),class:"btn btn-white btn-icon-text my-2 me-2"},[M,r(" "+i(t.filterTitle),1)])):m("",!0),t.downloadReportFunc?(n(),o("button",{key:2,onClick:c[2]||(c[2]=(...e)=>t.downloadReportFunc&&t.downloadReportFunc(...e)),class:u(["btn btn-primary my-2 btn-icon-text",{"me-2":t.customButtons.length>0}])},[$,r(" "+i(t.downloadReportTitle),1)],2)):m("",!0),(n(!0),o(s,null,k(t.customButtons,(e,a)=>(n(),o("button",{key:e.title,onClick:w=>e.func(),class:u(["btn my-2 btn-icon-text",{"btn-primary":(e.color??"primary")=="primary","btn-secondary":e.color=="secondary","btn-success":e.color=="success","btn-danger":e.color=="danger","btn-warning":e.color=="warning","btn-info":e.color=="info","btn-light":e.color=="light","btn-dark":e.color=="dark","btn-white":e.color=="white","btn-white":e.color=="white","btn-outline-primary":e.color=="outline-primary","btn-outline-success":e.color=="outline-success","btn-outline-danger":e.color=="outline-danger","btn-outline-warning":e.color=="outline-warning","btn-outline-info":e.color=="outline-info","btn-outline-dark":e.color=="outline-dark","me-2":a!=t.customButtons.length-1}])},[l("i",{class:u(`${e.icon} ${e.title?"me-2":""}`)},null,2),r(" "+i(e.title),1)],10,L))),128))])])])}}};export{D as _};
