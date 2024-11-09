import{f as H,c as I,a as A,b as F,d as $,s as C,e as P,g as w,h as B}from"./assets/createMarkup-CCZ1QAMK.js";import"./assets/vendor-CT-oBNdc.js";const f=document.querySelector(".js-exercises__list"),d=document.querySelector(".js-subtype-exercises__list"),r=document.querySelector(".js-exercises__pagaination"),b=document.querySelector(".js-exercises__not-found");let m,y="exercises";function l(e,t,i){e==="exercises"?H(c).then(({totalPages:s,results:n})=>{y=e,f.innerHTML=I(n),x(e),L(s)}).catch(s=>console.log(s)):e==="subtypeExercises"&&F(t,i,c.currentPage).then(({results:s,totalPages:n})=>{c.filterName=t,c.exercises=i,y=e,s.length?(d.innerHTML=$(s),b.style.display="none",r.style.display="flex"):(d.innerHTML="",b.style.display="flex",r.style.display="none"),x(e),L(n)}).catch(s=>console.log(s))}function x(e){e==="exercises"?(f.style.display="flex",d.style.display="none"):e==="subtypeExercises"&&(f.style.display="none",d.style.display="flex")}function L(e){if(e<=1){r.innerHTML="";return}else r.innerHTML=A(e),m=document.querySelectorAll(".pagination__btn"),m[Number(c.currentPage)-1].classList.add("pagination__btn--active")}function R(e){const t=e.target,i=t.closest(".pagination__item");if(!i||t.classList.contains("pagination__list"))return;const s=i.dataset.page;c.currentPage!==(s==null?void 0:s.toString())&&(c.currentPage=(s==null?void 0:s.toString())||"1",l(y,c.filterName,c.exercises),m.forEach(n=>n.classList.remove("pagination__btn--active")))}r.addEventListener("click",R);const O=document.querySelector(".js-filterBtn"),z=document.querySelectorAll(".filter__btn"),D=document.querySelector(".js-exercises__title"),J=document.querySelector(".search-container"),c={filterName:"Muscles",exercises:"calves",currentPage:"1"},E="exercises";function U(e){const t=e.target;if(!t.classList.contains("filter__btn"))return;const i=t.dataset.name||"Muscles";c.filterName=i,c.currentPage="1",z.forEach(s=>s.classList.remove("filter__btn--active")),t.classList.add("filter__btn--active"),D.innerHTML="Exercises",J.style.display="none",l(E,c.filterName,c.exercises)}l(E,c.filterName,c.exercises);O.addEventListener("click",U);const Y=document.querySelector(".js-exercises__list"),S=document.querySelector(".js-exercises__title"),Z=document.querySelector(".search-container"),G=document.querySelector(".js-filter__search-btn");let k;const j="subtypeExercises";function K(e){const t=e.target;if(t.classList.contains("exercises__list"))return;const i=t.closest(".exercises__item"),{filtername:s="muscles",exercise:n="calves"}=i.dataset;k=s,S.insertAdjacentHTML("beforeend",` / <span class='exercises__title--subtype'>${n.charAt(0).toUpperCase()+n.slice(1)}</span>`),Z.style.display="block",l(j,s,n)}function Q(){const t=document.querySelector(".js-filter__search").value.trim().toLowerCase();S.innerHTML=`Exercises / <span class='exercises__title--subtype'>${t.charAt(0).toUpperCase()+t.slice(1)}</span>`,c.currentPage="1",t.length&&l(j,k,t)}G.addEventListener("click",Q);Y.addEventListener("click",K);const u=document.querySelector(".js-rating-form"),q=document.querySelector(".js-rating-modal__text"),N=document.querySelectorAll(".rating-modal__input");let p="0";function V(e){const t=e.target;if(t.classList.contains("js-modal-favorite")){const s=t.closest(".favorite-modal").dataset.id||"64f389465ae26083f39b1b4a",n=JSON.parse(localStorage.getItem("favorite")||"[]");n.includes(s)?Notiflix.Notify.failure("The exercise has already been added to your favorites"):(n.push(s),localStorage.setItem("favorite",JSON.stringify(n)),Notiflix.Notify.success("Exercise successfully added to favorites"))}}function W(e){const t=e.target;t.classList.contains("rating-modal__input")&&(p=t.value,q.innerHTML=`${p}.0`)}function M(){q.innerHTML="0.0",N.forEach(e=>{e.checked=!1})}function X(e){e.preventDefault();const t=e.target,{userEmail:i,userResponse:s}=t,T=document.querySelector(".favorite-modal").dataset.id||"64f389465ae26083f39b1b4a";i.value.trim()&&s.value.trim()?C(T,i.value,s.value,p):Notiflix.Notify.failure("Please fill in all fields"),i.value="",s.value="",M()}N.forEach(e=>{e.addEventListener("change",W)});u.hasAttribute("data-submit-listener")||(u.addEventListener("submit",X),u.setAttribute("data-submit-listener","true"));const g=document.querySelector(".js-backdrop"),a=document.querySelector(".modal"),ee=document.querySelector(".js-subtype-exercises__list"),h=document.querySelector("body"),o=document.querySelector(".js-rating-modal");function te(e){const t=e.target;if(!t.classList.contains("js-subtype-exercises__btn"))return;const i=t.closest(".js-subtype-exercises__item"),s=(i==null?void 0:i.dataset.id)||"64f389465ae26083f39b19d8";P(s).then(n=>{a.innerHTML=w(n)}).catch(n=>console.error("Error fetching subtype exercises:",n)),_(!0),M()}function se(e){const t=e.target;t.classList.contains("js-modal-favorite")?V(e):t.classList.contains("js-modal-rating")?(o.classList.remove("rating-modal--hidden"),a.style.display="none"):(t.classList.contains("js-backdrop")||t.classList.contains("js-modal-close")||t.classList.contains("js-rating-modal__close-btn"))&&ie(e)}function ie(e){const t=e.target;(t.classList.contains("js-rating-modal__close-btn")||t.classList.contains("js-backdrop")||t.classList.contains("js-modal-close"))&&(o.classList.contains("rating-modal--hidden")?_(!1):(o.classList.add("rating-modal--hidden"),a.style.display="block"))}function v(e){e.key==="Escape"&&(o.classList.contains("rating-modal--hidden")?_(!1):(o.classList.add("rating-modal--hidden"),a.style.display="block"))}function _(e){e?(g.classList.remove("backdrop--hidden"),h.style.overflowY="hidden",a.style.display="block",document.addEventListener("keydown",v)):(g.classList.add("backdrop--hidden"),a.style.display="none",h.style.overflowY="",document.removeEventListener("keydown",v))}ee.addEventListener("click",te);g.addEventListener("click",se);const ne=document.querySelector(".subscribe__btn"),ce=document.querySelector(".js-subscribe__input"),ae=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;function re(e){e.preventDefault();const t=ce.value.trim();t?ae.test(t)?B(t).then(({message:i})=>{Notiflix.Notify.success(i)}).catch(i=>Notiflix.Notify.failure(i.message)):Notiflix.Notify.failure("please enter a valid email (test@example.com)"):Notiflix.Notify.failure("Please enter your email")}ne.addEventListener("click",re);
//# sourceMappingURL=index.js.map