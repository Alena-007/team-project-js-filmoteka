const e=document.querySelector("#popular"),t=document.querySelector("#search"),o=document.querySelector("#by-id");e.addEventListener("click",(async function(){const e=await(t=1,fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=8f869b0e17fd67e41e1d615a0551fc3f&page=${t}`).then((e=>e.json())));var t;console.log(e)})),t.addEventListener("click",(async function(){const e=await(t="christmas",o=1,fetch(`https://api.themoviedb.org/3/search/movie?api_key=8f869b0e17fd67e41e1d615a0551fc3f&query=${t}&page=${o}`).then((e=>e.json())));var t,o;console.log(e)})),o.addEventListener("click",(async function(){const e=await(t=555,fetch(`https://api.themoviedb.org/3/movie/${t}?api_key=8f869b0e17fd67e41e1d615a0551fc3f`).then((e=>e.json())));var t;console.log(e)}));
//# sourceMappingURL=library.4ee1f5ea.js.map