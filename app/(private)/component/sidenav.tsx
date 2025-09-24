'use client'
import React from 'react'
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Dashboardtab from '../component/dashboardtab';
import { div } from 'motion/react-m';

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
      href: '/login'
    }
  ]

  return (
    <div className='flex'>
     
      <div className="fixed top-0 left-0 h-screen w-[300px] bg-black flex flex-col">
        <div className='w-full p-[20px]'>
          <img className='w-[200px]' src="./logo1.png" alt="Logo" />
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

    
      <div className="ml-[300px] flex-1">
        {props.children}
      </div>
    </div>

  )
}

export default SideNav
