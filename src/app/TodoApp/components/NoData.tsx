interface INoData {
  show?: boolean;
}
const NoData = ({ show }: INoData) => {
  return show ? (
    <div className="grid h-full place-items-center text-center text-sm italic opacity-50">
      No todo at the moment
    </div>
  ) : null;
};

export default NoData;
