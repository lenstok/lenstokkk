import { useState, useEffect, useRef } from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import Link from "next/link";
import type { FC } from "react";
import type { Publication } from "@/types/lens";

import LikeButton from  "@/components/Buttons/Likes/LikeButton";
import MirrorButton from  "@/components/Buttons/Mirrors/MirrorButton";
import CommentButton from  "@/components/Buttons/CommentButton";
import CollectButton from  "@/components/Buttons/Collects/CollectButton";
import getMedia from "@/lib/getMedia";

interface Props {
  publication: Publication;
}
const Video: FC<Props> = ({ publication }) => {
  const [isHover, setIsHover] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(publication?.metadata?.media[0]?.original?.url);

  return (
    <div className="lg:ml-20 md:flex gap-4 relative">
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="rounded-3xl"
      >
        <Link href={`/detail/${publication.id}`} key={publication.id}>
          <video
            loop
            // controls
            // autoPlay
            muted
            // ref={videoRef}
            src={getMedia(publication)}
            // className='lg:w-[400px] h-[300px] md:h-[400px] lg:h-[500px] w-[400px] rounded-2xl cursor-pointer bg-gray-100'
            className='lg:w-[400px] lg:h-[500px] md:h-[400px] md:w-[400px] h-[400px] w-full
            object-contain rounded cursor-pointer bg-black lg:bg-gray-100'
          ></video>
        </Link>
        </div>
         {/* <div className='absolute right-8 md:relative md:flex-col m-2 mb-10 md:m-0 md:pt-[120px]'> */}
        <div className='absolute md:relative md:flex md:flex-col top-0 right-0 space-x-6 md:space-x-0 flex flex-row p-2 m-2 mb-10 md:p-0 md:m-0 md:pt-[120px]'>
          <LikeButton publication={publication as Publication}/>
          <CommentButton publication={publication as Publication} />
          <MirrorButton publication={publication as Publication}/>
          <CollectButton publication={publication as Publication}/>
        </div>
     
    </div>
    
  );
};

export default Video;