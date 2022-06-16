import React, { FC } from "react";

const highlighted =
  "w-7/12 h-36 bg-red-400 mb-10 flex items-center justify-center text-white font-mono text-2xl font-semibold";

const Circle: FC<{ x: number; y: number }> = ({ x, y }) => {
  console.log({ x });
  return (
    <svg
      height="20"
      width="20"
      style={{
        position: "relative",
        left: x,
        top: y,
        zIndex: 1,
      }}
    >
      <circle cx="10" cy="10" r="6" className="fill-accent" />
    </svg>
  );
};

const VerticalBullets = () => {
  return (
    <div className="relative w-full bg-stone-300 mt-40">
      <div className="absolute w-1 h-full bg-slate-500 flex flex-col items-center">
        <Circle x={0} y={0} />
      </div>
      <div className="flex flex-col items-center">
        <div className="w-7/12 h-36 bg-cyan-400 mb-20"></div>
        <div className={highlighted}>This section should have a bullet</div>
        <div className="w-7/12 h-36 bg-cyan-400 mb-40"></div>
        <div className="w-7/12 h-36 bg-cyan-400 mb-52"></div>
        <div className={highlighted}>This section should have a bullet</div>
        <div className="w-7/12 h-36 bg-cyan-400 mb-10"></div>
        <div className="w-7/12 h-36 bg-cyan-400 mb-20"></div>
        <div className={highlighted}>This section should have a bullet</div>
        <div className="w-7/12 h-36 bg-cyan-400 mb-10"></div>
        <div className={highlighted}>This section should have a bullet</div>
        <div className="w-7/12 h-36 bg-cyan-400 mb-20"></div>
      </div>
    </div>
  );
};

export default VerticalBullets;
