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
