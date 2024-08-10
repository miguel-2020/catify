
import { useState,useEffect, useCallback} from "react"



export default function useRequest(url){
    const [loadingState,setLoadingState] = useState("loading")
    const [data,setData] = useState([])

    const controller = new AbortController()
    const signal = controller.signal

    const get = useCallback(()=>{
            const request = async ()=>{
                try {
                    let response = await fetch(url,{signal})

                    // setLoadingState("loaded")
                  response =  await response.json()

                
                   

                   response = response.map(async(pet)=>{
                        const image_id = pet.reference_image_id
                        
                        let  result = await fetch(`https://api.thecatapi.com/v1/images/${image_id}`)

                        result = await result.json()
                 
                   
                        pet.image = {
                            id:result.id,
                            url:result.url
                        }

                        return pet

                    })

                
                 response = await Promise.allSettled(response)

                response = response.reduce((acc,data)=>{
                    if(data.status == "fulfilled"){
                        acc.push(data.value)
                    }

                    return acc

                },[])

                setLoadingState("loaded")
                setData(response)

                    
                } catch (error) {
                   if(error.name != "AbortError"){
                    setLoadingState("error")
                   }
                    
                    
                }
            }


            request()

    },[url,signal])


   


    return {get,loadingState,data}



}