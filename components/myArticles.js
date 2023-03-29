import config from "../storage/config.js";
export default{
    
    show4(){
      config.dataMyArticles();
      Object.assign(this, JSON.parse(localStorage.getItem("myArticles")));
      const ws4 = new Worker("storage/wsMyArticles.js", {type:"module"});
      let id4 = [];
      let count4 = 0;
      id4.push("#article");
      ws4.postMessage({module: "listarArticulo", data: this.datos});
      id4.push("#table");
      ws4.postMessage({module: "listartablita", data: this.datos.articulo4});
      ws4.addEventListener("message", (e)=>{
          let doc4 = new DOMParser().parseFromString(e.data, "text/html");
          document.querySelector(id4[count4]).append(...doc4.body.children);
          (id4.length-1==count4) ? ws4.terminate() : count4++;
      })
  }
}