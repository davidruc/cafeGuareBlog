export default{
    post: [
        {
            article: "FOR SERVERS",
            title: "Molienda de cafe post",
            date: "Nov 12",
            paragraph: `This is a wider card with supporting text below as a natural lead-in to additional constent`,
            btn:{
                name: "Continue reading",
                href: "#"
            },
            image: "../img/imagen1.jpg"
        }
    ],
    showPost(){
        this.post.forEach((val,id)=>{
            document.querySelector("#post").insertAdjacentHTML("beforeend", `
            <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${val.article}</strong>
                <h3 class="mb-0">${val.title}</h3>
                <div class="mb-1 text-muted">${val.date}</div>
                <p class="card-text mb-auto">${val.paragraph}</p>
                <a href="#" class="stretched-link">${val.btn.name}</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img src="${val.image}" class="imgresponsive" alt="" srcset="">
              </div>
            </div>
          </div>
            `);
        })
    }
}
