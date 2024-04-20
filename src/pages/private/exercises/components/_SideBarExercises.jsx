import { useMemo } from "react";

import { useExerciseData, useUtil } from "src/hooks";
import { AlertFinishExercise } from "./_AlertFinishExercise";

const SideBarExercises = () => {
  const { exerciseData } = useExerciseData();
  const { cn } = useUtil();

  const questionsCompleted = useMemo(() => {
    return exerciseData?.data?.questions?.reduce(
      (acc, crr) => {
        if (crr.selectedAnswer) {
          acc.completed += 1;
        } else {
          acc.notCompleted += 1;
        }
        return acc;
      },
      {
        completed: 0,
        notCompleted: 0,
      }
    );
  }, [exerciseData.data.questions]);

  return (
    <div className="w-full h-fit bg-white p-4 rounded-lg shadow-md sticky top-[100px] ">
      <h3 className="font-normal text-base ">
        Questão <strong className="text-xl font-bold ">1</strong> de 10
      </h3>
      <div className="my-4 w-full flex flex-wrap gap-2">
        {exerciseData?.data?.questions?.map((_, index) => (
          <div
            key={index}
            className={cn(
              `w-11 h-11 flex items-center justify-center rounded-lg
                   bg-[#F5F5F5]  cursor-pointer relative `,
              _?.selectedAnswer && "bg-[#C2D4FF] border-[#144BC8] border ",
              _?.isMarkedForReview &&
                `after:content-[''] after:w-2 after:h-2 after:bg-black 
                  after:absolute after:-top-1 after:left-1/2 after:-translate-x-1/2 after:rounded-full
                   `
            )}
          >
            <span className="font-normal text-base">{index + 1}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <p className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-[#144BC8] block mr-1" />
          Respondidas{" "}
          <strong className="font-bold">
            ({questionsCompleted?.completed})
          </strong>
        </p>
        <p className="flex items-center whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-[#E0E0E0] block mr-1" />
          Em branco{" "}
          <strong className="font-bold">
            ({questionsCompleted?.notCompleted})
          </strong>
        </p>
      </div>
      <div className="w-full h-[1px] my-4 bg-[#E0E0E0]"></div>

      <AlertFinishExercise />
    </div>
  );
};

export default SideBarExercises;

export { SideBarExercises };
