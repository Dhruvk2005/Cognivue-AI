'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { useEffect } from 'react'
import Loading from '../component/loading'
import { useRouter } from 'next/navigation'

const Profile = () => {

    const [name, setName] = useState<any>("")
    const [email, setEmail] = useState<any>("")
    const [loading, setLoading] = useState(false)

    const router = useRouter()


    useEffect(() => {
        const storedName = localStorage.getItem("username")
        const storedEmail = localStorage.getItem("email")
        setName(storedName)
        setEmail(storedEmail)

    })


    const handleLoginClick = () => {
        setLoading(true)
        setTimeout(() => {
            router.push("/login")
            setLoading(false)

        }, 2000)
    }

    if (loading) {
        return <Loading />
    }


    return (
        <div className='min-h-screen select-none h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black'>
            <section>
                <div className='flex  border-b-1 border-white/40  p-[15px] items-center justify-between'>

                    <div className='text-[white] font-semibold pl-[10px] sm:pl-[20px] text-[16px] sm:text-[18px] md:text-[20px]  '>
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


                        <div onClick={handleLoginClick} className='flex text-[15px]  gap-[5px] items-center  p-[10px] rounded-[30px]  bg-gradient-to-r from-blue-500 to-purple-600 text-[white]'>
                           
                                
                                    Log in
                           

                        </div>
                    </div>
                </div>

                <div className=' w-[100%] p-[20px] mt-[40px]  md:p-[40px] md:mt-[0px] ' >
                    <h1 className='text-[50px]' >Profile</h1>
                    <div className=' w-[100%] bg-white/5 
  backdrop-blur-md 
  border border-white/10 
  p-[20px] 
  flex flex-col justify-center 
  md:w-[80%] 
  gap-[40px] 
  rounded-xl' >



                        <div className='flex gap-[40px] items-center' >


                            <div className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-[100%] bg-[white] ' >

                            </div>
                            <div>
                                <ul><li className='text-[30px]  ' >{name}</li>
                                    <li className='text-[grey]' >{email}</li></ul>
                            </div>
                        </div>

                        <div>
                            <ul className=' flex flex-col gap-[30px] ' >
                                <li className='flex flex-col gap-[10px]' >
                                    <label htmlFor="text">Full Name</label>
                                    <div className='border-[grey] p-[10px] border-[1px] ' >
                                        {name}

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
                                        {email}

                                    </div>

                                </li>
                            </ul>


                        </div>





                    </div>

                </div >



            </section >

        </div >
    )
}

export default Profile
