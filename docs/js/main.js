let e={field1:0,field2:"",field3:"",field4:"",field5:"",field6:"",field7:"",field8:"",photo:""};const S=document.querySelector(".js-form"),d=document.querySelector(".js-preview-title"),a=document.querySelector(".js-preview-date"),u=document.querySelector(".js-preview-price"),m=document.querySelector(".js-preview-location"),f=document.querySelector(".js-preview-web"),g=document.querySelector(".js-preview-sponsor");function q(){d.innerHTML=e.field4,a.innerHTML=e.field3,u.innerHTML=e.field1+"€",m.innerHTML=e.field2,f.innerHTML=e.field5,g.innerHTML=e.field6}function j(t){const s=t.target.id,o=t.target.value;e[s]=o,q()}S.addEventListener("input",j);const n=document.querySelector(".js-preview"),i=document.querySelector(".js-options");function _(){i.value==="gastronomy"?(n.classList.add("category__gastronomy"),n.classList.remove("category__music","category__cinema")):i.value==="music"?(n.classList.add("category__music"),n.classList.remove("category__cinema","category__gastronomy")):i.value==="cinema"&&(n.classList.add("category__cinema"),n.classList.remove("category__music","category__gastronomy")),e.field8=i.value}i.addEventListener("input",_);const T=document.querySelector(".js-titleDesign"),w=document.querySelector(".js-design"),M=document.querySelector(".js-titleFillin"),H=document.querySelector(".js-fillin"),E=document.querySelector(".js-titleShare"),l=document.querySelector(".js-share1"),y=document.querySelector(".js-share2");function F(){w.classList.toggle("hidden")}function k(){H.classList.toggle("hidden")}function D(){l.classList.toggle("hidden"),y.classList.toggle("hidden")}T.addEventListener("click",F);M.addEventListener("click",k);E.addEventListener("click",D);const I=document.querySelector(".js-reset"),b=document.querySelectorAll(".js-inputs");function A(){d.innerHTML="",a.innerHTML="",u.innerHTML="",m.innerHTML="",f.innerHTML="",g.innerHTML="",L.setAttribute("src",""),p.setAttribute("src","")}function C(){for(const t of b)t.value=""}function R(){n.classList.add("category"),n.classList.remove("category__music","category__cinema","category__gastronomy")}function Q(){i.value=""}function O(){h.classList.add("hidden"),y.classList.add("hidden"),l.classList.add("hidden")}function U(){e={field1:0,field2:"",field3:"",field4:"",field5:"",field6:"",field7:"",field8:"",photo:""}}function B(t){t.preventDefault(),A(),C(),R(),Q(),O(),U(),localStorage.removeItem("idTicket")}I.addEventListener("click",B);const r=new FileReader,c=new FileReader,J=document.querySelector(".js-image"),N=document.querySelector(".js-qr"),L=document.querySelector(".js-image-preview"),p=document.querySelector(".js-qr-preview");function v(t){const s=t.currentTarget.files[0],o=t.currentTarget.id;console.log(s),o==="photo"?(r.addEventListener("load",P),r.readAsDataURL(s)):o==="field7"&&(c.addEventListener("load",V),c.readAsDataURL(s))}function P(){L.src=r.result,e.photo=r.result}function V(){p.src=c.result,e.field7=c.result}J.addEventListener("change",v);N.addEventListener("change",v);const h=document.querySelector(".js-error-message"),x=document.querySelector(".js-created-message"),z=document.querySelector(".js-link-final-design"),G=document.querySelector(".js-social-media");function K(t){t.preventDefault(),console.log(e),fetch("https://dev.adalab.es/api/info/data",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}}).then(s=>s.json()).then(s=>{console.log(s),s.success?(localStorage.setItem("idTicket",s.infoID),x.classList.remove("hidden"),z.classList.remove("hidden"),G.classList.remove("hidden")):h.classList.remove("hidden")})}l.addEventListener("click",K);
//# sourceMappingURL=main.js.map
