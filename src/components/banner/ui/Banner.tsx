import React from "react";

export const Banner: React.FC = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-clamp(95px,10vw,140px))] bg-slate-900 overflow-hidden flex flex-col items-center justify-center py-16 px-4">
      <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute top-0 left-1/4 w-32 h-full bg-linear-to-b from-cyan-400/30 to-transparent -skew-x-12 blur-xl"></div>
        <div className="absolute top-0 left-1/2 w-24 h-full bg-linear-to-b from-pink-500/30 to-transparent skew-x-12 blur-xl"></div>
        <div className="absolute top-0 right-1/4 w-28 h-full bg-linear-to-b from-blue-500/30 to-transparent -skew-x-6 blur-xl"></div>
        <div className="absolute top-0 right-1/3 w-20 h-full bg-linear-to-b from-purple-500/30 to-transparent skew-x-12 blur-xl"></div>
      </div>

      <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-300 rounded-full blur-md animate-pulse"></div>
      <div className="absolute top-32 right-20 w-3 h-3 bg-pink-400 rounded-full blur-md animate-pulse"></div>
      <div className="absolute top-16 left-1/3 w-5 h-5 bg-blue-400 rounded-full blur-lg animate-pulse"></div>
      <div className="absolute top-24 right-1/3 w-4 h-4 bg-purple-400 rounded-full blur-md animate-pulse"></div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
 

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] text-center">
            СКИДКА НА МЕРЧ ВО ВРЕМЯ КОНЦЕРТА
          </h2>
          <div className="bg-black border-2 border-lime-400 rounded-lg px-6 py-3 transform rotate-3 hover:rotate-6 transition-transform duration-300 shadow-[0_0_20px_rgba(163,230,53,0.6)]">
            <span className="text-4xl sm:text-5xl font-black text-lime-400 drop-shadow-[0_0_10px_rgba(163,230,53,0.8)]">
              -30%
            </span>
          </div>
        </div>

        <div className="flex items-end justify-center gap-1 sm:gap-2 opacity-70 h-24">
          {[40, 65, 85, 100, 90, 75, 55, 80, 95, 110, 95, 80, 60, 70, 50].map((h, i) => (
            <div
              key={i}
              className="w-1.5 sm:w-2 bg-lime-400 rounded-full"
              style={{
                height: `${h}px`,
                boxShadow: "0 0 12px rgba(163, 230, 53, 0.7)",
                animation: `pulse 2s ease-in-out ${i * 0.15}s infinite alternate`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};