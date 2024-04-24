import { useUtil } from "src/hooks";

export const AsideExercisesQuestionNumber = ({
  item,
  index,
  isCorrectAnswer,
  wasSelectedAnswer,
  isAnswerSheetPage = false,
}) => {
  const { cn } = useUtil();

  return (
    <div
      key={index}
      className={cn(
        `w-11 h-11 flex items-center justify-center rounded-lg
                   bg-[#F5F5F5]  cursor-pointer relative border border-[#E0E0E0]`,
        item?.isMarkedForReview &&
          `after:content-[''] after:w-2 after:h-2 after:bg-black after:absolute
           after:-top-1 after:left-1/2 after:-translate-x-1/2 after:rounded-full
                  `,
        item?.selectedAnswer && "bg-[#C2D4FF] border-[#144BC8] border ",

        isCorrectAnswer &&
          wasSelectedAnswer &&
          "bg-[#cff2d8] border-[#1C662E] ",
        !isCorrectAnswer &&
          !wasSelectedAnswer &&
          isAnswerSheetPage &&
          "bg-[#FFDAD3] border-[#991700]"
      )}
    >
      <span className="font-normal text-base">{index + 1}</span>
    </div>
  );
};
