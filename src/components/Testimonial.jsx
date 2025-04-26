import React from 'react'
import TitleHeader from './TitleHeader'
import { testimonials } from '../constants'
import GlowCard from './GlowCard'

function Testimonial() {
  return (
<section id='testimonials' className='flex-center section-padding'>
    <div className='w-full h-full md:px-10 px-5'>
<TitleHeader title="What People Say About me ?" sub="⭐ Client Feedback Highlights"/>

<div className='lg:columns-3 md:columns-2 columns-1 mt-16'>
    {testimonials.map((testimonial, index) => (
       <GlowCard card={testimonial}>
        <div className='flex items-center gap-3'>

        <div className='flex items-center gap-3'>
            <img src={testimonial.imgPath} alt={testimonial.name} />
            <div>
                <p className='font-bold'>{testimonial.name}</p>
                <p className='text-white-50'>{testimonial.mentions}</p>
            </div>
        </div>
        </div>
       </GlowCard>
    ))}
</div>
    </div>

</section>  )
}

export default Testimonial