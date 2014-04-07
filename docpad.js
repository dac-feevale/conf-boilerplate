module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Semana ICET 2014",
      description: "Conference description",
      date: "12, 14, 15 e 16 de abril",
      // If your event is free, just comment this line
      //price: "$100",
      venue: "Feevale",
      address: "Universidade Feevale",
      city: "Novo Hamburgo",
      state: "Rio Grande do Sul"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Clique aqui para se inscrever!",
        link: "http://www.feevale.br/semanaicet"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    //forkButton: {
        //repository: "https://github.com/braziljs/conf-boilerplate"
    //},

    // Site info
    site: {
      theme: "feevale",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      //'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners'
      //'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre o Evento",
      location: "Localização",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Apoiadores",
      partners: "Parceiros",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      //{
        //name: "Check-in / Breakfast",
        //time: "9h00"
      //},
      {
        name: "Ânderson Schuh",
        photo: "speakers/andersonschuh_313x378.jpg",
        bio: "Bacharel em Ciência da Computação pela Univerdade Feevale. Atualmente pesquisa sobre Interfaces Cérebro-Computador.",
        presentation: {
          title: "Desmistificando Interface Cérebro-Computador: Controlando uma cadeira de rodas com o piscar dos olhos",
          description: "Na primeira parte da oficina, será apresentado uma visão geral da área de Interface Cérebro-Computador, além de apresentar o projeto: BLINK – Um simulador de cadeira de rodas em ambiente 3D controlado por Interface Cérebro-Computador não invasiva. Após, será realizado uma prática utilizando Unity3D e o Neurosky Mindwave.",
          time: "19h00"
        }
      },
      {
        name: "Christian Perone",
        photo: "speakers/christianperone_400x400.jpg",
        bio: "Desenvolvedor open-sorce e pythonista apaixonado.",
        company: "PyTchê",
        link: {
          href: "https://github.com/perone",
          text: "@perone"
        },
        presentation: {
          title: "Python - Uma introdução básica",
          description: "Uma introdução básica a linguagem Python.",
          time: "10h00"
        }
      },
      {
        name: "Daniel Bastos",
        photo: "speakers/danielbastos_200x200.jpg",
        bio: "Desenvolvedor web por paixão, amante do software livre e acadêmico de longa data.",
        company: "PyTchê",
        link: {
          href: "http://daniellbastos.com.br",
          text: "daniellbastos.com.br"
        },
        presentation: {
          title: "South, o básico para manter uma \"vida saudável\"",
          description: "Uma breve apresentação sobre a biblioteca South, como utiliza-la em projetos django para manter a evolução constantes dos seus models (apps) de uma forma simples e assim mantermos uma \"vida saudável\".",
          time: "11h40"
        }
      },
      {
        name: "Fabiano Nadler",
        photo: "speakers/fabianonadler_320x320.jpg",
        bio: "Experience Design Leader na Brivia - Formado em Publicidade e Propaganda pela UFRGS e com MBA em Marketing pela ESPM. Trabalha como Experience Design Leader na Brivia. Foi responsável pela coordenação do trabalho de experience design de projetos para empresas como Petrobras, Gerdau, Terra, Unimed, Vivo, AES Brasil, Unisinos, Braskem, Embraco, Sicredi entre outros.",
        company: "Brivia",
        link: {
          href: "https://twitter.com/fnadler",
          text: "@fnadler"
        },
        presentation: {
          title: "Design de Experiência de serviços",
          description: "Em uma era onde o consumidor está cada vez mais informado e exigente, uma estratégia de design de experiência torna-se cada vez mais importante e relevante para sobreviver no mercado. A palestra ira apresentar alguns conceitos de design de experiência e como aplicá-los ao mercado de serviços.",
          time: "20h30"
        }
      },
      //{
        //name: "Coffee-break",
        //time: "15h00"
      //},
      {
        name: "Fabrício Christofoli",
        photo: "speakers/fabriciochristofoli_160x160.jpg",
        bio: "Advogado, graduado em Direito pela PUCRS, especialista em Processo Civil pela PUCRS, com atuação nas áreas de Direito Empresarial, Direito Civil, Direito Tributário e Direito eletrônico.",
        link: {
          href: "https://twitter.com/Christofoliadv",
          text: "@Christofoliadv"
        },
        presentation: {
          title: "Aspectos jurídicos relevantes sobre a criação e o desenvolvimento da atividade empresarial de Startups.",
          description: "Para o sucesso de uma “Startup”, como de toda e qualquer empresa, não basta um ótimo produto ou serviço, é preciso também uma constituição sólida e responsável. Por isso, é essencial o conhecimento básico de alguns aspectos jurídicos. A escolha do melhor tipo societário, a regulamentação do “Investimento Anjo”, a responsabilidade da empresa pelo produto ou serviço ofertado, são alguns dos assuntos que serão abordados nesta apresentação.",
          time: "21h00"
        }
      },
      {
        name: "Fernando Faganello Madeira",
        photo: "speakers/fernandomadeira_848x960.jpg",
        bio: "Gerente de Projetos da Kenta e co-Founder da Quefo.me.",
        company: "QueFo.me",
        link: {
          href: "https://twitter.com/fernandofaga",
          text: "@fernandofaga"
        },
        presentation: {
          title: "Lean Startup: da ideia ao lançamento!",
          description: "Lean Startup é a forma prática de implementar um produto ou serviço, desde o nascimento da ideia até seu lançamento. As Lean Startups digitais são normalmente projetos que necessitam validar se a oportunidade de negócio é realmente rentável e definir o modelo de negócios que será explorado. Após estas etapas, deixa de ser uma Lean Startup e se transforma em uma empresa com um modelo de negócios operante.",
          time: "20h00"
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "GitHub",
        logo: "sponsors/github_600x400.jpg",
        url: "https://github.com"
      },
      {
        name: "Caelum",
        logo: "sponsors/caelum_640x200.png",
        url: "http://www.caelum.com.br"
      },
      {
        name: "Casa do Código",
        logo: "sponsors/casadocodigo_600x175.png",
        url: "http://www.casadocodigo.com.br"
      },
      {
        name: "PyTchê",
        logo: "sponsors/pytche_601x203.png",
        url: "http://pytche.org"
      },
      {
        name: "Brivia",
        logo: "sponsors/brivia_2646x1482.jpg",
        url: "http://www.brivia.com.br"
      },
      {
        name: "Real Seguro Viagem",
        logo: "sponsors/realseguroviagem_150x150.jpg",
        url: "https://www.seguroviagem.srv.br"
      },
      {
        name: "QueFo.me",
        logo: "sponsors/quefome_1800x1350.png",
        url: "http://quefo.me"
      },
      {
        name: "getup",
        logo: "sponsors/getup_203x117.png",
        url: "http://getupcloud.com"
      },
      {
        name: "ThoughtWorks",
        logo: "sponsors/thoughtworks_1198x333.jpg",
        url: "http://www.thoughtworks.com/pt/"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Universidade Feevale",
        logo: "partners/feevale_150x150.jpg",
        url: "http://feevale.br"
      },
      {
        name: "DAC Feevale",
        logo: "partners/dac_150x150.jpg",
        url: "http://dac-feevale.com.br"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};