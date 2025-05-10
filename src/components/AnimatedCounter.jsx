import React, { useEffect, useRef, useState } from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

function AnimatedCounter() {
  const counterRef = useRef(null)
  const [shouldAnimate, setShouldAnimate] = useState(false)
  
  useEffect(() => {
    // Create ScrollTrigger for the counter section with improved configuration
    const trigger = ScrollTrigger.create({
      trigger: counterRef.current,
      start: "top bottom-=100", // Trigger when the top of the counter section is 100px from the bottom of the viewport
      end: "bottom top", // End when the bottom of the counter section leaves the top of the viewport
      onEnter: () => setShouldAnimate(true),
      onLeaveBack: () => setShouldAnimate(false), // Reset when scrolling back up
      // markers: true, // Uncomment for debugging
    })
    
    // Cleanup function
    return () => {
      if (trigger) trigger.kill() // Properly dispose of the ScrollTrigger instance
    }
  }, [])
  
  return (
    <div id='counter' ref={counterRef} className='padding-x-lg xl:mt-0 mt-32'>
      <div className='mx-auto grid-4-cols'>
        {counterItems.map((item, index) => {
          return(
            <div className='bg-zinc-900 rounded-lg flex flex-col justify-center p-10' key={index}>
              <div 
                className='counter-number text-white text-5xl font-bold mv-2'
              >
                {shouldAnimate ? (
                  <CountUp 
                    start={0} 
                    end={item.value} 
                    suffix={item.suffix}
                    duration={2.5}
                    redraw={true}
                    useEasing={true}
                    key={`counter-${index}-${shouldAnimate}`} // Force re-render when shouldAnimate changes
                  />
                ) : (
                  <span>0{item.suffix}</span> // Show 0 when not animating
                )}
              </div>
              <div className='text-white-50 text-lg'>{item.label}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AnimatedCounter
