function Card({ data, isMonthlySelected }) {
  const proStyle = "bg-gradient-box h-[500px] text-white";
  const normalStyle = `bg-white h-[453px] text-grayish-blue ${data.name === "Basic" ? "lg:rounded-tr-none lg:rounded-br-none" : "lg:rounded-tl-none lg:rounded-bl-none"}`;

  return (
    <div
      className={`flex w-full min-w-[326px] flex-col items-center justify-center rounded-[10px] px-[29px] shadow-box lg:min-w-[350px] lg:px-[31px] ${data.name === "Professional" ? proStyle : normalStyle}`}
    >
      <h2 className="mb-6 text-lg font-bold leading-7">{data.name}</h2>
      <p
        className={`flex items-center gap-2 font-bold ${data.name === "Professional" ? "text-white" : "text-dark-grayish-blue"} mb-8`}
      >
        <span className="text-[40px] leading-none tracking-[-1.2px]">$</span>
        <span className="text-7xl leading-[71px] tracking-[-2.16px]">
          {isMonthlySelected ? data.price.monthly : data.price.annually}
        </span>
      </p>

      <div
        className={`w-full border-t border-opacity-25 ${data.name === "Professional" ? "border-white" : "border-grayish-blue"} mb-8 flex flex-col items-center gap-3 text-[15px] font-bold leading-7`}
      >
        <p
          className={`w-full border-b border-opacity-25 pb-3 pt-3 text-center ${data.name === "Professional" ? "border-white" : "border-grayish-blue"}`}
        >
          {data.storage} Storage
        </p>

        <p
          className={`w-full border-b border-opacity-25 pb-3 text-center ${data.name === "Professional" ? "border-white" : "border-grayish-blue"}`}
        >
          {data.users} Users Allowed
        </p>
        <p
          className={`w-full border-b border-opacity-25 pb-3 text-center ${data.name === "Professional" ? "border-white" : "border-grayish-blue"}`}
        >
          Send up to {data.data} GB
        </p>
      </div>

      <button
        className={`w-full rounded-md border py-[14px] text-[13px] font-bold leading-none tracking-[1.393px] transition-all ${data.name === "Professional" ? "border-[#6D72DE] bg-white text-[#6D72DE] hover:border-white hover:bg-transparent hover:text-white" : "border-white bg-gradient-box text-white hover:border-[#6D72DE] hover:bg-none hover:text-[#6D72DE]"}`}
      >
        LEARN MORE
      </button>
    </div>
  );
}

export default Card;
