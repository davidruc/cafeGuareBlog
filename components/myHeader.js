export default{
    title: {
        name: "CAFÉ GUAURE",
        href: "#"},
    singIn:{
        name: "Sign up",
        href: "#",
    },
    dentroNavar: [
        {
            name: "Contactenos",
            href: "#"
        },
        {
            name: "Tostion",
            href: "#"
        },
        {
            name: "Tipos de café",
            href: "#"
        },
        {
            name: "Historia",
            href: "#"
        },
        {
            name: "Café en grano",
            href: "#"
        },
        {
            name: "Café molido",
            href: "#"
        },
        {
            name: "Guare",
            href: "#"
        },
        {
            name: "Opinion",
            href: "#"
        }

    ],
show(){
    const ws = new Worker("storage/wsMyHeader.js", {type: "module"});
    let id = [];
    let count = 0;
    id.push("#title");
    ws.postMessage({module: "tiaule", data: this.title});
    id.push("#singIn");
    ws.postMessage({module: "llamarSingUp", data: this.singIn});
    id.push("#dentroNavar")
    ws.postMessage({module: "listarNavar", data: this.dentroNavar});
    

    ws.addEventListener("message", (e)=>{
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==count) ? ws.terminate(): count++;
    })
    

}

}

/*  */