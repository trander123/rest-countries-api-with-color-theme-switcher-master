import { useState } from "react"


export const useSessionStorage = (country: Country, key: string) => {
 const [value, setValue] = useState(() => {
  const currentVal = sessionStorage.getItem('key')
  
 })
}
