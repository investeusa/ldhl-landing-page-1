import { useState } from "react";

import Image from "next/image";
import VideoPlayer from "@/components/video-player";
import VideoPlayer2 from "@/components/video-player2";

const VideoIntro = ({ handleOnProgress }) => {
  const [muted, setMuted] = useState(true);

  return (
    <VideoPlayer2 />
    // <VideoPlayer
    //   onProgress={handleOnProgress}
    //   playing={false}
    //   muted={muted}
    //   controls={false}
    //   width="100%"
    //   height="100%"
    //   url="https://www.youtube.com/watch?v=k2VON3batZw"
    //   wrapper={({ children }) => (
    //     <div className="relative w-full h-[18rem] md:h-[28rem]">
    //       {muted && (
    //         <div
    //           onClick={() => setMuted(!muted)}
    //           className="z-50 absolute w-full h-full flex justify-center items-center"
    //         >
    //           <div className="flex flex-col items-center border-2 rounded-lg no-audio-bg cursor-pointer text-white px-3 py-1">
    //             <p className="text-sm">Seu vídeo já começou</p>
    //             <Image
    //               src="/icons/no-audio-icon.svg"
    //               width={80}
    //               height={80}
    //               alt="Icone sem audio"
    //             />
    //             <p className="text-sm">Clique para ouvir</p>
    //           </div>
    //         </div>
    //       )}
    //       {children}
    //     </div>
    //   )}
    // />
  );
};

export default VideoIntro;

{/* <div id="vid_64c68594899aeb000890db1f" style="position:relative;width:100%;padding: 166.66666666666669% 0 0;"><img id="thumb_64c68594899aeb000890db1f" src="https://images.converteai.net/dc18b5f5-d9cd-4d50-b62e-13e5bdae39b4/players/64c68594899aeb000890db1f/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"><div id="backdrop_64c68594899aeb000890db1f" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div></div><script type="text/javascript" id="scr_64c68594899aeb000890db1f">var s=document.createElement("script");s.src="https://scripts.converteai.net/dc18b5f5-d9cd-4d50-b62e-13e5bdae39b4/players/64c68594899aeb000890db1f/player.js",s.async=!0,document.head.appendChild(s);</script> */ }
