let wsMyBanner = {
    showImage(p1){
        return style.backgroundImage = `url(${p1.image})`;
    },
    showSectionBanner(p1){ 
        return `<h1 class="display-4 text-center text-md-end fst-italic">${p1.titulo}</h1>
        <p class="lead my-3 text-center text-md-end">${p1.paragraph}</p>
        <p class="lead text-center text-md-end  mb-0"><a href="${p1.btn.href}" target="_blank" class="continue fw-bold">${p1.btn.name}</a></p>`
    },
    showLogo(p1){
        return `<img src="${p1.imagen2}" alt="" class="w-75 py-3 py-md-5 rounded-circle logo" srcset="">`
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyBanner[`${e.data.module}`](e.data.data));
})