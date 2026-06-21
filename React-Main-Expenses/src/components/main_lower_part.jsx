import { useEffect, useRef, useState } from "react";

import DataBase from "./DataBase/data.json";

const Lower_part = () => {
  const [data, setData] = useState([]);

  const date = new Date();
  const today = date.getDay();
  const [realDay, setRealDay] = useState("");

  const ElementsRef = useRef([]);

  const [whichElement, setWhichElement] = useState("");

  const contentOfExpenses = useRef([]);

  useEffect(() => {
    ElementsRef.current.forEach((element, index) => {
      element.addEventListener("mouseenter", () => {
        setWhichElement(element);
        contentOfExpenses.current[index].classList.remove("opacity-0");
        if (
          element.classList.contains("bg-[hsl(186,34%,65%)]") &&
          element.classList.contains("real_day")
        ) {
          element.classList.remove("bg-[hsl(186,34%,65%)]");
          element.classList.add("bg-[hsla(186,34%,65%,0.5)]");
        } else {
          element.classList.remove("bg-[hsl(10,79%,65%)]");
          element.classList.add("bg-[hsla(10,79%,65%,0.5)]");
        }
      });

      element.addEventListener("mouseleave", () => {
        contentOfExpenses.current[index].classList.add("opacity-0");
        if (element.classList.contains("real_day")) {
          element.classList.remove("bg-[hsla(186,34%,65%,0.5)]");
          element.classList.add("bg-[hsl(186,34%,65%)]");
        } else {
          element.classList.remove("bg-[hsla(10,79%,65%,0.5)]");
          element.classList.add("bg-[hsl(10,79%,65%)]");
        }
      });
    });
  }, [data, ElementsRef]);

  useEffect(() => {
    switch (today) {
      case 1:
        setRealDay("mon");
        break;
      case 2:
        setRealDay("tue");
        break;
      case 3:
        setRealDay("wed");
        break;
      case 4:
        setRealDay("thu");
        break;
      case 5:
        setRealDay("fri");
        break;
      case 6:
        setRealDay("sat");
        break;
      case 0:
        setRealDay("sun");
        break;
    }

    setData(DataBase);
  }, [today, realDay]);

  const [isMobile, setİsMobile] = useState(false);

  const handleControlWidth = () => {
    if (window.innerWidth < 500) {
      setİsMobile(true);
    } else {
      setİsMobile(false);
    }
  };

  useEffect(() => {
    handleControlWidth();
  }, [isMobile]);

  return (
    <>
      <div className="w-full h-auto flex flex-col p-8 bg-white rounded-2xl">
        <div className="flex items-center justify-start DM_Sans_Family-700 text-[hsl(25,47%,15%)]">
          <h1 className="text-3xl">Spending-Last 7 days</h1>
        </div>

        <div className="flex w-full bg-transparent gap-4 items-end mt-15">
          {data.map((response, index) => (
            <div
              className="flex-1 h-auto flex-col text-center relative cursor-pointer"
              key={index}
            >
              <div
                className={`absolute ${isMobile ? "text-[0.7rem]" : "text-[1rem]"} p-2 bg-[hsl(25,47%,15%)] -left-3  rounded-lg text-white opacity-0 -top-13 `}
                ref={(el) => (contentOfExpenses.current[index] = el)}
              >
                <h1 className="DM_Sans_Family-700">${response.amount}</h1>
              </div>
              <div
                className={`w-full ${realDay == response.day ? "bg-[hsl(186,34%,65%)] real_day" : "bg-[hsl(10,79%,65%)]"} ${isMobile ? "rounded-lg" : "rounded-xl"}`}
                style={{ height: `${response.amount * 3}px` }}
                ref={(el) => (ElementsRef.current[index] = el)}
              ></div>
              <p className="DM_Sans_Family-400 mt-2 text-[hsl(28,10%,53%)]">
                {response.day}
              </p>
            </div>
          ))}
        </div>
        <br />
        <div className="w-full h-[0.05rem] bg-[hsl(28,10%,53%)]"></div>
        <br />

        <div className="w-full flex items-center justify-between">
          <div className="flex gap-2 flex-col ">
            <p className={`text-[hsl(28,10%,53%)] DM_Sans_Family-400`}>
              Total this month
            </p>
            <p className="text-black DM_Sans_Family-700 text-4xl">$478.33</p>
          </div>
          <div className="flex  flex-col ">
            <p className="text-black DM_Sans_Family-700 text-[1rem]">+2.4%</p>
            <p className={`text-[hsl(28,10%,53%)] DM_Sans_Family-400`}>
              from last month
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lower_part;
