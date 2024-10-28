"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { ScoreCard } from "./score-card";

export default function ScoreBoard() {
  const [brazilScore, setBrazilScore] = useState(1);
  const [germanyScore, setGermanyScore] = useState(7);
  const [elapsedTime, setElapsedTime] = useState("");
  const [lastGoal, setLastGoal] = useState<"brasil" | "alemanha" | null>(null);

  useEffect(() => {
    const startDate = new Date("2014-07-08T17:00:00-03:00");
    const originalDuration = 90 * 60 * 1000;
    const originalBrazilGoals = 1;
    const originalGermanyGoals = 7;

    const updateScoreAndTime = () => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();

      const formatter = new Intl.RelativeTimeFormat("pt-BR", {
        numeric: "auto",
      });
      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
      const days = Math.floor(
        (difference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setElapsedTime(
        `${formatter.format(-years, "year").replace("há ", "")} ${formatter
          .format(-days, "day")
          .replace("há ", "")} ${formatter
          .format(-hours, "hour")
          .replace("há ", "")} ${formatter
          .format(-minutes, "minute")
          .replace("há ", "")} ${formatter
          .format(-seconds, "second")
          .replace("há ", "")}`
      );

      const matchesPlayed = Math.floor(difference / originalDuration);
      const newBrazilScore =
        originalBrazilGoals + Math.floor(matchesPlayed * originalBrazilGoals);
      const newGermanyScore =
        originalGermanyGoals + Math.floor(matchesPlayed * originalGermanyGoals);

      if (newBrazilScore > brazilScore) {
        setBrazilScore(newBrazilScore);
        setLastGoal("brasil");
        setTimeout(() => setLastGoal(null), 3000);
      }
      if (newGermanyScore > germanyScore) {
        setGermanyScore(newGermanyScore);
        setLastGoal("alemanha");
        setTimeout(() => setLastGoal(null), 3000);
      }
    };

    updateScoreAndTime();
    const timer = setInterval(updateScoreAndTime, 1000);
    return () => clearInterval(timer);
  }, [brazilScore, germanyScore]);

  return (
    <div className="flex justify-between items-center mb-8">
      <ScoreCard
        team="Brasil"
        score={brazilScore}
        flag="🇧🇷"
        textColor="text-green-700"
        isScoring={lastGoal === "brasil"}
      />
      <div className="text-center p-5">
        <Clock className="w-10 h-10 text-gray-600 mx-auto mb-4" />
        <div className="text-xl font-bold text-gray-800 mb-4">
          {elapsedTime}
        </div>
      </div>
      <ScoreCard
        team="Alemanha"
        score={germanyScore}
        flag="🇩🇪"
        textColor="text-black"
        isScoring={lastGoal === "alemanha"}
      />
    </div>
  );
}
