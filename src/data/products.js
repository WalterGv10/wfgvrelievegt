export const products = [
    // Spotlights
    {
        id: 7,
        name: 'Cabezón Temático - Bad Bunny',
        dimensions: '55cm altura',
        type: 'Caricatura Volumétrica',
        detail: 'Pintado a mano + Accesorios 3D',
        usage: 'Eventos, decoración y coleccionismo',
        image: '/catalog/bad-bunny/front.jpg',
        description: 'La pieza central de nuestra colección temática. Una representación monumental que captura la esencia del ícono urbano con precisión caricaturesca. Desde la textura hiper-realista del cabello rizado hasta la integración perfecta de los lentes de corazón.'
    },
    {
        id: 8,
        name: 'Sinergia Corporal',
        dimensions: '1.8m altura con base',
        type: 'Escultura Estructural',
        detail: 'Acabado Bronce Envejecido',
        usage: 'Galerías y Lobbies Corporativos',
        image: '/catalog/floating-bodies/main.jpg',
        description: 'Una composición desafiante a la gravedad. Cuerpos entrelazados que forman un arco de tensión y equilibrio, finalizando en una caída estética. Perfecta para espacios que requieren movimiento estático.'
    },
    {
        id: 12,
        name: 'Jaguar Digital - Neon Soul',
        dimensions: '60cm altura',
        type: 'Low Poly Art',
        detail: 'Espejado Oro/Rosa con Luz Interna',
        usage: 'Nightclubs y espacios vanguadistas',
        image: '/catalog/geo-leopard-pink/main.jpg',
        description: 'La fusión definitiva entre naturaleza salvaje y estética cyberpunk. Facetas doradas que reflejan el entorno, bañadas en una luz interna magenta que cobra vida en la oscuridad.'
    },
    {
        id: 9,
        name: 'Pantera Geométrica - Prism',
        dimensions: '60cm altura',
        type: 'Low Poly Art',
        detail: 'Acabado Espejo Cromo con Neón',
        usage: 'Espacios nocturnos y modernos',
        image: '/catalog/geo-panther-silver/main.jpg',
        description: 'La agresividad de la naturaleza domada por la geometría digital. Facetas reflectantes que interactúan con la luz ambiental, acentuadas por líneas de neón internas.'
    },
    {
        id: 10,
        name: 'Pantera Geométrica - Gold Edition',
        dimensions: '60cm altura',
        type: 'Low Poly Art',
        detail: 'Acabado Oro Espejado con Luz Cálida',
        usage: 'Interiores de lujo',
        image: '/catalog/geo-panther-gold/main.jpg',
        description: 'Opulencia poligonal. Una variante cálida que aporta elegancia y estructura a cualquier ambiente sofisticado.'
    },
    {
        id: 11,
        name: 'Maneki Neko - Dark Matter',
        dimensions: '50cm altura',
        type: 'Pop Art Volumétrico',
        detail: 'Negro Mate con Acentos Dorados',
        usage: 'Concept Stores y Decoración Urbana',
        image: '/catalog/lucky-cat/main.jpg',
        description: 'El tradicional gato de la suerte reimaginado para la era moderna. Estética oscura, misteriosa y radicalmente cool.'
    },

    // New Additions (Batch 1)
    { id: 13, name: 'Daddy Yankee', dimensions: '55cm altura', type: 'Caricatura Volumétrica', detail: 'The Big Boss', image: '/catalog/dy-bust.png', description: 'El máximo líder del género urbano.' },
    { id: 14, name: 'Karol G', dimensions: '55cm altura', type: 'Caricatura Volumétrica', detail: 'La Bichota', image: '/catalog/karol-bust.png', description: 'Empoderamiento y estilo en formato monumental.' },
    { id: 15, name: 'Feid (Ferxxo)', dimensions: '55cm altura', type: 'Caricatura Volumétrica', detail: 'Verde Neon', image: '/catalog/feid-bust.png', description: 'Estética urbana con el icónico verde y gafas.' },
    { id: 16, name: 'Chayanne', dimensions: '55cm altura', type: 'Caricatura Volumétrica', detail: 'Edición Torero', image: '/catalog/chayanne-bust.png', description: 'El papá de todos, inmortalizado.' },
    { id: 17, name: 'Vicente Fernández', dimensions: '55cm altura', type: 'Homenaje', detail: 'Charro de Huentitán', image: '/catalog/vicente-bust.png', description: 'El ídolo de México.' },
    { id: 18, name: 'Paquita la del Barrio', dimensions: '50cm altura', type: 'Caricatura Temática', detail: 'Acabado Mate', image: '/catalog/paquita-bust.png', description: '¿Me estás oyendo, inútil?' },
    { id: 19, name: 'La Máscara', dimensions: 'Regular', type: 'Réplica de Utilería', detail: 'Verde Loki', image: '/catalog/mask-bust.png', description: 'Smmmokin!' },
    { id: 20, name: 'Luis Miguel', dimensions: '55cm altura', type: 'Caricatura Volumétrica', detail: 'El Sol de México', image: '/catalog/luismiguel-bust.png', description: 'Elegancia y bronceado perfecto.' },
    { id: 21, name: 'Arcángel', dimensions: '55cm altura', type: 'Caricatura Volumétrica', detail: 'La Maravilla', image: '/catalog/arcangel-bust.png', description: 'Prrrrra.' },
    { id: 22, name: 'Sapo Concho', dimensions: '30cm altura', type: 'Mascota Cultural', detail: 'Acabado Realista', image: '/catalog/sapo-concho.png', description: 'Ícono de la cultura popular.' },
    { id: 23, name: 'Donald Trump', dimensions: '60cm altura', type: 'Caricatura Política', detail: 'Cabello Dorado', image: '/catalog/trump-bust.png', description: 'Make 3D Great Again.' },
    { id: 24, name: 'Vladimir Putin', dimensions: '60cm altura', type: 'Caricatura Política', detail: 'Expresión Severa', image: '/catalog/putin-bust.png', description: 'Líder mundial en formato coleccionable.' },
    { id: 25, name: 'Toretto', dimensions: '55cm altura', type: 'Caricatura Cine', detail: 'Familia', image: '/catalog/toretto-bust.png', description: 'Porque lo más importante es la familia.' },
    { id: 26, name: 'Terminator', dimensions: '60cm altura', type: 'Busto Sci-Fi', detail: 'Daño de Batalla', image: '/catalog/terminator-bust.png', description: 'I\'ll be back.' },
    { id: 27, name: 'Smeagol', dimensions: '40cm altura', type: 'Fantasía', detail: 'Ojos Cristalinos', image: '/catalog/smeagol-bust.png', description: 'Mi precioso.' },
    { id: 28, name: 'Alien (Xenomorfo)', dimensions: '70cm largo', type: 'Terror Sci-Fi', detail: 'Negro Brillante', image: '/catalog/alien-bust.png', description: 'En el espacio nadie puede oír tus gritos.' },
    {
        id: 30,
        name: 'Mega-Caricatura: Edición Influencer',
        dimensions: '65cm altura',
        type: 'Caricatura Volumétrica de Autor',
        detail: 'Pintura Premium + Accesorios Símiles',
        usage: 'Marketing Digital y Colecciones Privadas',
        image: '/catalog/mega-caricatura-influencer/front.jpg',
        description: 'Impacto visual absoluto. Una pieza que traduce la personalidad digital al mundo físico mediante técnicas avanzadas de post-procesado y modelado facial exagerado.'
    },

    // Legacy
    {
        id: 1,
        name: 'Retrato Escultórico',
        dimensions: '85cm altura',
        type: 'Escultura artística',
        detail: 'Alto detalle facial',
        usage: 'Galerías y espacios premium',
        image: '/catalog/bust-portrait.jpg',
        description: 'Captura de gestos y expresión a gran escala con precisión milimétrica.'
    },
    {
        id: 31,
        name: 'Cyber Fox Mask - LED Edition',
        dimensions: 'Ajustable',
        type: 'Wearable Tech Art',
        detail: 'Facetas Espejadas + Iluminación RGB LED',
        usage: 'Festivales, Performance y Colección Sci-Fi',
        image: '/catalog/cyber-fox-mask/front.jpg',
        description: 'La intersección entre la moda futurista y el arte poligonal. Una máscara de zorro espejada de gran impacto visual, integrada con un sistema de iluminación LED programable que reacciona al entorno.'
    },
    {
        id: 2,
        name: 'Logo Volumétrico',
        dimensions: '1.2m ancho',
        type: 'Branding corporativo',
        detail: 'Acabado premium',
        usage: 'Recepción y espacios comerciales',
        image: '/catalog/volumetric-logo.jpg',
        description: 'Tu marca en tres dimensiones. Presencia que no se olvida.'
    },

    // Funkos Sample Data
    {
        id: 40,
        name: 'Funko Personalizado: Ejecutivo',
        dimensions: '10cm - 20cm',
        type: 'Funko',
        detail: 'Caja Personalizada Incluida',
        usage: 'Regalos Corporativos',
        image: '/catalog/mega-caricatura-influencer/front.jpg', // Placeholder
        description: 'Tu versión en formato coleccionable. Incluye diseño de caja 100% personalizada.'
    },
    {
        id: 41,
        name: 'Funko Artista: Edición Limitada',
        dimensions: '15cm altura',
        type: 'Funko',
        detail: 'Acabado Metálico',
        usage: 'Merchandising',
        image: '/catalog/mega-caricatura-influencer/side.jpg', // Placeholder
        description: 'Series limitadas para artistas y creadores de contenido.'
    }
];
