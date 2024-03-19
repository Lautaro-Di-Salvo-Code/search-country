import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [dataCountries, setDataCountries] = useState([])
    const [load, setLoad] = useState(false)
    const first =  async ( ) => {
            setLoad(true)
            const req = await fetch(url)
            const res = await req.json()
            setDataCountries(res)
        }
    
        useEffect(() => {
            first()
        }, [])
return{

    load,
    dataCountries
}

}
