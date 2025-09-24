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
    <div>


      <div className='w-full min-h-screen bg-[black] bg-gradient-to-br from-blue-900 via-gray-900 to-black   ' >

        <div className=' border-b-[1px] flex-wrap flex justify-between items-center ' >

          <div className='text-[white] font-semibold pl-[20px] p-[10px] text-[18px]  ' >
            Dashboard
          </div>




          <div className='flex  items-center gap-[30px] p-[10px] '  >
            <Icon className=' cursor-pointer ' icon="basil:notification-solid" width="28" height="28" style={{ color: "#ffffffff" }} />

            <div className="flex items-center gap-[10px] mr-[20px] bg-gradient-to-r p-[10px] rounded-[30px] from-indigo-500 via-purple-500 to-cyan-400 text-[white] bg-opacity-0 bg-cover bg-center rounded-[30px] cursor-pointer ">

              <Icon icon="ix:user-profile-filled" width="24" height="24" style={{ color: "#fff" }} />
              <div className='flex items-center gap-[10px] ' >
                <span className='text-[white] text-[18px] font-semibold  ' >Dhruv K</span>
                <Icon icon="line-md:chevron-down" width="20" height="20" style={{ color: "#fff" }} />

              </div>

            </div>


          </div>
        </div>

        <div className=' relative   w-[400px] p-[12px]    ' >


          <div className="relative w-[400px]">
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
      border border-white/20
      focus:outline-none
      focus:ring-2 focus:ring-white-500
      transition
    "
            />
            <Icon
              icon="ri:search-line"
              width={24}
              height={24}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-white/80"
            />
          </div>


        </div>

        <div className='p-[20px] flex flex-wrap  gap-[20px] ' >

          {boxes.map((items) => (



            <div className='w-[250px] h-[150px] bg-[#1E1E1E]  border-[1px] p-[15px] text-[#475467] border-[#EAECF0] text-[white] text-[20px] rounded-[10px] ' >
              {items.title}

              <div className='text-[40px] text-[white]  font-semibold ' >
                {items.Revenue}

              </div>
            </div>
          ))}

        </div>
        <div className='w-full ' >



          <div className=' w-full flex justify-between p-[20px]  ' >

            <LineChartComponent />
            <ExpenseBreakdown />


          </div>

          <div className='p-[20px] gap-[30px] flex justify-between w-full' >

            <div className='w-[50%]' >
              <CustomerAcquisition />
            </div>

            <div className=' w-[50%] gap-[15px] flex flex-col' >



              <div className='w-full  ' >
                <div className='bg-[white] text-black rounded-[10px] p-[20px] '  >
                  <h1 className='font-semibold' >AI Insights</h1>
                  <div>
                    <ul className='flex flex-col gap-[10px]' >
                      <li>Expected revenue next month : 8%</li>
                      <li>Top performing product: X</li>
                      <li>Cost saving opportunities: Reduce Y expenses</li>
                    </ul>

                  </div>

                </div>

              </div>

              <div className='w-full' >
                <div className='bg-[white] text-black rounded-[10px] p-[20px] '  >
                  <h1 className='font-semibold' >Recent activity</h1>
                  <div>
                    <ul className='flex flex-col gap-[10px]' >
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
