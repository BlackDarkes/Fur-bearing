import { IReleaseItems } from "@/constants/releases/release-items";
import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";

interface IReliesesListItemProps {
  item: IReleaseItems;
}

export const ReliesesListItem = ({ item }: IReliesesListItemProps) => {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const musicRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (isPlay) {
      musicRef.current?.pause();

      if (musicRef.current) {
        musicRef.current.currentTime = 0;
      }
    } else {
      musicRef.current?.play();
    }

    setIsPlay(!isPlay);
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
        onEnded={() => setIsPlay(false)}
      />

      <div className="flex items-center gap-x-10">
        <button type="button" onClick={togglePlay}>
          {isPlay ? <Pause /> : <Play />}
        </button>

        <div className="flex flex-col w-full">
          <h3>{item.title}</h3>
          <p>Александр Пушной</p>
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
