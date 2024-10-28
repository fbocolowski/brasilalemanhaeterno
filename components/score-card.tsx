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
    <div className="text-center">
      <h2
        className={`text-3xl font-bold ${textColor} mb-4 flex items-center justify-center`}
      >
        <span className={`w-8 h-8 mr-2`}>{flag}</span>
        {team}
      </h2>
      <div
        className={`text-7xl md:text-9xl font-bold text-gray-800 mb-4 transition-all duration-300 ${
          isScoring ? "scale-110 text-yellow-500" : ""
        }`}
      >
        {score}
      </div>
      {isScoring && (
        <div className="text-2xl font-bold text-yellow-500 animate-bounce">
          GOL!
        </div>
      )}
    </div>
  );
}
