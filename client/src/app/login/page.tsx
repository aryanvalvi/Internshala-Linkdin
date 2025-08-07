"use client"
import {useAppContext} from "@/context/ContextProvider"
import {useRouter} from "next/navigation"
import React, {useState} from "react"

const Page = () => {
  const {setUser} = useAppContext()
  const router = useRouter()
  const [userdata, setUserdata] = useState<any>({
    email: "",
    password: "",
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
    const res = await fetch("http://taskapi.uiuxyn.xyz:5005/login", {
      method: "post",
      credentials: "include",
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
      }, 600)
    } else {
      setSuccess(false)
    }
    setrespnse(data.message)
  }

  return (
    <div className="mt-30">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mb-6 max-w-md mx-auto "
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            name="email"
            onChange={handleChange}
            type="email"
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
            onChange={handleChange}
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          Login
        </button>
      </form>
    </div>
  )
}

export default Page
