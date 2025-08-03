"use client"
import {useAppContext} from "@/context/ContextProvider"
import Link from "next/link"
import {useRouter} from "next/navigation"
import React from "react"

const Navbar = () => {
  const router = useRouter()
  const {user, setUser} = useAppContext()
  console.log(user)
  const firstLetter = user?.username[0].toUpperCase() || "User"

  const handleLogout = async () => {
    try {
      const res = await fetch("http://144.91.104.106:5005/logout", {
        method: "GET",
        credentials: "include",
      })

      if (res.ok) {
        setUser(null)
        router.push("/login")
      }
    } catch (error) {}
  }
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold text-gray-800">Mini LinkedIn</h1>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href={"/"}>
            <button className="text-gray-600 hover:text-blue-500">Home</button>
          </Link>
          <Link href={"/profile"}>
            <button className="text-gray-600 hover:text-blue-500">
              Profile
            </button>
          </Link>
          {!user ? (
            <div>
              <Link href={"/signup"}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Sign Up
                </button>
              </Link>
              <Link href={"/login"}>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                  Login
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-2 ml-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-semibold">
                {firstLetter}
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
