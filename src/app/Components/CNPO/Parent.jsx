// // "use client";
// // import React, { useState, useEffect } from "react";
// // import Main from "./Main";
// // import TabLineHead from "../Heading/TabLineHead";

// // const Parent = () => {
// //   const [todos, setTodos] = useState([]);
// //   const [acbtn, setAcBtn] = useState(null);

// //   useEffect(() => {
// //     const fetchTodos = async () => {
// //       try {
// //         const response = await fetch(
// //           "https://jsonplaceholder.typicode.com/todos"
// //         );
// //         const data = await response.json();
// //         setTodos(data.slice(0, 4)); // Limit to first 4 items
// //       } catch (error) {
// //         console.error("Error fetching todos:", error);
// //       }
// //     };

// //     fetchTodos();
// //   }, []); // Empty dependency array ensures this runs once

// //   return (
// //     <div className="flex items-center justify-center max-w-[100vw] bg-[url(/spotlightbg.webp)] bg-cover bg-no-repeat bg-center">
// //       <div className="flex flex-col max-w-[80vw] py-[75px]">
// //         <TabLineHead acbtn={acbtn} setAcBtn={setAcBtn} heading={"Spotlight"} />
// //         <Main todos={todos} acbtn={acbtn} /> {/* Pass todos to Main */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Parent;

// // "use client";
// // import React, { useState, useEffect } from "react";
// // import Main from "./Main";
// // import TabLineHead from "../Heading/TabLineHead";

// // const Parent = () => {
// //   const [todos, setTodos] = useState([]);
// //   const [acbtn, setAcBtn] = useState("News"); // Default active tab

// //   const fetchTodos = async (tab) => {
// //     try {
// //       const response = await fetch(
// //         `https://jsonplaceholder.typicode.com/todos?_limit=4&_page=${Math.floor(
// //           Math.random() * 10 + 1
// //         )}`
// //       );
// //       const data = await response.json();
// //       setTodos(data);
// //     } catch (error) {
// //       console.error("Error fetching todos:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchTodos(acbtn); // Fetch default tab data on load
// //   }, [acbtn]);

// //   return (
// //     <div className="flex items-center justify-center max-w-[100vw] bg-[url(/spotlightbg.webp)] bg-cover bg-no-repeat bg-center h-fit lg:h-screen">
// //       <div className="flex flex-col justify-start max-w-[80vw] py-[75px]">
// //         <TabLineHead acbtn={acbtn} setAcBtn={setAcBtn} heading={"Spotlight"} />
// //         <Main todos={todos} acbtn={acbtn} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Parent;

// // ///////////////////////

// "use client";
// import React, { useState, useEffect } from "react";
// import Main from "./Main";
// import TabLineHead from "../Heading/TabLineHead";

// const Parent = () => {
//   const [todos, setTodos] = useState([]);
//   const [acbtn, setAcBtn] = useState("News"); // Default active tab

//   const fetchTodos = async (tab) => {
//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/todos?_limit=4&_page=${Math.floor(
//           Math.random() * 10 + 1
//         )}`
//       );
//       const data = await response.json();
//       setTodos(data);
//     } catch (error) {
//       console.error("Error fetching todos:", error);
//     }
//   };

//   useEffect(() => {
//     fetchTodos(acbtn); // Fetch default tab data on load
//   }, [acbtn]);

//   return (
//     <div className="flex items-center justify-center max-w-[100vw] h-fit bg-[url(/spotlightbg.webp)] bg-cover bg-no-repeat bg-center">
//       <div className="flex flex-col justify-start max-w-[80vw] w-full py-[75px] h-full">
//         <TabLineHead acbtn={acbtn} setAcBtn={setAcBtn} heading={"Spotlight"} />
//         {/* Flex container ensures consistent height */}
//         <div className="flex flex-col flex-grow min-h-[300px]">
//           <Main todos={todos} acbtn={acbtn} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Parent;

"use client";

import React, { useState } from "react";
import Main from "./Main";
import TabLineHead from "../Heading/TabLineHead";

const Parent = ({ initialTodos }) => {
  const [acbtn, setAcBtn] = useState("News");

  return (
    <div className="bg-[url(/spotlightbg.webp)] bg-cover bg-no-repeat bg-center">
      <div className="flex items-center justify-center fix12 h-fit">
        <div className="flex flex-col justify-start w-full py-[75px] h-full">
          <TabLineHead
            acbtn={acbtn}
            setAcBtn={setAcBtn}
            heading={"Spotlight"}
          />
          <div className="flex flex-col flex-grow min-h-[300px]">
            <Main todos={initialTodos} acbtn={acbtn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parent;
