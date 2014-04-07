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
          title: "Quem é o Analista de Negócios, o que ele faz e como está o seu mercado",
          description: "Tradicionalmente as empresas alocam seus analistas de sistemas ou de requisitos para levantar com o cliente ou usuário as suas necessidades para então partir para o desenvolvimento. Aparecem então as reclamações do cliente: \"Pensei que isto estava subentendido!\" \"Não era isso que eu queria!\" O Analista de Negócios é a pessoa que não só levanta, mas capta do negócio a sua REAL necessidade para então oferecer a REAL solução. Ele não só anota os pedidos, mas busca conhecer o problema a fundo.",
          time: "21h00"
        }
      },
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
          title: "Empreendedorismo: amor e lucro!",
          description: "Por senso comum, as pessoas entendem que ou você faz o que ama ou ganha dinheiro. Numa breve apresentação autobiográfica gostaria de explicar como é possível conciliar ambições artísticas e pessoais com as ambições financeiras. Também quero expor algumas das preocupações que acredito que novos empreendedores devam ter em mente antes de formar um negócio; e como agir durante o crescimento do empreendimento e um pequeno toque sobre a hora de sair.",
          time: "20h00"
        }
      },
      {
        name: "Guilherme Mar",
        photo: "speakers/guilhermemar_240x240.jpg",
        bio: "Analista de sistemas no Terra Networks em Porto Alegre, bacharel em Ciência da Computação recém formado pela ULBRA Canoas, desenvolvedor web e entusiasta Software Livre há anos, já palestrou no FISL e vários Fóruns Tchêlinux, sendo neste segundo um dos responsáveis pelo Fórum de Porto Alegre. É fã do Guia dos Mochileiros das Galáxias e Sherlock Holmes.",
        link: {
          href: "https://twitter.com/guilhermemar",
          text: "@guilhermemar"
        },
        presentation: {
          title: "GNU/Linux, Software Livre e tudo mais",
          description: "Uma apresentação sobre o Mundo Software Livre: licenças, sistemas operacionais (GNU/Linux, Unix), interfaces gráficas, programas, instalação e comunidades. Descubra ainda as formas de ganhar dinheiro usando Software Livre.",
          time: "10h30"
        }
      },
      {
        name: "Guilherme Mar",
        photo: "speakers/guilhermemar_240x240.jpg",
        bio: "Analista de sistemas no Terra Networks em Porto Alegre, bacharel em Ciência da Computação recém formado pela ULBRA Canoas, desenvolvedor web e entusiasta Software Livre há anos, já palestrou no FISL e vários Fóruns Tchêlinux, sendo neste segundo um dos responsáveis pelo Fórum de Porto Alegre. É fã do Guia dos Mochileiros das Galáxias e Sherlock Holmes.",
        link: {
          href: "https://twitter.com/guilhermemar",
          text: "@guilhermemar"
        },
        presentation: {
          title: "JavaScript!",
          description: "Aprendendo JavaScript do melhor modo, programando. Irá se ver JavaScript de acordo com o nível da galera, podendo ser o básico até o avançado, só depende do público.",
          time: "13h00"
        }
      },
      {
        name: "Joao Mossmann",
        photo: "speakers/joaomossmann_160x160.jpg",
        bio: "Doutorando e membro do grupo de Pesquisa em Tecnologia Aplicada à Educação da UFRGS, Mestre em Ciência da Computação pela PUCRS – na linha de Realidade Virtual, Bacharel em Ciência da Computação pela Universidade Feevale.  Atua como docente nos cursos de Ciência da Computação e do Curso Superior de Tecnologia em Jogos Digitais. Tem experiência profissional na área de Ciência da Computação e desenvolvimento de Jogos Digitais. Na pesquisa científica, têm como principal objeto de estudo o desenvolvimento de Jogos Digitais e sua aplicação em diferentes contextos.",
        presentation: {
          title: "Laboratório de visualização e MoCap - aplicações, desafios e oportunidades. ",
          description: "Apresentar o novo laboratório visualização e captura de movimento constituído na Universidade Feevale . O laboratório conta com recursos para estereoscopia e captura de movimento. Em seguida, será demonstrado os resultados dos primeiros experimentos, bem com os desafios e oportunidades para os acadêmicos da computação.",
          time: "19h30"
        }
      },
      {
        name: "Juliano Fagundes",
        photo: "speakers/julianofagundes_500x500.jpg",
        bio: "Formado em Publicidade e Propaganda. Especialista em Comunicação Digital. Há 12 anos no mercado digital, planejei e criei para marcas líderes como Rio 2016, L'Oreal, TAM e Toyota. Atualmente, Diretor de Criação na Brivia, trabalhando para Braskem, Cetip, Midea Carrier, Ramarim, Weber Saint-Gobain e Vivo.",
        company: "Brivia",
        link: {
          href: "https://twitter.com/julianofagundes",
          text: "@julianofagundes"
        },
        presentation: {
          title: "Marcas em busca de uma causa: como chegar lá",
          description: "Num contexto de muitos meios e promessas para o consumidor, prevalecem as marcas com as quais nos identificamos. Mas chegar lá? Por onde começar?Vamos esclarecer o assunto através de uma abordagem prática sobre a busca pela verdade da marcas. O que é causa? Qual a importância para as marcas? Como fazer acontecer no dia a dia?",
          time: "19h00"
        }
      },
      {
        name: "Laercio Konzen",
        photo: "speakers/laerciokonzen_342x417.jpg",
        //bio: "",
        link: {
          href: "https://twitter.com/laerciokonzen",
          text: "@laerciokonzen"
        },
        presentation: {
          title: "Construa sua primeira aplicação Android em 2 horas",
          description: "A oficina tem como principal objetivo capacitar os participantes para desenvolver aplicações básicas para android, tendo uma visão símples e facilitada do uso de suas API's.",
          time: "19h30"
        }
      },
      {
        name: "Leandro Nunes",
        photo: "speakers/leandronunes_200x200.png",
        bio: "Possui graduação em Ciência da Computação e mestrado em Microeletrônica. Palestrante em diversos eventos de software livre tais como o Fórum Internacional de Software Livre e Tchêlinux. Atualmente trabalha como desenvolvedor em uma empresa multinacional de hardware e software utilizando Python como principal linguagem de programação.",
        company: "PyTchê",
        link: {
          href: "https://twitter.com/nunesleandro",
          text: "@nunesleandro"
        },
        presentation: {
          title: "Arduino+Python",
          description: "Essa palestra irá apresentar os conceitos básicos sobre o projeto Arduino e sua integração com a linguagem Python.",
          time: "13h00"
        }
      },
      {
        name: "Marta Leal",
        photo: "speakers/martaleal_256x256.jpg",
        bio: "Recruiter @ThoughtWorks",
        company: "ThoughtWorks",
        link: {
          href: "https://twitter.com/Leal_Marta",
          text: "@Leal_Marta"
        },
        presentation: {
          title: "Join Us",
          description: "ThoughtWorks: o que são metodologias ágeis, nosso processo e a nossa empresa.",
          time: "19h30"
        }
      },
      {
        name: "Marta Bez",
        photo: "speakers/martabez_250x250.jpg",
        bio: "Doutora em Informática na Educação pela UFRGS. Professora dos cursos de Ciência da Computação e Sistemas de Informações e do Mestrado em Indústria Criativa na Universidade Feevale. Coordenadora do CAS e participante ativa do LOA.",
        //company: "",
        //link: {
          //href: "",
          //text: ""
        //},
        presentation: {
          title: "Projetos de ensino: os casos CAS e LOA",
          description: "Os projetos de ensino são formas de integrar a pesquisa e o ensino, unindo forças de professores e alunos, com o objetivo de extrapolar o conhecimento adquirido em sala de aula. O objetivo é apresenta o CAS (Computação Aplicada a Saúde) e o LOA (Laboratório de Objetos de Aprendizagem). Estes são exemplos de projetos de ensino de sucesso, promovendo o aprendizado, integração, interdisciplinaridade e publicações.",
          time: "21h00"
        }
      },
      {
        name: "Marcelo do Amaral",
        photo: "speakers/marceloamaral_192x163.jpg",
        //bio: "",
        company: "Brivia",
        link: {
          href: "https://twitter.com/poucasola",
          text: "@poucasola"
        },
        presentation: {
          title: "Storytelling: Plataforma e Experiência",
          description: "Quando informação e tecnologia se tornam commodities, a próxima fronteira é a experiência. Para criar conexões emocionais com as pessoas, o conceito de storytelling tem se tornado cada vez mais presente e essencial na comunicação das marcas para dar coerência a proposta de valor e proporcionar experiências verdadeiras. Na palestra, entenderemos como plataformas de comunicação amparadas por dados estão proporcionando novas possibilidades através do storytelling.",
          time: "19h30"
        }
      },
      {
        name: "Mateus Caruccio",
        photo: "speakers/mateuscaruccio_250x250.jpg",
        bio: "Adotou OSS em 1997 e desde então não abre mão de um bom terminal. Atualmente CEO e desenvolvedor na GetupCloud.com, teve passagens por locais como Terra Networks, PUC-RS e T&T. Trocou C port Python à 5 anos e nunca mais abriu a man page do gcc.",
        company: "Getup",
        link: {
          href: "https://twitter.com/MateusCaruccio",
          text: "@MateusCaruccio"
        },
        presentation: {
          title: "OpenShift Origin Index - Python e Flask na prática",
          description: "Apresentarei brevemente a plataforma OpenShift Origin, um sistema para padronizar e acelerar o desenvolvimento e deploy de aplicações web escaláveis na nuvem. Como parte do projeto Open Source OpenShift Origin, mostrarei os componentes da plataforma e focarei no projeto OO-Index, que pretende ser um ponto centralizado de Quickstarts e Cartuchos (receitas prontas) para lançar aplicações de forma automatizada.\nMostro ainda como está estruturado o projeto e as tecnologias envolvidas (Python/Flask e NodeJS), bem como o uso do GitHub como uma ferramenta de moderação.",
          time: "13h50"
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
          title: "Trabalho Remoto com Vikings: ferramentas e macetes de muito longe",
          description: "Em quase dois anos trabalhando remotamente com suecos aprendemos algumas táticas para driblar as dificuldades do trabalho remoto em equipe, da diferença cultural e da comunicação com pessoas com um background tão diferente para chegarmos em um time muito unido e \"próximo\", apesar da distância e do fuso horário. Venha ver as manhas, nossos erros e acertos.",
          time: "13h00"
        }
      },
      {
        name: "Patrícia Bassani",
        photo: "speakers/patriciabassani_640x638.jpg",
        bio: "Professora dos cursos de Computação e do Programa de Pós-Graduação em Diversidade Cultural e Inclusão Social da Universidade Feevale.",
        //company: "",
        link: {
          href: "https://twitter.com/patriciab",
          text: "@patriciab"
        },
        presentation: {
          title: "Tablets na educação: aspectos técnicos",
          description: "O projeto Ensinar e Aprender em/na rede é desenvolvido na Escola de Aplicação Feevale e envolve o uso de tablets na sala de aula. O objetivo desta palestra é debater sobre as possibilidades e limitações relacionadas ao compartilhamento de tablets.",
          time: "18h00"
        }
      },
      {
        name: "Paulo Bender",
        photo: "speakers/paulobender_500x375.jpg",
        bio: "Desenvolvedor de software, entusiasta de metodologias ágeis, graduando em Ciência da Computação na Unisinos.\nProfissional com experiência em diversas áreas do desenvolvimento de software. Atuou como analista de negócios, analista de sistemas, desenvolvedor e liderou equipes de desenvolvedores.\nHoje se aventura no mundo das startups com o quefo.me.\nGeek, casado com uma bióloga, pai da Sofia e da Guiga. ",
        company: "QueFo.me",
        link: {
          href: "https://twitter.com/ileopoldes",
          text: "@ileopoldes"
        },
        presentation: {
          title: "Agile Game Kanban - Gerenciamento visual para gente grande",
          description: "O projeto Ensinar e Aprender em/na rede é desenvolvido na Escola de Aplicação Feevale e envolve o uso de tablets na sala de aula. O objetivo desta palestra é debater sobre as possibilidades e limitações relacionadas ao compartilhamento de tablets.",
          time: "10h00"
        }
      },
      {
        name: "Paulo Bender",
        photo: "speakers/paulobender_500x375.jpg",
        bio: "Desenvolvedor de software, entusiasta de metodologias ágeis, graduando em Ciência da Computação na Unisinos.\nProfissional com experiência em diversas áreas do desenvolvimento de software. Atuou como analista de negócios, analista de sistemas, desenvolvedor e liderou equipes de desenvolvedores.\nHoje se aventura no mundo das startups com o quefo.me.\nGeek, casado com uma bióloga, pai da Sofia e da Guiga. ",
        company: "QueFo.me",
        link: {
          href: "https://twitter.com/ileopoldes",
          text: "@ileopoldes"
        },
        presentation: {
          title: "TDD - Eu testo, tu testas e ele testa. Ou ao menos deveria ser assim :/",
          description: "Design dirigido por testes. Como garantir que os requisitos sejam atendidos e o processo de testes para desenvolvedores (Testes de unidade, TDD, Testes de aceitação).",
          time: "14h40"
        }
      },
      {
        name: "Regina Heidrich",
        photo: "speakers/reginaheidrich_435x421.jpg",
        //bio: "",
        //company: "",
        link: {
          href: "https://twitter.com/reginaheidrich",
          text: "@reginaheidrich"
        },
        presentation: {
          title: "Uma nova forma de interação: A utilização de Brain Computer Interface(BCI) por pessoas com paralisia cerebral e problemas motores",
          description: "A palestra  apresentará as possibilidades de interação através de uma tecnologia nova, de baixo custo e que permite que o usuário acesse o computador através de ondas cerebrais. Uma interface cérebro-computador (BCI), permite que uma pessoa possa transferir comandos a um computador diretamente. Em vez de utilizar um teclado, mouse ou outro dispositivo de entrada, o utilizador desta interface  simplesmente emite os comandos através de ondas cerebrais.",
          time: "19h30"
        }
      },
      {
        name: "Rodrigo Araujo",
        photo: "speakers/rodrigoaraujo_424x424.jpg",
        bio: "System Engineer na Brivia - Bacharelando em Gestão da Tecnologia da Informação. Há 7 anos atua em desenvolvimento web com foco em ASP 3.0, PHP, C#, MySQL e Javascript. Possui larga experiência em análise de projetos de sistemas e comunicação digital. Hoje atua como analista de sistemas e desenvolvedor nas plataformas .NET e PHP atendendo a clientes como Gerdau, Cetip, ThyssenKrupp, entre outros.",
        company: "Brivia",
        //link: {
          //href: "",
          //text: ""
        //},
        presentation: {
          title: "Internet das Coisas",
          description: "O crescimento do número de objetos conectados à internet nos próximos anos será enorme, e os pontos de contato entre os objetos, os dados e as pessoas também aumentarão exponencialmente. Essa palestra tem o objetivo de definir e esclarecer todos os principais conceitos e possíveis aplicações da internet das coisas, bem como trazer exemplos de produtos inteligentes que já estão entre nós, ou que em breve farão parte do nosso dia-a-dia.",
          time: "19h00"
        }
      },
      {
        name: "Sérgio Berlotto",
        photo: "speakers/sergioberlotto_200x200.jpg",
        bio: "Programador e usuário de linux desde 1999, atualmente programando em Python e Wordpress no Gabinete Digital do Governo do Estado do RS. Formado como Técnico em Proc. de Dados em Gravataí.",
        company: "PyTchê",
        link: {
          href: "https://twitter.com/berlottocdd",
          text: "@berlottocdd"
        },
        presentation: {
          title: "Introdução do framework Flask",
          description: "Conhecer o framework Flask, que é direcionado a programação para web com Python, saber como ele funciona e quais são suas peculiaridades.",
          time: "10h50"
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