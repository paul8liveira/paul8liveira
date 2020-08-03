import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'paul8liveira | Portfólio',
  lang: 'pt',
  description: 'Portfólio de projetos no GitHub',
};

// ME DATA
export const meData = {
  title: 'Olá! meu nome é',
  name: 'Paulo Oliveira.',
  subtitle: 'Sou profissional da área de tecnologia especializado em desenvolvimento web.',
  cta: 'Saiba mais',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Meu perfil diz claramente, sou analista de sistema e desenvolvedor de software. Mas gostaria de resumir um pouco mais quem eu sou, ao invés das minhas habilidades. Afinal, por trás de toda grande habilidade, há sempre uma grande personalidade.',
  paragraphTwo:
    'Iniciei os estudos aos 17 anos para me tornar um técnico em informática. Desde então, trabalho com tecnologia. Economizei dinheiro para estudar desde sempre, e nunca parei de aprender e me atualizar profissionalmente, e sinto que nunca vou parar! O conhecimento me move, por isso, levo essa frase que li uma vez como mantra "Quanto mais eu aprendo, melhor eu sei o quão pouco sei". Sou entusiasta das linguagens de programação, vejo beleza e potêncial em todas, acredito que boas soluções não refletem a ferramenta utilizada e sim, àqueles que empunharam.',
  paragraphThree:
    'Até agora, trabalhei em fábrica de software especializada em gestão pública, outra especializada em transporte e logística, no centro administrativo de uma usina de etanol e energia, atualmente trabalho na TI do PECEGE e na StartMeUp! sempre trabalhando como analista/desenvolvedor de software.',
  resume: 'https://drive.google.com/file/d/1UR4_aSNvrW2mj41poFVtncdDwjDNlphm/view?usp=sharing',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://facebook.com/paul8liveira',
    },
    {
      id: nanoid(),
      name: 'at',
      url: 'mailto:paul8liveira@gmail.com',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/paul8liveira',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/paul8liveira',
    },
  ],
};
