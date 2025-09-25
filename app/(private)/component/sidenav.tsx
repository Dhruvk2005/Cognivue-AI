'use client'
import React from 'react'
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Dashboardtab from '../component/dashboardtab';
import { div } from 'motion/react-m';
import { useState } from 'react';
import { tree } from 'next/dist/build/templates/app-page';

const SideNav = (props: any) => {

  const options: any = [
    {
      title: "Dashboard",
      icon: <Icon icon="tabler:home-filled" width="24" height="27" style={{ color: "#fff" }} />,
      href: '/dashboard'
    },
    {
      title: 'Upload Data',
      icon: <Icon icon="iconoir:upload-data-window" width="24" height="27" style={{ color: "#fff" }} />,
      href: '/uploaddata'
    },
    {
      title: 'AI Insights',
      icon: <Icon icon="token:ait" width="24" height="27" style={{ color: '#fff' }} />,
      href: "/aiinsights"

    },
    {
      title: 'AI Chat',
      icon: <Icon icon="ri:chat-ai-fill" width="24" height="27" style={{ color: "#fff" }} />,
      href: '/aichats'
    },
    {
      title: "Profile",
      icon: <Icon icon="ix:user-profile-filled" width="24" height="27" style={{ color: "#fff" }} />,
      href: '/profile'
    }
  ]


  const [showNav, setShowNav] = useState(false)

  return (
    <div className='flex select-none '>




      <div className={`fixed top-0 left-0 h-screen w-[300px]  bg-[#0b0b0b]  flex flex-col transform transition-transform duration-300 ${showNav ? "translate-x-0" : "-translate-x-full"} `}>


        <div className='w-full flex justify-between items-center p-[20px]'>

          <img className='w-[200px]' src="./logo1.png" alt="Logo" />
          <div className='-mt-[25px]' >

            <Icon className='cursor-pointer'  onClick={() => setShowNav(false)} icon="line-md:menu-fold-left" width="24" height="24" style={{ color: "#fff" }} />
          </div>
        </div>

        <div className="w-full pl-[22px] flex flex-col gap-[20px] mt-[20px]">
          <ul className="flex flex-col gap-[20px]">
            {options.map((items: any, index: number) => (
              <Link href={items.href} key={index}>
                <li className="flex w-[270px] p-[10px] gap-[10px] transition-all rounded-[5px] hover:ml-[8px] hover:bg-white/10 hover:text-white hover:bg-opacity-40 hover:cursor-pointer hover:border-l-[5px]">
                  {items.icon}
                  <span className="text-[20px] text-white">{items.title}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>


      <div className={`${showNav ? "ml-[300px]" : "ml-0"} transition-all duration-300 flex-1`}>

        {!showNav && (

          <div className='cursor-pointer' onClick={() => setShowNav(true)} >
            <Icon  className='absolute top-[50]  bg-[#0b0b0b]  ml-[10px] cursor-pointer ' icon="line-md:menu-fold-right" width="24" height="24" style={{ color: "#fff" }} />
          </div>
        )
        }
        {props.children}
      </div>




    </div>

  )
}

export default SideNav
