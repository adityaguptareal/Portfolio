import React from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup'
function AnimatedCounter() {
  return (
    <div id='counter' className=' padding-x-lg xl:mt-0 mt-32'>
      <div className='mx-auto grid-4-cols'>
        {counterItems.map((item,index)=>{
          return(
            <div className='bg-zinc-900 rounded-lg flex flex-col justify-center p-10 ' key={index}>

            <div key={index} className='counter-number text-white text-5xl font-bold mv-2'>
              <CountUp end={item.value} suffix={item.suffix}/>
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
