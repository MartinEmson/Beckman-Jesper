import React, { useState, useEffect, useRef  } from 'react'
import video1 from '../assets/CLEAN/1.mp4';
import video2 from '../assets/CLEAN/2.mp4';
import video3 from '../assets/CLEAN/3.mp4';
import video4 from '../assets/CLEAN/4.mp4';
import rev1 from '../assets/CLEANREV/rev1.mp4';
import rev2 from '../assets/CLEANREV/rev2.mp4';
import rev3 from '../assets/CLEANREV/rev3.mp4';
import answers from '../answers.jsx';
import { Link } from 'react-router-dom';
import '../index.css'
import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap';
import SplitTextJS from 'split-text-js';




const Hero = () => { 

const videos = [video1, video2, video3, video4];
const reversedVideos = [rev3, rev2, rev1];

const [isReversed, setIsReversed] = useState(false);
const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
const currentVideos = isReversed ? reversedVideos : videos;

const videoRef = useRef(null);

const handleNext = () => {
  console.log('Current reversed video index:', currentVideoIndex);

    if (currentVideoIndex < currentVideos.length - 1) {
        setIsReversed(false);
        setCurrentVideoIndex(currentVideoIndex + 1);
    }
};

const handlePrev = () => {
    if (currentVideoIndex > 0) {
        setIsReversed(true);
        setCurrentVideoIndex(currentVideoIndex - 1);
    }
};
    
    const answer = answers[currentVideoIndex];

    // function getBgClass(index, isReversed) {
    //     if (isReversed) {
    //       switch (index) {
    //         case 0:
    //           console.log('Reversed, index 3');
    //           return 'bg-blue';
    //         case 1:
    //           console.log('Reversed, index 0');
    //           return 'bg-green';
    //         case 2:
    //           console.log('Reversed, index 1');
    //           return 'bg-cyan';
    //         case 3:
    //           console.log('Reversed, index 2');
    //           return 'bg-yellow';
    //         default:
    //           console.log('Reversed, default case, index:', index);
    //           return 'bg-blue';
    //       }
    //     } else {
    //       switch (index) {
    //         case 1:
    //           console.log('Not reversed, index 0');
    //           return 'bg-green';
    //         case 2:
    //           console.log('Not reversed, index 1');
    //           return 'bg-cyan';
    //         case 3:
    //           console.log('Not reversed, index 2');
    //           return 'bg-yellow';
    //         default:
    //           console.log('Not reversed, default case, index:', index);
    //           return 'bg-blue';
    //       }
    //     }
    //   }


// useGSAP (() => {

//     gsap.from('#box', {
//       x: 90,
//       repeat: -1, 
//       yoyo: true,
//       rotation: 360, 
//       duration: 2,
//       ease: 'power1.inOut',
//     })
// })


// GSAP
useEffect(() => {
  const titles = gsap.utils.toArray('p');
  const tl = gsap.timeline();

  titles.forEach(title => {
    const splitTitle = new SplitTextJS(title);

    tl
      .from(splitTitle.chars, {opacity: 0, y: 50,rotateX: 0, stagger: .05}, "<")
      // .to(splitTitle.chars, {opacity: 1, stagger: .02}, "<1");
  });
}, []);


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
    <div className="h-screen w-full bg-white flex flex-col items-center justify-center pt-20 md:pt-0">
<nav className='w-full z-10 fixed top-0 flex justify-between '>
  <div className='flex flex-col text-black py-3 px-5 text-xl text-left leading-none'>
    <p>BECKMANS</p>
    <p>APPLICATION</p>
    <p>2024</p>
  </div>

  <div className='flex flex-col py-3 px-5 text-xl z-10 text-black text-right leading-none'>
    <p>JESPER</p>
    <p>SMEDING</p>
    <div id="box" className='bg-black'></div>

  </div>
</nav>
<div id="content" className="flex justify-center top-0 items-center">
<div className='h-72 w-16 md:w-72 flex md:justify-center md:items-center'>
{currentVideoIndex > 0 && (
    <button 
    id="left" 
    onClick={handlePrev} 
    className="flex items-center justify-center left-64 md:m-5 md:p-5 text-white h-full w-full text-3xl"
    style={{ opacity: currentVideoIndex > 0 ? 1 : 0, pointerEvents: currentVideoIndex > 0 ? 'auto' : 'none' }}
  >
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-chevron-compact-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/>
</svg>
</button>
  )}
</div>
<div
  className={`h-full w-72 md:w-96 flex items-center justify-center`} 
  style={{ height: '510px' }}
>      
<Link to={`/${currentVideoIndex + 1}`} className='w-full h-full'>
  {/* <video 
    muted 
    webkit-playsInline 
    playsInline
    ref={videoRef}
    src={isReversed ? reversedVideos[reversedVideos.length - 1 - currentVideoIndex] : videos[currentVideoIndex]}  
    preload='true'
    className='object-cover'
    style={{ opacity: 0 }}
  /> */}
    <video 
      muted 
      playsInline
      ref={videoRef}
      preload='none'
      className='object-cover'
      style={{ opacity: 0 }}
    />
</Link>
</div>
<div className='h-72 w-16 flex md:justify-center md:items-center md:w-72'>
  {currentVideoIndex < videos.length - 1 && (
    <button 
    id="right" 
    onClick={handleNext} 
    className="flex items-center justify-center right-64 md:m-5 h-full text-white md:p-5 text-3xl"
    style={{ opacity: currentVideoIndex < videos.length - 1 ? 1 : 0, pointerEvents: currentVideoIndex < videos.length - 1 ? 'auto' : 'none' }}
  >
 <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
</svg>
</button>   
  )}
  </div>
</div>
<div className='flex items-center justify-center text-white mt-10 text-2xl'>
<div id="title" >{answer.title}</div>
</div>
</div>
    
  )
}

export default Hero