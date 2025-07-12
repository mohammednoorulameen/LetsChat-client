

"use client"

import { useState, useRef, useEffect } from "react"
import type React from "react"
import { Edit2 } from "lucide-react"
// import { Button } from "@/components/ui/button"
const ForgotPassword = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""])
  const [timeLeft, setTimeLeft] = useState(40)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Countdown timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [timeLeft])

  // Input change handler
  const handleInputChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus()
      }

      // Auto-submit if full
      if (newCode.join("").length === 6) {
        handleSubmit(newCode.join(""))
      }
    }
  }

  // Handle backspace
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  // Handle paste of 6-digit OTP
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)
    if (pasted.length === 6) {
      const newCode = pasted.split("")
      setCode(newCode)
      newCode.forEach((val, idx) => {
        if (inputRefs.current[idx]) inputRefs.current[idx]!.value = val
      })
      inputRefs.current[5]?.focus()
      handleSubmit(pasted)
    }
  }

  // Submit OTP
  const handleSubmit = (codeString?: string) => {
    const verificationCode = codeString || code.join("")
    if (verificationCode.length === 6) {
      console.log("Verification code:", verificationCode)
      // Add your verification logic here
    }
  }

  // Resend OTP
  const handleResendOTP = () => {
    setTimeLeft(40)
    setCode(["", "", "", "", "", ""])
    inputRefs.current[0]?.focus()
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="mb-16">
        <div className="border-2 border-white px-4 py-2">
          <span className="text-white text-xl font-bold tracking-wider">LETSCHAT</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-md space-y-8">
        {/* Title */}
        <h1 className="text-white text-2xl font-medium text-center tracking-wide">VERIFICATION CODE</h1>

        {/* Phone Number */}
        <div className="flex items-center justify-center gap-2 text-white">
          <span>test@gmail.com</span>
          <Edit2 className="w-4 h-4 cursor-pointer" />
        </div>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3">
          {code.map((digit, index) => (
            <input
              key={index}
            //   ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-12 h-12 bg-transparent border-2 border-gray-600 rounded text-white text-center text-lg focus:border-teal-500 focus:outline-none"
            />
          ))}
        </div>

        {/* Submit Button */}
        {/* <Button
          onClick={() => handleSubmit()}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg font-medium rounded"
          disabled={code.join("").length !== 6}
        >
          SUBMIT
        </Button> */}

         <button
          onClick={() => handleSubmit()}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg font-medium rounded"
          disabled={code.join("").length !== 6}
        >
          SUBMIT
        </button>

        {/* Resend OTP */}
        <div className="text-center">
          {timeLeft > 0 ? (
            <span className="text-gray-400">Resend OTP in {timeLeft} seconds</span>
          ) : (
            <button onClick={handleResendOTP} className="text-teal-500 hover:text-teal-400 cursor-pointer">
              Resend OTP
            </button>
          )}
        </div>
      </div>
    </div>
  )
}



export default ForgotPassword