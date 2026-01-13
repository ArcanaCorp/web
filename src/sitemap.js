export const siteMap = [
    {
        name: "Productos",
        path: "/products",
        position: 'header',
        children: [
            { name: "Plataformas", path: "/products/plataformas" },
            { name: "Ecosistemas", path: "/products/ecosistemas" },
            { name: "Tecnologías", path: "/products/tecnologias" }
        ]
    },
    {
        name: "Plataforma",
        path: "/platform"
    },
    {
        name: "Team",
        path: "/teams",
        position: 'header',
        children: [
            { name: "Arquitectura", path: "/teams/arquitectura" },
            { name: "Stack Tecnológico", path: "/teams/stack" },
            { name: "APIs", path: "/teams/apis" },
            { name: "Documentación", path: "/teams/documentacion" }
        ]
    },
    {
        name: "Investigación",
        path: "/research"
    },
    {
        name: "Ecosistema",
        path: "/ecosystem",
        position: 'header',
    },
    {
        name: "Compañía",
        path: "/company",
        position: 'header',
        children: [
            { name: "Qué es ARCANA", path: "/company/arcana" },
            { name: "Visión", path: "/company/vision" },
            { name: "Cómo Operamos", path: "/company/operacion" }
        ]
    },
    {
        name: "Carreras",
        path: "/careers",
        position: 'header',
    },
    {
        name: "Contacto",
        path: "/contact"
    },
    {
        name: "Legal",
        path: "/legal",
        children: [
            { name: "Privacidad", path: "/legal/privacy" },
            { name: "Términos", path: "/legal/terms" }
        ]
    }
];