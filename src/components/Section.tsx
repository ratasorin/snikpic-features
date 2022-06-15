const CARDS = 50;

const Section = () => {
  return (
    <div className="absolute left-0 top-0 w-screen h-screen bg-slate-50 p-6 flex items-center">
      <div className="relative w-full overflow-x-scroll overflow-hidden scroll-overlap">
        <div className="relative min-w-fit">
          <div className="min-w-fit h-auto flex flex-row">
            {Array.from({ length: CARDS }).map((_, i) => (
              <div className="w-72 h-96 bg-slate-400 m-6"></div>
            ))}
          </div>
          <div className="absolute z-50 h-1 min-w-full -translate-y-[12px] bg-slate-400">
            <div className="absolute w-10 h-5 bg-slate-200 -translate-y-1/2 left-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
