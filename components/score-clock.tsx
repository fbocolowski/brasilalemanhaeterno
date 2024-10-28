interface ScoreClockProps {
  elapsedTime: string;
}

export function ScoreClock({ elapsedTime }: ScoreClockProps) {
  return (
    <div className="text-center my-4 mx-4 ">
      <div className="text-2xl">🕒</div>
      <div className="text-lg md:text-xl font-bold text-gray-800">
        {elapsedTime}
      </div>
    </div>
  );
}
