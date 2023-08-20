"use client"

import { useRouter } from "next/router";
import { useState, useEffect } from "react"
import React from 'react'

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchCharacters = async() => {
        const response = await fetch('https://hp-api.onrender.com/api/characters');
        const data = await response.json();

        setPosts(data);
        }

        fetchCharacters();
    },[])

    const handleSearchChange = () => {}

  return (
    <form className='relative w-full flex-center'>
        <input 
        type="text"
        placeholder='Search by name or house'
        value={searchText}
        onChange={handleSearchChange}
        required
        className='search_input peer'
        />
      </form>
  )
}

export default Search