import { LuLoader2 } from "react-icons/lu";

interface ILoader {
  show?: boolean;
}

const Loader = ({ show }: ILoader) => {
  return show ? (
    <div className="absolute left-0 top-0 z-[99] grid h-full w-full place-items-center bg-slate-100/20 backdrop-blur-sm">
      <LuLoader2 className="animate-spin text-2xl" />
    </div>
  ) : null;
};

export default Loader;
