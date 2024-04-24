import { useUtil } from "src/hooks";

export const AsideExercisesQuestionStats = ({
  status,
  number,
  bulletColor,
}) => {
  const { cn } = useUtil();

  return (
    <p className="flex items-center">
      <span
        className={cn("w-2 h-2 rounded-full block mr-1 bg-black", bulletColor)}
      />
      {status}
      <strong className="font-bold">({number})</strong>
    </p>
  );
};

{
  /* <p className="flex items-center">
<span className="w-2 h-2 rounded-full bg-[#144BC8] block mr-1" />
Respondidas
<strong className="font-bold">
  ({questionsCompleted?.completed || 0})
</strong>
</p>
<p className="flex items-center whitespace-nowrap">
<span className="w-2 h-2 rounded-full bg-[#E0E0E0] block mr-1" />
Em branco
<strong className="font-bold">
  ({questionsCompleted?.notCompleted || 0})
</strong>
</p> */
}

// voltar aqui
