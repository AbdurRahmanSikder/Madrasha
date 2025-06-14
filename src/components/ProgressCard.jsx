import React from "react";

const ProgressCard = ({ title, current, total, percentage }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md  w-full max-w-[288px]">
      <h2 className="text-lg font-medium  mb-2">{title}</h2>

      {/* Progress Bar */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 h-2 rounded-full bg-[#F2F2F2] overflow-hidden">
          <div
            className="h-full w-[432px] bg-[#00A606] transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="text-sm text-[#AFAFAF]">{percentage} %</span>
      </div>

      {/* Amounts */}
      <div className="text-xl font-bold text-[#131313]">
        {current.toLocaleString("en-IN")}
        <span className="text-[#AFAFAF] gap-6px font-medium text-xl ml-1">
        /{total.toLocaleString("en-IN")} BDT
        </span>
      </div>
    </div>
  );
};

export default ProgressCard;
