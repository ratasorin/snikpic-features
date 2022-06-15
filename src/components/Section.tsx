import { useState } from "react";
import Draggable from "react-draggable";

const CARDS = 50;

const Section = () => {
  return (
    <div className="absolute left-0 top-0 w-screen h-screen bg-slate-50 p-6">
      <div className="relative w-full overflow-x-scroll min-h-fit bg-yellow-300">
        <div className="relative min-w-fit">
          <div className="min-w-fit h-auto flex flex-row">
            {Array.from({ length: CARDS }).map((_, i) => (
              <div className="w-72 h-96 bg-slate-400 m-6"></div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative h-1 w-full bg-red-400">
        <Draggable axis="x">
          <div className="absolute w-10 h-5 bottom-0 bg-red-200 left-0"></div>
        </Draggable>
      </div>
    </div>
  );
};

export default Section;
