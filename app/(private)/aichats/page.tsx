import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Orb from '../component/starbg'

const AiChats = () => {
  return (
    <div className=' w-full bg-[black] bg-gradient-to-br from-blue via-gray-900 to-black' >
      <div className='flex bg-[black] p-[20px] items-center justify-between' >

        <div className='text-[18px]  ' >
          Cognivue Chat
        </div>
        <div className='flex items-center gap-[10px] ' >
          <div className='flex items-center bg-[white] text-[black] gap-[5px] p-[10px] rounded-[30px] ' >
            <div>
              Share
            </div>
            <div>
              <Icon icon="lucide:share" width="20" height="20" style={{ color: "#000000ff" }} />
            </div>
          </div>

          <div className='flex gap-[5px]  items-center bg-gradient-to-r p-[10px] rounded-[30px] from-indigo-500 via-purple-500 to-cyan-400 text-[white]' >


            <div>
              New Chat
            </div>
            <div>
              <Icon icon="ri:chat-ai-fill" width="20" height="20" style={{ color: "#fff" }} />
            </div>

          </div>

        </div>
      </div>

      <div>

        <div className='relative' style={{ width: '100%', height: '600px', position: 'relative' }}>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />

          <div className="h-[40rem] rounded-md  w-full absolute top-0 left-0 right-0  ">

            <div className="relative z-10 flex flex-col items-center">
              <div className="flex mt-[10px] justify-center items-center">
                <h2 className="text-[20px] font-semibold text-white">Hi, there</h2>
                <Icon icon="noto:waving-hand" width="24" height="24" />
              </div>

              <p className="text-gray-400 ">
                Tell us what you need, and we'll handle the rest
              </p>

              <div className="mt-[30px]" >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe obcaecati soluta expedita facilis inventore eius! Incidunt rem nesciunt modi, distinctio sunt repellendus sit nostrum eos cum doloribus, voluptatibus magnam minus.
                Eaque, nisi placeat aperiam libero fuga, totam, dolor voluptate omnis vero magnam illo cupiditate praesentium quisquam deserunt delectus quod iusto perspiciatis obcaecati laborum. Dolorem repellat rem quaerat facilis praesentium dicta?
                Quos ratione vel officia architecto, maiores perspiciatis, accusantium quidem provident aliquid dicta corporis nemo atque nesciunt. Sint totam maiores minima, delectus, recusandae est eaque possimus, fugit dolore dolores molestias alias.
                Commodi modi enim dicta a repudiandae suscipit aperiam amet voluptatem quasi! Ab magni voluptates unde quam necessitatibus tempore numquam obcaecati. Quibusdam similique necessitatibus odio corporis animi reprehenderit sequi cupiditate doloribus!
                Magnam alias doloribus ab quisquam tempora similique unde eius suscipit voluptates exercitationem aperiam facere ullam dolores odit hic aliquam, nemo quam, illum natus, esse est aspernatur totam debitis facilis! Commodi?
                Animi nostrum consequatur praesentium eius hic itaque accusamus ex suscipit, quisquam, commodi maiores? Eos non fuga, saepe odio iste vero deserunt doloribus, ab aspernatur eum impedit nostrum mollitia, voluptas quia.
                Possimus voluptatem maiores velit vitae rerum commodi quia voluptate similique pariatur nulla laboriosam adipisci repellendus necessitatibus corporis in provident magnam non, enim porro. Consectetur totam autem fuga aliquid, atque deleniti?
                Impedit nulla architecto doloribus. Distinctio animi sint quidem veritatis deserunt cupiditate ex? Atque earum quod deleniti reiciendis corporis explicabo. Nobis fugit quis vero sunt laboriosam asperiores assumenda voluptatibus quo rem.
                Repudiandae, suscipit numquam. In enim nemo eius accusamus nesciunt earum ipsam rerum, quis fugit, deleniti eaque, nisi magnam error cumque atque dolorem sapiente id natus ex voluptatum asperiores incidunt quisquam?
                Sequi rerum dolore autem. Ipsum magni eligendi, nulla voluptate doloremque totam expedita omnis ab dicta recusandae quasi, harum aspernatur voluptates cum tempore placeat culpa voluptatum accusantium? Exercitationem incidunt nisi numquam!

              </div>


              <div className="w-[60%] mt-[20px] rounded-md  bg-neutral-800    border border-gray-600 " >

                <input
                  className="w-full  px-3 py-2
                  text-white placeholder-gray-400
                "
                  type="text"
                  placeholder="Ask me anything"


                />


                <div className="flex justify-between" >
                  <div>hi</div>
                  <div className="bg-[white]  w-[80px] h-[40px] rounded-[30px] flex items-center m-[10px] gap-[5px]   text-[black]" >
                    <Icon className="ml-[5px]" icon="line-md:arrow-up" width="15" height="20" style={{ color: "#000000ff" }} />

                    <button className="" >Send</button>
                  </div>
                </div>

              </div>
            </div>



          </div>


        </div>








      </div>


    </div>
  )
}

export default AiChats
