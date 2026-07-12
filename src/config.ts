import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
    title: "Derrubando da Torre de Marfim",
    description: "Um blog pessoal de Wesley Gueta.",
    siteUrl: "https://fujadatorre.github.io",
    author: {
        name: "Wesley Gueta",
        bio: "Curioso pelo mundo e por descobrir o que ainda não conheço! Em processo de redescobrir a arte de viver para ser feliz a beça.",
    },
    nav: [
        { label: "Publicações", href: "/" },
        { label: "Temas", href: "/temas" },
        { label: "Séries", href: "/series" },
        { label: "Tags", href: "/tags" },
        { label: "Sobre o Autor", href: "/about" },
        { label: "Linha Editorial", href: "/linha-editorial" },
    ],
    socials: {
        github: "",
        twitter: "",
        linkedin: "",
    },
    postsPerPage: 5,
    analytics: {
        umami: {
            websiteId: "",
            src: "",
        },
    },
    rss: {
        title: "Derrubando da Torre de Marfim",
        description: "Um blog pessoal de Wesley Gueta.",
    },
    comments: {
        giscus: {
            enabled: true,
            repo: "fujadatorre/fujadatorre.github.io",
            repoId: "R_kgDOTVx6Xg",
            category: "Announcements",
            categoryId: "DIC_kwDOTVx6Xs4DBAe2",
            mapping: "pathname",
            strict: "0",
            reactionsEnabled: "1",
            emitMetadata: "0",
            inputPosition: "top",
            lang: "pt",
            loading: "lazy",
        },
    },
};

export const themeNames: Record<string, string> = {
    "educacao-ciencia-matematica": "Educação em Ciência e Matemática",
    "praticas-sociais-educativas": "Práticas Sociais e Processos Educativos",
    "filosofia": "Filosofia",
    "sociedade": "Sociedade",
    "comunicacao": "Comunicação e Linguagem",
    "programacao": "Programação e Tecnologia",
    "vida-pratica": "Vida Prática e Bem-Estar",
    "exemplos": "Exemplos e Componentes"
};

export const seriesNames: Record<string, string> = {
    "serie-mudancas-climaticas": "Mudanças Climáticas, Consenso e Resistência"
};
