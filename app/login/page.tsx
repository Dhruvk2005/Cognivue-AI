import Link from "next/link"
const Login = () => {


    return (
        <div className="w-full min-h-screen flex  justify-center items-center bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat">



            <div className="w-[80%]   h-[680px] bg-[black] rounded-[20px] flex  " >

                <div className=" w-[50%] relative m-[20px] rounded-[20px] bg-[url('/bg.jpg')] bg-cover bg-center "  >
                    <p className="p-[20px] font-semibold " >Cognivue AI...</p>

                    <p className="absolute text-[30px] p-[20px] w-[70%] bottom-15 font-semibold ">Step into the future with Congnivue AI</p>
                    <p className="absolute bottom-0 p-[20px] " >Unlock intelligent insights, seamless automation, and smarter decisions—built for tomorrow’s innovators.</p>


                </div>
                <div className="  w-[60%]  flex relative  flex-col items-center" >
                    <div className="p-[20px] font-semibold "  >
                        <h2  >Cognivue AI</h2>

                    </div>

                    <div className="w-full   flex-wrap gap-[50px]  flex flex-col items-center" >



                        <div className="max-w-[700px]" >
                            <h1 className="text-[40px] text-center font-bold " >Hey, welcome back</h1>
                            <p className="" >“Your cognition starts here… after you remember your password.”</p>
                        </div>

                        <div className=" flex h-[auto] flex-wrap flex-col w-[60%] ">

                            <div className="flex  flex-col gap-[5px]" >


                                <label className="flex  font-semibold " htmlFor="Text">

                                    First Name

                                </label>
                                <input className="border-[white] w-full border-[2px] rounded-[10px] p-[10px] " type="text" placeholder="Enter your First Name" />
                            </div>
                            <div className="flex  flex-col gap-[5px]" >


                                <label className="flex mt-[30px]  font-semibold gap-[10px]" htmlFor="Text">

                                    Email

                                </label>
                                <input className="border-[white] w-full border-[2px] rounded-[10px] p-[10px]   " type="wmail" placeholder="Enter your email" />
                            </div>

                            <div className="flex  flex-col gap-[5px]" >


                                <label className="flex mt-[30px]  font-semibold gap-[10px]" htmlFor="Text">

                                    Password

                                </label>
                                <input className="border-[white] w-full border-[2px] rounded-[10px] p-[10px]  " type="password" placeholder="Enter your Password" />
                            </div>


                            <div>
                                <button className="bg-[#002D72] w-full p-[7px] rounded-[10px] font-semibold  mt-[10px]  hover:cursor-pointer hover:bg-[#012761]  " >Submit</button>
                            </div>



                        </div>
                        <div className="flex justify-center ">
                            <p className="flex gap-[5px]" >Don't have an account?

                                <Link className="text-[#002D72]   " href={'/signup'} >Sign up</Link>
                            </p>
                        </div>



                    </div>

                </div>




            </div>




        </div>
    )
}

export default Login       