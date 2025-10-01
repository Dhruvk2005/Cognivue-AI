import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Example from './linechart'
import ApexChartsComponent from './linechart'
import LineChartComponent from './linechart'
import AiInsights from '../aiinsights/page'
import aiinsightchat from './aiinsightchat'
import ExpenseBreakdown from './expenseschart'
import CustomerAcquisition from './acquistionchart'


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
    <div className='select-none' >


      <div className='w-full min-h-screen bg-[black] bg-gradient-to-br from-blue-900 via-gray-900 to-black   ' >

        <div className=' border-b-[1px] flex-wrap flex justify-between items-center p-[10px] sm:p-[15px] gap-[10px] ' >

          <div className='text-[white] font-semibold pl-[10px] sm:pl-[20px] text-[16px] sm:text-[18px] md:text-[20px]  ' >
            Dashboard
          </div>




          <div className='flex flex-wrap  items-center gap-[15px] sm:gap-[20px] md:gap-[30px]   '  >
            <Icon  icon="basil:notification-solid" width="24" height="24" className='  cursor-pointer  w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] md:w-[28px] md:h-[28px]' style={{ color: "#ffffffff" }} />

            <div className="flex items-center gap-[8px] sm:gap-[10px] mr-[10px] sm:mr-[20px] bg-gradient-to-r p-[8px] sm:p-[10px]  bg-gradient-to-r from-blue-500 to-purple-600 text-[white] bg-opacity-0 bg-cover bg-center rounded-[30px] cursor-pointer ">

              <Icon icon="ix:user-profile-filled" width="20" height="20" className='w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]' style={{ color: "#fff" }} />
              <div className='flex items-center gap-[8px] sm:gap-[10px] ' >
                <span className='text-[white] text-[14px] sm:text-[16px] md:text-[18px] font-semibold  ' >Dhruv K</span>
                <Icon icon="line-md:chevron-down" width="16" height="16" className='w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px]' style={{ color: "#fff" }} />

              </div>

            </div>


          </div>
        </div>

        <div className=' relative w-full max-w-[400px] p-[12px] px-[15px] sm:px-[20px]    ' >


          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="
      w-full
      bg-black/20 backdrop-blur-md
      text-white
      placeholder-gray-400
      rounded-full
      px-4 py-2
      text-[14px] sm:text-[15px] md:text-[16px]
      border border-white/20
      focus:outline-none
      focus:ring-2 focus:ring-white-500
      transition
    "
            />
            <Icon
              icon="ri:search-line"
              width={20}
              height={20}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-white/80 w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]"
            />
          </div>


        </div>

        <div className='p-[15px] sm:p-[20px] flex flex-wrap gap-[15px] sm:gap-[20px] ' >

          {boxes.map((items, index) => (



            <div key={index} className='w-full min-[500px]:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] min-h-[130px] sm:min-h-[150px] bg-white/5 border border-white/10 p-[15px] sm:p-[18px] text-[#475467]  text-[white] text-[16px] sm:text-[18px] md:text-[20px] rounded-[10px] ' >
              {items.title}

              <div className='text-[32px] sm:text-[36px] md:text-[40px] text-[white] font-semibold mt-[8px] sm:mt-[10px] ' >
                {items.Revenue}

              </div>
            </div>
          ))}

        </div>
        <div className='w-full ' >



          <div className=' w-full flex flex-col lg:flex-row gap-[20px] sm:gap-[25px] md:gap-[30px] p-[15px] sm:p-[20px]  ' >

          
              <LineChartComponent />
           
           
              <ExpenseBreakdown />
       


          </div>

          <div className='p-[15px] sm:p-[20px] gap-[20px] sm:gap-[25px] md:gap-[30px] flex flex-col lg:flex-row w-full' >

            <div className='w-full lg:w-[50%]' >
              <CustomerAcquisition />
            </div>

            <div className=' w-full lg:w-[50%] gap-[15px] sm:gap-[20px] flex flex-col' >



              <div className='w-full  ' >
                <div className='bg-[white] text-black rounded-[10px] p-[15px] sm:p-[18px] md:p-[20px] '  >
                  <h1 className='font-semibold text-[16px] sm:text-[17px] md:text-[18px] mb-[10px] sm:mb-[12px]' >AI Insights</h1>
                  <div>
                    <ul className='flex flex-col gap-[8px] sm:gap-[10px] text-[13px] sm:text-[14px] md:text-[15px]' >
                      <li>Expected revenue next month : 8%</li>
                      <li>Top performing product: X</li>
                      <li>Cost saving opportunities: Reduce Y expenses</li>
                    </ul>

                  </div>

                </div>

              </div>

              <div className='w-full' >
                <div className='bg-[white] text-black rounded-[10px] p-[15px] sm:p-[18px] md:p-[20px] '  >
                  <h1 className='font-semibold text-[16px] sm:text-[17px] md:text-[18px] mb-[10px] sm:mb-[12px]' >Recent activity</h1>
                  <div>
                    <ul className='flex flex-col gap-[8px] sm:gap-[10px] text-[13px] sm:text-[14px] md:text-[15px]' >
                      <li>Expected revenue next month : 8%</li>
                      <li>Top performing product: X</li>
                      <li>Cost saving opportunities: Reduce Y expenses</li>
                    </ul>

                  </div>

                </div>

              </div>
            </div>
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