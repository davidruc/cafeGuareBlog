import config from "../storage/config.js";
export default{
   
    
    show5(){
        config.dataMyAside();
        Object.assign(this, JSON.parse(localStorage.getItem("myAside")));
        const ws5 = new Worker("storage/wsMyAside.js", {type:"module"});
        ws5.postMessage({module: "showAside", data: this.nav});
        ws5.addEventListener("message", (e)=>{
            let doc5 = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#about").append(...doc5.body.children);
            ws5.terminate() 
        })
    }
}