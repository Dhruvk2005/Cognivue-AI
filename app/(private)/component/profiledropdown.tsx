'use client'
import React, { useEffect, useState } from 'react'

const profiledropdown = (props:any) => {

    const [name, setName] = useState<any>("")
    const [email, setEmail] = useState<any>("")


    useEffect(() => {
        const userName = localStorage.getItme("username")
        const email = localStorage.getItem("email")
        setName(userName)
        setEmail(email)

    }, [])


    return (
        <div className='h-[200px] w-[200px] ' >
            <div>
                <li>
                    <label htmlFor="text">Name</label>
                    <div>
                        {name}

                    </div>
                </li>
                <li>
                    <label htmlFor="text">Email</label>
                    <div>
                        {email}

                    </div>
                </li>


            </div>
        </div>
    )
}

export default profiledropdown
