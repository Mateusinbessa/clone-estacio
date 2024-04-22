//Contants
import { themelist } from "src/constants";

//Components
import { CardTema } from "src/components";
import { PlansList } from "src/components";
import { ThemesList } from "src/components";
import { Progress } from "src/components";

//Icons
import { Info } from "lucide-react";

const Details = () => {
  const progress = 50;
  return (
    <main className="min-h-screen max-container padding-x flex max-lg:flex-col">
      <div className="flex flex-col w-[35%] max-lg:w-full p-10">
        {/* Disciplina */}
        <p className="text-slate-500">Disciplina</p>
        <div className="flex justify-between items-end gap-3 mb-2">
          <h1 className="text-3xl font-semibold">Estrutura de dados</h1>
          <Info />
        </div>
        <div className="flex justify-center items-center gap-3">
          <Progress value={50} />
          <p>{progress}%</p>
        </div>

        {/* Planos de Aula */}
        <div className="border rounded-lg mt-4 p-4">
          <PlansList plan="Plano de Aula" />
          <hr className="border-gray-300 mt-4" />
          <PlansList plan="Plano de Conteúdo" className="mt-4" />
        </div>

        {/* Themes List */}
        <div className="border rounded-lg mt-4 p-4">
          {themelist.map((theme) => (
            <div key={theme.id}>
              <div>
                <ThemesList tema={theme.tema} title={theme.title} />
              </div>
              {theme.id === themelist.length ? null : (
                <hr className="border-gray-300 " />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Painel principal */}
      <div className="p-10 flex flex-auto flex-col justify-start rounded-3xl bg-gray-100 border">
        <small>Tema 1</small>
        <p className="text-3xl font-semibold mb-10">Introdução</p>
        <CardTema title="Introdução a Estrutura de Dados" />
      </div>
    </main>
  );
};

export default Details;
