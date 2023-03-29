export default{
    dataMyHeader(){
        localStorage.setItem("myHeader", JSON.stringify({
            title: {
                name: "CAFÉ GUAURE",
                href: "#"},
            singIn:{
                name: "Sign up",
                href: "#",
            },
            dentroNavar: [
                {
                    name: "Contactenos",
                    href: "#"
                },
                {
                    name: "Tostion",
                    href: "#"
                },
                {
                    name: "Tipos de café",
                    href: "#"
                },
                {
                    name: "Historia",
                    href: "#"
                },
                {
                    name: "Café en grano",
                    href: "#"
                },
                {
                    name: "Café molido",
                    href: "#"
                },
                {
                    name: "Guare",
                    href: "#"
                },
                {
                    name: "Opinion",
                    href: "#"
                }
        
            ]
        }))
    },
    dataMyBanner(){
        localStorage.setItem("myBanner", JSON.stringify({
            contenido: {
                titulo: "El mejor café origánico",
                paragraph:  `El café Guaure está cultivado de manera sostenible, sin químicos tóxicos, haciendolo una opción saludable para ti y para el planeta. Además, su sabor auténtico y su alta calidad te garantizarán una experiencia única para el paladar.   <strong>  <em>  Atrévete a probarlo.`,
                btn: {
                    name : "saber más...",
                    href: "https://juanvaldez.com/"
                }
            },
            imagenes:{
                image: "./img/cafe.jpg",
                imagen2: "./img/logo.png",
        
            }, 
        }))
    },
    dataMyPost(){
        localStorage.setItem("myPost", JSON.stringify({
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
                  image: "./img/cafe1.jpeg"
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
                  image: "./img/molienda.jpeg"
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
                  image: "./img/imagen2.jpeg"
            
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
                  image: "./img/imagen1.jpg"
                },
              ],
        }))
    },
    dataMyArticles(){
        localStorage.setItem("myArticles", JSON.stringify({
            datos: {

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
                  imagen: "./img/paisajeGuaure.jpeg"
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
                  table:[{
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
                  ] 
                },  
              },
        }))
    },
    dataMyAside(){
        localStorage.setItem("myAside", JSON.stringify({
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
        }))
    },
    dataMyFooter(){
        localStorage.setItem("myFooter", JSON.stringify({
            datos:{

                paragraph: "Blog creado por",
                botones: {
                    boton1: "David",
                    href: "#",
                    boton2: "@davidruc",
                    href: "#",
                    boton3: "volver al inicio",
                    href: "#",
            }
                
        
            },
        }))
    }
}