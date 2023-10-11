/* eslint-disable react/prop-types */
const Complated = (props) => {
  const { todo, handleComplated } = props;
  return (
    <span
      className={`h-[18px] w-[18px] rounded-full border-[2px] mt-[5px] cursor-pointer  
  ${todo.priority === "P4" && ""} 
  ${todo.priority === "P3" && "border-lime-600"} 
  ${todo.priority === "P2" && "border-orange-400"}
  ${todo.priority === "P1" && "border-red-600"}`}
      onClick={handleComplated}
    ></span>
  );
};

export default Complated;
