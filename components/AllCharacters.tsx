"use client"

import { useState, useEffect } from "react"
import Image from 'next/image'

interface Character{
  id: string;
  name: string;
  image: string;
  dateOfBirth: string;
}

const AllCharacters = ({handleClick}:any) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCharacters = async() => {
      try {
        const response = await fetch('https://hp-api.onrender.com/api/characters');
        const data = await response.json();

        setCharacters(data);
        setLoading(false);
      } catch (error) {
        setError('An error occurred while fetching data.');
        setLoading(false);
      } 
    }
    fetchCharacters();
  },[])

  return (
    <section className="grid grid-cols-3 gap-2 ml-5">
      {characters.map((character) => (
        <div className='prompt_card mt-16 ' key={character.id}>
          <div className='flex justify-between items-start gap-5'>
            <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
            <Image
              src={character.image}
              alt={character.name}
              width={100}
              height={100}
              className='rounded-full'
            />
            </div>
          </div>
          <h2 className="mt-4 text-sm text-gray-700">{character.name}</h2>
          <p className="mt-1 text-lg font-medium text-gray-900">Date of birth: {character.dateOfBirth || 'None'}</p>
        </div>
      ))}
    </section>       
  );
}

export default AllCharacters