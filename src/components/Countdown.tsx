import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-6">
      <div className="flex items-center justify-center gap-2 mb-3 text-crimson-400 font-mono text-xs uppercase tracking-widest">
        <Clock className="w-3.5 h-3.5 animate-pulse" />
        <span>Countdown To Launch</span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6">
        {units.map((unit, idx) => (
          <div
            key={idx}
            className="relative group bg-gradient-to-b from-cosmic-850 to-cosmic-950 p-3 sm:p-5 rounded-xl border border-white/10 hover:border-crimson-600/50 transition-all duration-300 shadow-xl overflow-hidden text-center"
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-crimson-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-crimson-500 to-transparent"></div>
            
            <div className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mt-1">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
