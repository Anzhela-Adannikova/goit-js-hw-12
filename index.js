import{a as y,S as h,i as f}from"./assets/vendor-BBsfN11L.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const v="https://pixabay.com/api/",b="49633160-4cce24fc01914cf63e9c1a790";function L(r,t){const s={key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return y.get(v,{params:s}).then(a=>(console.log(a),a.data)).catch(a=>{throw a})}const m=document.querySelector(".gallery"),d=document.querySelector(".loader");document.querySelector(".load-more-hidden");console.dir(d);function S(r){return r.map(({webformatURL:t,largeImageURL:s,tags:a,likes:e,views:o,comments:i,downloads:g})=>`<li class="gallery-item">
            <a href="${s}" class="gallery-link">
                <img class="gallery-img" src="${t}" alt="${a}" />
            </a>
            <div class="info">
                <div class="info-colum">
                    <p class="info-title">Likes</p>
                    <p class="info-value">${e}</p>
                </div>
                <div class="info-colum">
                    <p class="info-title">Views</p>
                    <p class="info-value">${o}</p>
                </div>
                <div class="info-colum">
                    <p class="info-title">Comments</p>
                    <p class="info-value">${i}</p>
                </div>
                <div class="info-colum">
                    <p class="info-title">Downloads</p>
                    <p class="info-value">${g}</p>
                </div>
            </div>
        </li>`).join("")}function w(){m.innerHTML=""}function q(){d.style.display="block"}function p(){d.style.display="none"}const u=new URL("./img/icon-error.svg",import.meta.url).href,l=document.querySelector(".form"),n=document.querySelector(".js-load-more");n.addEventListener("click",C);let c=1;console.dir(l);const M=new h(".gallery a",{captionsData:"alt",captionDelay:250,enableKeyboard:!0});p();l.addEventListener("submit",x);function x(r){r.preventDefault();const t=l.elements["search-text"].value.trim();t&&(w(),q(),L(t,c=1).then(({hits:s})=>{if(s.length===0){f.info({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:" #ef4040",maxWidth:"434",messageColor:" #fafafb",iconColor:" #fafafb",iconUrl:u});return}m.innerHTML=S(s),M.refresh(),data.page<data.total_pages&&n.classList.replace("load-more-hidden","load-more")}).catch(()=>{f.info({message:"Something went wrong!",backgroundColor:" #ef4040",maxWidth:"434",messageColor:" #fafafb",iconColor:" #fafafb",iconUrl:u})}).finally(()=>{p()}),l.reset())}async function C(){c++,n.disabled=!0;try{const r=await serviceMovie(c);return container.insertAdjacentHTML("beforeend",createMarkup(r.results)),n.disabled=!1,r.page>=r.total_pages&&n.classList.replace("load-more","load-more-hidden"),"We're sorry, but you've reached the end of search results."}catch(r){alert(r.message)}}
//# sourceMappingURL=index.js.map
