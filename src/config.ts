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
    "eletronica-sistemas-embarcados": "Eletrônica e sistemas embarcados",
    "vida-pratica": "Vida Prática e Bem-Estar",
    "exemplos": "Exemplos e Componentes"
};

export const seriesNames: Record<string, string> = {
    "serie-mudancas-climaticas": "Mudanças Climáticas, Consenso e Resistência",
    "evolucao-conceitos-fisica": "A invenção da realidade: a longa história das revoluções da física",
    "praticas-sociais-educativas": "Muros, celulares e giz: a física nas trincheiras da escola pública",
    "educacao-ciencia-matematica": "O universo privado: a persistência dos nossos erros sobre o cosmo",
    "filosofia": "Contra o manual: as engrenagens por trás da \"verdade científica\""
};

export const seriesDescriptions: Record<string, string> = {
    "serie-mudancas-climaticas": "Uma investigação sobre a história da ciência do clima, as evidências do impacto humano, a fabricação da dúvida e o papel do ensino diante do negacionismo.",
    "evolucao-conceitos-fisica": "Uma jornada histórica pelos conceitos fundamentais da física, desde o cosmo teleológico de Aristóteles até a mecânica quântica e as partículas elementares.",
    "praticas-sociais-educativas": "Relatos reflexivos sobre a realidade das salas de aula no ensino médio técnico, analisando políticas educacionais, dinâmicas sociais e desafios pedagógicos.",
    "educacao-ciencia-matematica": "Uma análise sobre as concepções errôneas em astronomia básica e como as distorções nos livros didáticos dificultam a compreensão científica do céu.",
    "filosofia": "Uma desconstrução do mito da ciência como receita infalível, explorando os limites lógicos do indutivismo, o papel da falseabilidade e as revoluções nos paradigmas científicos."
};
