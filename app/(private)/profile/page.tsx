import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

const Profile = () => {
    return (
        <div className=' h-[690px] bg-gradient-to-br from-blue-900 via-gray-900 to-black'>
            <section>
                <div className='flex border-b-[1px]  p-[10px] items-center justify-between'>

                    <div className='text-[18px] font-semibold '>
                        User Profile
                    </div>
                    <div className='flex items-center gap-[10px]'>
                        <div className='flex items-center bg-[white] text-[black] gap-[5px] p-[10px] rounded-[30px]'>
                            <Link
                            href={"/signup"}
                            >
                            <div className='text-[15px]' >
                                Sign up
                            </div>
                            </Link>

                        </div>
                        

                        <div className='flex text-[15px]  gap-[5px] items-center  p-[10px] rounded-[30px]  bg-gradient-to-r from-blue-500 to-purple-600 text-[white]'>
                            <Link
                            href={"/login"}
                        
                            >
                            <div>
                                Log in
                            </div>
                            </Link>

                        </div>
                    </div>
                </div>

                <div className='p-[40px]  ' >
                    <h1 className='text-[50px]' >Profile</h1>
                    <div className='<div className="
  bg-white/5 
  backdrop-blur-md 
  border border-white/10 
  p-[20px] 
  flex flex-col justify-center 
  w-[80%] 
  gap-[40px] 
  rounded-xl
">
  {/* profile details here */}
</div>
 p-[20px] flex flex-col justify-center w-[80%] gap-[40px]' >

                        <div className='flex gap-[40px] items-center' >


                            <div className=' w-[100px] h-[100px] rounded-[100%] bg-[white] ' >

                            </div>
                            <div>
                                <ul><li className='text-[30px]  ' >Dhruv</li>
                                    <li className='text-[grey]' >Dhruv@gmail.com</li></ul>
                            </div>
                        </div>

                        <div>
                            <ul className=' flex flex-col gap-[30px] ' >
                                <li className='flex flex-col gap-[10px]' >
                                    <label htmlFor="text">Full Name</label>
                                    <div className='border-[grey] p-[10px] border-[1px] ' >
                                        Dhruv

                                    </div>

                                </li>
                                <li className='flex flex-col gap-[10px]' >
                                    <label htmlFor="text">Business Name</label>
                                    <div className='border-[grey] p-[10px] border-[1px] ' >
                                        Cognivue company

                                    </div>

                                </li>
                                <li className='flex flex-col gap-[10px]' >
                                    <label htmlFor="email">Email</label>
                                    <div className='border-[grey] p-[10px] border-[1px] ' >
                                        Dhruv@gmail.com

                                    </div>

                                </li>
                            </ul>


                        </div>





                    </div>

                </div>



            </section>

        </div>
    )
}

export default Profile
