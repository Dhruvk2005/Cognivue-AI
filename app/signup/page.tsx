import Link from "next/link"
const Signup = () => {


    return (
        <div className="w-full h-[695px] bg-[#c9355a] flex justify-center items-center style-none " >


            <div className="w-[800px] h-[680px] bg-[black] rounded-[20px]  " >
                <div className="p-[20px] font-semibold "  >
                    <h2  >Cognivue AI</h2>

                </div>

                <div className="w-full flex-wrap gap-[50px]  flex flex-col items-center" >



                    <div className="w-[700px]" >
                        <h1 className="text-[40px] text-center font-bold " >Create your account</h1>
                        <p className="" >Cognivue AI transforms your ideas into intelligent solutions - sign up and start the journey today.</p>
                    </div>

                    <div className=" flex  flex-wrap flex-col gap-[5px]  w-[400px]  ">
                        <label className="flex gap-[10px] font-semibold " htmlFor="Text">

                            First Name

                        </label>
                        <input className="border-[white] w-full border-[2px] rounded-[5px] p-[5px] " type="text" placeholder="Enter your First Name" />
                        <label className="flex mt-[30px]  font-semibold gap-[10px]" htmlFor="Text">

                            Email

                        </label>
                        <input className="border-[white] border-[2px] rounded-[5px] p-[5px]   " type="wmail" placeholder="Enter your email" />
                        <label className="flex mt-[30px]  font-semibold gap-[10px]" htmlFor="Text">

                            Password

                        </label>
                        <input className="border-[white] border-[2px] rounded-[5px] p-[5px]  " type="password" placeholder="Enter your Password" />

                        



                    </div>

                    <div >
                        <p className="flex gap-[5px]" >Already have an account

                            <Link className="text-[#0000FF] underline  " href={''} >Log in</Link>
                        </p>
                    </div>
                    <div>
                        <button className="bg-[#85132f] p-[10px] rounded-[10px]   font-semibold hover:cursor-pointer hover:bg-[#610c21]  " >Submit</button>
                    </div>
                    
                </div>



            </div>




        </div>
    )
}

export default Signup   