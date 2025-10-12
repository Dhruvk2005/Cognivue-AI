'use client'
import React, { useState, useRef } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Orb from '../component/starbg'
import { aiInsights } from "@/api's/allapis"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";



const AiChats = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([])
  const [loading, setLoading] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSend = async () => {
    if (!input.trim()) return

    // Add user message
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

    // Auto resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
  }

  return (
    <div className='w-full select-none min-h-screen bg-[black] bg-gradient-to-br from-blue-900 via-gray-900 to-black flex flex-col'>
      {/* Header */}
      <div className='flex border-b-1 border-white/40 flex-wrap p-[10px] sm:p-[15px] items-center justify-between gap-[10px]'>
        <div className='text-[white] font-semibold pl-[10px] sm:pl-[20px] text-[16px] sm:text-[18px] md:text-[20px]'>Cognivue Chat</div>

      </div>

      {/* Background Orb */}
      <div className='flex-1 flex flex-col relative'>
        <div className='absolute inset-0 w-full h-full'>
          <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
        </div>

        {/* Chat Container */}
        <div className="relative z-10 flex-1 overflow-y-auto px-[10px] sm:px-[20px] py-[10px] flex flex-col gap-[10px]">
         {messages.map((msg, idx) => (
  <div
    key={idx}
    className={`max-w-[80%] p-[10px] rounded-[10px] ${
      msg.role === "user"
        ? "bg-blue-600 text-white self-end"
        : "bg-gray-800 text-white self-start"
    }`}
  >
    {msg.role === "ai" ? (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="prose prose-invert max-w-none"
        components={{
          h3: ({ node, ...props }) => (
            <h3 className="text-lg font-semibold mt-3 mb-2 text-blue-400" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside space-y-1 ml-4" {...props} />
          ),
          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          strong: ({ node, ...props }) => (
            <strong className="font-semibold text-blue-300" {...props} />
          ),
        }}
      >
        {msg.text}
      </ReactMarkdown>
    ) : (
      <div>{msg.text}</div>
    )}
  </div>
))}

          {loading && (
            <div className="max-w-[80%] p-[10px] rounded-[10px] bg-gray-700 text-white self-start animate-pulse">
             Processing...
            </div>
          )}
        </div>

        {/* Input */}
        <div className="relative z-10 pb-[15px] sm:pb-[20px] md:pb-[30px] px-[10px] sm:px-[20px]">
          <div className="flex w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[65%] xl:max-w-[60%] mx-auto rounded-[8px] sm:rounded-[10px] bg-neutral-800 border border-gray-600">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={1}
              className="w-full px-[12px] sm:px-[15px] md:px-[18px] py-[10px] sm:py-[12px] md:py-[14px] bg-transparent text-white placeholder-gray-400 resize-none overflow-hidden outline-none text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5]"
              placeholder="Ask me anything"
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = target.scrollHeight + "px";
              }}
            />

            <div
              onClick={handleSend}
              className="bg-white min-w-[65px] sm:min-w-[75px] md:min-w-[90px] h-[38px] sm:h-[42px] md:h-[46px] rounded-[30px] flex items-center justify-center m-[8px] sm:m-[10px] gap-[3px] sm:gap-[5px] text-black cursor-pointer hover:opacity-90 transition-opacity flex-shrink-0"
            >
              <Icon icon="line-md:arrow-up" width="13" height="17" />
              <span className="text-[11px] sm:text-[13px] md:text-[14px] font-medium pr-[8px] sm:pr-[10px]">Send</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AiChats
