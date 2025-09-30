'use client'
import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const SideNav = (props: any) => {
  const options: any = [
    { title: "Dashboard", icon: <Icon icon="tabler:home-filled" width="24" height="27" style={{ color: "#fff" }} />, href: '/dashboard' },
    { title: 'Upload Data', icon: <Icon icon="iconoir:upload-data-window" width="24" height="27" style={{ color: "#fff" }} />, href: '/uploaddata' },
    { title: 'AI Insights', icon: <Icon icon="token:ait" width="24" height="27" style={{ color: '#fff' }} />, href: "/aiinsights" },
    { title: 'AI Chat', icon: <Icon icon="ri:chat-ai-fill" width="24" height="27" style={{ color: "#fff" }} />, href: '/aichats' },
    { title: "Profile", icon: <Icon icon="ix:user-profile-filled" width="24" height="27" style={{ color: "#fff" }} />, href: '/profile' }
  ]

  const [showNav, setShowNav] = useState(false)

  // Disable body scroll when sidebar is open (mobile only)
  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [showNav])

  return (
    <div className="flex select-none">

      
      {showNav && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setShowNav(false)}
        />
      )}

    
      <div
        className={`
          bg-[#0b0b0b] flex flex-col transition-transform duration-300
          fixed top-0 left-0 h-screen w-[300px] z-40
          ${showNav ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0
        `}
      >
        
        <div className="w-full flex justify-between items-center p-[20px] flex-shrink-0">
          <img className="w-[180px]" src="./logo1.png" alt="Logo" />
          <Icon
            className="cursor-pointer lg:hidden -mt-[25px] "
            onClick={() => setShowNav(false)}
            icon="line-md:menu-fold-left"
            width="24"
            height="24"
            style={{ color: "#fff" }}
          />
        </div>

        
        <div className="flex-1 overflow-y-auto pl-[22px] mt-[20px]">
          <ul className="flex flex-col gap-[20px] pb-[40px]">
            {options.map((items: any, index: number) => (
              <Link
                href={items.href}
                key={index}
                onClick={() => setShowNav(false)} 
              >
                <li className="flex w-[270px] p-[10px] gap-[10px] transition-all rounded-[5px] hover:ml-[8px] hover:bg-white/10 hover:text-white hover:bg-opacity-40 hover:cursor-pointer hover:border-l-[5px]">
                  {items.icon}
                  <span className="text-[20px] text-white">{items.title}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      
      <div
        className={`
          flex-1 transition-all duration-300
          ${showNav ? "ml-0" : "ml-0"} 
          lg:ml-[300px]  /* Push content on desktop */
        `}
      >
        {/* Open button (mobile only) */}
        {!showNav && (
          <div
            className="cursor-pointer lg:hidden"
            onClick={() => setShowNav(true)}
          >
            <Icon
              className="absolute top-[64px] bg-[#0b0b0b] cursor-pointer"
              icon="line-md:menu-fold-right"
              width="30"
              height="30"
              style={{ color: "#fff" }}
            />
          </div>
        )}
        {props.children}
      </div>
    </div>
  )
}

export default SideNav
