"use client"
import {createContext, useContext, useEffect, useState} from "react"

// type UserContextType = {
//   user: User
//   setUser: React.Dispatch<React.SetStateAction<User>>
// }
export const UserContext = createContext<any>(undefined)

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState(null)
  const [toggle, setToggle] = useState(null)
  console.log(user)

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch("https://taskapi.uiuxyn.xyz:5005/checkUser", {
          method: "GET",
          credentials: "include",
        })
        const data = await res.json()
        console.log(data)
        if (data.user) {
          setUser(data.user.userData)
        }
      } catch (error) {
        console.log("Not logged in")
      }
    }
    getUser()
  }, [])

  return (
    <UserContext.Provider value={{user, setUser, toggle, setToggle}}>
      {children}
    </UserContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(UserContext)
}
