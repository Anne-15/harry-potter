"use client"

import { useState, useEffect,FC } from "react"
import Image from 'next/image'
import Link from "next/link"
import { Characters } from "@/types/potter"

interface Character{
    id: string,
    house: string
}

const Houses = () => {
  
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
      const fetchCharacters = async() => {
      try {
          const response = await fetch(`https://hp-api.onrender.com/api/characters`);
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

  const numCardsToShow = 8;

  return(
    <>
      {characters.map((character) => (
        <div className="card w-full bg-base-100 shadow-xl cursor-pointer">
          <Link href={`/characters/${character.id}`}>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{character.house}</h2>
            </div>
          </Link>
      </div>
      ))}
      
    </>
  
    
  )
}

export default Houses