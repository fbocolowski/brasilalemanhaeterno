import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import ScoreBoard from "@/components/score-board";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-600 via-yellow-400 to-blue-600 flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl bg-white bg-opacity-90 p-8 rounded-3xl shadow-2xl backdrop-blur-sm">
        <Header />
        <ScoreBoard />
        <Footer />
      </div>
    </div>
  );
}
