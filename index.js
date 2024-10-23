import{e as _,d as L}from"./assets/vendor-CT-oBNdc.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();const h=document.querySelector(".js-menu-container"),c=document.querySelector(".js-open-menu"),S=document.querySelector(".js-close-menu");function y(){const t=c.getAttribute("aria-expanded")==="true"||!1;c.setAttribute("aria-expanded",(!t).toString()),h.classList.toggle("is-open"),(t?_:L)(document.body)}c.addEventListener("click",y);S.addEventListener("click",y);window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(h.classList.remove("is-open"),c.setAttribute("aria-expanded","false"),_(document.body))});const b="https://energyflow.b.goit.study/api";async function M(){return fetch(`${b}/quote`).then(e=>{if(!e.ok)throw new Error(`${e.statusText}`);return e.json()}).catch(e=>console.log(e))}async function x({filterName:t,currentPage:e}){return fetch(`${b}/filters?filter=${t}&page=${e}&limit=12`).then(n=>{if(!n.ok)throw new Error(`${n.statusText}`);return n.json()}).catch(n=>console.log(n))}const g=document.querySelector(".js-quote-container"),q=new Date,m=q.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),l=JSON.parse(localStorage.getItem("qoute")??"null");!l||l.formattedDate!==m?M().then(t=>{localStorage.setItem("qoute",JSON.stringify({...t,formattedDate:m})),g.insertAdjacentHTML("beforeend",p(t))}).catch(t=>console.log(t)):g.insertAdjacentHTML("beforeend",p(l));function p({quote:t,author:e}){return`<p class='quote__text'>${t}</p>
          <p class='quote__author'>${e}</p>`}function $(t){return t.map(({name:e,filter:o,imgUrl:n})=>`
        <li class='exercises__item' data-filterName='${e}' style='background: linear-gradient(0deg, rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%), url(${n}) lightgray -16.825px 0.844px / 121.36% 108.504% no-repeat;'>
        <h3 class='exercises__item-title'>${e}</h3>
        <p class='exercises__item-filter'>${o}</p>
        </li>
        `).join("")}function v(t){let e="";for(let o=1;o<=t;o++)e+=`<li data-page='${o}' class='pagination__item'><button class='pagination__btn'>${o}</button></li>`;return e}const E=document.querySelector(".js-filterBtn"),j=document.querySelector(".js-exercises__list"),u=document.querySelector(".js-exercises__pagaination"),w=document.querySelectorAll(".filter__btn"),s={filterName:"Muscles",currentPage:"1"};let d;function N(t){const e=t.target;if(!e.classList.contains("filter__btn"))return;const o=e.dataset.name||"Muscles";s.filterName=o,s.currentPage="1",w.forEach(n=>n.classList.remove("filter__btn--active")),e.classList.add("filter__btn--active"),f()}f();function f(){x(s).then(({totalPages:t,results:e})=>{if(j.innerHTML=$(e),t<=1){u.innerHTML="";return}else u.innerHTML=v(t),d=document.querySelectorAll(".pagination__btn"),d[Number(s.currentPage)-1].classList.add("pagination__btn--active")}).catch(t=>console.log(t))}function k(t){const e=t.target,o=e.closest(".pagination__item");if(!o||e.classList.contains("pagination__list"))return;const n=o.dataset.page;s.currentPage!==(n==null?void 0:n.toString())&&(s.currentPage=(n==null?void 0:n.toString())||"1",f(),d.forEach(r=>r.classList.remove("pagination__btn--active")))}E.addEventListener("click",N);u.addEventListener("click",k);
//# sourceMappingURL=index.js.map