"use client"
import { searchCharacter } from '@/utils/api';
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const SearchPage = () => {
    const searchParams = useSearchParams();
    const querySearch = searchParams.get('query');
    const [character, setCharacter] = useState();
    const [isLoading, setIsLoading] = useState(false);

    console.log(character);

    useEffect(() => {
        const fetchInfo = async() =>{
            setIsLoading(true);
            try {
                const data = await searchCharacter(querySearch);
                setCharacter(data.results);
            } catch (error) {
                setIsLoading(false);

            };
            if(querySearch){
                fetchInfo();
            }
        }
    },[querySearch])
  return (
    <div>SearchPage</div>
  )
}

export default SearchPage