export default {
  post: [

    {
      article: "ARTÍCULO TÉCNICO",
      title: "Historia del café castilla ",
      date: "Feb 15",
      paragraph: `El café castillo se cultiva bajo sombra, en altitudes medias, con tierra fértil y clima cálido...`,
      btn: {
        name: "Continua leyendo...",
        href: "https://www.cenicafe.org/es/publications/avt0337.pdf"
      },
      image: "img/cafe1.jpeg"
    },
    {
      article: "PARA FANÁTICOS",
      title: "Tipos de Tueste (Medio)",
      date: "Ene 2",
      paragraph: `Tueste moderado, más cuerpo, equilibrio entre acidez y amargor en el sabor`,
      btn: {
        name: "Continua leyendo...",
        href: "https://www.cafescandelas.com/es/blog/tipos-tueste-caf%C3%A9"
      },
      image: "img/molienda.jpeg"
    },
    {
      article: "CONSEJOS",
      title: "Tips para catar café",
      date: "Nov 12",
      paragraph: `Limpiar paladar, oler y probar, identificar sabor, cuerpo, acidez y aroma.`,
      btn: {
        name: "Continua leyendo...",
        href: "https://cursosbaristacafe.com.mx/blog/barismo/como-catar-el-cafe/"
      },
      image: "img/imagen2.jpeg"

    },
    {
      article: "PREPARACIONES",
      title: "Como usar la Prensa francesa",
      date: "Dic 26",
      paragraph: `Método de preparación de café en que se mezcla agua caliente y café molido.`,
      btn:{
          name: "Continua leyendo...",
          href: "https://perfectdailygrind.com/es/2016/12/19/prensa-francesa-y-guia-de-extraccion/"
      },
      image: "img/imagen1.jpg"
    },
  ],
  showPost() {
    this.post.forEach((val, id) => {

      document.querySelector("#post").insertAdjacentHTML("beforeend", `
            <div class="col-lg-6">
            <div class="row g-0 border rounded overflow-hidden flex-col flex-md-row  mb-4 shadow-sm bg-secondary  position-relative " id="cards">
              <div class="col p-4 d-flex  flex-column position-static">
                <strong class="d-inline-block mb-2 articles">${val.article}</strong>
                <h3 class="mb-0">${val.title}</h3>
                <div class="mb-1 ">${val.date}</div>
                <p class="card-text mb-auto">${val.paragraph}...</p>
                <a href="#" class="stretched-link continue">${val.btn.name}</a>
              </div>
              <div class="col-12 col-md-auto justify-content-center d-flex align-items-center ">
                <img src="${val.image}" class="imgresponsive " alt="" srcset="">
              </div>
            </div>
          </div>
            `);
    })
  }
}
