let e={field1:0,field2:"",field3:"",field4:"",field5:"",field6:"",field7:"",field8:"",photo:""};const _=document.querySelector(".js-form"),f=document.querySelector(".js-preview-title"),g=document.querySelector(".js-preview-date"),L=document.querySelector(".js-preview-price"),y=document.querySelector(".js-preview-location"),h=document.querySelector(".js-preview-web"),p=document.querySelector(".js-preview-sponsor");function T(){f.innerHTML=e.field4,g.innerHTML=e.field3,L.innerHTML=e.field1+"€",y.innerHTML=e.field2,h.innerHTML=e.field5,p.innerHTML=e.field6}function w(t){const s=t.target.id,o=t.target.value;e[s]=o,T()}_.addEventListener("input",w);const n=document.querySelector(".js-preview"),i=document.querySelector(".js-options");function M(){i.value==="gastronomy"?(n.classList.add("category__gastronomy"),n.classList.remove("category__music","category__cinema")):i.value==="music"?(n.classList.add("category__music"),n.classList.remove("category__cinema","category__gastronomy")):i.value==="cinema"&&(n.classList.add("category__cinema"),n.classList.remove("category__music","category__gastronomy")),e.field8=i.value}i.addEventListener("input",M);const H=document.querySelector(".js-titleDesign"),E=document.querySelector(".js-design"),F=document.querySelector(".js-titleFillin"),k=document.querySelector(".js-fillin"),D=document.querySelector(".js-titleShare"),m=document.querySelector(".js-share1"),v=document.querySelector(".js-share2");function I(){E.classList.toggle("hidden")}function b(){k.classList.toggle("hidden")}function A(){m.classList.toggle("hidden"),v.classList.toggle("hidden")}H.addEventListener("click",I);F.addEventListener("click",b);D.addEventListener("click",A);const C=document.querySelector(".js-reset"),R=document.querySelectorAll(".js-inputs");function Q(){f.innerHTML="",g.innerHTML="",L.innerHTML="",y.innerHTML="",h.innerHTML="",p.innerHTML="",S.setAttribute("src",""),q.setAttribute("src","")}function O(){for(const t of R)t.value=""}function U(){n.classList.add("category"),n.classList.remove("category__music","category__cinema","category__gastronomy")}function B(){i.value=""}function J(){d.classList.add("hidden"),v.classList.add("hidden"),m.classList.add("hidden"),u.classList.add("hidden"),l.classList.add("hidden"),a.classList.add("hidden")}function N(){e={field1:0,field2:"",field3:"",field4:"",field5:"",field6:"",field7:"",field8:"",photo:""}}function P(t){t.preventDefault(),Q(),O(),U(),B(),J(),N(),localStorage.removeItem("idTicket")}C.addEventListener("click",P);const c=new FileReader,r=new FileReader,V=document.querySelector(".js-image"),x=document.querySelector(".js-qr"),S=document.querySelector(".js-image-preview"),q=document.querySelector(".js-qr-preview");function j(t){const s=t.currentTarget.files[0],o=t.currentTarget.id;console.log(s),o==="photo"?(c.addEventListener("load",z),c.readAsDataURL(s)):o==="field7"&&(r.addEventListener("load",G),r.readAsDataURL(s))}function z(){S.src=c.result,e.photo=c.result}function G(){q.src=r.result,e.field7=r.result}V.addEventListener("change",j);x.addEventListener("change",j);const d=document.querySelector(".js-error-message"),l=document.querySelector(".js-created-message"),a=document.querySelector(".js-link-final-design"),u=document.querySelector(".js-social-media");function K(t){t.preventDefault(),console.log(e),fetch("https://dev.adalab.es/api/info/data",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}}).then(s=>s.json()).then(s=>{console.log(s),s.success?(localStorage.setItem("idTicket",s.infoID),l.classList.remove("hidden"),a.classList.remove("hidden"),u.classList.remove("hidden"),d.classList.add("hidden")):(d.classList.remove("hidden"),l.classList.add("hidden"),a.classList.add("hidden"),u.classList.add("hidden"))})}m.addEventListener("click",K);
//# sourceMappingURL=main.js.map
