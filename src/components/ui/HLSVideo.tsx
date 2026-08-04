import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface HLSVideoProps {
  src: string;
  className?: string;
  poster?: string;
  muted?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  style?: React.CSSProperties;
}

export const HLSVideo = ({ 
  src, 
  className, 
  poster, 
  muted = true, 
  autoPlay = true, 
  loop = true,
  style 
}: HLSVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      muted={muted}
      autoPlay={autoPlay}
      loop={loop}
      playsInline
      style={style}
    />
  );
};
