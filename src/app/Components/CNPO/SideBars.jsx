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
///////////////////
// export default SideBars;
// const SideBars = ({ todos }) => {
//   return (
//     <div className="lg:w-fit w-full flex flex-col gap-[20px]">
//       {todos && todos.length > 0 ? (
//         todos.map((item) => (
//           <p
//             key={item.id}
//             className="border-b border-[#D7D7D7] pb-[20px] pr-[25px] text-white max-w-[305px]"
//           >
//             {item.title}
//           </p>
//         ))
//       ) : (
//         <p className="text-white">No Data Available</p>
//       )}
//     </div>
//   );
// };

// export default SideBars;
///////////////////
// "use client";
// import React, { useState, useEffect } from "react";

// const SideBars = ({ todos }) => {
//   // Set the active sidebar to the first item by default when data is available
//   const [activeSidebar, setActiveSidebar] = useState(null);

//   useEffect(() => {
//     if (todos && todos.length > 0 && activeSidebar === null) {
//       setActiveSidebar(todos[0].id);
//     }
//   }, [todos, activeSidebar]);

//   return (
//     <div className="lg:w-fit w-full flex flex-col gap-[20px]">
//       {todos && todos.length > 0 ? (
//         todos.map((item) => (
//           <p
//             key={item.id}
//             onClick={() => setActiveSidebar(item.id)}
//             className="cursor-pointer border-b pb-[20px] pr-[25px] max-w-[305px] transition-colors duration-300"
//             style={{
//               color:
//                 activeSidebar === item.id ? "#ffffff" : "rgba(255,255,255,0.4)",
//               borderBottomColor:
//                 activeSidebar === item.id
//                   ? "#D7D7D7"
//                   : "rgba(215,215,215,0.34)",
//             }}
//           >
//             {item.title}
//           </p>
//         ))
//       ) : (
//         <p className="text-white">No Data Available</p>
//       )}
//     </div>
//   );
// };

// export default SideBars;
///////////

// "use client";
// import React from "react";

// const SideBars = ({ todos, activeSidebar, setActiveSidebar }) => {
//   return (
//     <div className="lg:w-fit min-w-[305px] flex flex-col gap-[20px]">
//       {todos && todos.length > 0 ? (
//         todos.map((item) => {
//           // Only display the first two words of the title
//           const displayTitle = item.title.split(" ").slice(0, 2).join(" ");
//           return (
//             <p
//               key={item.id}
//               onClick={() => setActiveSidebar(item.id)}
//               className="cursor-pointer border-b pb-[20px] pr-[25px] max-w-[305px] transition-colors duration-300"
//               style={{
//                 color:
//                   activeSidebar === item.id
//                     ? "#ffffff"
//                     : "rgba(255,255,255,0.4)",
//                 borderBottomColor:
//                   activeSidebar === item.id
//                     ? "#D7D7D7"
//                     : "rgba(215,215,215,0.34)",
//               }}
//             >
//               {displayTitle}
//             </p>
//           );
//         })
//       ) : (
//         <p className="text-white">No Data Available</p>
//       )}
//     </div>
//   );
// };

// export default SideBars;

"use client";
import React from "react";

const SideBars = ({ todos, activeSidebar, setActiveSidebar }) => {
  return (
    <div className="lg:w-fit flex flex-col gap-[20px] w-full sm:min-w-[305px]">
      {todos && todos.length > 0 ? (
        todos.map((item) => {
          return (
            <p
              key={item.id}
              onClick={() => setActiveSidebar(item.id)}
              className="cursor-pointer border-b pb-[20px] pr-[25px] max-w-[305px] transition-colors duration-300"
              style={{
                color:
                  activeSidebar === item.id
                    ? "#ffffff"
                    : "rgba(255,255,255,0.4)",
                borderBottomColor:
                  activeSidebar === item.id
                    ? "#D7D7D7"
                    : "rgba(215,215,215,0.34)",
              }}
            >
              {item.title}
            </p>
          );
        })
      ) : (
        <p className="text-white">No Data Available</p>
      )}
    </div>
  );
};

export default SideBars;
