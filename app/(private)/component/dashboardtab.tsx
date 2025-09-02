import React from 'react'

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
      Revenue:'30%'
    },
    {
      title: "Growth",
      Revenue:"5%"
    }
  ]

  return (
    <div>
      <div className='text-[black] pl-[20px] p-[10px] font-semibold  text-[25px]  ' >
        Dashboard
      </div>

      <div className='p-[20px] flex  gap-[20px] ' >

        {boxes.map((items) => (



          <div className='w-[250px] h-[150px] border-[2px] p-[15px] text-[#475467] border-[#EAECF0] text-[20px] rounded-[10px] ' >
            {items.title}

            <div className='text-[40px] text-[black]  font-semibold ' >
              {items.Revenue}

            </div>
          </div>
        ))}

      </div>
      <div>

      </div>
    </div>
  )
}

export default Dashboardtab
