'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SignUp } from "@/api's/allapis"
import React, { FormEvent, useState } from "react"
import Loading from "@/app/(private)/component/loading"
const Signup = () => {


    const router = useRouter()

    const userData = () => ({
        name: "",
        email: "",
        password: ""
    })


    const [user, setUser] = useState(userData())
    const [ loading, setLoading] = useState(false)
    

    const handleChange = (e: any) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmitUser = async(e: React.FormEvent)=>{
        e.preventDefault()
        
          setLoading(true)
        try{
             const res = await SignUp(user)
             console.log("User Data: ",res)
             setTimeout(()=>{

                 router.push("/login")
                 setLoading(false)
             },1500)

        }catch(err){
            console.log("Error during signup:", err)
            setLoading(false)
        }
       
       
    }

    if(loading){
        return <Loading/>
    }




    return (
        <div className="w-full min-h-screen flex p-[10px] justify-center items-center bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat lg:p-[0px] ">



            <div className="w-[100%] h-[680px] bg-[black] rounded-[20px] flex md:w-[80%]    " >

                <div className=" w-[50%] relative m-[20px] rounded-[20px] bg-[url('/bg.jpg')] bg-cover bg-center hidden lg:block "  >
                    <p className="p-[20px] font-semibold " >Cognivue AI...</p>

                    <p className="absolute text-[30px] p-[20px] w-[70%] bottom-15 font-semibold mb-[20px] xl:mb-[5px] ">Step into the future with Congnivue AI</p>
                    <p className="absolute bottom-0 p-[20px]   " >Unlock intelligent insights, seamless automation, and smarter decisions—built for tomorrow’s innovators.</p>


                </div>
                <div className=" w-full flex relative  flex-col items-center lg:w-[60%]  " >
                    <div className="pt-[20px] font-semibold "  >
                        <img className="w-[100px]" src="./logo.jpeg" alt="" />

                    </div>

                    <div className="w-full   flex-wrap gap-[50px]  flex flex-col items-center" >



                        <div className="max-w-[700px] flex flex-col items-center  " >
                            <h1 className="text-[30px]  font-bold md:text-[40px] " >Create your account</h1>
                            <p className=" text-[15px] text-center" >Cognivue AI transforms your ideas into intelligent solutions - sign up and start the journey today.</p>
                        </div>


                        <div className=" flex h-[auto] flex-wrap flex-col w-[70%] ">
                            
                        <form action="" onSubmit={handleSubmitUser}>

                            <div className="flex  flex-col gap-[5px]" >


                                <label className="flex  font-semibold " htmlFor="Text">

                                    Name

                                </label>
                                <input className="border-[grey] w-full border-[1px] rounded-[8px] p-[10px] " onChange={handleChange} name="name" type="text" value={user.name} placeholder="Enter your First Name" />
                            </div>
                            <div className="flex  flex-col gap-[5px]" >


                                <label className="flex mt-[30px]  font-semibold gap-[10px]" htmlFor="Text">

                                    Email

                                </label>
                                <input className="border-[grey] w-full border-[1px] rounded-[8px] p-[10px]   " onChange={handleChange} name="email" type="email" value={user.email} placeholder="Enter your email" />
                            </div>

                            <div className="flex  flex-col gap-[5px]" >


                                <label className="flex mt-[30px]  font-semibold gap-[10px]" htmlFor="Text">

                                    Password

                                </label>
                                <input className="border-[grey] w-full border-[1px] rounded-[8px] p-[10px]  " onChange={handleChange} name="password" type="password" value={user.password} placeholder="Enter your Password" />
                            </div>


                            <div>
                                <button className="bg-[#002D72] w-full p-[10px] rounded-[8px] font-semibold  mt-[10px]  hover:cursor-pointer hover:bg-[#012761]  " >Submit</button>
                            </div>



                        </form>
                        </div>
                        <div className="flex justify-center ">
                            <p className="flex gap-[5px]" >Already have an account,

                                <Link className="text-[#002D72]   " href={'/login'} >Log in</Link>
                            </p>
                        </div>



                    </div>

                </div>




            </div>




        </div>
    )
}

export default Signup   