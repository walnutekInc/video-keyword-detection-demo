import{s as f,k as _,a0 as b,y as w,c as i,a as t,t as m,B as o,w as y,N as u,P as p,z as h,A as g,b as v,g as c,o as r}from"./index-b5bc8d52.js";import{a as k,_ as N,c as a}from"./layout-43e0429b.js";const V="/video-keyword-detection-demo/assets/user-9ddc9f4e.svg",B={class:"page main-signin-wrapper"},C={class:"row signpages text-center"},P={class:"col-md-12 my-auto"},S={class:"card"},D={class:"row row-sm"},M={class:"col-lg-6 col-xl-5 d-none d-lg-block text-center bg-primary details"},T={class:"p-2 pos-absolute h-100 d-flex flex-column justify-content-center pt-5"},U=t("img",{src:V,class:"ht-100 mb-0",alt:"user"},null,-1),j={class:"mt-4 text-white"},z=t("span",{class:"tx-white-6 tx-13 mb-5 mt-xl-0 opacity-0"},"Signup to create, discover and connect with the global community",-1),A={class:"col-lg-6 col-xl-7 col-xs-12 col-sm-12 login_form"},E={class:"main-container container-fluid"},F={class:"row row-sm"},H={class:"card-body mt-2 mb-2"},L={class:"d-lg-none d-flex align-items-center"},O=t("img",{src:N,class:"header-brand-img text-start float-start",alt:"logo"},null,-1),R={class:"ms-3 mb-0"},$=t("div",{class:"clearfix"},null,-1),q=t("h5",{class:"text-start mb-2"},null,-1),G=t("p",{class:"mb-4 text-muted tx-13 ms-0 text-start opacity-0"}," Signin to create, discover and connect with the global community ",-1),I={class:"form-group text-start"},J=t("label",null,"帳號",-1),K={class:"form-group text-start"},Q=t("label",null,"密碼",-1),W={class:"text-start mt-5 ms-0"},X={key:0,class:"mb-1"},Y={key:1},et={__name:"Login",setup(Z){f(k);const n=_(""),l=_(""),{login:x}=b();return(tt,s)=>{const d=w("router-link");return r(),i("div",B,[t("div",C,[t("div",P,[t("div",S,[t("div",D,[t("div",M,[t("div",T,[U,t("h5",j,m(o(a).appName)+"管理系統",1),z])]),t("div",A,[t("div",E,[t("div",F,[t("div",H,[t("div",L,[O,t("h5",R,m(o(a).appName)+"管理系統",1)]),$,t("form",{onSubmit:s[3]||(s[3]=y(()=>{},["prevent"]))},[q,G,t("div",I,[J,u(t("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>n.value=e),class:"form-control",placeholder:"請輸入帳號",type:"text"},null,512),[[p,n.value]])]),t("div",K,[Q,u(t("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>l.value=e),class:"form-control",placeholder:"請輸入密碼",type:"password"},null,512),[[p,l.value]])]),t("button",{class:"btn ripple btn-primary btn-block",onClick:s[2]||(s[2]=e=>o(x)(n.value,l.value))}," 登入 ")],32),t("div",W,[o(a).extraPage.forgotPassword?(r(),i("div",X,[h(d,{to:"forgotpassword"},{default:g(()=>[c("Forgot password?")]),_:1})])):v("",!0),o(a).extraPage.signup?(r(),i("div",Y,[c(" Don't have an account? "),h(d,{to:"sign-up"},{default:g(()=>[c("Register Here")]),_:1})])):v("",!0)])])])])])])])])])])}}};export{et as default};
