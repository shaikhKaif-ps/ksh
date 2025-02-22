// import React from "react";

// const SideBars = () => {
//   return (
//     <div className="w-full flex flex-col gap-[20px] ">
//       <p className="border-b border-[#D7D7D7] pb-[20px] pr-[25px] text-white max-w-[305px]">
//         Creating opportunities for Kawasaki
//       </p>
//       <p className="border-b border-[#d7d7d7] text-[#d7d7d7] pb-[20px] pr-[25px] opacity-50 max-w-[305px]">
//         Creating opportunities for Kawasaki
//       </p>
//       <p className="border-b border-[#d7d7d7] text-[#d7d7d7] pb-[20px] pr-[25px] opacity-50 max-w-[305px]">
//         Creating opportunities for Kawasaki
//       </p>
//       <p className="border-b border-[#d7d7d7] text-[#d7d7d7] pb-[20px] pr-[25px] opacity-50 max-w-[305px] ">
//         Creating opportunities for Kawasaki
//       </p>
//     </div>
//   );
// };

// export default SideBars;

import React from "react";

const SideBars = ({ todos }) => {
  return (
    <div className="lg:w-fit w-full flex flex-col gap-[20px]">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <p
            key={todo.id}
            className="border-b border-[#D7D7D7] pb-[20px] pr-[25px] text-white max-w-[305px]"
          >
            {todo.title}
          </p>
        ))
      ) : (
        <p className="text-white opacity-50">No Data Available</p>
      )}
    </div>
  );
};

export default SideBars;
