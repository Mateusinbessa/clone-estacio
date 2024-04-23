import {
  exerciseSlice,
  toggleSelectItem,
} from "src/reducers/exercises/exerciseSlice";
import { useExerciseData, useUtil } from "src/hooks";

export const QuestionCardOptions = ({
  isSelectedAnswer,
  description,
  index,
  onClick,
}) => {
  const { cn } = useUtil();

  return (
    <button
      className={cn(
        `w-full rounded-lg flex gap-4 items-center p-3 border border-[#e9e8e8]  
        hover:bg-[#f5f4f4] group hover:border hover:border-black`,
        isSelectedAnswer &&
          "bg-[#C2D4FF] hover:border-[#144BC8] border-[#144BC8] hover:bg-[#C2D4FF] "
      )}
      onClick={onClick}
    >
      <span
        className={cn(
          `font-normal text-base min-h-8 max-h-8 min-w-8 max-w-8 flex items-center 
          justify-center bg-[#F5F5F5] rounded-full group-hover:bg-[#c2c2c2] 
        `,
          isSelectedAnswer && "bg-[#144BC8] group-hover:bg-[#144BC8] text-white"
        )}
      >
        {String.fromCharCode(65 + index)}
      </span>
      <p className="text-start text-[#121212]">{description}</p>
    </button>
  );
};
