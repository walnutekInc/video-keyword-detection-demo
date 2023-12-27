const O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABJJJREFUeNrsmXtMjnEUx3tDQsxlTP0RhtFEw2IyzO0fbLE0cqdyv2xuuYzZ3IlcmrAJc8ndsMhlmLmNsSa5ZDZ3M7mmiNXre7bvs5399tZ6q/d9q/XbPnvenuv3+T3nnN85J5vdbveqbMPbqxKOatHuGjXLeoPoUffNXT3AKPAAnAC/irt+z+FQ94tWow2YBiaAxtw3FGwDVyvUTGPUBTPBJNDOOBYOeoGTYDN45lHRMIsa2AwD80E3YFOHn4NAUIezHgsGgySwE2S71REh1gY64+cRcAx0V4JfgjjQhS90CxTwWABYCa6BCFDfLaIhti02a8ENMFyJ/Qx2gQFgA8gDF0FfMA88UbcJpoMeAD1LI9pWkhURYhtgMwVMBEHG4eMgkS9S1GgNxtFRm6r9P/i1tiOKZJSbaAiOwmaGg1m5DdaDS+CPEUXk5W6CC8Y1XXmvsYY/vQJ7Kf5bqURDaC1sQsAiOpCvOvwexIP98gAVp+VrjKdjBjI+HwLrKMoaPjSjJYzp2kQfgo0gDff+7mz0SAaRoLbaJx5/ECTghm/UfokQ/cEKzqQ1/GhSwxju9oFP4C84D64wps9VoVIcOAVcpz84JbqfEpzLhyRC7A3ji4Txc0cZIe8j8OfvZpztCNr+UZBP8bt579lgNCOMjFalidO/DEeLgeACI4qIU41x4Fgi5BRoz8gRzGOyXu/nKinx+jKX8XfYLMQ90xmB/PhSTovWs/bSEowbN+TKN50RQQ+JAlvAHf59lzE5hitmQ+4Xc+nD87eqVfIp+E3RtrLGaW3XI+koluBCOk84nfCOce1rsAz0BofVDMoqOVX8w0gHvMt9cTFunM3VT2btrAp7TWg2weq6DNpsBLM/a9RzxzJeqH6fhtnEK/uXMDmCn11Wu1RGlPbqmlRmfdYo8GQR4M8wmcLI48VYPctBJKjtycrFW5In/m5Jk7CpMJnAZOpKMU7usXxahp2m480YHUmnLKzINaKdWBlfuqsEu6qwrUGqVDX+rzKKbl5RHLEkQ+L1AiZXerGqEKLNBD2QfZA5xix/N1oLdk+L/snCYQyTpRDjnAtcGdPUvtySCneF6BZgDegIhhjHMrjoSGGbo1LdpkygGpRFtLNLrU2FOXnwYuO4LDg7uNR/0M+H4In8Gp1KautFRY84tgD+sZxyGLqQMFmf8xGFvjXOyWGdKJngKiW4FnOU82zeaMFZLAacEw0x0ogZxDIos4hrG2GWrC+Sx5KqL6vq96zGI2nXL9R1HVh2SU4yUGmQF14tbTQ8f2WZ+x7K9haxWWMJPcNq5Z5xaihn7IeRCcbQdgPU/nymskkQ+9AVjpjFT16fdhfFqsQqnV7zPN3/9WXVPRl0Nu53jvVimjK18ukwqZn2YZtgKc1Hp5kvOOvJqooRu10OwmjH1shkW+E4xOa4pC1WRMc0kvVfkBJvZ9MxgQ2ZWONrSt9jD9gEvtJ/vNwiWomXejCadlpcryKHbYXNjDTa6d2bMOGBX9glDefsOvpXRSqr+AmmYE9neRlsb4n4k9z3mEKjGI/Lbdiq//lZLbqKif4vwABjS0xI7EmHbAAAAABJRU5ErkJggg==",b={appName:"影片關鍵字偵測",logo:{light:"@/assets/img/brand/logo-light.png",dark:"@/assets/img/brand/logo.png"},menu:{type:"vertical",direction:"left"},header:{search:!1,darkMode:!1,country:!1,fullScreen:!1,notification:!1,message:!1,profile:!0,rightSideBar:!1,switch:!1},profileMenu:{viewProfile:!1,editProfile:!1,accountSetting:!1,support:!1,activity:!1},extraPage:{forgotPassword:!1,signup:!1},theme:"#014d8f"},F=()=>{w(b.menu.direction),M(b.menu.type),N(b.theme)},V=()=>{N(b.theme)},w=o=>{switch(o){case"left":k();break;case"right":I();break}},M=o=>{switch(o){case"vertical":z();break;case"horizontal":C();break;case"horizontal-hover":G();break}},N=o=>{function r(i){let t=parseInt(i.slice(1,3),16),e=parseInt(i.slice(3,5),16),l=parseInt(i.slice(5,7),16);return[t,e,l]}o&&(document.querySelector("html").style.setProperty("--dark-theme",o),document.querySelector("html").style.setProperty("--primary-rgb",r(o)))},I=()=>{document.body.classList.add("rtl"),document.querySelector("html[lang=en]").setAttribute("dir","rtl"),document.body.classList.remove("ltr"),localStorage.setItem("SpruhaLtrtoRtl",!0),localStorage.removeItem("SpruhaRtltoLtr")},k=()=>{document.body.classList.add("ltr"),document.querySelector("html[lang=en]").setAttribute("dir","ltr"),document.body.classList.remove("rtl"),localStorage.setItem("SpruhaRtltoLtr",!0),localStorage.removeItem("SpruhaLtrtoRtl")},z=()=>{let o=document.querySelectorAll(".menu-icon");document.body.classList.add("leftmenu","main-body"),document.querySelector(".main-content").classList.add("side-content"),document.querySelector(".main-header").classList.add("sticky"),document.querySelectorAll(".main-container").forEach(r=>r.classList.add("container-fluid")),document.querySelector(".main-menu").classList.add("main-sidebar","main-sidebar-sticky","side-menu"),document.querySelector(".main-menu").classList.remove("main-navbar","hor-menu"),document.querySelector(".main-container-1").classList.add("main-sidebar-header"),document.querySelector(".main-body-1").classList.add("main-sidebar-body"),document.querySelector("body").classList.remove("horizontalmenu","horizontalmenu-hover"),document.querySelector(".main-header").classList.remove("hor-header"),document.querySelector(".main-content").classList.remove("hor-content"),document.querySelectorAll(".main-container").forEach(r=>r.classList.remove("container")),document.querySelector(".main-container-1").classList.remove("container"),document.querySelector(".menu-icon").classList.remove("hor-icon"),o.forEach(r=>r.classList.add("sidemenu-icon")),localStorage.setItem("Spruhavertical",!0),localStorage.removeItem("Spruhahorizontal"),localStorage.removeItem("Spruhahorizontalhover")},C=()=>{var r,i,t;let o=document.querySelectorAll(".menu-icon");document.body.classList.add("horizontalmenu"),document.querySelector(".main-content").classList.add("hor-content"),(r=document.querySelector(".main-header"))==null||r.classList.add("hor-header"),(i=document.querySelector(".main-header"))==null||i.classList.remove("sticky-pin"),document.querySelector(".main-container-1").classList.add("container"),document.querySelector(".main-menu").classList.add("main-navbar","hor-menu"),document.querySelectorAll(".main-container").forEach(e=>e.classList.add("container")),o.forEach(e=>e.classList.add("hor-icon")),document.body.classList.remove("horizontalmenu-hover","leftmenu","main-body","default-menu"),document.body.classList.remove("main-sidebar-hide"),(t=document.querySelector(".main-header"))==null||t.classList.remove("sticky"),document.querySelector(".main-content").classList.remove("side-content"),document.querySelector(".main-container-1").classList.remove("main-sidebar-header"),document.querySelector(".main-menu").classList.remove("main-sidebar","main-sidebar-sticky","side-menu"),document.querySelector(".main-body-1").classList.remove("main-sidebar-body"),document.querySelectorAll(".main-container").forEach(e=>e.classList.remove("container-fluid")),o.forEach(e=>e.classList.remove("sidemenu-icon")),localStorage.setItem("Spruhahorizontal",!0),localStorage.removeItem("Spruhavertical"),localStorage.removeItem("Spruhahorizontalhover"),v(),E()},G=()=>{let o=document.querySelectorAll(".menu-icon");document.querySelector("body").classList.add("horizontalmenu","horizontalmenu-hover"),document.body.classList.contains("horizontalmenu-hover")||document.querySelector(".main-content").classList.add("hor-content"),document.querySelector(".main-header").classList.add("hor-header"),document.querySelector(".main-header").classList.remove("sticky-pin"),document.querySelector(".main-menu").classList.add("main-navbar","hor-menu"),document.querySelector(".main-container-1").classList.add("container"),document.querySelectorAll(".main-container").forEach(r=>r.classList.add("container")),o.forEach(r=>r.classList.add("hor-icon")),document.body.classList.remove("leftmenu","main-body"),document.body.classList.remove("main-sidebar-hide"),document.querySelector(".main-header").classList.remove("sticky"),document.querySelector(".main-content").classList.remove("side-content"),document.querySelector(".main-menu").classList.remove("main-sidebar","main-sidebar-sticky","side-menu"),document.querySelector(".main-container-1").classList.remove("main-sidebar-header"),document.querySelector(".main-body-1").classList.remove("main-sidebar-body"),document.body.classList.remove("default-menu"),document.querySelectorAll(".main-container").forEach(r=>r.classList.remove("container-fluid")),o.forEach(r=>r.classList.remove("sidemenu-icon")),localStorage.setItem("Spruhahorizontalhover",!0),localStorage.removeItem("Spruhahorizontal"),localStorage.removeItem("Spruhavertical"),v(),E()},v=()=>{var f,h,n,c,d,m,u,y,S,g,a,L,q,p,A,R,x;let o=document.querySelector(".hor-menu"),r=document.querySelector(".menu-nav"),i=document.querySelector(".main-sidemenu"),t=(o==null?void 0:o.offsetWidth)-(i==null?void 0:i.offsetWidth),e=Math.ceil(Number(window.getComputedStyle(r).marginLeft.split("px")[0])),l=Math.ceil(Number(window.getComputedStyle(r).marginRight.split("px")[0])),s=r.scrollWidth+(0-(o==null?void 0:o.offsetWidth))+t;(f=document.querySelector(".main-body"))!=null&&f.classList.contains("ltr")?r.style.marginRight=0:r.style.marginLeft=0,r.scrollWidth-2<(o==null?void 0:o.offsetWidth)-t?((h=document.querySelector(".slide-left"))==null||h.classList.add("d-none"),(n=document.querySelector(".slide-right"))==null||n.classList.add("d-none"),(c=document.querySelector(".slide-leftRTL"))==null||c.classList.add("d-none"),(d=document.querySelector(".slide-rightRTL"))==null||d.classList.add("d-none")):e!==0||l!==0?((m=document.querySelector(".slide-right"))==null||m.classList.remove("d-none"),(u=document.querySelector(".slide-rightRTL"))==null||u.classList.remove("d-none")):(e!==-s||l!==-s)&&((y=document.querySelector(".slide-left"))==null||y.classList.remove("d-none"),(S=document.querySelector(".slide-leftRTL"))==null||S.classList.remove("d-none")),r.scrollWidth-2>(o==null?void 0:o.offsetWidth)-t&&((g=document.querySelector(".slide-left"))==null||g.classList.remove("d-none"),(a=document.querySelector(".slide-right"))==null||a.classList.remove("d-none"),(L=document.querySelector(".slide-leftRTL"))==null||L.classList.remove("d-none"),(q=document.querySelector(".slide-rightRTL"))==null||q.classList.remove("d-none")),(e===0||l===0)&&((p=document.querySelector(".slide-left"))==null||p.classList.add("d-none"),(A=document.querySelector(".slide-leftRTL"))==null||A.classList.add("d-none")),(e!==0||l!==0)&&((R=document.querySelector(".slide-left"))==null||R.classList.remove("d-none"),(x=document.querySelector(".slide-leftRTL"))==null||x.classList.remove("d-none"))},E=()=>{let o=document.querySelector(".slide-left"),r=document.querySelector(".slide-right");function i(){let t=document.querySelectorAll(".slide"),e=document.querySelectorAll(".slide-menu__item"),l=document.querySelectorAll(".slide-menu");t.forEach(s=>{s.classList.contains("is-expanded")===!0&&s.classList.remove("is-expanded")}),e.forEach(s=>{s.classList.contains("active")===!0&&s.classList.remove("active")}),l.forEach(s=>{s&&(s.style.display="none")})}window.addEventListener("resize",()=>{var c,d,m,u,y,S;let t=document.querySelector(".hor-menu"),e=document.querySelector(".menu-nav"),l=document.querySelector(".main-body-1"),s=(t==null?void 0:t.offsetWidth)-(l==null?void 0:l.offsetWidth),f=Math.ceil(Number(window.getComputedStyle(e).marginLeft.split("px")[0])),h=Math.ceil(Number(window.getComputedStyle(e).marginRight.split("px")[0])),n=e.scrollWidth+(0-(t==null?void 0:t.offsetWidth))+s;(t==null?void 0:t.offsetWidth)-s>e.scrollWidth?((c=document.querySelector(".slide-left"))==null||c.classList.add("d-none"),(d=document.querySelector(".slide-right"))==null||d.classList.add("d-none"),e.style.marginRight=0,e.style.marginLeft=0):(m=document.querySelector(".slide-right"))==null||m.classList.remove("d-none"),((u=document.querySelector("html"))==null?void 0:u.getAttribute("dir"))==="rtl"?!(Math.abs(h)<Math.abs(n))&&(t==null?void 0:t.offsetWidth)-s<e.scrollWidth?(e.style.marginRight=-n+"px",(y=document.querySelector(".slide-left"))==null||y.classList.remove("d-none")):e.style.marginRight=0:!(Math.abs(f)<Math.abs(n))&&(t==null?void 0:t.offsetWidth)-s<e.scrollWidth?(e.style.marginLeft=-n+"px",(S=document.querySelector(".slide-right"))==null||S.classList.add("d-none")):e.style.marginLeft=0}),!document.body.classList.contains("login-img")&&!document.body.classList.contains("error-bg")&&v(),o.addEventListener("click",()=>{var n,c,d,m,u,y,S;i();let t=document.querySelector(".hor-menu"),e=document.querySelector(".menu-nav"),l=document.querySelector(".main-body-1"),s=(t==null?void 0:t.offsetWidth)-(l==null?void 0:l.offsetWidth),f=Math.ceil(Number(window.getComputedStyle(e).marginLeft.split("px")[0]))+100,h=Math.ceil(Number(window.getComputedStyle(e).marginRight.split("px")[0]))+100;document.querySelector("html").getAttribute("dir")==="rtl"?(h<0?(e.style.marginLeft="0px",e.style.marginRight=Number(e.style.marginRight.split("px")[0])+100+"px",(n=document.querySelector(".slide-right"))==null||n.classList.remove("d-none"),(c=document.querySelector(".slide-left"))==null||c.classList.remove("d-none")):(d=document.querySelector(".slide-left"))==null||d.classList.add("d-none"),h>=0&&(e.style.marginLeft="0px",e.style.marginRight="0px"),document.querySelectorAll(".sub-nav-sub").forEach(L=>{L.style.display=""}),document.querySelectorAll(".nav-sub").forEach(L=>{L.style.display=""})):(f<0?(e.style.marginLeft=Number(e.style.marginLeft.split("px")[0])+100+"px",(t==null?void 0:t.offsetWidth)-s<e.scrollWidth&&((m=document.querySelector(".slide-left"))==null||m.classList.remove("d-none"),(u=document.querySelector(".slide-right"))==null||u.classList.remove("d-none"))):(y=document.querySelector(".slide-left"))==null||y.classList.add("d-none"),f>=0&&(e.style.marginLeft="0px",(t==null?void 0:t.offsetWidth)<e.scrollWidth&&((S=document.querySelector(".slide-left"))==null||S.classList.add("d-none"))),document.querySelectorAll(".sub-nav-sub").forEach(L=>{L.style.display=""}),document.querySelectorAll(".nav-sub").forEach(L=>{L.style.display=""}))}),r.addEventListener("click",()=>{var c,d,m,u,y;i();let t=document.querySelector(".hor-menu"),e=document.querySelector(".menu-nav"),l=document.querySelector(".main-body-1"),s=(t==null?void 0:t.offsetWidth)-(l==null?void 0:l.offsetWidth),f=Math.ceil(Number(window.getComputedStyle(e).marginLeft.split("px")[0]))-100,h=Math.ceil(Number(window.getComputedStyle(e).marginRight.split("px")[0]))-100,n=e.scrollWidth+(0-(t==null?void 0:t.offsetWidth))+s;document.querySelector("html").getAttribute("dir")==="rtl"?(h>-n?(e.style.marginLeft="0px",e.style.marginRight=Number(e.style.marginRight.split("px")[0])-100+"px"):(e.style.marginLeft="0px",e.style.marginRight=-n+"px",(c=document.querySelector(".slide-right"))==null||c.classList.add("d-none"),(d=document.querySelector(".slide-left"))==null||d.classList.remove("d-none")),h!==0&&((m=document.querySelector(".slide-left"))==null||m.classList.remove("d-none")),document.querySelectorAll(".sub-nav-sub").forEach(a=>{a.style.display=""}),document.querySelectorAll(".nav-sub").forEach(a=>{a.style.display=""})):(f>-n?e.style.marginLeft=Number(e.style.marginLeft.split("px")[0])-100+"px":(e.style.marginLeft=-n+"px",(u=document.querySelector(".slide-right"))==null||u.classList.add("d-none")),f!==0&&((y=document.querySelector(".slide-left"))==null||y.classList.remove("d-none")),document.querySelectorAll(".sub-nav-sub").forEach(a=>{a.style.display=""}),document.querySelectorAll(".nav-sub").forEach(a=>{a.style.display=""}))})};export{O as _,V as a,b as c,F as i};
