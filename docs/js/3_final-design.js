document.querySelector(".js-form");const r=document.querySelector(".js-preview-title"),c=document.querySelector(".js-preview-date"),i=document.querySelector(".js-preview-price"),n=document.querySelector(".js-preview-location"),s=document.querySelector(".js-preview-web"),l=document.querySelector(".js-preview-sponsor"),d=document.querySelector(".js-image-preview"),a=document.querySelector(".js-qr-preview"),o=document.querySelector(".js-preview");let e={};const u=localStorage.getItem("idTicket");fetch(`https://dev.adalab.es/api/info/${u}`).then(t=>t.json()).then(t=>{e=t.data,console.log(e),f()});function m(){e.field8==="gastronomy"?o.classList.add("category__gastronomy"):e.field8==="music"?o.classList.add("category__music"):e.field8==="cinema"&&o.classList.add("category__cinema")}function f(){r.innerHTML=e.field4,c.innerHTML=e.field3,i.innerHTML=e.field1+"€",n.innerHTML=e.field2,s.innerHTML=e.field5,l.innerHTML=e.field6,d.src=e.photo,a.src=e.field7,m()}
//# sourceMappingURL=3_final-design.js.map
