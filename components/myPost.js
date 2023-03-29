import config from "../storage/config.js";
export default {
  
  show3(){
    config.dataMyPost();
    Object.assign(this, JSON.parse(localStorage.getItem("myPost")));
    const ws3 = new Worker("storage/wsMyPost.js", {type:"module"});
    ws3.postMessage({module: "showPost", data: this.post});
    ws3.addEventListener("message", (e)=>{
        let doc3 = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector("#post").append(...doc3.body.children);
        ws3.terminate();
    })
}
  
}
