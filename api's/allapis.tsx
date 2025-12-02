import axios from "axios";
import React from "react";



const Cognivue_url = process.env.COGNIVUE_URL


export const SignUp = async (data: any) => {
    try {
        let res = await axios({
            method: "post",
            url: `https://cognivue-ai-backend.onrender.com/api/auth/signup`,
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
            url: `https://cognivue-ai-backend.onrender.com/api/auth/login`,
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




export const upload = async (file: any) => {
    try {
        const formData = new FormData();
        formData.append("file", file)

        const res = await axios.post(
            `https://cognivue-ai-backend.onrender.com/api/upload`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        console.log("File uploaded", res.data)
        return res.data
    } catch (err) {
        console.log(err)
    }
}


export const aiInsights = async (data: any) => {
    try {
        const res = await axios.post(

            `https://cognivue-ai-backend.onrender.com/api/ai/analyze`,
            { data },
            {
                headers: {
                    "Content-Type": "application/json"
                },

            }

        )
        return res.data

    } catch (err) {
        console.error("AI Insights Error:", err);
        return null;

    }
}

export const chatWithAI = async(data:any)=>{
    try{
        const res = await axios.post(
            `https://cognivue-ai-backend.vercel.app/api/aichat/chatwithai`,
            {data},
            {
                headers:{
                    "content-Type":"application/json"
                },
            }

        )
        return res.data

    }catch(err){
        console.log(err)
    }
}


export const fetchUpload = async () => {
    try {
        const res = await axios.get("https://cognivue-ai-backend.onrender.com/api/upload/fetchUploads");
        console.log("Fetched data: ", res.data);
        return res.data;
    } catch (err) {
        console.error("Unable to fetch data", err);
        return null;
    }
};
