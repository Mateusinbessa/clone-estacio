import { useExerciseData, useUtil } from "src/hooks";
import { QuestionCardOptions } from "./_QuestionCardOptions";
import {
  toggleQuestionForReview,
  toggleSelectItem,
} from "src/reducers/exercises/exerciseSlice";
import { Button } from "./_Button";

const QuestionCard = ({ alternativeData, questionNumber }) => {
  const { description, alternatives, selectedAnswer, isMarkedForReview } =
    alternativeData;

  const { dispatch } = useExerciseData();
  const { cn } = useUtil();

  return (
    <div className="w-full h-full  flex flex-col gap-10">
      <div className="w-full flex flex-col bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center ">
          <div
            className="w-8 h-8 border border-[#E0E0E0] flex items-center justify-center rounded-lg
               bg-[#F5F5F5] "
          >
            <span
              className={cn(
                "font-normal text-base relative",
                isMarkedForReview &&
                  `after:content-[''] after:w-2 after:h-2 after:bg-black 
                  after:absolute after:-top-2 after:left-1/2 after:-translate-x-1/2 after:rounded-full
                   `
              )}
            >
              {questionNumber}
            </span>
          </div>
          <button
            onClick={() =>
              dispatch(
                toggleQuestionForReview({ questionId: alternativeData.id })
              )
            }
            className="px-3 py-1 border-2 border-black rounded-full
         hover:bg-[#E0E0E0] group relative "
          >
            <span>Marcar para revisão</span>
            <div
              className="absolute whitespace-nowrap bg-[#424242] 
          right-[104%] rounded-lg top-1/2 -translate-y-1/2 p-4 text-white 
          group-hover:block hidden transition-all duration-150
          "
            >
              Marcar questão para revisar antes de finalizar
            </div>
          </button>
        </div>
        <p className="mt-6 text-[#121212]">{description}</p>
        <div className="mt-6 w-full flex flex-wrap gap-4">
          {/* {alternatives.map((alternative, index) => (
            <QuestionCardOptions
              description={alternative.description}
              index={index}
              isSelectedAnswer={alternative.id === selectedAnswer}
              onClick={() =>
                dispatch(
                  toggleSelectItem({
                    questionId: alternativeData.id,
                    answerId: alternative.id,
                  })
                )
              }
              key={alternative.id}
            />
          ))} */}
          <Button>adofandof</Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;

export { QuestionCard };
