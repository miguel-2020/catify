import { useEffect, useState } from "react"
import Loader from "./components/Loader.jsx"
import Pet from "./components/Pet"
import useRequest from "./hooks/useRequest.js"
import { motion } from "framer-motion";

const variants = {
  visible: (custom) => ({
    opacity: 1,
    y:0,
    transition: { delay: custom * 0.2 }
  })
}



function App() {
const [numOfRecords,setNumOfRecords] = useState(null)
const [query,SetQuery] = useState("")
const [country,setCountry] = useState("")

const {get,loadingState,data} = useRequest(`${import.meta.env.VITE_APP_URL}/breeds?limit=${numOfRecords}`)
let records = data


useEffect(()=>{
  document.title = "Catify breeds"
})

useEffect(()=>{
  get()


},[numOfRecords])




if(loadingState == "loading"){
  return <Loader/>
}

if(loadingState === "error"){
  throw new Error("Unable to fetch breads at the moment. Try again later")
}



if(query || country){
  records = data.filter((record)=>{
    if(country){
      return  record.origin.toLowerCase().indexOf(country.toLowerCase()) > -1
    }
    return record.name.toLowerCase().indexOf(query.toLowerCase()) > -1
  })


}




const countries = Array.from(new Set(data.map((record)=> record.origin)))

  

  return (
    <>
    <div className="container">

<form>
    <div className="group">
      <label htmlFor="search">
      <input type="search" placeholder="search for a pet" onKeyUp={(evt)=> SetQuery(evt.target.value)}/>
    </label>
    </div>
    
    <div className="group">
      <label htmlFor="location">Select a location</label>
      <select name="location" id="location" onInput={(evt)=> setCountry(evt.target.value)}>
        <option value="" disabled> Pick a location</option>
        <option value="">Show all</option>
        {countries.map((country,id)=>(
             <option key={id} value={country}>{country}</option>
        ))}
      </select>
    </div>
    
    <div className="group">
      <label htmlFor="location">Show
      <select className="select-numb-pages" name="location" id="location" onInput={(evt)=> setNumOfRecords(evt.target.value)}>
        <option value="">All</option>
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">30</option>
        <option value="10">50</option>
        <option value="20">70</option>
        <option value="10">90</option>
        <option value="20">120</option>
        <option value="10">200</option>
        <option value="20">300</option>
      </select>
        
       records</label>
    </div>
  </form>
  
  <div className="grid">
    {records.length == 0 && <h1 className="not-found">What you are looking for could not be found ☹️ </h1>}
    {
      records.map((breed,idx)=>{
        return (
          <motion.div
          key={breed.id}
        initial={{opacity:0,y:100}}
        custom={idx} animate="visible" variants={variants}
        ><Pet  pet={breed}/>
        </motion.div>
        )
       
      })
    }


  </div>
    </div>
    </>
  )
}

export default App
