import React from 'react'
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Dashboardtab from '../component/dashboardtab';

const SideNav = () => {

  const options: any = [
    {
      title: "Dashboard",
      icon: <Icon icon="tabler:home-filled" width="24" height="27" style={{ color: "#fff" }} />
    },
    {
      title: 'Upload Data',
      icon: <Icon icon="iconoir:upload-data-window" width="24" height="27" style={{ color: "#fff" }} />
    },
    {
      title: 'AI Insights',
      icon: <Icon icon="token:ait" width="24" height="27" style={{ color: '#fff' }} />

    },
    {
      title: 'AI Chat',
      icon: <Icon icon="ri:chat-ai-fill" width="24" height="27" style={{ color: "#fff" }} />
    },
    {
      title: "Profile",
      icon: <Icon icon="ix:user-profile-filled" width="24" height="27" style={{ color: "#fff" }} />,
      href: '/login'
    }
  ]

  return (
    <div className='  min-h-screen bg-[white] flex ' >
      <div className="max-w-[300px]   bg-[black] h-[700px] bg-center bg-cover " >
        <div className='w-full p-[20px]' >
          <img className='w-[200px]  ' src="./logo1.png" alt="" />

        </div >

        <div className='w-full pl-[22px] flex flex-col gap-[20px]  ' >
          {options.map((items: any) => (


            <ul className='flex w-[280px] p-[10px] gap-[10px] transition-all rounded-[5px] hover:ml-[8px]  hover:bg-white/10 hover:text-white
 hover:bg-opacity-4 hover:cursor-pointer hover:border-l-[5px] ' >
              <li className='' >{items.icon}</li>
              <li className='text-[20px] text-[white]'>{items?.title}</li>
            </ul>

          ))}
        </div>

      </div>
     

    </div>
  )
}

export default SideNav
