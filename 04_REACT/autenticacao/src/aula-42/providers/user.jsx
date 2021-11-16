import { useState, createContext, useContext } from "react";

export const UserContext = createContext({})

export function UserProvider(props) {
  const [user, setUser] = useState({name: "Jackson"});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}



