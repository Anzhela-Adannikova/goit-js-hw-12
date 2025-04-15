import{a as S,S as M,i as l}from"./assets/vendor-BH9GyP-n.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const x="https://pixabay.com/api/",q="49633160-4cce24fc01914cf63e9c1a790";function p(a,o){const n={key:q,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return S.get(x,{params:n}).then(r=>(console.log(r),r.data)).catch(r=>{throw r})}const g=document.querySelector(".gallery"),h=document.querySelector(".loader"),b=document.querySelector(".load-more-hidden");console.dir(h);function v(a){return a.map(({webformatURL:o,largeImageURL:n,tags:r,likes:e,views:t,comments:i,downloads:w})=>`<li class="gallery-item">
            <a href="${n}" class="gallery-link">
                <img class="gallery-img" src="${o}" alt="${r}" />
            </a>
            <div class="info">
                <div class="info-colum">
                    <p class="info-title">Likes</p>
                    <p class="info-value">${e}</p>
                </div>
                <div class="info-colum">
                    <p class="info-title">Views</p>
                    <p class="info-value">${t}</p>
                </div>
                <div class="info-colum">
                    <p class="info-title">Comments</p>
                    <p class="info-value">${i}</p>
                </div>
                <div class="info-colum">
                    <p class="info-title">Downloads</p>
                    <p class="info-value">${w}</p>
                </div>
            </div>
        </li>`).join("")}function P(){g.innerHTML=""}function L(){h.style.display="block"}function y(){h.style.display="none"}function U(){b.style.display="block"}function d(){b.style.display="none"}const c=new URL("./img/icon-error.svg",import.meta.url).href,u=document.querySelector(".form"),m=document.querySelector(".js-load-more");m.addEventListener("click",$);let s=1,f="";console.dir(u);const C=new M(".gallery a",{captionsData:"alt",captionDelay:250,enableKeyboard:!0});y();d();u.addEventListener("submit",W);async function W(a){if(a.preventDefault(),f=u.elements["search-text"].value.trim(),!!f){P(),s=1,L();try{const{hits:o,totalHits:n}=await p(f,s);if(o.length===0){l.info({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:" #ef4040",maxWidth:"434",messageColor:" #fafafb",iconColor:" #fafafb",iconUrl:c}),d();return}g.innerHTML=v(o),C.refresh();const r=Math.ceil(n/15);s<r?U():(d(),l.info({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#4caf50",maxWidth:"434",messageColor:" #fafafb",iconColor:" #fafafb",iconUrl:c}))}catch{l.info({message:"Something went wrong!",backgroundColor:" #ef4040",maxWidth:"434",messageColor:" #fafafb",iconColor:" #fafafb",iconUrl:c})}finally{y()}u.reset()}}async function $(){s++,L(),m.disabled=!0;try{const{hits:a,totalHits:o}=await p(f,s);g.insertAdjacentHTML("beforeend",v(a)),C.refresh();const n=Math.ceil(o/15);s>=n&&(d(),l.info({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#4caf50",maxWidth:"434",messageColor:" #fafafb",iconColor:" #fafafb",iconUrl:c})),m.disabled=!1}catch{l.info({message:"Something went wrong while loading more images!",backgroundColor:" #ef4040",maxWidth:"434",messageColor:" #fafafb",iconColor:" #fafafb",iconUrl:c})}finally{y()}}
//# sourceMappingURL=index.js.map
