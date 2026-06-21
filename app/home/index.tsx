import { Grupo, Transtorno } from "../model";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type Props = {
  grupos: Grupo[];
};
export default function Index({ grupos }: Props) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {grupos.map((g) => (
        <ComponenteGrupo key={g.letra} grupo={g} />
      ))}
    </div>
  );
}

function ComponenteGrupo({ grupo }: { grupo: Grupo }) {
  return (
    <div className="flex-1 flex flex-col gap-4 p-4 py-4" style={{ background: grupo.cores.forte }}>
      <div className="text-center" style={{ color: grupo.cores.claro }}>
        <div className="text-6xl mb-1">{grupo.icone}</div>
        <h1 className="uppercase font-black text-xl">{grupo.nome}</h1>
        <p>{grupo.descricao}</p>
      </div>
      {grupo.transtornos.map((t) => (
        <ComponenteTranstorno key={t.sigla} t={t} g={grupo} />
      ))}
    </div>
  );
}

function ComponenteTranstorno({ t, g }: { t: Transtorno; g: Grupo }) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="more" className="p-4 rounded-md" style={{ background: g.cores.claro }}>
        <AccordionTrigger className="text-center gap-4 hover:no-underline cursor-pointer flex items-center">
          <div>
            <div className="text-5xl">{t.icone}</div>
            <div className="text-xs font-semibold text-black/70">{t.sigla}</div>
          </div>
          <div className="text-left">
            <h2 className="font-black text-lg uppercase" style={{ color: g.cores.escuro }}>
              {t.nome}
            </h2>
            <p className="text-balance text-black/70">{t.descricao}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <div>
            <h3 className="font-semibold flex gap-1 mb-2">
              <span>Critérios</span>
              <span className="font-normal text-black/70">
                ({t.minimoCriterios} de {t.criterios.length})
              </span>
              <span>:</span>
            </h3>
            <ul className="ml-4 p-0 flex flex-col gap-2">
              {t.criterios.map((c, ci) => (
                <li key={ci} className="flex gap-2">
                  <span>●</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-balance flex gap-2 bg-white rounded shadow p-4">
            <div>{t.signo.icone}</div>
            <div>{t.signo.descricao}</div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
