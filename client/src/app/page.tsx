"use client"

import {useAppContext} from "@/context/ContextProvider"
import Navbar from "../components/Navbar"
import PostForm from "@/components/Post"
import PostList from "@/components/PostList"

export default function Home() {
  const {user, setUser} = useAppContext()
  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1>{user}</h1> */}
      <button onClick={() => setUser("gandu")}>Change</button>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Community Feed</h1>
      <PostForm />
      <PostList />
    </div>
  )
}
