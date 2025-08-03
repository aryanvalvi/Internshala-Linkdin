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
  console.log(user)

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch("http://144.91.104.106/checkUser", {
          method: "GET",
          credentials: "include",
        })
        const data = await res.json()
        console.log(data)
        if (data.user) {
          setUser(data.user)
        }
      } catch (error) {
        console.log("Not logged in")
      }
    }
    getUser()
  }, [])

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(UserContext)
}
