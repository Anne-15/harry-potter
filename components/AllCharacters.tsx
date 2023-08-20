"use client"

import { useState, useEffect,FC } from "react"
import Image from 'next/image'
import Link from "next/link"
import { Characters } from "@/types/potter"

interface Character{
  id: string;
  name: string;
  image: string;
  dateOfBirth: string;
}

const AllCharacters = () => {
  
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
      const fetchCharacters = async() => {
      try {
          const response = await fetch(`https://hp-api.onrender.com/api/characters`);
          const data = await response.json();
          // console.log(data)
          setCharacters(data);
          setLoading(false);
      } catch (error) {
          setError('An error occurred while fetching data.');
          setLoading(false);
      } 
      }
      fetchCharacters();
  },[])

  const numCardsToShow = 5;

  return(
    <>
      {characters.slice(0, numCardsToShow).map((character) => (
        <div className="card w-full bg-base-100 shadow-xl cursor-pointer">
          <Link href={`/characters/${character.id}`}>
            <figure className="px-10 pt-10">
              <Image
                src={character.image}
                alt={character.name}
                width={200}
                height={150}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{character.name}</h2>
              <p>Date of Birth: {character.dateOfBirth}</p>
              <div className="card-actions">
                <div className="badge badge-outline">More details</div>
              </div>
            </div>
          </Link>
      </div>
      ))}
      
    </>
  
    
  )
}

export default AllCharacters