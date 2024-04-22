//Contants
import { themelist } from "src/constants";

//Components
import { ThemesList } from "src/components";
import { ArrowUpRight } from "lucide-react";
import { MoveUpRight } from "lucide-react";

const SubjectCatalog = () => {
  const progress = 50;
  return (
    <main className="min-h-screen max-container lg:pl-8 flex max-lg:flex-col">
      <div className="flex flex-col w-[35%] max-lg:w-full p-10">
        <div className="flex justify-between items-end gap-3 mb-2">
          <h1 className="text-3xl font-semibold">Exercícios</h1>
        </div>

        {/* Themes List */}
        <div className="border rounded-lg mt-4 p-4">
          {themelist.map((theme) => (
            <div key={theme.id} className="flex flex-col">
              <ThemesList tema={theme.tema} title={theme.title} />
              {theme.id === themelist.length ? null : (
                <hr className="border-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Painel principal */}
      <div
        className="p-10 flex flex-auto flex-col justify-start lg:rounded-tl-2xl
       bg-gray-100 border"
      >
        <header className="flex flex-col gap-2">
          <span className="text-sm font-normal">Disciplina</span>
          <h2 className="font-semibold text-2xl leading-tight">
            Estrutura de Dados
          </h2>
        </header>
        <div className="flex flex-col my-8 gap-2">
          <span className="text-sm font-normal">Exercícios (5)</span>
          <p className="text-base font-normal">
            Aqui você encontra os exercícios sobre os temas da disciplina para
            reforçar seu aprendizado e se preparar para as avaliações. Todos os
            exercícios são opcionais e não valem nota!
          </p>
        </div>
        <div className="h-full w-full grid grid-cols-1 lg-2:grid-cols-2 gap-4 ">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              className="px-6 py-4 w-full bg-white border rounded-lg border-[#A3A3A3]
           hover:border-[#144BC8] h-fit flex flex-col justify-between"
            >
              <h3 className="text-2xl font-bold leading-tight py-4">
                Tema 2 - Estruturas de Dados Heterogêneas
              </h3>
              <a
                href={"/auth/exercises"}
                className="bg-[#144BC8] flex items-center justify-center h-14
               text-white rounded-lg hover:bg-[#C2D4FF] hover:text-[#144BC8] 
               gap-2 transition-colors duration-300 mt-4   "
              >
                <MoveUpRight />
                <span className="text-base leading-tight font-semibold">
                  Fazer Exercícios
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SubjectCatalog;
export { SubjectCatalog };
