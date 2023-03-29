let wsMyArticles = {
    listarArticulo(p1){
        return `<h3 class="pb-4 mb-4 fst-italic articles border-bottom">
        ${p1.titulo}
      </h3>
      <article class="blog-post">
        <h2 class="blog-post-title ">${p1.articulo1.subtitulo}</h2>
        <p class="blog-post-meta">${p1.articulo1.fecha.date} <a href="#" class="continue">${p1.articulo1.fecha.creador.name}</a></p>
        <p>${p1.articulo1.paragraph1}</p>
        <p>${p1.articulo1.paragraph2}</p>
        <hr>
        <div class="d-flex flex-wrap align-items-center justify-content-center ">
        <div class="d-flex flex-column col-12 col-lg-6">
        <h2>${p1.articulo2.subtitulo2}</h2>
        <p>${p1.articulo2.blockquote}</p>
        <blockquote class="blockquote">
          <p>${p1.articulo2.blockquoteExample}</p>
        </blockquote>
        <p class="">${p1.articulo2.paragraph3}</p>
        </div>
        
        <img class= " col-12 col-lg-6 px-3 pt-3 guaureimg " src="${p1.articulo2.imagen}">
        </div>
        <hr>
        <h3>${p1.articulo3.subtitulo3}</h3>
        <p>${p1.articulo3.paragraph4}</p>
        <ul>
          <li>${p1.articulo3.lista.item1}</li>
          <li>${p1.articulo3.lista.item2}</li>
          <li>${p1.articulo3.lista.item3}</li>
          <li>${p1.articulo3.lista.item4}</li>
          <li>${p1.articulo3.lista.item5}</li>
        </ul>
        <p>${p1.articulo3.descripcion}</p>
        <ul>
        <li>${p1.articulo3.lista.item6}</li>
        <li>${p1.articulo3.lista.item7}</li>
        <li>${p1.articulo3.lista.item8}</li>
        </ul>
        <p>${p1.articulo3.descripcion2}</p>
        <hr>
        <article class="blog-post">
          <h2 class="blog-post-title">${p1.articulo4.titulo}</h2>
          <p class="blog-post-meta">${p1.articulo4.date} <a class="continue" href="${p1.articulo4.btn.href}">${p1.articulo4.btn.name}</a></p>

          <p>${p1.articulo4.paragraph1}</p>
          
          <p>${p1.articulo4.paragraph2}</p>

          <div id="table">
          </div>
          

          
        </article>
        `


    },


    listartablita(p1){
      let plantilla = p1.table.map((val, id)=>{
        
        
        return ` 
        <table class="table text-white">
        <thead id="cabeza">
        <tr>
          ${val.cabezas.map((val2, id2)=>{return `<th>${val2.name}</th>`}).join("")}
        </tr>
        </thead>
        <tbody class="bodyTable">
        <tr>
        ${val.claro.map((val2, id2)=>{return`<th>${val2.name}</th>`}).join("")} 
        </tr>
        <tr>
        ${val.medio.map((val2, id2)=>{return`<th>${val2.name}</th>`}).join("")}
        </tr>
        <tr>
        ${val.medioOscuro.map((val2, id2)=>{return`<th>${val2.name}</th>`}).join(" ")}
        </tr>
        <tr>
        ${val.oscuro.map((val2, id2)=>{return`<th>${val2.name}</th>`}).join("")}
        </tr>
        </tbody>
        </table>
        `

        
      })
      return plantilla.join("")
      
    }
    
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyArticles[`${e.data.module}`](e.data.data));
})