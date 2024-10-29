import{e as C,d as S}from"./assets/vendor-CT-oBNdc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const v=document.querySelector(".js-menu-container"),a=document.querySelector(".js-open-menu"),E=document.querySelector(".js-close-menu");function w(){const e=a.getAttribute("aria-expanded")==="true"||!1;a.setAttribute("aria-expanded",(!e).toString()),v.classList.toggle("is-open"),(e?C:S)(document.body)}a.addEventListener("click",w);E.addEventListener("click",w);window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(v.classList.remove("is-open"),a.setAttribute("aria-expanded","false"),C(document.body))});const m="https://energyflow.b.goit.study/api";async function j(){return fetch(`${m}/quote`).then(t=>{if(!t.ok)throw new Error(`${t.statusText}`);return t.json()}).catch(t=>console.log(t))}async function q({filterName:e,currentPage:t}){return fetch(`${m}/filters?filter=${e}&page=${t}&limit=12`).then(s=>{if(!s.ok)throw new Error(`${s.statusText}`);return s.json()}).catch(s=>console.log(s))}async function k(e,t,r){let s="";if(e==="body parts"&&e.endsWith("s")){const i=e.split(" ").join("");s=i.slice(0,i.length-1)}else s=e;return fetch(`${m}/exercises?${s}=${t}&page=${r}&limit=12`).then(i=>{if(!i.ok)throw new Error(`${i.statusText}`);return i.json()}).catch(i=>console.log(i))}const x=document.querySelector(".js-quote-container"),B=new Date,y=B.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),u=JSON.parse(localStorage.getItem("qoute")??"null");!u||u.formattedDate!==y?j().then(e=>{localStorage.setItem("qoute",JSON.stringify({...e,formattedDate:y})),x.insertAdjacentHTML("beforeend",L(e))}).catch(e=>console.log(e)):x.insertAdjacentHTML("beforeend",L(u));function L({quote:e,author:t}){return`<p class='quote__text'>${e}</p>
          <p class='quote__author'>${t}</p>`}function N(e){return e.map(({name:t,filter:r,imgUrl:s})=>`
        <li class='exercises__item' data-filterName='${r.toLocaleLowerCase()}' data-exercise='${t}' style='background: linear-gradient(0deg, rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%), url(${s}) lightgray -16.825px 0.844px / 121.36% 108.504% no-repeat;'>
        <h3 class='exercises__item-title'>${t}</h3>
        <p class='exercises__item-filter'>${r}</p>
        </li>
        `).join("")}function F(e){let t="";for(let r=1;r<=e;r++)t+=`<li data-page='${r}' class='pagination__item'><button class='pagination__btn'>${r}</button></li>`;return t}function O(e){return e.map(({bodyPart:t,burnedCalories:r,name:s,rating:n,target:i,time:c,_id:M})=>`
        <li class="subtype-exercises__item" data-id="${M}">
  <div class="subtype-exercises__layout">
    <p class="subtype-exercises__workout">WORKOUT</p>
    <p class="subtype-exercises__rating">${Math.round(n)}.0 <svg width="18" height="18" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="#EEA10C"/>
</svg></p>
    <button class="subtype-exercises__btn">
      Start
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5625 12.25L12.25 6.5625M12.25 6.5625L6.5625 0.875M12.25 6.5625H0.875"
          stroke="#1B1B1B"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
  <div class="subtype-exercises__box">
    <div class="subtype-exercises__icon--wrap">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8234 4.72544C14.6138 4.47504 14.2403 4.44212 13.9899 4.65092L12.349 6.02938L11.5943 4.15967C11.5675 4.08949 11.5267 4.03057 11.4799 3.97859C11.3257 3.63549 11.058 3.34091 10.6889 3.17023C10.5286 3.09745 10.3631 3.05846 10.1977 3.0394C10.1613 3.02034 10.1283 2.99521 10.0868 2.98222L7.19901 2.17732C7.03699 2.13314 6.87411 2.16173 6.74068 2.2397C6.58213 2.29342 6.4461 2.40865 6.38112 2.57587L5.29378 5.37178C5.17594 5.67589 5.3267 6.01899 5.63168 6.13855C5.93492 6.25638 6.27888 6.10476 6.39758 5.79978L7.31598 3.43882L8.63119 3.80444C8.59913 3.85643 8.56447 3.90495 8.53848 3.9604L6.85245 7.61491C6.82819 7.66863 6.81519 7.72322 6.79786 7.77867L4.7488 11.214L1.31955 12.3611C0.931399 12.6514 0.84909 13.1981 1.13587 13.5862C1.42439 13.9752 1.97282 14.0575 2.36011 13.7708L5.86907 12.5621C5.97651 12.4841 6.05448 12.3819 6.1134 12.2719C6.15759 12.2251 6.20784 12.1878 6.24163 12.1298L7.46327 10.0816L9.63189 11.9296L7.31165 14.5445C6.99194 14.9049 7.024 15.4603 7.38616 15.7791C7.74745 16.1005 8.30108 16.0667 8.62252 15.7046L11.5181 12.4426C11.6082 12.342 11.6619 12.2259 11.6983 12.1047C11.7199 12.0388 11.7199 11.9704 11.7251 11.9019C11.7251 11.8673 11.7381 11.8361 11.7355 11.804C11.7277 11.5649 11.6307 11.3327 11.4349 11.1672L9.43955 9.46557C9.58337 9.32867 9.70554 9.16579 9.79391 8.97431L11.0866 6.17494L11.5007 7.27788C11.5181 7.37578 11.551 7.47196 11.6203 7.55253C11.6827 7.62704 11.7624 7.67643 11.8473 7.71109C11.856 7.71542 11.8664 7.71628 11.8768 7.71888C11.9305 7.73794 11.9851 7.75614 12.0414 7.75874C12.1081 7.7648 12.1757 7.75614 12.2441 7.73708C12.2459 7.73621 12.2467 7.73621 12.2467 7.73621C12.2649 7.73188 12.2831 7.73534 12.3013 7.72755C12.3975 7.69116 12.4711 7.62964 12.5344 7.55773L14.8893 5.55892C15.1397 5.34838 15.034 4.97583 14.8234 4.72544Z"
          fill="#F6F6F6"
        />
        <path
          d="M11.8448 3.30102C12.7564 3.30102 13.4954 2.56206 13.4954 1.65051C13.4954 0.738959 12.7564 0 11.8448 0C10.9333 0 10.1943 0.738959 10.1943 1.65051C10.1943 2.56206 10.9333 3.30102 11.8448 3.30102Z"
          fill="#F6F6F6"
        />
      </svg>
    </div>
      <h3 class="subtype-exercises__title">${s}</h3>
  </div>
  <div class="subtype-exercises__container">
    <p class="subtype-exercises__text">
      Burned calories: <span class="subtype-exercises__dynamic-text">${r} / ${c} min</span>
    </p>
    <p class="subtype-exercises__text">
      Body part: <span class="subtype-exercises__dynamic-text">${t}</span>
    </p>
    <p class="subtype-exercises__text">
      Target: <span class="subtype-exercises__dynamic-text">${i}</span>
    </p>
  </div>
</li>
        `).join("")}const d=document.querySelector(".js-exercises__list"),p=document.querySelector(".js-subtype-exercises__list"),f=document.querySelector(".js-exercises__pagaination");let g,_="exercises";function l(e,t,r){e==="exercises"?q(o).then(({totalPages:s,results:n})=>{_=e,d.innerHTML=N(n),h(e),b(s)}).catch(s=>console.log(s)):e==="subtypeExercises"&&k(t,r,o.currentPage).then(({results:s,totalPages:n})=>{o.filterName=t,o.exercises=r,_=e,p.innerHTML=O(s),h(e),b(n)}).catch(s=>console.log(s))}function h(e){e==="exercises"?(d.style.display="flex",p.style.display="none"):e==="subtypeExercises"&&(d.style.display="none",p.style.display="flex")}function b(e){if(e<=1){f.innerHTML="";return}else f.innerHTML=F(e),g=document.querySelectorAll(".pagination__btn"),g[Number(o.currentPage)-1].classList.add("pagination__btn--active")}function P(e){const t=e.target,r=t.closest(".pagination__item");if(!r||t.classList.contains("pagination__list"))return;const s=r.dataset.page;o.currentPage!==(s==null?void 0:s.toString())&&(o.currentPage=(s==null?void 0:s.toString())||"1",l(_,o.filterName,o.exercises),g.forEach(n=>n.classList.remove("pagination__btn--active")))}f.addEventListener("click",P);const A=document.querySelector(".js-filterBtn"),H=document.querySelectorAll(".filter__btn"),o={filterName:"Muscles",exercises:"calves",currentPage:"1"},$="exercises";function T(e){const t=e.target;if(!t.classList.contains("filter__btn"))return;const r=t.dataset.name||"Muscles";o.filterName=r,o.currentPage="1",H.forEach(s=>s.classList.remove("filter__btn--active")),t.classList.add("filter__btn--active"),l($,o.filterName,o.exercises)}l($,o.filterName,o.exercises);A.addEventListener("click",T);const I=document.querySelector(".js-exercises__list");function D(e){const t=e.target,r="subtypeExercises";if(t.classList.contains("exercises__list"))return;const s=t.closest(".exercises__item"),{filtername:n="muscles",exercise:i="calves"}=s.dataset;l(r,n,i)}I.addEventListener("click",D);
//# sourceMappingURL=index.js.map
