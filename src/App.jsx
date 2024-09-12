import { data } from "./data";
import bgTop from "./images/bg-top.svg";
import bgBottom from "./images/bg-bottom.svg";
import Card from "./Card";
import { useState } from "react";

function App() {
  const [isMonthlySelected, setIsMonthlySelected] = useState(true);

  return (
    <div className="relative grid min-h-dvh place-items-center overflow-hidden bg-very-light-grayish-blue">
      {/* background top */}
      <div className="absolute -right-[190px] -top-[40px] xl:-right-[20px] xl:top-0">
        <img src={bgTop} alt="background top" className="h-full w-full" />
      </div>
      {/* background top */}

      {/* background bottom */}
      <div className="absolute -bottom-[10px] -left-[10px] hidden xl:block">
        <img src={bgBottom} alt="background bottom" className="w-full" />
      </div>
      {/* background bottom */}

      {/* main content */}
      <div className="relative mx-auto max-w-[1050px] px-6 py-16 xl:px-0 xl:py-0">
        <h1 className="mb-10 text-center text-[32px] font-bold leading-none text-grayish-blue">
          Our Pricing
        </h1>

        <div className="mb-16 flex items-center justify-center gap-6 text-[15px] font-bold leading-7 text-grayish-blue">
          <p className="opacity-50">Annually</p>
          <div
            className="relative flex h-8 w-14 cursor-pointer items-center justify-center rounded-2xl bg-gradient-box transition-opacity hover:opacity-50"
            onClick={() => setIsMonthlySelected(!isMonthlySelected)}
          >
            <div
              className={`absolute right-1 top-1/2 size-6 -translate-y-1/2 rounded-full bg-white ${isMonthlySelected ? "translate-x-0" : "-translate-x-6"} transition-all duration-300`}
            ></div>
          </div>
          <p className="opacity-50">Monthly</p>
        </div>

        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-0">
          {data.map((item) => (
            <Card
              key={item.name}
              data={item}
              isMonthlySelected={isMonthlySelected}
            />
          ))}
        </div>
      </div>
      {/* main content */}
    </div>
  );
}
export default App;
