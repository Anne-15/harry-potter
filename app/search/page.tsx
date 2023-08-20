"use client"
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const SearchPage = () => {
    const searchParams = useSearchParams();
    const querySearch = searchParams.get('query');
    const [character, setCharacter] = useState();
    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
        const fetchInfo = 
    },[querySearch])
  return (
    <div>SearchPage</div>
  )
}

export default SearchPage