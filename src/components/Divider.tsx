interface IDivider {
  className?: string;
}

const Divider = ({ className }: IDivider) => {
  return (
    <div className={`my-2 block h-[1px] bg-gray-200 ${className || ""}`} />
  );
};

export default Divider;
