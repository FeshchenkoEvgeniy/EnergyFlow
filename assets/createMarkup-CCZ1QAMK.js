import{e as f,d as b}from"./vendor-CT-oBNdc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const y=document.querySelector(".js-menu-container"),p=document.querySelector(".js-open-menu"),v=document.querySelector(".js-close-menu");function L(){const e=p.getAttribute("aria-expanded")==="true"||!1;p.setAttribute("aria-expanded",(!e).toString()),y.classList.toggle("is-open"),(e?f:b)(document.body)}p.addEventListener("click",L);v.addEventListener("click",L);window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(y.classList.remove("is-open"),p.setAttribute("aria-expanded","false"),f(document.body))});const l="https://energyflow.b.goit.study/api";async function $(){return fetch(`${l}/quote`).then(s=>{if(!s.ok)throw new Error(`${s.statusText}`);return s.json()}).catch(s=>console.log(s))}async function j({filterName:e,currentPage:s}){return fetch(`${l}/filters?filter=${e}&page=${s}&limit=12`).then(o=>{if(!o.ok)throw new Error(`${o.statusText}`);return o.json()}).catch(o=>console.log(o))}async function k(e,s,t){let o="";if(e==="body parts"&&e.endsWith("s")){const a=e.split(" ").join("");o=a.slice(0,a.length-1)}else o=e;return fetch(`${l}/exercises?${o}=${s}&page=${t}&limit=12`).then(a=>{if(!a.ok)throw new Error(`${a.statusText}`);return a.json()}).catch(a=>console.log(a))}async function E(e){return fetch(`${l}/exercises/${e}`).then(t=>{if(!t.ok)throw new Error(`${t.statusText}`);return t.json()}).catch(t=>console.log(t))}async function F(e){const s={method:"POST",body:JSON.stringify({email:e}),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{const t=await fetch(`${l}/subscription`,s);if(t.status===409){const o=await t.json();throw new Error(o.message)}if(!t.ok)throw new Error(`Error ${t.status}: ${t.statusText}`);return await t.json()}catch(t){throw t}}async function S(e,s,t,o){const i={rate:Number(o),email:s,review:t},a={method:"PATCH",body:JSON.stringify(i),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{const n=await fetch(`${l}/exercises/${e}/rating`,a);if(!n.ok)throw new Error(`Error ${n.status}: ${n.statusText}`);return await n.json()}catch(n){throw n}}async function T(e){const s=e.map(async o=>(await fetch(`${l}/exercises/${o}`)).json());return await Promise.all(s)}const x=document.querySelector(".js-quote-container"),M=new Date,g=M.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),_=JSON.parse(localStorage.getItem("qoute")??"null");!_||_.formattedDate!==g?$().then(e=>{localStorage.setItem("qoute",JSON.stringify({...e,formattedDate:g})),x.insertAdjacentHTML("beforeend",w(e))}).catch(e=>console.log(e)):x.insertAdjacentHTML("beforeend",w(_));function w({quote:e,author:s}){return`<p class='quote__text'>${e}</p>
          <p class='quote__author'>${s}</p>`}function H(e){return e.map(({name:s,filter:t,imgUrl:o})=>`
        <li class='exercises__item' data-filterName='${t.toLocaleLowerCase()}' data-exercise='${s}' style='background: linear-gradient(0deg, rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%), url(${o}) lightgray -16.825px 0.844px / 121.36% 108.504% no-repeat;'>
        <h3 class='exercises__item-title'>${s}</h3>
        <p class='exercises__item-filter'>${t}</p>
        </li>
        `).join("")}function O(e){let s="";for(let t=1;t<=e;t++)s+=`<li data-page='${t}' class='pagination__item'><button class='pagination__btn'>${t}</button></li>`;return s}function q(e){return e.map(({bodyPart:s,burnedCalories:t,name:o,rating:i,target:a,time:n,_id:c})=>`
        <li class="subtype-exercises__item js-subtype-exercises__item" data-id="${c}">
  <div class="subtype-exercises__layout">
    <p class="subtype-exercises__workout">WORKOUT</p>
    <p class="subtype-exercises__rating">${Math.round(i)}.0 <svg width="18" height="18" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="#EEA10C"/>
</svg></p>
    <button class="subtype-exercises__btn js-subtype-exercises__btn">
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
      <h3 class="subtype-exercises__title">${o}</h3>
  </div>
  <div class="subtype-exercises__container">
    <p class="subtype-exercises__text">
      Burned calories: <span class="subtype-exercises__dynamic-text">${t} / ${n} min</span>
    </p>
    <p class="subtype-exercises__text">
      Body part: <span class="subtype-exercises__dynamic-text">${s}</span>
    </p>
    <p class="subtype-exercises__text">
      Target: <span class="subtype-exercises__dynamic-text">${a}</span>
    </p>
  </div>
</li>
        `).join("")}function P({bodyPart:e,burnedCalories:s,description:t,equipment:o,gifUrl:i,name:a,popularity:n,rating:c,target:u,time:C,_id:h}){const m=Math.round(c),r=[];for(let d=0;d<m;d++)r.push(`<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="#EEA10C"/>
</svg>
`);for(;r.length<5;)r.push(`<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="#1B1B1B" fill-opacity="0.2"/>
</svg>
`);return`
    <div class="favorite-modal" data-id='${h}'>
  <button class="modal-close js-modal-close">✕</button>
  <img src="${i}" alt="${a}" class="modal-gif" />
  <div class="modal-box">
    <h3 class="modal-title">${a}</h3>
    <p class="modal-rating">${Math.round(c)}.0 ${r.join("")}</p>
    <div class="modal-detail__container">
      <p class="modal-detail__text">
        Target<span class="modal-detail__dynamic-text">${u}</span>
      </p>
      <p class="modal-detail__text">
        Body Part<span class="modal-detail__dynamic-text">${e}</span>
      </p>
      <p class="modal-detail__text">
        Equipment<span class="modal-detail__dynamic-text">${o}</span>
      </p>
      <p class="modal-detail__text">
        Popular<span class="modal-detail__dynamic-text">${n}</span>
      </p>
      <p class="modal-detail__text">
        Burned Calories<span class="modal-detail__dynamic-text">${s}/${C} min</span>
      </p>
    </div>
    <p class="modal-description">${t}</p>
    <div class='modal-btn--wrap'>
    <button class="modal-favorite__btn js-modal-favorite">
      Add to favorites
      <svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.6306 2.45753C15.2475 2.07428 14.7927 1.77026 14.2921 1.56284C13.7915 1.35542 13.2549 1.24866 12.7131 1.24866C12.1712 1.24866 11.6347 1.35542 11.1341 1.56284C10.6335 1.77026 10.1786 2.07428 9.79558 2.45753L9.00058 3.25253L8.20558 2.45753C7.43181 1.68376 6.38235 1.24906 5.28808 1.24906C4.1938 1.24906 3.14435 1.68376 2.37058 2.45753C1.59681 3.2313 1.16211 4.28075 1.16211 5.37503C1.16211 6.4693 1.59681 7.51876 2.37058 8.29253L3.16558 9.08753L9.00058 14.9225L14.8356 9.08753L15.6306 8.29253C16.0138 7.90946 16.3178 7.45464 16.5253 6.95404C16.7327 6.45345 16.8394 5.91689 16.8394 5.37503C16.8394 4.83316 16.7327 4.2966 16.5253 3.79601C16.3178 3.29542 16.0138 2.84059 15.6306 2.45753Z"
          stroke="#F6F6F6"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <button class="modal-rating__btn js-modal-rating">Give a rating</button></div> 
  </div>
</div>
  `}function A(e){return e.map(({bodyPart:s,burnedCalories:t,name:o,target:i,time:a,_id:n})=>`
        <li class="subtype-exercises__item js-subtype-exercises__item" data-id="${n}">
  <div class="subtype-exercises__layout">
    <p class="subtype-exercises__workout">WORKOUT</p>
    <button class='subtype-exercises__delete--btn js-delete-exercises'>    
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" class='favorite-delete-icon'>
    <path d="M9.66667 4.00001V3.46668C9.66667 2.71994 9.66667 2.34657 9.52134 2.06136C9.39351 1.81047 9.18954 1.6065 8.93865 1.47867C8.65344 1.33334 8.28007 1.33334 7.53333 1.33334H6.46667C5.71993 1.33334 5.34656 1.33334 5.06135 1.47867C4.81046 1.6065 4.60649 1.81047 4.47866 2.06136C4.33333 2.34657 4.33333 2.71994 4.33333 3.46668V4.00001M5.66667 7.66668V11M8.33333 7.66668V11M1 4.00001H13M11.6667 4.00001V11.4667C11.6667 12.5868 11.6667 13.1468 11.4487 13.5747C11.2569 13.951 10.951 14.2569 10.5746 14.4487C10.1468 14.6667 9.58677 14.6667 8.46667 14.6667H5.53333C4.41323 14.6667 3.85318 14.6667 3.42535 14.4487C3.04903 14.2569 2.74307 13.951 2.55132 13.5747C2.33333 13.1468 2.33333 12.5868 2.33333 11.4667V4.00001" stroke="#1B1B1B" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>  
    </button>
    <button class="subtype-exercises__btn js-subtype-exercises__btn">
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
      <h3 class="subtype-exercises__title">${o}</h3>
  </div>
  <div class="subtype-exercises__container">
    <p class="subtype-exercises__text">
      Burned calories: <span class="subtype-exercises__dynamic-text">${t} / ${a} min</span>
    </p>
    <p class="subtype-exercises__text">
      Body part: <span class="subtype-exercises__dynamic-text">${s}</span>
    </p>
    <p class="subtype-exercises__text">
      Target: <span class="subtype-exercises__dynamic-text">${i}</span>
    </p>
  </div>
</li>
        `).join("")}function N({bodyPart:e,burnedCalories:s,description:t,equipment:o,gifUrl:i,name:a,popularity:n,rating:c,target:u,time:C,_id:h}){const m=Math.round(c),r=[];for(let d=0;d<m;d++)r.push(`<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="#EEA10C"/>
</svg>
`);for(;r.length<5;)r.push(`<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="#1B1B1B" fill-opacity="0.2"/>
</svg>
`);return`
    <div class="favorite-modal" data-id='${h}'>
  <button class="modal-close js-modal-close">✕</button>
  <img src="${i}" alt="${a}" class="modal-gif" />
  <div class="modal-box">
    <h3 class="modal-title">${a}</h3>
    <p class="modal-rating">${Math.round(c)}.0 ${r.join("")}</p>
    <div class="modal-detail__container">
      <p class="modal-detail__text">
        Target<span class="modal-detail__dynamic-text">${u}</span>
      </p>
      <p class="modal-detail__text">
        Body Part<span class="modal-detail__dynamic-text">${e}</span>
      </p>
      <p class="modal-detail__text">
        Equipment<span class="modal-detail__dynamic-text">${o}</span>
      </p>
      <p class="modal-detail__text">
        Popular<span class="modal-detail__dynamic-text">${n}</span>
      </p>
      <p class="modal-detail__text">
        Burned Calories<span class="modal-detail__dynamic-text">${s}/${C} min</span>
      </p>
    </div>
    <p class="modal-description">${t}</p>
</div>
  `}export{O as a,k as b,H as c,q as d,E as e,j as f,P as g,F as h,T as i,A as j,N as k,S as s};
//# sourceMappingURL=createMarkup-CCZ1QAMK.js.map
