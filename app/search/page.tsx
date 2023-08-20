"use client"
import AllCharacters from '@/components/AllCharacters';
import { Characters } from '@/types/potter';
import { searchCharacter } from '@/utils/api';
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const SearchPage = () => {
    const searchParams = useSearchParams();
    const querySearch = searchParams.get('query');
    const [character, setCharacter] = useState<Characters[]>([]);
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
                console.error(error);

            };
            if(querySearch){
                fetchInfo();
            }
        }
    },[querySearch])
  return (
    <div className='container text-center mt-10'>
        <h1 className='text-3xl font-bold'>
            Search for <span>&quot;{querySearch}&quot;</span>
        </h1>
        {isLoading ? (
        <div>
            <h1>Loading...</h1>
        </div> 
       ) : (
       <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-10'>
        {character.map((characters) => (
            <AllCharacters key={characters.id}/>
        ))}
       </div>
       )}
    </div>
  )
}

export default SearchPage