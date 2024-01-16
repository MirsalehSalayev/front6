import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SearchContext } from '../../context/search'

function Features() {
    const [data, setData] = useState([])
    const {search,HandleSearch}=useContext(SearchContext)
    useEffect(()=>{
        const FetchData = async()=>{
            const response =await  fetch("http://localhost:3100/services")
            const api = await response.json()
            setData(api)
        }
        FetchData()
    })
  return (
    <div>
        <input type="text" value={search} onChange={(e)=>HandleSearch(e)} />
        
        {data
        .filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
        .map((item)=>{
        return (
            <div key={item._id}>
                <div>
                     <i class={item.image}></i>
                </div>
                <div>{item.name}</div>
                <div>{item.title}</div>
                <NavLink to={/detail/+item._id}><button>Detail</button></NavLink>
            </div>
        )
    })
        }
    </div>
  )
}

export default Features