export default{
    titulo: "El mejor café origánico",
    paragraph: `Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents`,
    btn: {
        name : "continuar...",
        href: "https://juanvaldez.com/"
    },

    image: "../img/cafe.jpeg",
    showImage(){
        document.querySelector(".imgStyle").style.backgroundImage = `url(${this.image})`;
    },
    showSectionBanner(){
        document.querySelector("#banner").insertAdjacentHTML("beforeend", `<h1 class="display-4 fst-italic">${this.titulo}</h1>
        <p class="lead my-3">${this.paragraph}</p>
        <p class="lead mb-0"><a href="${this.btn.href}" target="_blank" class="text-white fw-bold">${this.btn.name}</a></p> `)
      /*   */
    }
}