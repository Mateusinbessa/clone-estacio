import { useParams } from "react-router-dom";
import {
  HeaderExercises,
  QuestionCard,
  SideBarExercises,
} from "src/pages/private/exercises/components/index";
import { dataAnswerSheet } from "./components/dataAnswerSheet";

export const AnswerSheet = () => {
  const { exerciseId } = useParams();

  console.log(dataAnswerSheet);

  return (
    <>
      <HeaderExercises />
      <main className="w-full min-h-screen py-8 px-4 lg:px-16 bg-[#F5F5F5]">
        <div
          className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-[1fr_18rem] 
        h-full lg:items-start lg:gap-8  max-w-[1200px] mx-auto"
        >
          <div className="space-y-8">
            {dataAnswerSheet?.data?.questions?.map((alternative, index) => (
              <QuestionCard
                alternativeData={alternative}
                key={alternative.id}
                questionNumber={index + 1}
              />
            ))}
          </div>

          <SideBarExercises isAnswerSheet />
        </div>
      </main>
    </>
  );
};

export default AnswerSheet;
