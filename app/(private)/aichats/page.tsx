import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { ShootingStarsAndStarsBackgroundDemo } from '../component/starbg'

const AiChats = () => {
  return (
    <div className=' w-full bg-[black] bg-gradient-to-br from-blue via-gray-900 to-black' >
      <div className='flex bg-[black] p-[20px] items-center justify-between' >
        <div className='text-[18px]  ' >
          Cognivue Chat
        </div>
        <div className='flex items-center gap-[10px] ' >
          <div className='flex items-center bg-[white] text-[black] gap-[5px] p-[10px] rounded-[30px] ' >
            <div>
              Share
            </div>
            <div>
              <Icon icon="lucide:share" width="20" height="20" style={{ color: "#000000ff" }} />
            </div>
          </div>

          <div className='flex gap-[5px]  items-center bg-gradient-to-r p-[10px] rounded-[30px] from-indigo-500 via-purple-500 to-cyan-400 text-[white]' >


            <div>
              New Chat
            </div>
            <div>
              <Icon icon="ri:chat-ai-fill" width="20" height="20" style={{ color: "#fff" }} />
            </div>

          </div>

        </div>
      </div>

      <div>
        <div>
          <ShootingStarsAndStarsBackgroundDemo/>

        </div>





      </div>

     
    </div>
  )
}

export default AiChats
