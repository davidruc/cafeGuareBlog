export default{
    titulo: "Para verdaderos fanáticos del café",
    subtitulo: "CAFÉ GUAURE: Sus inicios",
    fecha: {
        date: "Marzo 23, 2023 by" ,
        creador: {
            name: "ChatGPT",
            href: "https://chat.openai.com/chat"
        },
    
    },
    paragraph1: "Cuando era joven, viví en una pequeña comunidad en las montañas donde la mayoría de la gente cultivaba café. A medida que crecía, me di cuenta de que el café de mi comunidad era único y especial, y me di cuenta de que podía compartirlo con el mundo. <br><br>Así que, con mucha determinación y trabajo duro, comencé mi propio emprendimiento de café. Me dediqué a tostar y vender café de alta calidad, enfocado en resaltar los sabores auténticos y únicos de mi comunidad.",
    paragraph2: `Hoy en día, mi emprendimiento de café es reconocido por su calidad y su compromiso con la sostenibilidad. Me siento orgulloso de haber creado algo que no solo refleja mi pasión, sino también la belleza y el sabor de mi comunidad.`,
    subtitulo2: `Guaure`,
    blockquote: `Las grandes maravillas de la tierra:`,
    blockquoteExample:`¿Porqué visitar guaure?`,
    paragraph3: `Guaure es una pequeña vereda ubicada en las montañas, rodeada de una naturaleza exuberante y una tierra muy fértil. La comunidad es conocida por su gente cálida y hospitalaria, siempre dispuesta a compartir su cultura y tradiciones con los visitantes.<br><br>

    En Guaure, la mayoría de la gente se dedica al cultivo de café, con técnicas sostenibles y respetuosas con el medio ambiente. La cosecha de café es una actividad muy importante en la comunidad y une a las familias y amigos en un esfuerzo común para producir un café de alta calidad.`,
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
    


    
    listarArticulo(){
        document.querySelector("#article").insertAdjacentHTML("beforeend", 
        `<h3 class="pb-4 mb-4 fst-italic border-bottom">
        ${this.titulo}
      </h3>

      <article class="blog-post">
        <h2 class="blog-post-title">${this.subtitulo}</h2>
        <p class="blog-post-meta">${this.fecha.date} <a href="#">${this.fecha.creador.name}</a></p>

        <p>${this.paragraph1}</p>
        <hr>
        <p>${this.paragraph2}</p>
        <h2>${this.subtitulo2}</h2>
        <p>${this.blockquote}</p>
        <blockquote class="blockquote">
          <p>${this.blockquoteExample}</p>
        </blockquote>
        <p>${this.paragraph3}</p>
        <h3>${this.subtitulo3}</h3>
        <p>${this.paragraph4}</p>
        <ul>
          <li>${this.lista.item1}</li>
          <li>${this.lista.item2}</li>
          <li>${this.lista.item3}</li>
          <li>${this.lista.item4}</li>
          <li>${this.lista.item5}</li>
        </ul>
        <p>${this.descripcion}</p>
        <ul>
        <li>${this.lista.item6}</li>
        <li>${this.lista.item7}</li>
        <li>${this.lista.item8}</li>
        </ul>
        <p>${this.descripcion2}</p>
        
      
      `)

    }

}

/* <dl>
        <dt>HyperText Markup Language (HTML)</dt>
        <dd>The language used to describe and define the content of a Web page</dd>
        <dt>Cascading Style Sheets (CSS)</dt>
        <dd>Used to describe the appearance of Web content</dd>
        <dt>JavaScript (JS)</dt>
        <dd>The programming language used to build advanced Web sites and applications</dd>
      </dl>
      <h2>Inline HTML elements</h2>
      <p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>
      <ul>
        <li><strong>To bold text</strong>, use <code
            class="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.</li>
        <li><em>To italicize text</em>, use <code class="language-plaintext highlighter-rouge">&lt;em&gt;</code>.
        </li>
        <li>Abbreviations, like <abbr title="HyperText Markup Langage">HTML</abbr> should use <code
            class="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional <code
            class="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>
        <li>Citations, like <cite>— Mark Otto</cite>, should use <code
            class="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.</li>
        <li><del>Deleted</del> text should use <code class="language-plaintext highlighter-rouge">&lt;del&gt;</code>
          and <ins>inserted</ins> text should use <code
            class="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.</li>
        <li>Superscript <sup>text</sup> uses <code class="language-plaintext highlighter-rouge">&lt;sup&gt;</code>
          and subscript <sub>text</sub> uses <code class="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.
        </li>
      </ul>
      <p>Most of these elements are styled by browsers with few modifications on our part.</p>
      <h2>Heading</h2>
      <p>This is some additional paragraph placeholder content. It has been written to fill the available space and
        show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
        demonstration flowing, so be on the lookout for this exact same string of text.</p>
      <h3>Sub-heading</h3>
      <p>This is some additional paragraph placeholder content. It has been written to fill the available space and
        show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
        demonstration flowing, so be on the lookout for this exact same string of text.</p>
      <pre><code>Example code block</code></pre>
      <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly
        repetitive body text used throughout.</p>
    </article> */