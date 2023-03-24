export default{
    titulo: "El mejor café origánico",
    paragraph:  `El café Guaure está cultivado de manera sostenible, sin químicos tóxicos, haciendolo una opción saludable para ti y para el planeta. Además, su sabor auténtico y su alta calidad te garantizarán una experiencia única para el paladar.   <strong>  <em>  Atrévete a probarlo.`,
    btn: {
        name : "saber más...",
        href: "https://juanvaldez.com/"
    },

    image: "../img/cafe.jpg",
    imagen2: "../img/logo.png",
    showImage(){
        document.querySelector(".imgStyle").style.backgroundImage = `url(${this.image})`;
    },
    showSectionBanner(){ 
        document.querySelector("#banner").insertAdjacentHTML("beforeend", `
        <h1 class="display-4 text-center text-md-end fst-italic">${this.titulo}</h1>
        
        <p class="lead my-3 text-center text-md-end">${this.paragraph}</p>
        <p class="lead text-center text-md-end  mb-0"><a href="${this.btn.href}" target="_blank" class="continue fw-bold">${this.btn.name}</a></p>
    
         `)
    },
    showLogo(){
        document.querySelector("#logo").insertAdjacentHTML("beforeend", `<img src="${this.imagen2}" alt="" class="w-75 py-3 py-md-5 rounded-circle logo" srcset="">`)
    }
}