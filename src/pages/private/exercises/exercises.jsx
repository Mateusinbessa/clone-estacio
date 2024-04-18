import { HeaderExercises } from "./components/HeaderExercises";
import { QuestionCard } from "./components/QuestionCard";
import { SideBarExercises } from "./components/SideBarExercises";

const Exercises = () => {
  return (
    <div className="w-full">
      <HeaderExercises />
      <main className="w-full min-h-screen py-8 px-16 bg-[#F5F5F5]">
        <div className="grid grid-cols-[1fr_18rem] h-full items-start gap-8  max-w-[1200px] mx-auto">
          <QuestionCard />
          <SideBarExercises />
        </div>
      </main>
    </div>
  );
};

export default Exercises;
