import React, { useState, useEffect, useRef  } from 'react'
import video1 from '../assets/CLEAN/CLEAN_1.mp4';
import video2 from '../assets/CLEAN/CLEAN_2.mp4';
import video3 from '../assets/CLEAN/CLEAN_3.mp4';
import video4 from '../assets/CLEAN/CLEAN_4.mp4';
import rev1 from '../assets/CLEANREV/CLEANREV_1.mp4'
import rev2 from '../assets/CLEANREV/CLEANREV_2.mp4'
import rev3 from '../assets/CLEANREV/CLEANREV_3.mp4'
import rev4 from '../assets/CLEANREV/CLEANREV_4.mp4'
import answers from '../answers.jsx';
import { Link } from 'react-router-dom';
import '../index.css'
import { gsap } from 'gsap';


const Hero = () => { 
    const videos = [video1, video2, video3, video4];
const reversedVideos = [rev1, rev4, rev3, rev2];

const [isReversed, setIsReversed] = useState(false);
const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

const currentVideos = isReversed ? reversedVideos : videos;

// console.log(`Current index: ${currentVideoIndex}`);

// console.log(`Current video: ${currentVideos[currentVideoIndex]}`);

console.log(`Reversed videos index: ${reversedVideos.length - 1 - currentVideoIndex}`);

const videoRef = useRef(null);

// rest of your code...
// const videoRef1 = useRef(null);
// const videoRef2 = useRef(null);

const handleNext = () => {
    if (currentVideoIndex < currentVideos.length - 1) {
        setIsReversed(false);
        setCurrentVideoIndex(currentVideoIndex + 1);
        // const video = currentVideoIndex % 2 === 0 ? videoRef1.current : videoRef2.current;
        // if (video) video.play();
    }
};

const handlePrev = () => {
    if (currentVideoIndex > 0) {
        setIsReversed(true);
        setCurrentVideoIndex(currentVideoIndex - 1);
        // const video = currentVideoIndex % 2 === 0 ? videoRef1.current : videoRef2.current;
        // if (video) video.play();
    }
};
    
    const answer = answers[currentVideoIndex];

    function getBgClass(index, isReversed) {
        if (isReversed) {
          switch (index) {
            case 0:
              console.log('Reversed, index 3');
              return 'bg-blue';
            case 1:
              console.log('Reversed, index 0');
              return 'bg-green';
            case 2:
              console.log('Reversed, index 1');
              return 'bg-cyan';
            case 3:
              console.log('Reversed, index 2');
              return 'bg-yellow';
            default:
              console.log('Reversed, default case, index:', index);
              return 'bg-blue';
          }
        } else {
          switch (index) {
            case 1:
              console.log('Not reversed, index 0');
              return 'bg-green';
            case 2:
              console.log('Not reversed, index 1');
              return 'bg-cyan';
            case 3:
              console.log('Not reversed, index 2');
              return 'bg-yellow';
            default:
              console.log('Not reversed, default case, index:', index);
              return 'bg-blue';
          }
        }
      }

// const videoRef = useRef(null);

//   const [activeVideoRef, setActiveVideoRef] = useState(videoRef1);

//   useEffect(() => {
//     const activeVideo = activeVideoRef.current;
//     const inactiveVideo = activeVideoRef === videoRef1 ? videoRef2.current : videoRef1.current;

//     // Update source for the inactive video and load it
//     inactiveVideo.src = isReversed ? reversedVideos[reversedVideos.length - 1 - (currentVideoIndex + 1) % reversedVideos.length] : videos[(currentVideoIndex + 1) % videos.length];
//     inactiveVideo.load();

//     // Fade out the current video first
//     gsap.to(activeVideo, { opacity: 0, duration: 0.5, ease: "power1.inOut", onComplete: () => {
//       if (inactiveVideo.readyState >= 4) {
//         fadeIn(inactiveVideo);
//       } else {
//         inactiveVideo.onloadeddata = () => fadeIn(inactiveVideo);
//       }
//     }});

//     // Function to fade in the next video
//     function fadeIn(video) {
//       gsap.to(video, { opacity: 1, duration: 0.5, ease: "power1.inOut", onComplete: () => {
//         video.play(); // Play only after fade in completes
//         setActiveVideoRef(activeVideoRef === videoRef1 ? videoRef2 : videoRef1); // Switch active video reference
//       }});
//     }
//   }, [currentVideoIndex, isReversed, videos, reversedVideos, activeVideoRef]);


useEffect(() => {
    const videoElement = videoRef.current;
  
    if (videoElement) {
    //   gsap.to(videoElement, { opacity: 0, duration: 0.5, ease: "power1.inOut", onComplete: () => {
        // Change the video source
        videoElement.src = isReversed ? reversedVideos[reversedVideos.length - 1 - currentVideoIndex] : videos[currentVideoIndex];
  
        // Define the fade-in animation
        const fadeIn = () => {
          gsap.to(videoElement, { opacity: 1, duration: 0.2, ease:"power1.inOut", onComplete: () => videoElement.play() });
        };
  
        // Check if the video data is already loaded
        if (videoElement.readyState === 4) {
          // If the video data is already loaded, start the fade-in animation immediately
          fadeIn();
        } else {
          // If the video data is not loaded yet, listen for the 'loadeddata' event
          videoElement.onloadeddata = fadeIn;
        }
  
        // Load the new video
        videoElement.load();
    //   }});
    }
  }, [currentVideoIndex, isReversed, reversedVideos, videos]);

  
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center pt-20">
<nav className='w-full z-10 fixed top-0 flex justify-between '>
  <div className='flex flex-col text-white py-3 px-5 text-xl text-left leading-none'>
    <div>BECKMANS</div>
    <div>APPLICATION</div>
    <div>2024</div>
  </div>

  <div className='flex flex-col py-3 px-5 text-xl text-white text-right leading-none'>
    <div>JESPER</div>
    <div>SMEDING</div>
    <div className='text-black'>*</div>

  </div>
</nav>
<div id="content" className="flex justify-center items-center">
<div className='h-72 w-72'>
{currentVideoIndex > 0 && (
    <button 
    id="left" 
    onClick={handlePrev} 
    className="flex items-center justify-center left-64 m-5 p-5 text-white  h-64 w-64 text-3xl"
    style={{ opacity: currentVideoIndex > 0 ? 1 : 0, pointerEvents: currentVideoIndex > 0 ? 'auto' : 'none' }}
  >
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/>
</svg>
</button>
  )}
</div>
<div 
  className={`h-full w-96 flex items-center justify-center drop-shadow-2xl ${getBgClass(currentVideoIndex, isReversed)}`} 
  style={{ height: '510px' }}
>
{/* <Link to={`/book/${currentVideoIndex + 1}`} className="w-full h-full object-cover">
        <video ref={videoRef1} preload="auto" muted className="video max-w-full max-h-full p-5" style={{ opacity: 0 }} />
        <video ref={videoRef2} preload="auto" muted className="video max-w-full max-h-full p-5" style={{ display: 'none' }} />
      </Link> */}

      
<Link to={`/book/${currentVideoIndex + 1}`} className='w-full h-full object-cover'>
  <video 
    ref={videoRef}
    src={isReversed ? reversedVideos[reversedVideos.length - 1 - currentVideoIndex] : videos[currentVideoIndex]}  
    preload='auto'
    muted 
    className="max-w-full max-h-full"
    style={{ opacity: 0 }}
  />
</Link>
</div>
<div className='h-72 w-72'>
  {currentVideoIndex < videos.length - 1 && (
    <button 
    id="right" 
    onClick={handleNext} 
    className="flex items-center justify-center right-64 m-5 h-64 w-64 text-white p-5 text-3xl"
    style={{ opacity: currentVideoIndex < videos.length - 1 ? 1 : 0, pointerEvents: currentVideoIndex < videos.length - 1 ? 'auto' : 'none' }}
  >
 <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
</svg>
</button>   
  )}
  </div>
</div>
<div className='flex items-center justify-center text-white mt-8 text-2xl font-light'>
<h1>{answer.title}</h1>
</div>
</div>
    
  )
}

export default Hero