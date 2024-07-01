var t=Array.from(document.querySelectorAll("span.population"),function(t){return Number(t.textContent.replace(/(,\s*)+/g,"").trim())}),e=t.reduce(function(t,e){return t+e},0),n=(e/t.length).toLocaleString("en-US");document.querySelector(".total-population").textContent=e.toLocaleString("en-US"),document.querySelector(".average-population").textContent=n;
//# sourceMappingURL=index.25195436.js.map
