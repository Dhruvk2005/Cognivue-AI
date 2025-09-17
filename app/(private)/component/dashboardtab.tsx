import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Example from './linechart'
import ApexChartsComponent from './linechart'
import LineChartComponent from './linechart'
import AiInsights from '../aiinsights/page'
import aiinsightchat from './aiinsightchat'


const Dashboardtab = () => {

  const boxes = [
    {
      title: "Total Revenue",
      Revenue: '$1.2M'
    },
    {
      title: "Total Expenses",
      Revenue: '$299'
    },
    {
      title: "Profit Margin",
      Revenue: '30%'
    },
    {
      title: "Growth",
      Revenue: "5%"
    }
  ]

  return (
    <div>


      <div className='w-full min-h-screen   ' >

        <div className=' bg-[white] border-b-[2px] flex-wrap flex justify-between items-center ' >

          <div className='text-[black] pl-[20px] p-[10px] font-semibold  text-[25px]  ' >
            Dashboard
          </div>




          <div className='flex  items-center gap-[30px] '  >
            <Icon className=' cursor-pointer ' icon="basil:notification-solid" width="28" height="28" style={{ color: "#000" }} />

            <div className="flex items-center gap-[10px] mr-[20px] bg-[url('/bg.jpg')] bg-opacity-0 p-[10px] bg-cover bg-center rounded-[30px] cursor-pointer ">

              <Icon icon="ix:user-profile-filled" width="28" height="28" style={{ color: "#fff" }} />
              <div className='flex items-center gap-[10px] ' >
                <span className='text-[white] text-[18px] font-semibold  ' >Dhruv K</span>
                <Icon icon="line-md:chevron-down" width="24" height="24" style={{ color: "#fff" }} />

              </div>

            </div>


          </div>
        </div>

        <div className=' relative  w-[400px] p-[12px] bg-[white]   ' >


          <input className='  bg-black/10 backdrop-blur-sm
 text-[black] w-[400px] rounded-[30px] p-[15px] ' type="text" placeholder='Search' />
          <Icon className='absolute top-1/3 right-0 ' icon="ri:search-line" width="24" height="24" style={{ color: "#000" }} />

        </div>

        <div className='p-[20px] flex flex-wrap  gap-[20px] ' >

          {boxes.map((items) => (



            <div className='w-[250px] h-[150px] bg-[#002A65]  border-[2px] p-[15px] text-[#475467] border-[#EAECF0] text-[white] text-[20px] rounded-[10px] ' >
              {items.title}

              <div className='text-[40px] text-[white]  font-semibold ' >
                {items.Revenue}

              </div>
            </div>
          ))}

        </div>
        <div className='w-full ' >



          <div className='p-[20px]  ' >

            <LineChartComponent />

          </div>

          <div>

          

           
           





          </div>



        </div>




      </div>


      <div>

      </div>
    </div>
  )
}

export default Dashboardtab
