import{_ as u,r as o,j as i,o as m,k as c,w as d,a as p,c as _,f as v}from"../app.5efc643d.js";const b={__name:"index",setup(g){const t=o("utterances"),l=i(),a=o();return m(()=>{let n=document.getElementsByTagName("html")[0];a.value=n.className==="dark"?n.className:"light",c(()=>{let e=window.document.createElement("script");e.type="text/javascript",e.async=!0,e.setAttribute("issue-term","pathname"),e.setAttribute("theme","github-"+a.value),e.setAttribute("repo","StackMoon2/blogCommont"),e.crossorigin="anonymous",e.src="https://utteranc.es/client.js",window.document.getElementById("comment").appendChild(e)}),c(()=>{l.path.split("/").includes("blog")?(t.value.style.background="var(vp-content-bg)",t.value.style.marginTop="3rem"):t.value.style.background="none"});var s={attributes:!0,childList:!0,subtree:!0,attributeOldValue:!0};new MutationObserver((e,h)=>{e[0].attributeName==="class"&&e[0].target.nodeName==="HTML"&&(window.document.getElementById("comment")&&(window.document.getElementById("comment").innerHTML=""),e[0].oldValue==="dark"?a.value="light":a.value="dark")}).observe(n,s)}),(n,s)=>{const r=v("lazy");return d((p(),_("div",{ref_key:"utterances",ref:t,id:"comment",class:"utterances-container"},null,512)),[[r,"top"]])}}},f=u(b,[["__scopeId","data-v-eeade042"]]);export{f as C};
