"use client"

import {useAppContext} from "@/context/ContextProvider"
import Navbar from "../components/Navbar"
import PostForm from "@/components/Post"
import PostList from "@/components/PostList"

// import {Post} from "@/types"

// const SignUp = () => (

// )

// const Login = () => (

// )

// const PostForm = () => (

// )

// const PostList = ({posts}: {posts: any[]}) => (
//   <div className="space-y-4">
//     {posts.map(post => (
//       <PostCard key={post.id} post={post} />
//     ))}
//   </div>
// )

const dummyPosts: any[] = [
  {
    id: "1",
    content: "Excited to join this community! Looking forward to connecting.",
    author: {name: "John Doe"},
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    content:
      "Just finished a great project! Anyone interested in collaborating?",
    author: {name: "Jane Smith"},
    createdAt: new Date(Date.now() - 3600000).toISOString(),
  },
]

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
