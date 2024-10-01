'use client'
import React,{useEffect, useState} from 'react'
import useSound from 'use-sound';
import Image from 'next/image';

export default function SoudPlayer() {  
  const [play, { sound }] = useSound("/LB744_Exhaust_MIX8D_230303.mp3");
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    play();
  };
  const handlePause = () => setIsPlaying(false);
  useEffect(() => {
    if (!isPlaying) {
      sound?.pause(); // Pause if not playing
    }
  }, [isPlaying, sound]);
  //const toggleMute = () => setIsMuted(!isMuted);
  //<button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
  return (
    <div className="flex flex-wrap justify-around">
      <h1 className="text-5xl font-semibold p-2">FEEL THE ENGINE</h1>
      {isPlaying===false ? <Image alt='Sound' src={"/PlayWave.svg"} width={500} height={100} onClick={handlePlay}/> : <Image alt='Sound' src={"/PauseWave.svg"} width={500} height={100} onClick={handlePause}/>}     
      <audio src={sound}/>
    </div>
  );
}