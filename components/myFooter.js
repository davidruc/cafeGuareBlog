export default{
    paragraph: "Blog creado por",
    botones: {
        boton1: "David",
        href: "#",
        boton2: "@davidruc",
        href: "#",
        boton3: "volver al inicio",
        href: "#",
        

    },
    
  
    showFooter(){
            document.querySelector(".blog-footer").insertAdjacentHTML("beforeend", `
            <p class="">${this.paragraph} <a class="continue" href="${this.botones.href}">${this.botones.boton1}</a> - <a class="continue" href="${this.botones.href}">${this.botones.boton2}</a>.</p>
            <p>
            <a class="continue" href="${this.botones.href}">${this.botones.boton3}</a>
            </p>
        `)        
    }


}

/*  */