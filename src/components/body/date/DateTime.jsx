/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { monthNames } from "./consts";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { GoCircle } from "react-icons/go";
import { BsFillSunFill } from "react-icons/bs";
import { MdOutlineNextWeek, MdOutlineWeekend } from "react-icons/md";
import { CgUnavailable } from "react-icons/cg";
import { AiTwotoneClockCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../../features/todos/todosSlice";

const DateTime = ({
  todos,
  setCurrentYear,
  setCurrentMonth,
  currentYear,
  currentMonth,
  dates,
  getSortedDays,
  open,
  setOpen,
}) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [applyCss, setApplyCss] = useState(false);

  const dispatch = useDispatch();
  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  };

  const currMonth = () => {
    setCurrentMonth(new Date().getMonth());
    setCurrentYear(new Date().getFullYear());
  };

  const prevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  };

  const disabled = currentMonth === new Date().getMonth();

  useEffect(() => {
    if (selectedDate !== "") {
      dispatch(
        updateTodo({ id: todos.id, data: { ...todos, endDate: selectedDate } })
      );
      // setOpen(!open);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate, open]);

  const handleSelection = (date) => {
    if (date) {
      const data = new Date(currentYear, currentMonth, date);
      setSelectedDate(data.toString());
      setApplyCss(true);
    }
  };

  const getWeekName = (n = 0) => {
    const currDate = new Date();

    const nextDate = new Date(currDate);
    nextDate.setDate(currDate.getDate() + n);

    const options = { weekday: "short" };
    const locale = "en-US";

    const nextDaysOfWeekName = nextDate.toLocaleDateString(locale, options);
    return nextDaysOfWeekName;
  };

  // const getTimeFromState = (_day) => {
  //   return new Date(currentYear, currentMonth, _day).getTime();
  // };

  return (
    <section className="w-56 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white rounded-md my-2 pt-1">
      <div className="mb-2">
        <div className="px-2 flex flex-col gap-3 pb-2 text-sm border-b border-gray-200">
          <p className="font-semibold">
            {monthNames[new Date(todos.endDate).getMonth()]
              ? monthNames[new Date(todos.endDate).getMonth()]
              : monthNames[new Date(selectedDate).getMonth()]}{" "}
            {new Date(todos.endDate).getDate()
              ? new Date(todos.endDate).getDate()
              : new Date(selectedDate).getDate()}
          </p>

          <p
            className="flex items-center justify-between mr-5 cursor-pointer"
            onClick={dispatch(
              updateTodo({
                id: todos.id,
                data: { ...todos, endDate: new Date() },
              })
            )}
          >
            <div className="flex items-center gap-2 font-semibold">
              <span className="h-[17px] w-[16px] rounded-sm text-[12px] text-green-600 flex items-center justify-center border border-green-600">
                {new Date().getDate()}
              </span>
              Today
            </div>
            <div className="text text-gray-400 font-[400]">{getWeekName()}</div>
          </p>

          <p className="flex items-center justify-between mr-5 cursor-pointer">
            <div className="flex items-center gap-2 font-semibold">
              <BsFillSunFill className="text-yellow-400" /> Tomorrow
            </div>
            <div className="text text-gray-400 font-[400]">
              {getWeekName(1)}
            </div>
          </p>
          <p className="flex items-center gap-2 cursor-pointer font-semibold">
            <MdOutlineWeekend className="text-green-700" /> Next weekend
          </p>
          <p className="flex items-center gap-2 cursor-pointer font-semibold">
            <MdOutlineNextWeek className="text-purple-600" /> Next week
          </p>
          <p className="flex items-center gap-2 cursor-pointer font-semibold">
            <CgUnavailable /> No Date
          </p>
        </div>

        <div className="flex items-center justify-between mb-1 p-2 text-sm border-b border-gray-200">
          <h1 className="font-bold ">
            {monthNames[currentMonth]} <span>{currentYear}</span>
          </h1>
          <div className={`flex gap-3`}>
            <button
              className={`${disabled && "opacity-40"}`}
              onClick={prevMonth}
              disabled={disabled}
            >
              <IoIosArrowBack />
            </button>
            <button onClick={currMonth}>
              <GoCircle size={12} />
            </button>
            <button onClick={nextMonth}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-3 p-2 font-semibold text-[12px]">
          {getSortedDays(currentYear, currentMonth).map((day, index) => (
            <p
              className="h-6 w-6 flex flex-col justify-center items-center"
              key={index}
            >
              {day}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-3 place-content-center p-2 border-y border-gray-200">
          {dates.map((date, index) => {
            const isSelectedDate =
              new Date(selectedDate)?.getTime() ===
              new Date(currentYear, currentMonth, date).getTime();
            const isTodosEndDate =
              new Date(todos?.endDate).getTime() ===
              new Date(currentYear, currentMonth, date).getTime();
            const isCurrentDate =
              new Date().getDate() ===
                new Date(currentYear, currentMonth, date).getDate() &&
              new Date().getMonth() ===
                new Date(currentYear, currentMonth, date).getMonth();

            const disableDesign =
              new Date().getTime() >
              new Date(currentYear, currentMonth, date + 1).getTime()
                ? "text-gray-300 cursor-not-allowed"
                : "";

            let className = `cursor-pointer h-[25px] w-[25px] flex flex-col justify-center items-center text-[13px] ${disableDesign}`;

            if (isSelectedDate) {
              className += " bg-red-500 rounded-full text-white";
            } else if (isTodosEndDate) {
              className += " bg-blue-500 rounded-full text-white";
            }

            return (
              <div
                className={className}
                key={index}
                id="day"
                onClick={() => handleSelection(date)}
              >
                {date}
                {isSelectedDate || isTodosEndDate ? (
                  <span
                    className={`h-[4px] w-[4px] bg-white rounded-full `}
                  ></span>
                ) : null}
                {isCurrentDate && (
                  <span
                    className={` ${
                      !applyCss && "h-[4px] w-[4px] bg-black rounded-full"
                    } `}
                  ></span>
                )}
              </div>
            );
          })}
        </div>

        <div className="border border-gray-200 cursor-pointer  rounded-md p-1">
          <div className="flex justify-center items-center gap-2 text-base font-semibold">
            <AiTwotoneClockCircle />
            <button>Time</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DateTime;
