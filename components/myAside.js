export default{
   
    nav:[
        {
            title: "Sobre Nosotros:",
            paragraph:"Café Guarue surge de un sueño, de una tierra prodigia y de una pareja amante del café.",
            imagen: "./img/aboutUs.jpeg",
        },
        {
            title:"Últimos blogs",
            links:[
            {
                name: "¿Cómo se cosecha el café virgen?  ",
                date: "Abril 18",
                href: "",
            },
            {
                name: "5 Mitos sobre el la tostión del café",
                date: "Marzo 22",
                href: "",
            },
            {
                name: "Prensa francesa o dsaodkasod",
                date: "Marzo 15",
                href: "",
            },
            {
                name: "Truco de la abuela: sal al perico",
                date: "Marzo 12",
                href: "",
            },
            {
                name: "7 Razones por las que deberías tomar a diario",
                date: "Febrero 29",
                href: "",
            },
            {
                name: "Breve historia del café castilla",
                date: "Febrero 15",
                href: "",
            },
            {
                name: "Aprende a ser un catador de café profesional",
                date: "Febrero 5",
                href: "",
            },
           
        ]

        },
        {
            title: "Nuestras Redes",
            links:[
                {
                    name: "instagram",

                    date: "",
                    href: "",
                },
                {
                    name: "WhatsApp",
                    date: "",
                    href: "",
                },
                {
                    name: "Facebook",
                    date: "",
                    href: "",
                }
            ]
        }
    ],
    showAside(){

        const data = this.nav.map((val, id)=>{
            if(val.paragraph){
                return this.cards(val);
            }else{
                return this.list(val);
            }
        })  
        document.querySelector("#about").insertAdjacentHTML("beforeend", data.join("<br>"))
    },
    cards(p1){
       return `<div class="p-4 mb-3 bg-secondary rounded"> <h4 class="fst-italic">${p1.title}</h4> <p class="mb-0">${p1.paragraph}</p><img src="${p1.imagen}" alt="" class="aboutUsImg pt-2" srcset="">
        </div>`;
        },
    
    list(p1){
        return `
        <div class="p-4">
            <h4 class="fst-italic">${p1.title}</h4>
            <ol class="list-unstyled d-flex flex-column gap-2 mb-0">
                ${p1.links.map((val, id) =>`<li><a class="continue" href="${val.href}">${val.name}  <br><em class="fechas">${val.date}</em> </a></li>`).join('')}      
            </ol>
        </div>
        `;
    }

}