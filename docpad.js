module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Semana ICET 2015",
      description: "Semana ICET Feevale 2015",
      date: "11, 13, 14 e 15 de abril",
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
        link: "http://www.feevale.br/Formularios/Formulario/semana-academica-icet-2015/identificacao"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    //forkButton: {
        //repository: "https://github.com/braziljs/conf-boilerplate"
    //},

    // Site info
    site: {
      theme: "feevale",
      url: "http://semanaicet.dac-feevale.com.br/",
      googleanalytics: "UA-49802220-2"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners'
      //'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "O que é a Semana Acadêmica?",
      location: "Localização",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Apoiadores",
      partners: "Parceiros",
      contact: "Contato"
    },

    days: [
        {
            day: "Sábado, 11 de abril",
            schedule: [
                {
                    name: "Daniel Dalalana",
                    photo: "speakers/danieldalalana_150x150.jpg",
                    bio: "Professor na Universidade Feevale e pesquisador da área de Segurança da Informação há 8 anos. Dentro da área atua principalmente nos temas de Teste de Invasão, Segurança Web e Auditoria de Sistemas.",
                    company: "Feevale",
                    link: {
                        href: "https://twitter.com/danieldalalana",
                        text: "@danieldalalana"
                    },
                    presentation: {
                        title: "Engenharia social técnica e o fator humano: Obtendo informações através da persuasão",
                        description: "A engenharia social é um método de ataque que utiliza-se das interações humanas para a obtenção de informações sensíveis. Por essa razão, este ataque é posicionado na etapa inicial de um processo de teste de invasão para que o maior número de informações possíveis sobre o alvo seja alcançado, auxiliando assim as etapas posteriores. Quer saber como coletar informações do seu alvo?",
                        time: "10h00"
                    }
                },
                {
                    name: "Paulo Diovani",
                    photo: "speakers/paulodiovani_230x230.jpg",
                    bio: " Desenvolvedor na Codeminer42 e acadêmico de Tecnologia em Sistemas para Internet pela Universidade Feevale.",
                    company: "Codeminer42",
                    link: {
                        href: "https://twitter.com/paulodiovani",
                        text: "@paulodiovani"
                    },
                    presentation: {
                        title: "Por que diabos vou usar Java?",
                        description: "Palestra sobre linguagens de programação modernas, com foco em desenvolvimento rápido, elegância e padrões para manter o código organizado e legível.",
                        time: "11h30"
                    }
                },
                {
                    name: "Matheus Azzi",
                    photo: "speakers/matheusazzi_222x222.jpg",
                    bio: "Developer na Codeminer42 e graduando em Ciência da Computação, trabalha com desenvolvimento web desde 2009",
                    company: "Codeminer42",
                    link: {
                        href: "http://matheusazzi.com/",
                        text: "matheusazzi.com"
                    },
                    presentation: {
                        title: "Iniciando com Ruby",
                        description: "Ruby é uma linguagem dinâmica, interpretada, orientada a objeto, open source com foco na simplicidade e na produtividade. Vamos ver os primeiros passos e alguns conceitos da linguagem.",
                        time: "12h30"
                    }
                },
                {
                    name: "Dante Zaupa",
                    photo: "speakers/dantezaupa_150x150.jpg",
                    bio: "",
                    company: "PyTchê",
                    link: {
                        href: "http://dzaupa.notapipe.org/",
                        text: "dzaupa.notapipe.org"
                    },
                    presentation: {
                        title: "Aprendendo Python na Prática",
                        description: "Oficina de introdução à linguagem Python 2.x, com foco em pessoas que conheçam programação mas ainda não tenham tido o prazer de ser apresentados a Python. Para reforçar o aprendizado, são feitos alguns exercícios.",
                        time: "13h30"
                    }
                },
                {
                    name: "Vinícius Palma",
                    photo: "speakers/viniciuspalma_220x220.jpg",
                    bio: "Tenho 19 anos, sou Front-ender a 2 anos. Trabalho na CodeMiner42, onde aplico todo o conhecimento em front em webapps.",
                    company: "Codeminer42",
                    link: {
                        href: "http://viniciuspalma.github.io/",
                        text: "viniciuspalma.github.io"
                    },
                    presentation: {
                        title: "Sass nos dias de hoje.",
                        description: "Sass é um pre-processador CSS, onde a forma de como vemos o CSS é alterado por meio de variáveis, funções e mixins. A proposta da palestra será apresentar a linguagem de forma objetiva, mostrando boas práticas com a linguagem e focando no melhor resultado final ou seja o output em CSS. Hoje como front-end na Codeminer42 já trabalhei em diversos projetos e todos estes projetos com Sass, não vejo o trabalho hoje sem o workflow do Sass.",
                        time: "13h30"
                    }
                },
                {
                    name: "Vinicius Almeida",
                    photo: "speakers/viniciusalmeida_220x220.jpg",
                    bio: "Programador Full Stack na Codeminer42.",
                    company: "Codeminer42",
                    link: {
                        href: "https://twitter.com/vimoding",
                        text: "@vimoding"
                    },
                    presentation: {
                        title: "Por que o Rails detona",
                        description: "Uma demonstração diferente sobre as causas do Rails ser considerado tão bacana. Fugindo do hello world (ou blog em 15 minutos) e passando para uma abordagem prática da ferramenta no dia-a-dia do desenvolvedor focando no tooling e workflow (inclusive de front-end).",
                        time: "14h30"
                    }
                },
                {
                    name: "Matias Leidemer",
                    photo: "speakers/matiasleidemer_640x640.jpg",
                    bio: "Programador desde 2005, passando desde Visual Basic até Oracle Forms. Se apaixonou quando conheceu Ruby em 2008, desde então, suas obsessões incluem desenvolver código limpo e de fácil manutenabilidade. Toma café, toma chimarrão e utiliza qualquer outra técnica aplicável para manter o foco e se manter produtivo.",
                    company: "Codeminer42",
                    link: {
                        href: "https://github.com/matiasleidemer",
                        text: "github.com/matiasleidemer"
                    },
                    presentation: {
                        title: "Test Driven Development usando Ruby",
                        description: "Nesta talk irei abordar as principais ferramentas e práticas de testes automatizados utilizando a linguagem Ruby. Como testes automatizados auxiliam na estruturação do código e como tais testes dão segurança necessária para realizar manutenções posteriores.",
                        time: "15h30"
                    }
                },
            ]
        },
        {
            day: "Terça, 14 de abril",
            schedule: [
                {
                    name: "Marcelo do Amaral",
                    photo: "speakers/marceloamaral_150x150.jpg",
                    bio: "",
                    company: "Brivia",
                    link: {
                        href: "https://twitter.com/poucasola",
                        text: "@poucasola"
                    },
                    presentation: {
                        title: "#WTF: planejamento inline",
                        description: "Planejamento em comunicação já não é mais um desafio apenas para comunicadores. Seja um pequeno empreendedor ou o gestor de uma grande companhia, todos estão imersos nos desafios da comunicação online/offline em busca de resultados e novos adoradores para suas marcas e modelos de negócio. Neste minicurso entenderemos como desenvolver repertório, briefing, gerar ideias e montar a estratégia de comunicação para pequeno(a)s, médio(a)s e grandes negócios e marcas em um ambiente de consumo de mídia inline.",
                        time: "18h30"
                    }
                },
                {
                    name: "Miguel Grazziotin",
                    photo: "speakers/miguelgrazziotin_256x256.jpg",
                    bio: "Desenvolvedor de software com a mesma impressão de que não sabe nada há quase 10 anos, trabalhando principalmente com Ruby, Javascript, web em geral e seus frameworks. Empolga-se fácil com novas tecnologias e paradigmas mas principalmente com diferentes pessoas, relacionamentos e pontos de vista. Ciclista, agilista, \"startupzista\" e aspirante a kungfuzero.",
                    company: "Real Seguro Viagem",
                    link: {
                        href: "https://twitter.com/Miguelgraz",
                        text: "@Miguelgraz"
                    },
                    presentation: {
                        title: "Introdução à Ruby, um coding dojo e uma API REST tudo ao mesmo tempo agora",
                        description: "Nessa oficina teremos uma pequenina introdução à linguagem Ruby, sua história, características e sintaxe, logo depois um hands-on em formato de coding dojo para desenvolver em tempo recorde uma API servindo JSON usando o micro framework Sinatra. O objetivo é proporcionar a todos uma experiência divertida com Ruby, testes unitários e um problema 'real', venha conhecer ou aperfeiçoar seus conhecimentos e de quebra ter seu próprio backend pronto!",
                        time: "18h30"
                    }
                },
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
                        time: "19h00"
                    }
                },
                {
                    name: "Laercio Konzen",
                    photo: "speakers/laerciokonzen_150x150.jpg",
                    //bio: "",
                    link: {
                        href: "https://twitter.com/laerciokonzen",
                        text: "@laerciokonzen"
                    },
                    presentation: {
                        title: "Construa um aplicativo para todas as plataformas, em 2 horas",
                        description: "Visando agilidade no desenvolvimento de aplicações mobile, será apresentada o framework Phonegap, o qual permite o desenvolvimento para multiplas plataformas à partir do uso de HTML, CSS e JavaScript. Em duas horas de 'mão na massa' será possível ter uma aplicação funcional e o conhecimento das mais variadas ferramentas para desenvolver a sua aplicação mobile. Recomendável conhecimento básico em desenvolvimento web (html, css e javascript)",
                        time: "19h30"
                    }
                },
                {
                    name: "Patrícia Bassani",
                    photo: "speakers/patriciabassani_640x638.jpg",
                    bio: "Professora dos cursos de Computação e do Programa de Pós-Graduação em Diversidade Cultural e Inclusão Social da Universidade Feevale.",
                    company: "Feevale",
                    link: {
                        href: "https://twitter.com/patriciab",
                        text: "@patriciab"
                    },
                    presentation: {
                        title: "Ferramentas de colaboração na web: análise da interação sob a perspectiva da presença social",
                        description: "Pesquisas recentes reconhecem que a presença social é um conceito importante na educação online. As definições de presença social na educação online tendem a envolver o grau no qual uma pessoa é percebida como sendo 'real' e como 'estando lá'. As interações fortalecem a presença social, caracterizada pelo potencial de participação, envolvimento e visibilidade dos sujeitos, em relação a si, aos outros e ao meio. Além disso, os estudos apontam que a presença social é considerada um princípio relevante no projeto da comunicação mediada por computador e um determinante importante na formação de comunidades virtuais de aprendizagem (CVA). Nesta perspectiva, entende-se que a seleção de ambientes virtuais e de ferramentas para subsidiar os processos de educação online devem possibilitar a interação ativa entre os sujeitos, a fim de potencializar a formação de CVA. Esta apresentação discute diferentes conceitos sobre a presença social e apresenta os resultados parciais de um modelo para a análise de ferramentas web 2.0 sob a perspectiva da presença social .",
                        time: "19h30"
                    }
                },
                {
                    name: "Cynthia Zanoni",
                    photo: "speakers/cynthiazanoni_500x500.jpg",
                    //bio: "",
                    company: "Think Digital",
                    link: {
                        href: "https://twitter.com/cynthia_zanoni",
                        text: "@cynthia_zanoni"
                    },
                    presentation: {
                        title: "WoMoz - envolva-se!",
                        description: "Women & Mozilla (WoMoz) é uma comunidade composta de membros de diversos projetos de software livre que dedicam-se principalmente a aumentar o envolvimento e a visibilidade de mulheres nesses projetos, em especial na Mozilla, e em aumentar o número de contribuidoras. Tecnologia deve ser aberta, livre e acessível da mesma forma para homens e mulheres. O projeto é um exemplo de como promover e dar visibilidade as minorias. Qualquer pessoa pode participar do WoMoz, não importa o gênero, orientação sexual, trabalho, etc. Nós acreditamos que o software livre precisa de mais mulheres!  Contribua conosco! ",
                        time: "20h00"
                    }
                },
                {
                    name: "Gabriel Hoff",
                    photo: "speakers/gabrielhoff_200x200.jpg",
                    bio: "Web developer no QueFo.me. Padawan de Git há 2 anos e desenvolvedor há 5 anos. Corredor, bicicleteiro e aspirante a aprendiz de lutador.",
                    company: "QueFo.me",
                    link: {
                        href: "https://twitter.com/gabriel_hof",
                        text: "@gabriel_hof"
                    },
                    presentation: {
                        title: "Restaurando o equilíbrio da Força com Git",
                        description: "Cansado de ter que ficar usando CTRL + Z para voltar as alterações do seu código fonte? Cansado de esquecer por que diabos você fez uma modificação no seu código há 1 mês atrás? Ou de não saber quem ou quando modificaram o código de um projeto da sua equipe? Você e seus colegas ficam compactando e enviando seu projeto por e-mail para compartilhá-lo? Então venha se tornar um Padawan de Git e restaure o equilíbrio da força!",
                        time: "20h30"
                    }
                },
                {
                    name: "Adriana Neves dos Reis",
                    photo: "speakers/adriananevesdosreis_165x165.jpg",
                    bio: "Professora da Feevale, atua como docente em cursos da área de informática e engenharia desde 2005, trabalhando principalmente nos seguintes temas: sistemas de informação, engenharia e qualidade de software, programação, e avaliação de desempenho de sistemas. Atualmente doutoranda em Engenharia de Produção e Sistemas, desenvolve pesquisas nas áreas de Controle Estatístico de Processos em Customização em Massa, Modelagem e Simulação de Agentes em contextos diversos, Gestão do Conhecimento em Sociotecnologia, e Gestão da Inovação e Mecanismos de Transferência Tecnológica.",
                    company: "Feevale",
                    link: {
                        href: "http://www.escavador.com/pessoas/7896095#academico",
                        text: "Formação"
                    },
                    presentation: {
                        title: "Do adoçante ao smartphone: entendendo a adoção de tecnologia com simulação computacional",
                        description: "A atividade se propõe a discutir modelos sociotécnicos de adoção tecnológica, e apresentar como ferramentas computacionais de simulação podem contribuir para o entendimento deste processo e, consequentemente, estabelecer estratégias de inserção de novas tecnologias no mercado.",
                        time: "19h30"
                    }
                },
            ]
        },
        {
            day: "Quarta, 15 de abril",
            schedule: [
                {
                    name: "Gabriel Engel",
                    photo: "speakers/gabrielengel_256x256.png",
                    bio: "Programador desde a era do Apple ][, formado em Administração, meio-pós-graduado em Gestão de Tecnologia. Co-fundador da Fande, Real Intercâmbio, Real Seguro Viagem, Assegura.me e por aí vai. Ainda que empreendedor, entusiasta da filosofia open-source e devoto a melhorar a qualidade de vida daqueles que estiverem por perto - principalmente através da educação.",
                    company: "Real Seguro Viagem",
                    link: {
                        href: "https://twitter.com/gabrielengel",
                        text: "@gabrielengel"
                    },
                    presentation: {
                        title: "Introdução a finanças pessoais: ou Como viver bem.",
                        description: "Começando carreira? Já pensou onde ela termina? Quanto tempo você quer trabalhar? Como você quer viver? Por quê você trabalha tanto?",
                        time: "18h30"
                    }
                },
                {
                    name: "Tânia Silva",
                    photo: "speakers/taniasilva_200x200.jpg",
                    bio: "Tania Silva é uma desenvolvedora que está sempre aprendendo. Filha de curso técnico e amiga íntima de pesquisas na internet, atualmente anda brincando com JavaScript, mas não importa a linguagem, o que manda é a lógica.",
                    company: "ThoughtWorks",
                    link: {
                        href: "https://br.linkedin.com/in/taniamarasilva",
                        text: "linkedin.com/in/taniamarasilva"
                    },
                    presentation: {
                        title: "TDD O Quê? Primeiros passos com TDD",
                        description: "TDD é uma metodologia de desenvolvimento de software onde seu código é direcionado pelos testes. Nessa palestra apresentarei o que é esta prática, como ela é utilizada e suas vantagens.",
                        time: "18h30"
                    }
                },
                {
                    name: "Marta Bez",
                    photo: "speakers/martabez_250x250.jpg",
                    bio: "Doutora em Informática na Educação pela UFRGS. Professora dos cursos de Ciência da Computação e Sistemas de Informações e do Mestrado em Indústria Criativa na Universidade Feevale. Coordenadora do CAS e participante ativa do LOA.",
                    company: "Feevale",
                    presentation: {
                        title: "Tecnologias na área da saúde",
                        description: "O encontro visa apresentar e discutir novas tecnologias aplicadas na área da saúde. Serão apresentados os trabalhos desenvolvidos pelo grupo CAS - Computação Aplicada a Saúde e possibilidades dos alunos se inserirem nesta área que está despontando como uma das mais promissoras em termos tecnológicos. Com a presença de Joao Mossmann e Anderson Schuh. ",
                        time: "19h30"
                    }
                },
                {
                    name: "Émerson Butzen",
                    photo: "speakers/emersonbutzen_370x470.jpg",
                    bio: "Émerson Butzen, é especialista em Controle e Automação (2014) e bacharel em Sistemas de Informação (2008) ambos pela Universidade Feevale, tem 20 anos de experiência em programação desde a linguagem Clipper e atua como professor universitário na FTEC e Assistente de Pesquisa I no Projeto Altus pela Unisinos.",
                    company: "Altus S.A",
                    link: {
                        href: "https://twitter.com/emersonbutzen",
                        text: "@emersonbutzen"
                    },
                    presentation: {
                        title: "Object Oriented For Dummies ou Orientação a Objetos para Leigos",
                        description: "Object Oriented For Dummies, aprenda a montar um modelo orientado a objetos em um dia, de forma prática e sem rodeios.",
                        time: "19h30"
                    }
                },
                {
                    name: "Bruno Konrad",
                    photo: "speakers/brunokonrad_500x500.jpg",
                    bio: "Estudo desde 2009, trabalho desde agosto de 2011 com desenvolvimento de software. Experiência em mobile e web, uso python em casa e raramente no trabalho formal. Estudei na Feevale de 2012 ate 2014.",
                    //company: "SAP",
                    link: {
                        href: "https://twitter.com/brunoskonrad",
                        text: "@brunoskonrad"
                    },
                    presentation: {
                        title: "Python: mais uma para a caixa de ferramentas",
                        description: "Apresentar Python, motivação da linguagem, características, introdução da sintaxe e onde e quando usar. Se possível usar o laboratório para ir testando durante a apresentação!",
                        time: "20h30"
                    }
                },
                {
                    name: "Bruno Leite",
                    photo: "speakers/brunoleite_195x195.jpg",
                    bio: "Desenvolvedor na Thoughtworks há 5 meses, formado pela Universidade Federal de Minas Gerais no curso de Ciência da Computação.",
                    company: "Thoughtworks",
                    link: {
                        href: "https://twitter.com/bleitea",
                        text: "@bleitea"
                    },
                    presentation: {
                        title: "Introdução a Java Persistence API",
                        description: "A palestra visa abordar conceitos básicos de ORM (Mapeamento Objeto Relacional) utilizando Java Persistence API, visa também ressaltar alguns conceitos básicos sobre Orientação a Objetos e desenvolvimento de software.",
                        time: "20h00"
                    }
                },
                {
                    name: "Marco Andrei Kichalowsky",
                    photo: "speakers/marcoandrei_200x200.jpg",
                    bio: "Bacharel em Informática pela PUCRS e MBA em Marketing pela ESPM. Empresário, blogueiro e professor. É especialista em Marketing Digital, com experiência de mais de 15 anos na área.",
                    company: "Ars Nova",
                    link: {
                        href: "https://twitter.com/marcoandrei",
                        text: "@marcoandrei"
                    },
                    presentation: {
                        title: "O papel dos profissionais de Informática no Marketing Digital",
                        description: "Voltada para estudantes de computação, esta palestra descreve o que é o Marketing Digital, suas principais ferramentas e as carreiras e caminhos na área para profissionais com perfil técnico.",
                        time: "19h00"
                    }
                },
                {
                    name: "Carolina Darski",
                    photo: "speakers/carolinadarski_640x640.jpg",
                    bio: "Especialista em desenvolvimento mobile e em computação na nuvem.",
                    company: "SAP",
                    link: {
                        href: "https://twitter.com/kdarski",
                        text: "@kdarski"
                    },
                    presentation: {
                        title: "Internet das coisas com SAP Hana Cloud",
                        //description: "",
                        time: "19h30"
                    }
                },
                {
                    name: "Augusto",
                    photo: "speakers/augusto_340x265.jpg",
                    bio: "Augusto é o coordenador do programa SAP Startup Focus para a região da América Latina. Jovem profissional e empreendedor, possui um título de Bacharel em Administração com ênfase em Gestão para Inovação e Liderança pela Unisinos (RS), ampla vivência internacional em países como Austrália, China e Coreia do Sul, e é um entusiasta dos temas de design thinking, lean startup e sistemas de inovação.",
                    company: "SAP",
                    presentation: {
                        title: "SAP Startup Focus: Acelerando Startups Brasileiras com SAP HANA™ ",
                        description: "Augusto é o coordenador do programa SAP Startup Focus para a região da América Latina. Jovem profissional e empreendedor, possui um título de Bacharel em Administração com ênfase em Gestão para Inovação e Liderança pela Unisinos (RS), ampla vivência internacional em países como Austrália, China e Coreia do Sul, e é um entusiasta dos temas de design thinking, lean startup e sistemas de inovação.",
                        time: "20h15"
                    }
                },
            ]
        }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Altus S.A",
        logo: "sponsors/altus_153x70.png",
        url: "http://www.altus.com.br/"
      },
      {
        name: "Ars Nova",
        logo: "sponsors/arsnovasolucoes_424x114.png",
        url: "http://arsnovasolucoes.com/"
      },
      {
        name: "PyTchê",
        logo: "sponsors/pytche_601x203.png",
        url: "http://pytche.org"
      },
      {
        name: "Brivia",
        logo: "sponsors/brivia_150x150.png",
        url: "http://www.brivia.com.br"
      },
      {
        name: "Real Seguro Viagem",
        logo: "sponsors/realseguroviagem_150x150.jpg",
        url: "https://www.seguroviagem.srv.br"
      },
      {
        name: "QueFo.me",
        logo: "sponsors/quefome_150x150.jpg",
        url: "http://quefo.me"
      },
      {
        name: "SAP",
        logo: "sponsors/sap_150x150.png",
        url: "http://www.sap.com/brazil/index.html"
      },
      {
        name: "Mozila Brasil",
        logo: "sponsors/mozilabrasil_215x235.png",
        url: "http://www.altus.com.br/"
      },
      {
        name: "ThoughtWorks",
        logo: "sponsors/thoughtworks_150x150.jpg",
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
