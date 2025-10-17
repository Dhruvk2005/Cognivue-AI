'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Orb from '../component/starbg'
import { aiInsights } from "@/api's/allapis"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PluggableList } from "unified";

const AiChats = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([])
  const [loading, setLoading] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const handleSend = async () => {
    if (!input.trim()) return

    setMessages(prev => [...prev, { role: 'user', text: input }])
    setLoading(true)
    setInput('')

    try {
      const data = await aiInsights(input)
      const aiText = data?.insights || 'No response from AI'
      setMessages(prev => [...prev, { role: 'ai', text: aiText }])
    } catch (err) {
      console.error(err)
      setMessages(prev => [...prev, { role: 'ai', text: 'Error fetching AI response' }])
    } finally {
      setLoading(false)
    }

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
  }

  return (
    <div className='w-full select-none min-h-screen bg-[black] bg-gradient-to-br from-blue-900 via-gray-900 to-black flex flex-col relative'>

      {/* Background Orb */}
      <div className='absolute inset-0 w-full h-full'>
        <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
      </div>

      {/* Header */}
     <div className='flex  border-b-1 border-white/40  flex-wrap p-[10px] sm:p-[15px] items-center justify-between gap-[10px]'>

        <div className='text-[white] font-semibold pl-[10px] sm:pl-[20px] text-[16px] sm:text-[18px] md:text-[20px]  '>
          Cognivue Chat
        </div>
        <div className='flex items-center gap-[8px] sm:gap-[10px] flex-wrap'>
          <div className='flex items-center bg-[white] text-[black] gap-[5px] p-[8px] sm:p-[10px] rounded-[30px] cursor-pointer hover:opacity-90 transition-opacity'>
            <div className='text-[12px] sm:text-[14px] md:text-[15px]' >
              Share
            </div>
            <div>
              <Icon icon="lucide:share" width="14" height="14" className='sm:w-[15px] sm:h-[15px]' style={{ color: "#000000ff" }} />
            </div>
          </div>

          <div className='flex text-[12px] sm:text-[14px] md:text-[15px] gap-[5px] items-center bg-gradient-to-r p-[8px] sm:p-[10px] rounded-[30px] from-blue-500 to-purple-600 text-[white] cursor-pointer hover:opacity-90 transition-opacity'>
            <div>
              New Chat
            </div>
            <div>
              <Icon icon="ri:chat-ai-fill" width="14" height="14" className='sm:w-[15px] sm:h-[15px]' style={{ color: "#fff" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 flex flex-col overflow-y-auto px-4 sm:px-6 py-4 z-10 relative space-y-3 scrollbar-none">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[75%] px-4 py-3 rounded-2xl shadow-md transition-all duration-300
            ${msg.role === 'user'
                ? 'self-end bg-blue-600 text-white rounded-br-none hover:scale-105 transform'
                : 'self-start bg-gray-800 text-white rounded-bl-none hover:scale-105 transform'
              }`}
          >
            {msg.role === "ai" ? (
              <ReactMarkdown
                remarkPlugins={[remarkGfm] as PluggableList}
                components={{
                  h3: ({ node, ...props }) => <h3 className="text-blue-400 text-lg font-semibold mt-2 mb-1" {...props} />,
                  ul: ({ node, ...props }) => <ul className="list-disc list-inside ml-4 space-y-1" {...props} />,
                  li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                  strong: ({ node, ...props }) => <strong className="font-semibold text-blue-300" {...props} />
                }}
              >
                {msg.text ?? ''}
              </ReactMarkdown>
            ) : (
              <div>{msg.text ?? ''}</div>
            )}
          </div>
        ))}

        {loading && (
          <div className="self-start max-w-[60px] p-2 rounded-full bg-gray-700 flex items-center justify-center space-x-1 animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></span>
            <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-300"></span>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="relative z-10 p-4 sm:p-6 flex justify-center">
        <div className="flex w-full max-w-[75%] bg-neutral-900/70 border border-gray-700 rounded-3xl shadow-lg px-4 py-2 items-center gap-3 backdrop-blur-sm">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={1}
            placeholder="Ask me anything..."
            className="w-full bg-transparent text-white placeholder-gray-400 resize-none outline-none text-sm sm:text-base leading-5 transition-all duration-200"
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement
              target.style.height = 'auto'
              target.style.height = target.scrollHeight + 'px'
            }}
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full flex items-center gap-2 text-white font-semibold transition-all duration-200"
          >
            <Icon icon="line-md:arrow-up" width="16" height="20" />
            <span className="text-sm sm:text-base">Send</span>
          </button>
        </div>
      </div>

      {/* Custom scrollbar hide */}
      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

export default AiChats
