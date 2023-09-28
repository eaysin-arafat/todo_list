import { useState } from "react";

const Priority = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Priority");

  return (
    <div className="relative w-16">
      <div
        onClick={() => setIsActive(!isActive)}
        className="cursor-pointer relative text-center"
      >
        {selected}
      </div>
      <ul
        className={`absolute flex left-[-23px] w-[105px] flex-col mt-2 bg-white border-[.5px] border-gray-300 rounded-md ${
          isActive === true ? "block" : "hidden"
        }`}
      >
        <li
          onClick={(e) => {
            setIsSelected(e.target.textContent);
            setIsActive(!isActive);
          }}
          className="hover:bg-[#eee0e0] py-1 px-5 cursor-pointer"
        >
          Priority 01
        </li>
        <li
          onClick={(e) => {
            setIsSelected(e.target.textContent);
            setIsActive(!isActive);
          }}
          className="hover:bg-[#eee0e0] py-1 px-5 cursor-pointer"
        >
          Priority 02
        </li>
        <li
          onClick={(e) => {
            setIsSelected(e.target.textContent);
            setIsActive(!isActive);
          }}
          className="hover:bg-[#eee0e0] py-1 px-5 cursor-pointer"
        >
          Priority 03
        </li>
        <li
          onClick={(e) => {
            setIsSelected(e.target.textContent);
            setIsActive(!isActive);
          }}
          className="hover:bg-[#eee0e0] py-1 px-5 cursor-pointer pb-2"
        >
          Priority 04
        </li>
      </ul>
    </div>
  );
};

export default Priority;

// import React, { useEffect, useState } from "react";
// import { BiChevronDown } from "react-icons/bi";
// import { AiOutlineSearch } from "react-icons/ai";

// const Selector = () => {
//   const [countries, setCountries] = useState(null);
//   const [inputValue, setInputValue] = useState("");
//   const [selected, setSelected] = useState("");
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     fetch("https://restcountries.com/v2/all?fields=name")
//       .then((res) => res.json())
//       .then((data) => {
//         setCountries(data);
//       });
//   }, []);

//   return (
//     <div className="w-72 font-medium h-80">
//       <div
//         onClick={() => setOpen(!open)}
//         className={`bg-white w-full p-2 flex items-center justify-between rounded ${
//           !selected && "text-gray-700"
//         }`}
//       >
//         {selected
//           ? selected?.length > 25
//             ? selected?.substring(0, 25) + "..."
//             : selected
//           : "Select Country"}
//         <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
//       </div>
//       <ul
//         className={`bg-white mt-2 overflow-y-auto ${
//           open ? "max-h-60" : "max-h-0"
//         } `}
//       >
//         <div className="flex items-center px-2 sticky top-0 bg-white">
//           <AiOutlineSearch size={18} className="text-gray-700" />
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value.toLowerCase())}
//             placeholder="Enter country name"
//             className="placeholder:text-gray-700 p-2 outline-none"
//           />
//         </div>
//         {countries?.map((country) => (
//           <li
//             key={country?.name}
//             className={`p-2 text-sm hover:bg-sky-600 hover:text-white
//             ${
//               country?.name?.toLowerCase() === selected?.toLowerCase() &&
//               "bg-sky-600 text-white"
//             }
//             ${
//               country?.name?.toLowerCase().startsWith(inputValue)
//                 ? "block"
//                 : "hidden"
//             }`}
//             onClick={() => {
//               if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
//                 setSelected(country?.name);
//                 setOpen(false);
//                 setInputValue("");
//               }
//             }}
//           >
//             {country?.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Selector;
