const SideBarExercises = () => {
  return (
    <div className="w-full h-fit bg-white p-4 rounded-lg shadow-md  ">
      <h3 className="font-normal text-base ">
        Questão <strong className="text-xl font-bold ">1</strong> de 10
      </h3>
      <div className="my-4 w-full flex flex-wrap gap-2">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((item, index) => {
          return (
            <button
              key={index}
              className="w-11 h-11 flex items-center justify-center rounded-lg
                       bg-[#F5F5F5] hover:bg-[#E0E0E0] transition-colors"
            >
              <span className="font-normal text-base">{item}</span>
            </button>
          );
        })}
      </div>
      <div className="flex gap-2">
        <p className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-[#E0E0E0] block mr-1" />
          Respondidas <strong className="font-bold">(10)</strong>
        </p>
        <p className="flex items-center whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-[#E0E0E0] block mr-1" />
          Em branco <strong className="font-bold">(10)</strong>
        </p>
      </div>
      <div className="w-full h-[1px] my-4 bg-[#E0E0E0]"></div>
      <button
        className="flex items-center bg-[#144BC8] text-white gap-3 rounded-lg
            hover:bg-[#144ac837]  px-6 py-2 transition-colors duration-150 hover:text-[#144BC8]
              font-medium text-base
            "
      >
        <span>Finalizar exercício</span>
      </button>
    </div>
  );
};

export default SideBarExercises;

export { SideBarExercises };
