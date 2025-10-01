'use client'
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Orb from '../component/starbg'

const AiChats = () => {
  return (
    <div className='w-full select-none min-h-screen bg-[black] bg-gradient-to-br from-blue-900 via-gray-900 to-black flex flex-col'>
      <div className='flex border-b-[1px] flex-wrap p-[10px] sm:p-[15px] items-center justify-between gap-[10px]'>

        <div className='text-[white] font-semibold pl-[10px] sm:pl-[20px] text-[16px] sm:text-[18px] md:text-[20px]  '>
          Cognivue Chat
        </div>
        <div className='flex items-center gap-[8px] sm:gap-[10px] flex-wrap'>
          <div className='flex items-center bg-[white] text-[black] gap-[5px] p-[8px] sm:p-[10px] rounded-[30px] cursor-pointer hover:opacity-90 transition-opacity'>
            <div className='text-[12px] sm:text-[14px] md:text-[15px]' >
              Share
            </div>
            <div>
              <Icon icon="lucide:share" width="14" height="14" className='sm:w-[15px] sm:h-[15px]' style={{ color: "#000000ff" }} />
            </div>
          </div>

          <div className='flex text-[12px] sm:text-[14px] md:text-[15px] gap-[5px] items-center bg-gradient-to-r p-[8px] sm:p-[10px] rounded-[30px] from-blue-500 to-purple-600 text-[white] cursor-pointer hover:opacity-90 transition-opacity'>
            <div>
              New Chat
            </div>
            <div>
              <Icon icon="ri:chat-ai-fill" width="14" height="14" className='sm:w-[15px] sm:h-[15px]' style={{ color: "#fff" }} />
            </div>
          </div>
        </div>
      </div>

      <div className='flex-1 flex flex-col relative'>
        <div className='absolute inset-0 w-full h-full'>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}

          />
        </div>

        <div className="relative top-0 z-10 flex flex-col items-center flex-1 px-[5px] sm:px-[5px] pt-[5px] sm:pt-[10px]">
          <div className="flex justify-center items-center gap-[5px]">
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-white">Hi, there</h2>
            <Icon icon="noto:waving-hand" width="20" height="20" className='sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px]' />
          </div>

          <p className="text-gray-400 text-[14px] sm:text-[16px] md:text-[18px] text-center mt-[5px]">
            Tell us what you need, and we'll handle the rest
          </p>
        </div>

        <div className="relative z-10 pb-[15px] sm:pb-[20px] md:pb-[30px] px-[10px] sm:px-[20px]">
          <div className="flex w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[65%] xl:max-w-[60%] mx-auto rounded-[8px] sm:rounded-[10px] bg-neutral-800 border border-gray-600">
            <textarea
              rows={1}
              className="w-full px-[12px] sm:px-[15px] md:px-[18px] py-[10px] sm:py-[12px] md:py-[14px] bg-transparent text-white placeholder-gray-400 resize-none overflow-hidden outline-none text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5]"
              placeholder="Ask me anything"
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto"; 
                target.style.height = target.scrollHeight + "px";
              }}
            />

            <div className="bg-white min-w-[65px] sm:min-w-[75px] md:min-w-[90px] h-[38px] sm:h-[42px] md:h-[46px] rounded-[30px] flex items-center justify-center m-[8px] sm:m-[10px] gap-[3px] sm:gap-[5px] text-black cursor-pointer hover:opacity-90 transition-opacity flex-shrink-0">
              <Icon
                icon="line-md:arrow-up"
                width="13"
                height="17"
                className='sm:w-[14px] sm:h-[18px] md:w-[15px] md:h-[20px]'
              />
              <button className="text-[11px] sm:text-[13px] md:text-[14px] font-medium pr-[8px] sm:pr-[10px]">Send</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AiChats