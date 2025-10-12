'use client'
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Loading from '../component/loading'
import { fetchUpload } from '@/api\'s/allapis'

const AiInsights = () => {
  const [uploads, setUploads] = useState<any>([])
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    const getUploads = async () => {
      const data = await fetchUpload()
      setUploads(data || [])
      setLoading(false)
    }

    getUploads()
  }, [])

  if (loading) return <Loading />

  return (
    <div className='min-h-screen select-none h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black'>
      <section>
        {/* Header */}
        <div className='flex border-b border-white/40 p-4 items-center justify-between'>
          <div className='text-white font-semibold text-[18px] sm:text-[20px] md:text-[22px] pl-2 sm:pl-4'>
            AI Insights
          </div>

          <div className='flex items-center gap-3'>
            <Link href='/'>
              <div className='bg-white text-black px-4 py-2 rounded-full text-sm'>
                Home
              </div>
            </Link>

            <div
              onClick={() => router.push('/profile')}
              className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm cursor-pointer'
            >
              Profile
            </div>
          </div>
        </div>

        {/* Insights list */}
        <div className='w-full p-4 md:p-10'>
          <h1 className='text-white text-4xl mb-6'>Uploaded Insights</h1>

          <div className='w-full md:w-[85%] grid gap-6'>
            {uploads.length === 0 ? (
              <div className='text-white/70'>No uploads found.</div>
            ) : (
              uploads.map((item:any, index:number) => (
                <div
                  key={item._id || index}
                  className='w-full bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl flex flex-col gap-4'
                >
                  <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
                    <div>
                      <h2 className='text-xl font-semibold text-white mb-2'>
                        File: <span className='text-blue-300'>{item.fileName}</span>
                      </h2>
                      <p className='text-sm text-white/60'>Uploaded by: {item.userEmail}</p>
                      <p className='text-sm text-white/60'>Size: {(item.size / 1024).toFixed(2)} KB</p>
                    </div>

                    <a
                      href={`https://cognivue-ai-backend.onrender.com/${item.path}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='mt-4 sm:mt-0 text-sm text-blue-400 hover:underline'
                    >
                      Download File
                    </a>
                  </div>

                  <div>
                    <h3 className='text-white font-semibold text-lg mb-2'>AI Insights</h3>
                    <p className='text-white/80 text-sm'>
                      {item.aiInsights || 'No insights available.'}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AiInsights
