function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=t.parcelRequire37c5;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},t.parcelRequire37c5=a),a.register("4Io1N",(function(t,n){var i,l,o,s;i=t.exports,l="loadQueuedFilms",o=function(){return v},Object.defineProperty(i,l,{get:o,set:s,enumerable:!0,configurable:!0});var d=a("fDIS9"),r=a("1HqMK"),c=a("1QVRn"),u=a("2nhTy"),m=a("eWCmQ");e(m).Notify.init({width:"280px",position:"center-top",distance:"10px",opacity:1});const f=document.querySelector(".queued-btn-js"),p=document.querySelector(".watched-btn-js"),_=document.querySelector(".film__list"),g=document.querySelector(".tui-pagination");function v(){g.innerHTML="",f.classList.add("active-js"),p.classList.remove("lib-btn__active"),f.classList.add("lib-btn__active"),_.innerHTML="";const t=JSON.parse(localStorage.getItem(c.queuedKeyStorage));if(!(t&&t.length>0))return _.innerHTML=(0,r.default)(),void e(m).Notify.failure("No films in your queue!");(0,d.default)(t.slice(0,20),"queue");new(0,u.default)(null,t.length).pagination.on("afterMove",b)}function b(e){const t=e.page,n=JSON.parse(localStorage.getItem(c.queuedKeyStorage));document.querySelector(".film__list").innerHTML="";const i=n.slice(20*t-20,20*t);(0,d.default)(i)}f.addEventListener("click",v)}));var l=a("02hw8"),o=a("1QVRn");function s(e,t){const{id:n,genres:i,vote_average:a,vote_count:s,poster_path:r,popularity:c,original_title:u,overview:m,title:f}=e;let p;const _=(0,l.isMovieOnList)(n);let g;p="add"===_?"add to Watched":"delete from watched";const v=(0,o.isMovieOnListQue)(n);g="add"===v?"add to Queued":"delete from Queued";let b="";return b=null===r?'src = "https://upload.wikimedia.org/wikipedia/commons/4/43/Illustration_of_an_image.png"':`src ="https://image.tmdb.org/t/p/w500${r}"`,`<div class="modal__image-container" id='${n} data='${t}'>\n        <img\n          class="modal__image"\n          ${b}\n          alt="Poster ${f}"\n        />\n      </div>\n    <div class="film__info">\n        <h2 class="film__title">${d(f)}</h2>\n        <ul class="film-modal__list">\n          <li class="film__item">\n            <p class="film__details">Vote / Votes</p>\n            <p class="film__value">\n              <span class="film__rating--orange">${d(a.toFixed(1))}</span>\n              <span class="film__rating--slash"> / </span>\n              <span class="vote-count">${d(s)}</span>\n            </p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Popularity</p>\n            <p class="film__value">${d(c.toFixed(1))}</p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Original title</p>\n            <p class="film__value">${d(u)}</p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Genre</p>\n            <p class="film__value">${d(function(e){return e.map((({name:e})=>e)).join(", ")}(i))}</p>\n          </li>\n        </ul>\n        <div class="film-about__wrapper">\n          <h3 class="film-about__title">About</h3>\n          <div class="film-about-text__wrapper">\n            <p class="film-about__text">\n            ${d(m)}\n            </p>\n          </div>\n          <div class="film-btn__wrapper">\n            <button class="film-button add-watchedbtn-js" type="button" data-id="${n}" data-action="${_}" >${p}</button>\n            <button class="film-button add-queuedbtn-js" type="button" data-id="${n}" data-action="${v}" >${g}</button>\n          </div>\n        </div>`}function d(e){return 0===e.length?"no_info":e}l=a("02hw8");var r=a("4A24v"),c=a("4Io1N");o=a("1QVRn");const u={modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]"),listOfFilm:document.querySelector(".film__list"),card:document.querySelector(".modal__container"),body:document.querySelector("body")};let m="";u.listOfFilm.addEventListener("click",(function(e){const t=e.target.parentNode.parentNode;m=t.dataset.action;const n=f.find((e=>e.id===Number(t.id)));if("LI"!==t.nodeName)return;u.card.innerHTML=s(n),t.dataset.action,window.addEventListener("keydown",_),u.modal.classList.toggle("backdrop--is-hidden"),u.body.classList.toggle("modal-open"),(0,l.addWatchedBtnListener)(),(0,o.addQueuedBtnListener)()})),u.closeModalBtn.addEventListener("click",p),u.modal.addEventListener("click",(function(e){e.target===e.currentTarget&&p()}));const f=function(){const e=localStorage.getItem("watchedKey"),t=localStorage.getItem("queuedKey");if(e&&t){const n=JSON.parse(e),i=JSON.parse(t);return n.concat(i)}if(e)return JSON.parse(e);if(t)return JSON.parse(t)}();function p(){window.removeEventListener("keydown",_),u.modal.classList.toggle("backdrop--is-hidden"),u.body.classList.toggle("modal-open"),(0,l.removeWatchedBtnListener)(),(0,o.removeQueuedBtnListener)(),"watched"===m&&(0,r.loadWatchedFilms)(),"queue"===m&&(0,c.loadQueuedFilms)()}function _(e){"Escape"===e.code&&p()}
//# sourceMappingURL=library.3f648b85.js.map
