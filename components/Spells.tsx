"use client"

import { useState, useEffect,FC } from "react"
import Image from 'next/image'
import Link from "next/link"
import { Characters } from "@/types/potter"

interface Character{
  id: string;
  name: string;
  description: string;
}

const Spells = () => {
  
  const [spells, setSpells] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
      const fetchCharacters = async() => {
      try {
          const response = await fetch(`https://hp-api.onrender.com/api/spells`);
          const data = await response.json();
          // console.log(data)
          setSpells(data);
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
      {spells.slice(0, numCardsToShow).map((spells) => (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
            <h2 className="card-title">{spells.name}</h2>
            <p>{spells.description}</p>
            </div>
        </div>
      ))}
      
    </>
  
    
  )
}

export default Spells