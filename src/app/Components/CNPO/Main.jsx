// import React from "react";
// import Card from "./Card";
// import TabLineHead from "../Heading/TabLineHead";
// import SideBars from "./SideBars";

// const Main = () => {
//   return (
//     <div className="flex lg:flex-row flex-col-reverse items-end max-w-[80vw] justify-between xl:gap-[205px] lg:gap-[60px] sm:gap-[40px]">
//       <SideBars />
//       <Card />
//     </div>
//   );
// };

// export default Main;
// import Card from "./Card";
// import SideBars from "./SideBars";

// const Main = ({ todos, acbtn }) => {
//   return (
//     <div className="flex lg:flex-row flex-col-reverse items-end justify-between xl:gap-[205px] lg:gap-[60px] sm:gap-[40px] gap-[20px]">
//       <SideBars todos={todos} />
//       <Card todos={todos} />
//     </div>
//   );
// };

// export default Main;

// import Card from "./Card";
// import SideBars from "./SideBars";

// const Main = ({ todos, acbtn, activeSidebar, setActiveSidebar }) => {
//   return (
//     <div className="flex lg:flex-row flex-col-reverse items-end justify-between xl:gap-[205px] lg:gap-[60px] sm:gap-[40px] gap-[20px]">
//       {/* Pass activeSidebar and setActiveSidebar to SideBars */}
//       <SideBars
//         todos={todos}
//         activeSidebar={activeSidebar}
//         setActiveSidebar={setActiveSidebar}
//       />
//       <Card todos={todos} activeSidebar={activeSidebar} />
//     </div>
//   );
// };

// export default Main;

import Card from "./Card";
import SideBars from "./SideBars";

const Main = ({ todos, acbtn, activeSidebar, setActiveSidebar }) => {
  return (
    <div className="flex lg:flex-row flex-col-reverse items-end justify-between xl:gap-[205px] lg:gap-[60px] sm:gap-[40px] gap-[20px]">
      <SideBars
        todos={todos}
        activeSidebar={activeSidebar}
        setActiveSidebar={setActiveSidebar}
      />
      <Card todos={todos} activeSidebar={activeSidebar} />
    </div>
  );
};

export default Main;
