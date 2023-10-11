/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { MdOutlineEmergency } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../features/todos/todosSlice";

const Priority = ({ selected, setIsSelected, positionCss, todos }) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      ...todos,
      priority: selected,
    };
    dispatch(updateTodo({ id: todos.id, data }));
  }, [selected]);

  // const handlePriorityUpdate = () => {
  //   // setIsSelected("");
  // };

  return (
    <div className="relative w-fit">
      <div
        onClick={() => setIsActive(!isActive)}
        className="cursor-pointer relative text-center"
      >
        {selected}
      </div>
      <ul
        className={`${positionCss} absolute flex justify-center items-center text-sm w-[120px] flex-col mt-2 bg-white border-[1px] border-gray-300 rounded-md ${
          isActive === true ? "block" : "hidden"
        }`}
        onChange={() => {
          setIsSelected(selected);
        }}
        value={selected}
      >
        <li
          onClick={() => {
            setIsSelected("P1");
            setIsActive(!isActive);
            // handlePriorityUpdate();
          }}
          className="hover:bg-[#eee0e0] py-1 cursor-pointer w-full text-center flex items-center justify-center gap-4"
        >
          <MdOutlineEmergency className="text-red-600" />
          Priority 01
        </li>
        <li
          onClick={() => {
            setIsSelected("P2");
            setIsActive(!isActive);
            // handlePriorityUpdate();
          }}
          className="hover:bg-[#eee0e0] py-1 cursor-pointer w-full text-center flex items-center justify-center gap-4"
        >
          <MdOutlineEmergency className="text-orange-400" />
          Priority 02
        </li>
        <li
          onClick={() => {
            setIsSelected("P3");
            setIsActive(!isActive);
            // handlePriorityUpdate();
          }}
          className="hover:bg-[#eee0e0] py-1 cursor-pointer w-full text-center flex items-center justify-center gap-4"
        >
          <MdOutlineEmergency className="text-lime-600" />
          Priority 03
        </li>
        <li
          onClick={() => {
            setIsSelected("P4");
            setIsActive(!isActive);
            // handlePriorityUpdate();
          }}
          className="hover:bg-[#eee0e0] py-1 cursor-pointer w-full text-center flex items-center justify-center gap-4 pb-2"
        >
          <MdOutlineEmergency className="text-gray-600" />
          Priority 04
        </li>
      </ul>
    </div>
  );
};

export default Priority;
