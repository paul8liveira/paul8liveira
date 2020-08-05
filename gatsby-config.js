module.exports = {
  siteMetadata: {
    title: 'paul8liveira | Portfólio',
    lang: 'pt',
    description: 'Portfólio de projetos e conteúdo variado sobre tecnologia, livros, etc...',
    menuLinks: [
      {
        id: 'blog',
        name: 'Blog posts',
        to: '/admin/blog',
      },
      {
        id: 'logout',
        name: 'Desconectar',
        to: '',
      },
    ],
    me: {
      title: 'Olá! meu nome é',
      name: 'Paulo Oliveira.',
      subtitle: 'Sou profissional da área de tecnologia especializado em desenvolvimento web.',
      cta: 'Saiba mais',
    },
    about: {
      img: 'profile.jpg',
      paragraphOne:
        'Meu perfil diz claramente, sou analista de sistema e desenvolvedor de software. Mas gostaria de resumir um pouco mais quem eu sou, ao invés das minhas habilidades. Afinal, por trás de toda grande habilidade, há sempre uma grande personalidade.',
      paragraphTwo:
        'Iniciei os estudos aos 17 anos para me tornar um técnico em informática. Desde então, trabalho com tecnologia. Economizei dinheiro para estudar desde sempre, e nunca parei de aprender e me atualizar profissionalmente, e sinto que nunca vou parar! O conhecimento me move, por isso, levo essa frase que li uma vez como mantra "Quanto mais eu aprendo, melhor eu sei o quão pouco sei". Sou entusiasta das linguagens de programação, vejo beleza e potêncial em todas, acredito que boas soluções não refletem a ferramenta utilizada e sim, àqueles que empunharam.',
      paragraphThree:
        'Até agora, trabalhei em fábrica de software especializada em gestão pública, outra especializada em transporte e logística, no centro administrativo de uma usina de etanol e energia, atualmente trabalho na TI do PECEGE e na StartMeUp! sempre trabalhando como analista/desenvolvedor de software.',
      resume: 'https://drive.google.com/file/d/1UR4_aSNvrW2mj41poFVtncdDwjDNlphm/view?usp=sharing',
    },
    footer: {
      networks: [
        {
          id: 'facebook',
          name: 'facebook',
          url: 'https://facebook.com/paul8liveira',
        },
        {
          id: 'at',
          name: 'at',
          url: 'mailto:paul8liveira@gmail.com',
        },
        {
          id: 'linkedin',
          name: 'linkedin',
          url: 'https://linkedin.com/in/paul8liveira',
        },
        {
          id: 'github',
          name: 'github',
          url: 'https://github.com/paul8liveira',
        },
      ],
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Meu portfólio`,
        short_name: `paul8liveira`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/admin/*`] },
    },
    {
      resolve: 'gatsby-theme-firebase',
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
        },
        socialLogins: ['google', 'github'],
      },
    },
  ],
};
