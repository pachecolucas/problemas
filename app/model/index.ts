export type Grupo = {
  icone: string;
  letra: "A" | "B" | "C";
  /** Identificação do grupo (cluster) */
  nome: string;
  /** Descrição/percepção geral do grupo */
  descricao: string;
  /** Transtornos pertencentes ao grupo */
  transtornos: Transtorno[];
  cores: {
    escuro: string;
    forte: string;
    medio: string;
    claro: string;
  };
};

export type Transtorno = {
  icone: string;
  sigla: string;
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
  signo: {
    icone: string;
    nome: string;
    descricao: string;
  };
};
