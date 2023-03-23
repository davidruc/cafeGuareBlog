export default{
    title: {
        name: "CAFE GUAURE",
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
    tiaule(){
        document.querySelector("#title").insertAdjacentHTML("beforeend", `<a class="blog-header-logo text-white" href="#">${this.title.name}</a>`)
    },
    listarNavar(){
        let plantilla = "";
        this.dentroNavar.forEach((val,id) => {
            plantilla += `<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`
        });
        document.querySelector(`#dentroNavar`).insertAdjacentHTML('beforeend', plantilla);
    },
    llamarSingUp(){
        document.querySelector("#singIn").insertAdjacentHTML("beforeend", `<a class="btn btn-sm btn-outline-secondary" href="${this.singIn.href}">${this.singIn.name}</a>`)
    }

}

/*  */