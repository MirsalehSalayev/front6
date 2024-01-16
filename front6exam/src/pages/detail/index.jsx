import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

function Detail() {
    const { id } = useParams()
    const [model, setModel] = useState([])
    useEffect(() => {
        const FetchData = async () => {
            const response = await fetch("http://localhost:3100/services/" + id)
            const api = await response.json()
            setModel(api)
        }
        FetchData()

    })

    return (
        <>
        <Helmet>
                <title>detail</title>
            </Helmet>
        <div >
            <div>
                <i class={model.image}></i>
            </div>
            <div>{model.name}</div>
            <div>{model.title}</div>
        </div>
        </>
    )
}

export default Detail