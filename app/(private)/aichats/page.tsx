'use client'
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Orb from '../component/starbg'

const AiChats = () => {
  return (
    <div className='w-full select-none h-[690px] bg-[black] bg-gradient-to-br from-blue-900 via-gray-900 to-black'>
      <div className='flex border-b-[1px]  p-[10px] items-center justify-between'>

        <div className='text-[18px] font-semibold '>
          Cognivue Chat
        </div>
        <div className='flex items-center gap-[10px]'>
          <div className='flex items-center bg-[white] text-[black] gap-[5px] p-[10px] rounded-[30px]'>
            <div className='text-[15px]' >
              Share
            </div>
            <div>
              <Icon icon="lucide:share" width="15" height="15 " style={{ color: "#000000ff" }} />
            </div>
          </div>

          <div className='flex text-[15px]  gap-[5px] items-center bg-gradient-to-r p-[10px] rounded-[30px] from-indigo-500 via-purple-500 to-cyan-400 text-[white]'>
            <div>
              New Chat
            </div>
            <div>
              <Icon icon="ri:chat-ai-fill" width="15" height="15" style={{ color: "#fff" }} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='relative  ' style={{ width: '100%', height: '600px', position: 'relative' }}>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}

          />

          <div className="absolute top-0 left-0 right-0 z-10 flex flex-col items-center">
            <div className="flex mt-[10px] justify-center items-center">
              <h2 className="text-[20px] font-semibold text-white">Hi, there</h2>
              <Icon icon="noto:waving-hand" width="24" height="24" />
            </div>

            <p className="text-gray-400">
              Tell us what you need, and we'll handle the rest
            </p>

            <div className="mt-[30px]">
            </div>
          </div>

          <div className="absolute flex bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] mt-[20px] rounded-md bg-neutral-800 border border-gray-600">
            <textarea
              rows={1}
              className="w-full px-3 py-2 bg-transparent text-white placeholder-gray-400 resize-none overflow-hidden outline-none"
              placeholder="Ask me anything"
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = target.scrollHeight + "px";
              }}
            />

            <div className="bg-white w-[100px] h-[40px] rounded-[30px] flex items-center m-[10px] gap-[5px] text-black">
              <Icon
                className="ml-[5px]"
                icon="line-md:arrow-up"
                width="15"
                height="20"
              />
              <button>Send</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AiChats