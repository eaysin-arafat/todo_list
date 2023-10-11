import { Fragment } from "react";
import getDayName from "../tamplate/timeInfo";
import { HiOutlineViewGridAdd } from "react-icons/hi";

const Today = () => {
  const timeInfo = getDayName();

  return (
    <Fragment>
      <div className="flex justify-between">
        <div className="flex gap-2 justify-center items-center">
          <h2 className="text-xl font-extrabold">Today</h2>
          <h1 className="text-sm text-gray-600 mt-1">
            {timeInfo.weekName.substring(0, 3)} {timeInfo.date}{" "}
            {timeInfo.month.substring(0, 3)}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineViewGridAdd className="text-gray-700 " />

          <h2 className="font-semibold">View</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default Today;
