import { useUtil } from "src/hooks";

export const AsideExercisesQuestionStatsRoot = ({ children, className }) => {
  const { cn } = useUtil();
  return <div className={cn("flex gap-2", className)}>{children}</div>;
};
