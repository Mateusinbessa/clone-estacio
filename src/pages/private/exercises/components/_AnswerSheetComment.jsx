export const AnswerSheetComment = ({ comment }) => {
  return (
    <div
      className="border border-[#e9e8e8] bg-[#f5f4f4] w-full 
  rounded-lg flex flex-col gap-1 p-4 "
    >
      <h4 className="font-bold leading-normal text-base">Gabarito Comentado</h4>
      <p className="font-normal leading-normal text-base">{comment}</p>
    </div>
  );
};
