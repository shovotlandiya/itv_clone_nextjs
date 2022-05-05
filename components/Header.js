import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "../pages/index"


function Header() {
  const [api, setApi] = useState([]);

  const getApi = () => {
    axios.get("https://api.itv.uz/api/content/main/2/list?user=a7e1c53165089055120e1a6ffaa1ec27").then((response) => {
      setApi(response.data.data.movies);
    });
  };
  useEffect(() => getApi(), []);
  const [value,setValue]=useState('')

  const filteredFilms=api.filter((films)=>(
    films.title.toLowerCase().includes(value.toLowerCase())
  ))


  return (
    <div className='container mx-auto px-4 '>
        <input className='mt-20 bg-slate-200 my-4 p-2 rounded-lg  placeholder:text-sky-900 placeholder:font-semibold
         ' placeholder='search'
         onChange={(event)=>setValue(event.target.value.trim())}
        />
    </div>
  )
}

export default Header