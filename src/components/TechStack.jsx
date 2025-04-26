import React from 'react'
import TitleHeader from './TitleHeader'
import { techStackIcons } from '../constants'

function TechStack() {
  return (
    <div id='skills' className='flex-center section-padding'>
    <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader title="My Preferred Tech Stack" sub="The Skills I Bring to the Table"/> 
        <div className="tech-grid">
            {techStackIcons.map((icon,index)=>{})}
        </div>
    </div>

    </div>
  )
}

export default TechStack