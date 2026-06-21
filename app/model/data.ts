export type Transtorno = {
  /** Nome do transtorno de personalidade */
  nome: string;
  /** Resumo da característica central */
  descricao: string;
  /** Número mínimo de critérios exigidos para o diagnóstico */
  minimoCriterios: number;
  /** Lista de critérios diagnósticos (parafraseados) */
  criterios: string[];
  /** Mantido como entidade distinta no modelo alternativo do DSM-5 */
  modeloAlternativo: boolean;
};

export type Grupo = {
  /** Identificação do grupo (cluster) */
  nome: string;
  /** Descrição/percepção geral do grupo */
  descricao: string;
  /** Transtornos pertencentes ao grupo */
  transtornos: Transtorno[];
};

export const grupos: Grupo[] = [
  {
    nome: "Grupo A",
    descricao: "Vistos como esquisitos ou excêntricos",
    transtornos: [
      {
        nome: "Paranoide",
        descricao: "Desconfiança e suspeita pervasivas em relação aos outros, cujas motivações são interpretadas como malévolas.",
        minimoCriterios: 4,
        modeloAlternativo: false,
        criterios: [
          "Suspeita, sem base suficiente, de estar sendo explorado, prejudicado ou enganado pelos outros.",
          "Preocupação com dúvidas injustificadas sobre a lealdade ou confiabilidade de amigos e colegas.",
          "Relutância em fazer confidências por medo infundado de que a informação seja usada contra si.",
          "Interpreta significados ocultos, humilhantes ou ameaçadores em comentários ou eventos benignos.",
          "Guarda rancores de forma persistente, não perdoando insultos, ofensas ou desfeitas.",
          "Percebe ataques a seu caráter ou reputação não evidentes aos outros e reage com raiva ou contra-ataque.",
          "Suspeitas recorrentes e injustificadas quanto à fidelidade do cônjuge ou parceiro sexual.",
        ],
      },
      {
        nome: "Esquizoide",
        descricao: "Distanciamento das relações sociais e faixa restrita de expressão emocional em contextos interpessoais.",
        minimoCriterios: 4,
        modeloAlternativo: false,
        criterios: [
          "Não deseja nem desfruta de relações próximas, inclusive fazer parte de uma família.",
          "Quase sempre escolhe atividades solitárias.",
          "Pouco ou nenhum interesse em experiências sexuais com outra pessoa.",
          "Tem prazer em poucas atividades, se alguma.",
          "Não tem amigos próximos ou confidentes, além de parentes de primeiro grau.",
          "Mostra-se indiferente a elogios ou críticas dos outros.",
          "Demonstra frieza emocional, distanciamento ou afetividade embotada.",
        ],
      },
      {
        nome: "Esquizotípica",
        descricao: "Desconforto agudo nas relações íntimas, distorções cognitivas ou perceptivas e excentricidades de comportamento.",
        minimoCriterios: 5,
        modeloAlternativo: true,
        criterios: [
          "Ideias de referência (exceto delírios de referência).",
          'Crenças estranhas ou pensamento mágico que influencia o comportamento (superstições, clarividência, telepatia, "sexto sentido").',
          "Experiências perceptivas incomuns, incluindo ilusões corporais.",
          "Pensamento e discurso estranhos (vago, circunstancial, metafórico, superelaborado ou estereotipado).",
          "Desconfiança ou ideação paranoide.",
          "Afeto inadequado ou constrito.",
          "Comportamento ou aparência estranha, excêntrica ou peculiar.",
          "Ausência de amigos próximos ou confidentes, além de parentes de primeiro grau.",
          "Ansiedade social excessiva que não diminui com a familiaridade e está associada a temores paranoides, e não a julgamentos negativos sobre si.",
        ],
      },
    ],
  },
  {
    nome: "Grupo B",
    descricao: "Vistos como dramáticos, emotivos ou erráticos",
    transtornos: [
      {
        nome: "Antissocial",
        descricao: "Desrespeito e violação dos direitos dos outros, presentes desde os 15 anos de idade.",
        minimoCriterios: 3,
        modeloAlternativo: true,
        criterios: [
          "Fracasso em conformar-se às normas sociais e legais, com atos repetidos passíveis de detenção.",
          "Tendência à falsidade: mentir, usar nomes falsos ou ludibriar os outros para obter lucro ou prazer.",
          "Impulsividade ou fracasso em fazer planos para o futuro.",
          "Irritabilidade e agressividade, indicadas por brigas ou agressões físicas repetidas.",
          "Desrespeito imprudente pela própria segurança ou pela dos outros.",
          "Irresponsabilidade reiterada, com falha em manter trabalho ou honrar obrigações financeiras.",
          "Ausência de remorso, com indiferença ou racionalização após ferir, maltratar ou roubar.",
          "Requisitos adicionais: idade mínima de 18 anos e evidência de transtorno da conduta antes dos 15 anos.",
        ],
      },
      {
        nome: "Borderline",
        descricao: "Instabilidade nas relações interpessoais, na autoimagem e nos afetos, com impulsividade acentuada.",
        minimoCriterios: 5,
        modeloAlternativo: true,
        criterios: [
          "Esforços frenéticos para evitar abandono real ou imaginado.",
          "Padrão de relacionamentos instáveis e intensos, alternando entre idealização e desvalorização.",
          "Perturbação da identidade: autoimagem ou sentimento de si acentuada e persistentemente instável.",
          "Impulsividade em pelo menos duas áreas potencialmente autodestrutivas (gastos, sexo, substâncias, direção imprudente, compulsão alimentar).",
          "Recorrência de comportamento, gestos ou ameaças suicidas, ou de automutilação.",
          "Instabilidade afetiva por acentuada reatividade do humor (disforia, irritabilidade ou ansiedade episódica).",
          "Sentimentos crônicos de vazio.",
          "Raiva intensa e inadequada, ou dificuldade em controlá-la.",
          "Ideação paranoide transitória relacionada ao estresse, ou sintomas dissociativos graves.",
        ],
      },
      {
        nome: "Histriônica",
        descricao: "Emocionalidade e busca de atenção em excesso.",
        minimoCriterios: 5,
        modeloAlternativo: false,
        criterios: [
          "Desconforto em situações em que não é o centro das atenções.",
          "Interação frequentemente caracterizada por comportamento sexualmente sedutor ou provocante inadequado.",
          "Expressão emocional superficial e que muda rapidamente.",
          "Uso constante da aparência física para atrair a atenção.",
          "Estilo de discurso excessivamente impressionista e carente de detalhes.",
          "Autodramatização, teatralidade e expressão emocional exagerada.",
          "Sugestionabilidade: facilmente influenciado pelos outros ou pelas circunstâncias.",
          "Considera os relacionamentos mais íntimos do que realmente são.",
        ],
      },
      {
        nome: "Narcisista",
        descricao: "Grandiosidade, necessidade de admiração e falta de empatia.",
        minimoCriterios: 5,
        modeloAlternativo: true,
        criterios: [
          "Sentimento grandioso da própria importância (exagera realizações e talentos).",
          "Preocupação com fantasias de sucesso, poder, brilho, beleza ou amor ideal ilimitados.",
          'Crença de ser "especial" e único, que só pode ser compreendido ou conviver com pessoas ou instituições especiais.',
          "Necessidade de admiração excessiva.",
          "Sentimento de ter direito a tratamento especial ou à submissão automática de seus desejos.",
          "Exploração nas relações interpessoais, tirando proveito dos outros para atingir os próprios fins.",
          "Ausência de empatia: relutância em reconhecer ou identificar-se com sentimentos e necessidades alheias.",
          "Inveja frequente dos outros, ou crença de ser alvo da inveja deles.",
          "Comportamentos ou atitudes arrogantes e insolentes.",
        ],
      },
    ],
  },
  {
    nome: "Grupo C",
    descricao: "Vistos como ansiosos ou medrosos",
    transtornos: [
      {
        nome: "Evitativa",
        descricao: "Inibição social, sentimentos de inadequação e hipersensibilidade à avaliação negativa.",
        minimoCriterios: 4,
        modeloAlternativo: true,
        criterios: [
          "Evita atividades ocupacionais com contato interpessoal significativo por medo de crítica, desaprovação ou rejeição.",
          "Resistência a envolver-se com pessoas a menos que tenha certeza de ser querido.",
          "Reserva nas relações íntimas por medo de passar vergonha ou ser ridicularizado.",
          "Preocupação com a possibilidade de ser criticado ou rejeitado em situações sociais.",
          "Inibição em situações interpessoais novas devido a sentimentos de inadequação.",
          "Vê a si mesmo como socialmente inepto, sem atrativos pessoais ou inferior aos outros.",
          "Relutância incomum em assumir riscos pessoais ou novas atividades por medo de passar vergonha.",
        ],
      },
      {
        nome: "Dependente",
        descricao: "Comportamento submisso e apegado, ligado a uma necessidade excessiva de ser cuidado.",
        minimoCriterios: 5,
        modeloAlternativo: false,
        criterios: [
          "Dificuldade em tomar decisões cotidianas sem aconselhamento e reasseguramento excessivos dos outros.",
          "Necessidade de que outros assumam responsabilidade pela maior parte das áreas importantes da sua vida.",
          "Dificuldade em manifestar desacordo por medo de perder apoio ou aprovação.",
          "Dificuldade em iniciar projetos ou fazer coisas por conta própria, por falta de autoconfiança no próprio julgamento ou capacidade.",
          "Vai a extremos para obter carinho e apoio, a ponto de oferecer-se para tarefas desagradáveis.",
          "Sente desconforto ou desamparo quando só, por medo exagerado de não conseguir cuidar de si mesmo.",
          "Busca com urgência outro relacionamento como fonte de cuidado e amparo quando um termina.",
          "Preocupação irreal com o temor de ser deixado para cuidar de si mesmo.",
        ],
      },
      {
        nome: "Obsessivo-compulsivo",
        descricao: "Preocupação com ordem, perfeccionismo e controle, à custa de flexibilidade, abertura e eficiência.",
        minimoCriterios: 4,
        modeloAlternativo: true,
        criterios: [
          "Preocupação com detalhes, regras, listas, ordem, organização ou horários, a ponto de perder o objetivo principal da atividade.",
          "Perfeccionismo que interfere na conclusão de tarefas.",
          "Devoção excessiva ao trabalho e à produtividade, em detrimento do lazer e das amizades.",
          "Excesso de consciência, escrúpulo e inflexibilidade em questões de moral, ética ou valores.",
          "Incapacidade de descartar objetos usados ou inúteis, mesmo sem valor sentimental.",
          "Relutância em delegar tarefas ou trabalhar com outros, a menos que se submetam exatamente ao seu modo de fazer as coisas.",
          "Estilo avarento de gastar, com dinheiro visto como algo a ser acumulado para catástrofes futuras.",
          "Rigidez e teimosia.",
        ],
      },
    ],
  },
];

export default grupos;
