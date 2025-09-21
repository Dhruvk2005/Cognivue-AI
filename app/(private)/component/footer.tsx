import React from 'react'

const Footer = () => {
    return (
        <div className='w-full bg-gradient-to-br from-blue via-gray-900 to-black flex items-center justify-between  border-[grey]' >


            <div className='w-[180px] m-[100px]' >
                <img className='w-[200px]' src="/logo.jpeg" alt="" />
                <div className='text-[grey]  m-[13px] ' >
                    AI for business
                    Indore,MadhyaPradesh
                    India
                </div>

            </div>



            <div className='mt-[40px] flex gap-[100px] mr-[100px] ' >
                <div className='flex flex-col gap-[20px]  ' >
                    <h2>Quick Links</h2>
                    <ul className='text-[grey] flex flex-col gap-[10px] ' >
                        <li  className=' hover:text-[white] '>Resources</li>
                        <li  className=' hover:text-[white] '>About Us</li>
                        <li  className=' hover:text-[white] '>FAQ</li>
                        <li  className=' hover:text-[white] '>Contact Us</li>
                    </ul>
                </div>
                <div>
                     <div className='flex flex-col gap-[20px]  ' >
                    <h2>Social</h2>
                    <ul className='text-[grey] flex flex-col gap-[10px] ' >
                        <li   className=' hover:text-[white] ' >Instagram</li>
                        <li  className=' hover:text-[white] '>Linkedin</li>
                        <li  className=' hover:text-[white] '>Twitter</li>
                        <li  className=' hover:text-[white] '>Youtube</li>
                    </ul>
                </div>
                    
                </div>
                <div>
                     <div className='flex flex-col gap-[20px]  ' >
                    <h2>Legal</h2>
                    <ul className='text-[grey]  flex flex-col gap-[10px] ' >
                        <li  className=' hover:text-[white] ' >Terms of service</li>
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
