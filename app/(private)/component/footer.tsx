import React from 'react'

const Footer = () => {
    return (
        <div className='w-full min-h-screen flex-wrap bg-gradient-to-br from-blue via-gray-900 to-black flex items-center justify-between  border-[grey]      ' >


            <div className='w-full md:w-[200px] sm:m-[10px] md:m-[20px]' >
                <img className='w-full md:w-[200px] ' src="/logo.jpeg" alt="" />
                <div className='text-[white] ml-[20px]  mt-[10px] sm:ml-[0px] ' >
                    AI for business

                </div>

            </div>



            <div className=' text-[15px] mt-[20px]  ml-[20px] mb-[30px] sm:gap-[60px] flex-wrap md:text-[16px] lg:text-[18px] sm:flex md:gap-[50px] lg:gap-[100px] sm:mr-[100px] ' >
                <div className='flex flex-col mt-[20px] gap-[20px] sm:mt-[0px]  ' >
                    <h2>Quick Links</h2>
                    <ul className='text-[grey]  flex flex-col gap-[10px] ' >
                        <li className=' hover:text-[white] '>Resources</li>
                        <li className=' hover:text-[white] '>About Us</li>
                        <li className=' hover:text-[white] '>FAQ</li>
                        <li className=' hover:text-[white] '>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <div className='flex flex-col mt-[30px]  gap-[20px]  sm:mt-[0px]   ' >
                        <h2>Social</h2>
                        <ul className='text-[grey] flex flex-col gap-[10px] ' >
                            <li className=' hover:text-[white] ' >Instagram</li>
                            <li className=' hover:text-[white] '>Linkedin</li>
                            <li className=' hover:text-[white] '>Twitter</li>
                            <li className=' hover:text-[white] '>Youtube</li>
                        </ul>
                    </div>

                </div>
                <div>
                    <div className='flex flex-col mt-[30px]  gap-[20px] sm:mt-[0px]   ' >
                        <h2>Legal</h2>
                        <ul className='text-[grey]  flex flex-col gap-[10px] ' >
                            <li className=' hover:text-[white] ' >Terms of service</li>
                            <li className=' hover:text-[white] '>Privacy policy</li>
                            <li className=' hover:text-[white] '>Cookie policy</li>

                        </ul>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Footer
