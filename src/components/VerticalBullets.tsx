import React, { FC, useEffect, useMemo, useState } from "react";

const highlighted =
  "w-7/12 h-36 bg-red-400 mb-10 flex items-center justify-center text-white font-mono text-2xl font-semibold";

const Circle: FC<{ y: number }> = ({ y }) => {
  return (
    <svg
      height="20"
      width="20"
      style={{
        position: "absolute",
        top: y,
      }}
    >
      <circle cx="10" cy="10" r="6" className="fill-accent" />
    </svg>
  );
};

const VerticalBullets = () => {
  const [section, setSection] = useState<HTMLDivElement | null>(null);
  const markedElementsY = useMemo(() => {
    if (!section) return [];
    const markedElementsCollection = document.querySelectorAll(
      "#mark"
    ) as NodeListOf<HTMLDivElement>;
    const markedElementsY = Array.from(markedElementsCollection.values()).map(
      (element) => element.offsetTop
    );

    console.log({ markedElementsY });
    return markedElementsY;
  }, [section]);

  return (
    <div ref={setSection} className="relative w-full bg-stone-300 mt-40">
      <div className="absolute w-1 h-full bg-slate-500 flex flex-col items-center justify-start">
        {markedElementsY.map((y) => (
          <Circle y={y} key={y} />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <div className="w-7/12 h-36 bg-cyan-400 mb-28"></div>
        <div
          ref={(e) => console.log(e && e.offsetTop)}
          className={highlighted}
          id="mark"
        >
          This element should have a bullet
        </div>
        <div className="w-7/12 h-36 bg-cyan-400 mb-28"></div>
        <div className="w-7/12 h-36 bg-cyan-400 mb-28"></div>
        <div
          ref={(e) => console.log(e && e.offsetTop)}
          className={highlighted}
          id="mark"
        >
          This element should have a bullet
        </div>
        <div className="w-7/12 h-36 bg-cyan-400 mb-28"></div>
        <div className="w-7/12 h-36 bg-cyan-400 mb-28"></div>
        <div className={highlighted} id="mark">
          This element should have a bullet
        </div>
        <div className="w-7/12 h-36 bg-cyan-400 mb-28"></div>
        <div className={highlighted} id="mark">
          This element should have a bullet
        </div>
        <div className="w-7/12 h-36 bg-cyan-400"></div>
      </div>
    </div>
  );
};

export default VerticalBullets;
