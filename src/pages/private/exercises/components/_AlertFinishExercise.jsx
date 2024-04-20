import * as AlertDialog from "@radix-ui/react-alert-dialog";

export const AlertFinishExercise = () => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button
          className="flex items-center bg-[#144BC8] text-white gap-3 rounded-lg
            hover:bg-[#144ac837]  px-6 py-2 transition-colors duration-300 hover:text-[#144BC8]
              font-medium text-base
            "
        >
          Finalizar exercício
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-[#4242428F] data-[state=open]:animate-overlayShow fixed inset-0 z-20" />
        <AlertDialog.Content
          className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%]
         max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] 
         bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] 
         focus:outline-none z-30 flex flex-col items-center"
        >
          <AlertDialog.Title className="m-0 text-2xl font-semibold">
            Finalizar exercício
          </AlertDialog.Title>
          <AlertDialog.Description className="text-[#424242] text-center leading-6 mt-4 mb-5 text-[15px]">
            Antes de finalizar e conferir seu desempenho, que tal dar uma última
            revisada nas respostas? Você pode refazer o exercício quantas vezes
            quiser!
          </AlertDialog.Description>
          <div className="flex justify-end gap-[25px]">
            <AlertDialog.Cancel asChild>
              <button
                className="flex items-center bg-transparent text-[#144BC8] rounded-lg
                hover:bg-[#144ac837]  px-6 py-2 transition-colors duration-300 
                  font-medium text-base"
              >
                Revisar respostas
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                className="flex items-center bg-[#144BC8] text-white  rounded-lg
            hover:bg-[#144ac837]  px-6 py-2 transition-colors duration-300 hover:text-[#144BC8]
              font-medium text-base"
              >
                Finalizar exercício
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
