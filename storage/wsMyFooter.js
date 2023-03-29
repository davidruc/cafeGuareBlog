let wsMyFooter = {
    showFooter(p1){
        return `
        <p class="">${p1.paragraph} <a class="continue" href="${p1.botones.href}">${p1.botones.boton1}</a> - <a class="continue" href="${p1.botones.href}">${p1.botones.boton2}</a>.</p>
        <p>
        <a class="continue" href="${p1.botones.href}">${p1.botones.boton3}</a>
        </p>
    `        
}


}

self.addEventListener("message", (e)=>{
    postMessage(wsMyFooter[`${e.data.module}`](e.data.data));
})