import React from 'react'
import AnimatedAuroraBackground from '@/app/(private)/component/bg'
import { GlowingEffectDemoSecond } from '@/app/(private)/component/card'
import { Marquee } from '@/app/(private)/component/marquee'
import { MarqueeDemo } from '@/app/(private)/component/marqueedemmo'

const Mainscreen = () => {
  return (
    <div>

      

      <div className='' >
        <AnimatedAuroraBackground />
      </div>


      <div className='w-full flex justify-center' >
        <img src="/workflow.png" alt="" />
      </div>

     
        <div  >
          <MarqueeDemo />
        </div>




      <div className='' >
        <GlowingEffectDemoSecond />
      </div>










    </div>
  )
}

export default Mainscreen
