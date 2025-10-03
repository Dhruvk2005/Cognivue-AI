import axios from "axios";
import React from "react";



const Cognivue_url = process.env.COG


export const SignUp = async (data: any) => {
    try {
        let res = await axios({
            method: "post",
            url: `http://localhost:5000/api/auth/signup`,
            data: data,
            headers: {
                "content-type": "application/json "
            },

        })
        localStorage.setItem("username", res.data.name)
        localStorage.setItem("email", res.data.email)

        return res.data

    } catch (err) {
        console.log(err)
    }
}


export const LoginApi = async (data: any) => {
    try {
        let res = await axios({
            method: "post",
            url: `http://localhost:5000/api/auth/login`,
            data: data,
            headers: {
                "content-type": "application/json"
            }
        })


        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.name);
        localStorage.setItem("email", res.data.email);

        return res.data

    } catch (err) {
        console.log(err)

    }
}




