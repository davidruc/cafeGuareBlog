let wsMyHeader = {
    tiaule(p1){
        return `<a class="blog-header-logo text-white" href="#">${p1.name}</a>`
    },
    llamarSingUp(p1){
        return `<a class="btn btn-sm btn-outline-secondary" href="${p1.href}">${p1.name}</a>`
    },
    listarNavar(p1){
        let plantilla = "";
        p1.forEach((val,id) => {
            plantilla += `<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`
        });
        return plantilla;
    },
} 

self.addEventListener("message", (e)=>{
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data));
})


// document.querySelector(`#dentroNavar`).insertAdjacentHTML('beforeend', plantilla)