'use client'
import { createContext,useEffect,useState } from "react"

export const NotifierContext = createContext();


const NotifierProvider = ({children}) =>{
  const [notifierVisible, setNotifierVisible] = useState(false)
  const [notifierMessage,setNotifierMessage] = useState('')
  const notify = (msg) =>{
    setNotifierMessage(msg)
    setNotifierVisible(true)
    setTimeout(()=>{
      setNotifierVisible(false)
      setNotifierMessage('')
    },1000)
  }
    return <NotifierContext.Provider value={{notifierMessage,notifierVisible,notify}}>{children}</NotifierContext.Provider>
}

export default NotifierProvider
