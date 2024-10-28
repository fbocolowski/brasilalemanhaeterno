interface ScoreCardProps {
  team: string;
  score: number;
  flag: string;
  textColor: string;
  isScoring: boolean;
}

export function ScoreCard({
  team,
  score,
  flag,
  textColor,
  isScoring,
}: ScoreCardProps) {
  return (
    <div className="text-center p-4 md:p-8">
      <h2
        className={`text-2xl md:text-4xl font-bold ${textColor} mb-4 flex items-center justify-center`}
      >
        <span className={`mr-2`}>{flag}</span>
        {team}
      </h2>
      <div
        className={`text-4xl md:text-8xl font-bold text-gray-800 mb-4 transition-all duration-300 ${
          isScoring ? "scale-110 text-yellow-500" : ""
        }`}
      >
        {score}
      </div>
      {isScoring && (
        <div className="text-xl md:text-2xl font-bold text-yellow-500 animate-bounce">
          GOL!
        </div>
      )}
    </div>
  );
}
