import { ArrowRight } from "lucide-react";

const ThemesList = ({ tema, title }) => {
  return (
    <div className="w-full flex flex-col cursor-pointer hover:bg-slate-100 p-4">
      <p>{tema}</p>
      <div className="flex justify-between">
        <p>{title}</p>
        <ArrowRight />
      </div>
    </div>
  );
};

export default ThemesList;
export { ThemesList };
