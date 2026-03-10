import { IReleaseItems } from "@/constants/releases/release-items";
import { cn } from "@/shared/lib/utils";
import { Play, Pause } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface IReliesesListItemProps {
  item: IReleaseItems;
  isPlaying: boolean; 
  onPlay: (id: number) => void;
}

export const ReliesesListItem = ({ item, isPlaying, onPlay }: IReliesesListItemProps) => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const musicRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isPlaying) {
      musicRef.current?.play().catch(e => console.error("Play error:", e));
    } else {
      musicRef.current?.pause();
      if (musicRef.current) {
        musicRef.current.currentTime = 0;
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    onPlay(item.id);
  };

  const onLoadedMetadata = () => {
    if (musicRef.current) {
      setDuration(musicRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (musicRef.current) {
      setCurrentTime(musicRef.current.currentTime);
    }
  };

  const handleEnded = () => {
    onPlay(item.id);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <li className="flex justify-between items-center w-full">
      <audio
        src={item.music}
        ref={musicRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleEnded}
      />

      <div className="flex items-center gap-x-[clamp(10px,2vw,20px)]">
        <button type="button" onClick={togglePlay} className={cn(
          `transition-all duration-400 hover:scale-110 hover:text-placeholder-color active:scale-90 active:text-placeholder-color`,
        )}>
          {isPlaying ? <Pause /> : <Play />}
        </button>

        <div className="flex flex-col w-full">
          <h3 className="text-[clamp(16px,2vw,18px)]">{item.title}</h3>
          <p className="text-[clamp(12px,2vw,16px)]">Александр Пушной</p>
        </div>
      </div>

      <p>
        <span>{formatTime(currentTime)}</span> 
        <span> / </span>
        <span>{formatTime(duration)}</span>
      </p>
    </li>
  );
};