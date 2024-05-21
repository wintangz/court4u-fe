import { FaLocationDot } from "react-icons/fa6";

const ClubComponents = () => {
  return (
    <div className="row">
      <div className="w-[41%] flex">
        <div className="pr-5">
          <div className="w-24 h-24 border-2"></div>
        </div>
        <div className="pl-1 table-cell">
          <h3 className="mt-1 font-bold text-[#404040] leading-8">
            Trung tam the duc the thao
          </h3>
          <p className="text-[#999] flex">
            <FaLocationDot />
            Thu Duc
          </p>
          <button className="btn btn-outline text-blue-500">Favorite</button>
        </div>
      </div>
      <div className="w-[59%]"></div>
    </div>
  );
};

export default ClubComponents;
