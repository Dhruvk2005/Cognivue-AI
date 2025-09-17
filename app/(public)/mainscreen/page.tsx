import React from 'react'
import AnimatedAuroraBackground from '@/app/(private)/component/bg'
import { GlowingEffectDemoSecond } from '@/app/(private)/component/card'
import { Marquee } from '@/app/(private)/component/marquee'

const Mainscreen = () => {
  return (
    <div>

      <div className='' >
        <AnimatedAuroraBackground />
      </div>

      <div className='' >
        <GlowingEffectDemoSecond />
      </div>

      {/* <div className="" >
        <Marquee>
          <span className="mx-4">Health & Wellness Practitioner</span>
          <span className="mx-4">Online Educator / Coach</span>
          <span className="mx-4">Event Planner / Decorator</span>
          <span className="mx-4">Real Estate Agent</span>
          <span className="mx-4">Therapist / Counsellor</span>
          <span className="mx-4">Restaurant / Food Vendor</span>
        </Marquee>
      </div> */}










    </div>
  )
}

export default Mainscreen
