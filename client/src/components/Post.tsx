"use client"
import React, {useState} from "react"

const PostForm = () => {
  const [text, setText] = useState("")

  // const handleChange = (e: any) => {}

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const res = await fetch("http://144.91.104.106:5005/createpost", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({text}),
      })
      const data = await res.json()
    } catch (error) {}
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md mb-6"
    >
      <textarea
        value={text}
        onChange={(e: any) => setText(e.target.value)}
        placeholder="Share your thoughts..."
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={4}
      />
      <button
        type="submit"
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
      >
        Post
      </button>
    </form>
  )
}

export default PostForm
