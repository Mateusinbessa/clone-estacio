import {
  exerciseSlice,
  toggleSelectItem,
} from "src/reducers/exercises/exerciseSlice";
import { useExerciseData, useUtil } from "src/hooks";

export const QuestionCardOptions = ({
  isSelectedAnswer,
  description,
  index,
  id,
  questionId,
}) => {
  const options = (ind) => {
    switch (ind) {
      case 0:
        return "A";
      case 1:
        return "B";
      case 2:
        return "C";
      case 3:
        return "D";
      default:
        return "E";
    }
  };

  const { cn } = useUtil();

  const { dispatch } = useExerciseData();

  return (
    <button
      className={cn(
        `w-full rounded-lg flex gap-4 items-center p-3 border border-[#e9e8e8]  
        hover:bg-[#f5f4f4] group hover:border hover:border-black`,
        isSelectedAnswer &&
          "bg-[#C2D4FF] hover:border-[#144BC8] border-[#144BC8] hover:bg-[#C2D4FF] "
      )}
      onClick={() =>
        dispatch(
          toggleSelectItem({
            questionId: questionId,
            answerId: id,
          })
        )
      }
    >
      <span
        className={cn(
          `font-normal text-base min-h-8 max-h-8 min-w-8 max-w-8 flex items-center 
          justify-center bg-[#F5F5F5] rounded-full group-hover:bg-[#c2c2c2] 
        `,
          isSelectedAnswer && "bg-[#144BC8] group-hover:bg-[#144BC8] text-white"
        )}
      >
        {options(index)}
      </span>
      <p className="text-start text-[#121212]">{description}</p>
    </button>
  );
};
