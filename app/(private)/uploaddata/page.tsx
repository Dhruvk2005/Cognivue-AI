"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { upload } from "@/api's/allapis";

const UploadData = () => {
    const [files, setFiles] = useState<any>([]);
    const [uploading, setUploading] = useState(false)

    const handleFileUpload = (e: any) => {
        const uploaded = Array.from(e.target.files)
        setFiles([...files, ...uploaded])
    }

    const handleDrop = (e: any) => {
        e.preventDefault();
        const dropped = Array.from(e.dataTransfer.files);
        setFiles([...files, ...dropped]);
    };


    const handleUploadToServer = async () => {
        setUploading(true)
        if (files.length === 0) {
            return alert("Please select file")
        }

        const response = await upload(files[0])
        setUploading(false)
        console.log("server response: ", response)
    }

    return (
        <div className="w-full select-none min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black ">
            <div className='flex  border-b-1 border-white/40  p-[20px] items-center justify-between'>

                <div className='text-[white] font-semibold pl-[10px] sm:pl-[20px] text-[16px] sm:text-[18px] md:text-[20px]   '>
                    Upload Data
                </div>

            </div>


            <div className="w-[100%] p-[20px] flex-wrap gap-[30px] flex justify-center mt-[30px]" >




                <div

                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className=" w-[100%] p-[20px] md:[100%] lg:w-[60%]  border-2 border-dashed border-white/20 rounded-2xl  flex flex-col items-center justify-center 
        bg-white/5 backdrop-blur-md hover:bg-white/10 transition cursor-pointer"
                >
                    <Icon className="mt-[10px]" icon="ep:upload-filled" width="28" height="28" style={{ color: "#fff" }} />
                    <p className="text-white text-[20px]">Drag & Drop files here</p>
                    <span className="text-gray-400 text-[10px] my-2">or</span>
                    <label className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white text-[20px]  font-medium cursor-pointer hover:opacity-90">
                        Browse Files
                        <input
                            type="file"
                            multiple
                            className="hidden"
                            onChange={handleFileUpload}
                        />
                    </label>
                </div>


                <div className=" w-[300px] sm:w-[400px] bg-[white] p-[20px] rounded-2xl text-[black] " >
                    <p className="font-bold text-[20px] " >Upload Instructions ~</p>
                    <ul className="flex flex-col gap-[5px]" >

                        <li className="flex items-center " ><Icon icon="bi:dot" width="16" height="16" style={{ color: "#000" }} />Drag & drop files, or click to browse.</li>
                        <li className="flex items-center" ><Icon icon="bi:dot" width="16" height="16" style={{ color: "#000" }} />Supported formats: CSV, XLSX, JSON, TXT.</li>
                        <li className="flex items-center" ><Icon icon="bi:dot" width="16" height="16" style={{ color: "#000" }} />Maximum size: e.g., 50 MB per file.</li>
                        <li className="" ><b>Security note: </b>

                            “Your data is encrypted and processed securely. We never share it with third parties.”</li>
                    </ul>
                </div>
            </div>




            {files.length > 0 && (
                <div className="mt-[20px] m-[10px] bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
                    <h2 className="text-xl font-semibold text-white mb-4">Upload History</h2>
                    <ul className="space-y-3">
                        {files.map((file: any, index: any) => (
                            <li
                                key={index}
                                className="flex justify-between items-center bg-black/30 px-4 py-2 rounded-lg text-white"
                            >
                                <span>{file.name}</span>
                                <span className="text-gray-400 text-sm">
                                    {(file.size / 1024).toFixed(2)} KB
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div>
                        <button
                            onClick={handleUploadToServer}
                           
                            className={`mt-[20px]   px-6 py-2 rounded-lg text-white font-semibold transition ${uploading
                                ? "bg-gray-600 cursor-not-allowed"
                                : "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
                                }`}
                        >
                            {uploading ? "Uploading..." : "Upload to Server"}
                        </button>

                    </div>
                </div>
            )}


        </div>
    );
};

export default UploadData;
