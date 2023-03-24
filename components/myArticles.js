export default{
    titulo: "Para verdaderos fanáticos del café",
    articulo1:{
      subtitulo: "CAFÉ GUAURE: Sus inicios",
      fecha: {
          date: "Marzo 23, 2023 by" ,
          creador: {
              name: "ChatGPT",
              href: "https://chat.openai.com/chat"
          },
      
      },
      paragraph1: "Cuando era joven, viví en una pequeña comunidad en las montañas donde la mayoría de la gente cultivaba café. A medida que crecía, me di cuenta de que el café de mi comunidad era único y especial, y me di cuenta de que podía compartirlo con el mundo. <br><br>Así que, con mucha determinación y trabajo duro, comencé mi propio emprendimiento de café. Me dediqué a tostar y vender café de alta calidad, enfocado en resaltar los sabores auténticos y únicos de mi comunidad.",
      paragraph2: `Hoy en día, mi emprendimiento de café es reconocido por su calidad y su compromiso con la sostenibilidad. Me siento orgulloso de haber creado algo que no solo refleja mi pasión, sino también la belleza y el sabor de mi comunidad.`  
    },
    articulo2:{
      subtitulo2: `Guaure`,
      blockquote: `Las grandes maravillas de la tierra:`,
      blockquoteExample:`¿Porqué visitar guaure?`,
      paragraph3: `Guaure es una pequeña vereda ubicada en las montañas, rodeada de una naturaleza exuberante y una tierra muy fértil. La comunidad es conocida por su gente cálida y hospitalaria, siempre dispuesta a compartir su cultura y tradiciones con los visitantes.<br><br>
  
      En Guaure, la mayoría de la gente se dedica al cultivo de café, con técnicas sostenibles y respetuosas con el medio ambiente. La cosecha de café es una actividad muy importante en la comunidad y une a las familias y amigos en un esfuerzo común para producir un café de alta calidad.`,
      imagen: "../img/paisajeGuaure.jpeg"
    },
    articulo3:{
      subtitulo3:`Variedades de café`,
      paragraph4: `Existen muchas variedades de café, pero en general se pueden clasificar en dos categorías principales: Coffea Arabica y Coffea Robusta. A continuación, te presento algunos tipos de café dentro de estas dos categorías. <br><br>Coffea Arabica: `,
      lista: {
        item1: "Typica: de origen etíope, suave y dulce.",
        item2: "Bourbon: de Madagascar, aroma intenso y acidez pronunciada.",
        item3: "Caturra: de Brasil, suave y dulce",
        item4: "Geisha: de Panamá, sabor floral y elegante.",
        item5: "Mundo Novo: de Brasil, equilibrado y suave",
        item6: "Robusta: el más común, alto contenido de cafeína y sabor fuerte y amargo.",
        item7: "Excelsa: sabor afrutado y ácido, menos común que el Robusta.",
        item8: "Ugandés: sabor intenso y a nuez, cultivado principalmente en África.",
    
  
      },
      descripcion:"Coffea Robusta:",
      descripcion2: "Cada tipo de café tiene características únicas que se deben a factores como el lugar de origen, el clima, el suelo y el método de procesamiento. Esto hace que la experiencia de probar diferentes tipos de café sea fascinante y enriquecedora.",
    },
    articulo4:{
      titulo: "Tipos de tostado de café",
      date: "marzo 13, 2022 by",
      btn:{
        name:"ChatGPT",
        href: "https://chat.openai.com/chat",
      },
      paragraph1: "El tostado del café es el proceso de calentar los granos de café crudos para obtener el aroma y sabor deseados. El proceso de tostado implica la aplicación de calor a los granos de café crudos en un rango de temperatura de 180 °C a 240 °C. Durante el proceso de tostado, el color, aroma y sabor de los granos de café cambian y se desarrollan distintas características que son únicas para cada tipo de tostado.",
      paragraph2: "Hay varios tipos de tostado del café, cada uno con sus propias características y sabores distintivos. A continuación, te presento una tabla de 4x4 con algunos de los tipos de tostado más comunes y sus principales características:",

      table:{
        
        cabezas:[
          {name:"Tipo de tostado"},
          {name:"Color"},
          {name:"Sabor"},
          {name:"Características"},
        ],
        claro:[
          {name:"Tostado claro"},
          {name:"Marrón claro"},
          {name:"Sabor afrutado y ácido"},
          {name:"Los granos no se han tostado durante mucho tiempo y conservan su sabor original."},
        ],
        medio:[
          {name:"Tostado medio"},
          {name:"Marrón dorado"},
          {name:"Sabor equilibrado"},
          {name: "Los granos han sido tostados durante un tiempo medio, lo que les da un sabor más equilibrado y menos ácido que el tostado claro."},
        ],
        medioOscuro:[
          {name:"Tostado medio oscuro"},
          {name:"Marrón oscuro"},
          {name:"Sabor a chocolate y nueces"},
          {name: "Los granos se han tostado durante más tiempo y han adquirido un sabor a chocolate y nueces."},
        ],
        oscuro:[
          {name:"Tostado oscuro"},
          {name:"Marrón oscuro a negro"},
          {name:"Sabor intenso y amargo"},
          {name: "Los granos se han tostado durante mucho tiempo y han adquirido un sabor intenso y amargo."},
        ]
      } 

    

    },
    


    
    listarArticulo(){
        document.querySelector("#article").insertAdjacentHTML("beforeend", 
        `<h3 class="pb-4 mb-4 fst-italic articles border-bottom">
        ${this.titulo}
      </h3>

      <article class="blog-post">
        <h2 class="blog-post-title ">${this.articulo1.subtitulo}</h2>
        <p class="blog-post-meta">${this.articulo1.fecha.date} <a href="#" class="continue">${this.articulo1.fecha.creador.name}</a></p>
      
        <p>${this.articulo1.paragraph1}</p>
        
        <p>${this.articulo1.paragraph2}</p>
        <hr>
        <div class="d-flex flex-wrap align-items-center justify-content-center ">
        <div class="d-flex flex-column col-12 col-lg-6">
        <h2>${this.articulo2.subtitulo2}</h2>
        <p>${this.articulo2.blockquote}</p>
        <blockquote class="blockquote">
          <p>${this.articulo2.blockquoteExample}</p>
        </blockquote>
        <p class="">${this.articulo2.paragraph3}</p>
        </div>
        
        <img class= " col-12 col-lg-6 px-3 pt-3 guaureimg " src="${this.articulo2.imagen}">
        </div>
       
        <hr>
        <h3>${this.articulo3.subtitulo3}</h3>
        <p>${this.articulo3.paragraph4}</p>
        <ul>
          <li>${this.articulo3.lista.item1}</li>
          <li>${this.articulo3.lista.item2}</li>
          <li>${this.articulo3.lista.item3}</li>
          <li>${this.articulo3.lista.item4}</li>
          <li>${this.articulo3.lista.item5}</li>
        </ul>
        <p>${this.articulo3.descripcion}</p>
        <ul>
        <li>${this.articulo3.lista.item6}</li>
        <li>${this.articulo3.lista.item7}</li>
        <li>${this.articulo3.lista.item8}</li>
        </ul>
        <p>${this.articulo3.descripcion2}</p>
        <hr>
        <article class="blog-post">
          <h2 class="blog-post-title">${this.articulo4.titulo}</h2>
          <p class="blog-post-meta">${this.articulo4.date} <a class="continue" href="${this.articulo4.btn.href}">${this.articulo4.btn.name}</a></p>

          <p>${this.articulo4.paragraph1}</p>
          
          <p>${this.articulo4.paragraph2}</p>
         
          <table class="table text-white">
            <thead>
              <tr id="cabeza">
              
              </tr>
            </thead>
            <tbody class="bodyTable">
              <tr id="claro">   
                
              </tr>
              <tr id="medio">  

              </tr>
              <tr id="medioOscuro">    

              </tr>           
              <tr id="oscuro">

              </tr>
              </tbody> 
          </table>

          <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly
            repetitive body text used throughout.</p>
        </article>
        `)


    },


    listartablita(){

      let plantilla0 = "";
      this.articulo4.table.cabezas.forEach((val,id) => {
          plantilla0 += `
          <th>${val.name}</th>
          `
      });
      document.querySelector(`#cabeza`).insertAdjacentHTML('beforeend', plantilla0);

      let plantilla = "";
      this.articulo4.table.claro.forEach((val,id) => {
          plantilla += `
          <td>${val.name}</td>
          `
      });
      document.querySelector(`#claro`).insertAdjacentHTML('beforeend', plantilla);
      
      let plantilla1 = "";
      this.articulo4.table.medio.forEach((val,id) => {
          plantilla1 += `
          <td>${val.name}</td>
          `
      });
      document.querySelector(`#medio`).insertAdjacentHTML('beforeend', plantilla1);

      let plantilla2 = "";
      this.articulo4.table.medioOscuro.forEach((val,id) => {
          plantilla2 += `
          <td>${val.name}</td>
          `
      });
      document.querySelector(`#medioOscuro`).insertAdjacentHTML('beforeend', plantilla2);

      let plantilla3 = "";
      this.articulo4.table.oscuro.forEach((val,id) => {
          plantilla3 += `
          <td>${val.name}</td>
          `
      });
      document.querySelector(`#oscuro`).insertAdjacentHTML('beforeend', plantilla3);

  },
}
/* 
 */