import ClubComponents from "./ClubComponents";

const Clubs = () => {
  return (
    <div className="mt-20">
      <div className="py-5 bg-primary">
        <div className="px-4 mx-auto">
          <h2 className="block text-lg tracking-[0.4px] font-bold leading-6 text-[#404040] mt-5 mb-3">
            Find available time
          </h2>
          <div className="row">
            <div className="col-sm-2">
              <input className="bg-white"></input>
            </div>
          </div>
        </div>
      </div>
      <div className="block relative py-5">
        <div className="px-4 mx-auto">
          <div className="row">
            <div className="border-b-2 border-[#ebebeb]">
              <div className="p-4">
                <ClubComponents />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clubs;
