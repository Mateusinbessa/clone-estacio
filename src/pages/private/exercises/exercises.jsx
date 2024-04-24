import {
  HeaderExercises,
  QuestionCard,
} from "src/pages/private/exercises/components/index";
import { dataQuestions } from "./components/dataQuestions";
import { useEffect } from "react";
import { useExerciseData } from "src/hooks";
import {
  setCurrentExercise,
  toggleSelectItem,
} from "src/reducers/exercises/exerciseSlice";
import { QuestionCardOptions } from "./components/_QuestionCardOptions";

import { AsideExercises } from "./components/AsideExercises";
import { useMemo } from "react";

const Exercises = () => {
  const { exerciseData, dispatch } = useExerciseData();

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

  useEffect(() => {
    dispatch(setCurrentExercise(dataQuestions.data));
  }, []);

  return (
    <>
      <HeaderExercises themeExercise={exerciseData?.data?.theme?.name} />
      <main className="w-full min-h-screen py-8 px-4 lg:px-16 bg-[#F5F5F5]">
        <div
          className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-[1fr_18rem]
         h-full lg:items-start lg:gap-8  max-w-[1200px] mx-auto"
        >
          <div className="space-y-8">
            {exerciseData?.data?.questions?.map((question, index) => (
              <QuestionCard
                alternativeData={question}
                key={question.id}
                questionNumber={index + 1}
              >
                {question.alternatives.map((alternative, index) => {
                  return (
                    <QuestionCardOptions
                      description={alternative.description}
                      index={index}
                      isSelectedAnswer={
                        alternative.id === question.selectedAnswer
                      }
                      onClick={() =>
                        dispatch(
                          toggleSelectItem({
                            questionId: question.id,
                            answerId: alternative.id,
                          })
                        )
                      }
                      key={alternative.id}
                    />
                  );
                })}
              </QuestionCard>
            ))}
          </div>
          <AsideExercises.Root>
            <AsideExercises.Title />
            <AsideExercises.QuestionNumberRoot>
              {exerciseData?.data?.questions?.map((item, index) => (
                <AsideExercises.QuestionNumber
                  item={item}
                  index={index}
                  key={index}
                />
              ))}
            </AsideExercises.QuestionNumberRoot>
            <AsideExercises.QuestionStatsRoot>
              <AsideExercises.QuestionStats
                bulletColor="bg-[#144BC8]"
                number={questionsCompleted?.completed}
                status={"Respondidas"}
              />
              <AsideExercises.QuestionStats
                bulletColor="bg-[#E0E0E0]"
                number={questionsCompleted?.notCompleted}
                status={"Em branco"}
              />
            </AsideExercises.QuestionStatsRoot>
          </AsideExercises.Root>

          {/* <SideBarExercises /> */}
        </div>
      </main>
    </>
  );
};

export default Exercises;
