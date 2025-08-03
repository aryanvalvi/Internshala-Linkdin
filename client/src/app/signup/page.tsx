"use client"

import {useAppContext} from "@/context/ContextProvider"
import {useRouter} from "next/navigation"
import React, {useState} from "react"

const Page = () => {
  const {setUser} = useAppContext()
  const router = useRouter()
  const [userdata, setUserdata] = useState<any>({
    name: "",
    email: "",
    password: "",
    bio: "",
  })
  const [success, setSuccess] = useState<any>(false)
  const [respnse, setrespnse] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserdata((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const res = await fetch("http://localhost:5005/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    })
    const data = await res.json()
    if (res.ok) {
      setSuccess(true)
      setUser(data)
      setTimeout(() => {
        router.push("/")
      }, 2000)
    } else {
      setSuccess(false)
    }
    setrespnse(data.message)
  }
  return (
    <div className="mt-30">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mb-6 max-w-md mx-auto"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            name="name"
            onChange={handleChange}
            value={userdata.name}
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            name="email"
            value={userdata.email}
            type="email"
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            name="password"
            value={userdata.password}
            type="password"
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Bio</label>
          <textarea
            name="bio"
            value={userdata.bio}
            onChange={handleChange}
            placeholder="Tell us about yourself"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>

        {!success ? (
          <h1 className="text-red-600 font-semibold text-center text-lg mb-4">
            {respnse}
          </h1>
        ) : (
          <h1 className="text-green-600 font-semibold text-center text-lg mb-4">
            {respnse}
          </h1>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Page
