import React, { createContext } from 'react'
import { useState } from 'react'
export const SearchContext =createContext()
function SearchProvider({children}) {
    const [search, setSearch] = useState("")
    const HandleSearch =(e)=>{
        setSearch(e.target.value)
    }
    const data ={
        HandleSearch,search
    }
  return (
    <SearchContext.Provider value={data}>
        {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider