import React from 'react'
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Dashboardtab from '../component/dashboardtab';

const Dashboard = () => {

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
      <div className='w-full min-h-screen ' >

        <div className=' bg-[white] border-b-[2px] flex justify-between items-center ' >


          <div className=' relative w-[400px] p-[12px] bg-[white]   ' >

            <input className='  bg-black/10 backdrop-blur-sm
 text-[black] w-[400px] rounded-[30px] p-[15px] ' type="text" placeholder='Search' />
            <Icon className='absolute top-1/3 right-0 ' icon="ri:search-line" width="24" height="24" style={{ color: "#000" }} />

          </div>

          <div className='flex items-center gap-[30px] '  >
            <Icon className=' cursor-pointer ' icon="basil:notification-solid" width="28" height="28" style={{ color: "#000" }} />

            <div className="flex items-center gap-[10px] mr-[20px] bg-[url('/bg.jpg')] bg-opacity-0 p-[10px] bg-cover bg-center rounded-[30px] cursor-pointer ">

              <Icon icon="ix:user-profile-filled" width="28" height="28" style={{ color: "#fff" }} />
              <div className='flex items-center gap-[10px] ' >
                <span className='text-[white] text-[18px] font-semibold  ' >Dhruv K</span>
               <Icon icon="line-md:chevron-down" width="24" height="24"  style={{color: "#fff"}} />

              </div>

            </div>


          </div>
        </div>



        <div>
          <Dashboardtab />
        </div>

      </div>

    </div>
  )
}

export default Dashboard
