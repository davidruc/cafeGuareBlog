let wsMyPost = {
    showPost(p1) {
        let plantilla = p1.map((val, id) => {
    
          return `<div class="col-lg-6">
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
              </div>`
        })
        return plantilla.join('');
      }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyPost[`${e.data.module}`](e.data.data));
})