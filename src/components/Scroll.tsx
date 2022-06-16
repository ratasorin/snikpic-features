import { useCallback, useEffect, useMemo, useState } from "react";
import Draggable from "react-draggable";

const CARDS = 50;

const convertThumbMovementToWindowMovement = (
  unit: number,
  thumbPosition: number
) => unit * thumbPosition;

const Section = () => {
  const [bounds, setBounds] = useState<{ left: number; right: number } | null>(
    null
  );

  const [thumb, setThumb] = useState<HTMLDivElement | null>(null);

  const measureTrack = useCallback(
    (track: HTMLDivElement) => {
      if (!track || !thumb) return null;
      setBounds({
        left: track.clientLeft - thumb.clientWidth / 2,
        right: track.clientWidth - thumb.clientWidth / 2,
      });
    },
    [thumb]
  );

  const [slideWindow, setSlideWindow] = useState<HTMLDivElement | null>(null);
  const [cardsContainer, setCardsContainer] = useState<HTMLDivElement | null>(
    null
  );

  const unit = useMemo(() => {
    console.log({ slideWindow, cardsContainer, bounds });
    if (!slideWindow || !cardsContainer || !bounds) return 0;
    const trackWidth = bounds.right - bounds.left;
    const unit =
      (cardsContainer.clientWidth - slideWindow.clientWidth) / trackWidth;
    console.log({ unit });
    return unit;
  }, [slideWindow, cardsContainer, bounds]);

  const [thumbLeft, setThumbLeft] = useState(0);
  return (
    <div className="relative left-0 top-0 w-screen bg-slate-50">
      <div
        ref={setSlideWindow}
        className="relative w-full overflow-x-scroll min-h-fit"
      >
        <div
          style={{
            left: -convertThumbMovementToWindowMovement(unit, thumbLeft),
          }}
          ref={setCardsContainer}
          className="relative min-w-fit"
        >
          <div className="min-w-fit h-auto flex flex-row">
            {Array.from({ length: CARDS }).map((_, i) => (
              <div className="w-72 h-96 bg-slate-400 m-6"></div>
            ))}
          </div>
        </div>
      </div>
      <div ref={measureTrack} className="relative h-1 w-full bg-red-400 my-5">
        <Draggable
          onDrag={(_, data) => {
            console.log("DRAGGING", data);
            setThumbLeft(data.x + thumb!.clientWidth / 2);
          }}
          bounds={bounds ? bounds : { left: 0, right: 0 }}
          axis="x"
        >
          <div
            ref={setThumb}
            className="absolute w-10 h-5 bg-red-200 -top-2"
          ></div>
        </Draggable>
      </div>
    </div>
  );
};

export default Section;
