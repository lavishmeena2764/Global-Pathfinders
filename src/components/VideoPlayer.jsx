import React, { useRef, useState, useEffect } from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const redBarRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error("Error playing video:", error);
      });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const redBar = redBarRef.current;

    const updateRedBar = () => {
      const juicePos = video.currentTime / video.duration;
      redBar.style.width = juicePos * 100 + '%';
    };

    video.addEventListener('timeupdate', updateRedBar);

    return () => {
      video.removeEventListener('timeupdate', updateRedBar);
    };
  }, []);

  return (
    <div className="relative w-full max-w-fit max-h-96 overflow-hidden rounded-lg mx-auto" >
      <video ref={videoRef} className="w-full h-full max-h-96" controls={false} >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-0 w-full p-4 flex justify-center">
        <button
          onClick={togglePlayPause}
          className="bg-transparent border-none outline-none cursor-pointer text-white text-3xl"
        >
          <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
        </button>
      </div>
      <div className="relative w-full h-1 bg-gray-300">
        <div ref={redBarRef} className="absolute top-0 left-0 h-full bg-red-500"></div>
      </div>
    </div>
  );
};

export default VideoPlayer;
