export default{
   
    nav:[
        {
            title: "ewwqewqewqewq",
            paragraph:"ewgggg"
        },
        {
            title:"TITULO2",
            links:[
            {
                name: "Abril 18",
                href: "",
            },
            {
                name: "",
                href: "",
            },
            {
                name: "",
                href: "",
            },
            {
                name: "",
                href: "",
            },
            {
                name: "",
                href: "",
            },
            {
                name: "",
                href: "",
            },
            {
                name: "",
                href: "",
            },
            {
                name: "",
                href: "",
            },
            {
                name: "",
                href: "",
            }
        ]

        },
        {
            title: "Titulo3",
            links:[
                {
                    name: "instagram",
                    href: "",
                },
                {
                    name: "",
                    href: "",
                },
                {
                    name: "",
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
       return `<div class="p-4 mb-3 bg-secondary rounded"> <h4 class="fst-italic">${p1.title}</h4> <p class="mb-0">${p1.paragraph}</p> </div>`;
        },
    
    list(p1){
        return `
        <div class="p-4">
            <h4 class="fst-italic">${p1.title}</h4>
            <ol class="list-unstyled mb-0">
                ${p1.links.map((val, id) =>`<li><a href="${val.href}">${val.name}</a></li>`).join('')}      
            </ol>
        </div>
        `;
    }

}