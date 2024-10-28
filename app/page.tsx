import { Footer } from "@/components/footer";
import ScoreBoard from "@/components/score-board";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-600 via-yellow-400 to-blue-600 flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 w-full max-w-6xl bg-white bg-opacity-90 p-8 rounded-3xl shadow-2xl backdrop-blur-sm">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-4 tracking-tighter">
          Brasil x Alemanha Eterno
        </h1>
        <h2 className="text-xl font-semibold text-center text-gray-600 mb-8">
          8 de julho de 2014, 17:00 (Horário de Brasília)
        </h2>
        <ScoreBoard />
        <Footer />
      </div>
    </div>
  );
}
