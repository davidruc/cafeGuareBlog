import config from "../storage/config.js";
export default{
    showImage(){
        config.dataMyBanner();
        Object.assign(this, JSON.parse(localStorage.getItem("myBanner")))
        document.querySelector(".imgStyle").style.backgroundImage = `url(${this.imagenes.image})`;
    },
    show2(){
        const ws2 = new Worker("storage/wsMyBanner.js", {type:"module"});
        let id2 = [];
        let count2 = 0;
        /* id2.push(".imgStyle")
        ws2.postMessage({module: "showImage", data: this.imagenes}); */
        id2.push("#banner");
        ws2.postMessage({module: "showSectionBanner", data: this.contenido});
        id2.push("#logo");
        ws2.postMessage({module: "showLogo", data: this.imagenes});
        ws2.addEventListener("message", (e)=>{
            let doc2 = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id2[count2]).append(...doc2.body.children);
            (id2.length-1==count2) ? ws2.terminate() : count2++;
        })
    }
}