!function(){function t(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=Array(n);r<n;r++)e[r]=t[r];return e}function n(n,r){if(n){if("string"==typeof n)return t(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);if("Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t(n,r)}}var r,e=document.querySelector(".button"),o=document.querySelector(".message-win"),a=document.querySelector(".message-lose"),c=document.querySelector(".message-start"),i=document.querySelectorAll(".field-row"),u=document.querySelector(".game-score"),l=0,s=!1,f=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],d=function(e){switch(r=function(n){if(Array.isArray(n))return t(n)}(c=f)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(c)||n(c)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),e.key){case"ArrowLeft":b(r);break;case"ArrowRight":p(r);break;case"ArrowDown":A(r);break;case"ArrowUp":E(r);break;default:return}for(var c,i,u=0;u<4;u++)for(var l=0;l<4;l++)r[u][l]!==f[u][l]&&(f=r,v(),S());s&&o.classList.remove("hidden"),m()||(y(),i=!1,r.forEach(function(t){t.forEach(function(n,r){n===t[r+1]&&(i=!0)})}),i)||(a.classList.remove("hidden"),document.removeEventListener("keydown",d))};function m(){var t=!1;return r.forEach(function(n){n.some(function(t,r){return 0===t||t===n[r+1]})&&(t=!0)}),t}function h(){r.forEach(function(t){return t.reverse()})}function y(){r=r[0].map(function(t,n){return r.map(function(t){return t[n]})})}e.addEventListener("click",function(){document.addEventListener("keydown",d),e.classList.contains("start")?(e.classList.replace("start","restart"),e.innerText="Restart",c.classList.add("hidden")):(s=!1,g()),v(),v(),S()});var v=function(){var t,r,e=(t=[],f.forEach(function(n,r){n.forEach(function(n,e){0===n&&t.push([r,e])})}),function(t){if(Array.isArray(t))return t}(r=t[Math.floor(Math.random()*t.length)])||function(t,n){var r,e,o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var a=[],c=!0,i=!1;try{for(o=o.call(t);!(c=(r=o.next()).done)&&(a.push(r.value),!n||a.length!==n);c=!0);}catch(t){i=!0,e=t}finally{try{c||null==o.return||o.return()}finally{if(i)throw e}}return a}}(r,2)||n(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=e[0],a=e[1];f[o][a]=.9>Math.random()?2:4},b=function(){m&&(r=r.map(function(t){var n=t.filter(function(t){return 0!==t});return n.forEach(function(t,r){t===n[r+1]&&(n[r]*=2,n.splice(r+1,1),l+=n[r],2048===n[r]&&(s=!0))}),n.concat(Array(4-n.length).fill(0))}))},p=function(){m&&(h(),b(),h())},A=function(){y(),p(),y()},E=function(){y(),b(),y()},S=function(){f.forEach(function(t,n){t.forEach(function(t,r){var e=i[n].children[r];0===t?(e.textContent="",e.className="field-cell"):(e.textContent=t,e.className="field-cell field-cell--".concat(t))})}),u.textContent=l},g=function(){l=0,f=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],a.classList.contains("hidden")||a.classList.add("hidden"),o.classList.contains("hidden")||o.classList.add("hidden")}}();
//# sourceMappingURL=index.8b73edb0.js.map
