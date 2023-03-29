import config from "../storage/config.js";
export default{
    show6(){
        config.dataMyFooter();
        Object.assign(this, JSON.parse(localStorage.getItem("myFooter")));
        const ws = new Worker("storage/wsMyFooter.js", {type:"module"});
        ws.postMessage({module: "showFooter", data: this.datos});
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(".blog-footer").append(...doc.body.children);
            ws.terminate() 
        })
    }
}
