"use client"
import Profile from '@/components/Profile';
import { detailCharacter } from '@/utils/api';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect, FC } from "react"

interface Character {
  params: {
    id: string
  }
}


const CharacterDetailsPage: FC<Character> = async ({params}) => {
    const {id} = params;
    console.log(id)

    try {
        const characters = await detailCharacter(id);
    
        if (characters && characters.length > 0) {
        const { image, name, house, ancestry, actor, wand } = characters[0];
        
        return (
            <section>
                <div className="w-full flex-center flex-col mb-10">
                    <h1 className=" head_text text-center">Harry Potter & The Wizard</h1>
                    <br className="max-md:hidden"/>
                    <span className="text-center">Get the latest on Harry and Spells</span>
                    
                </div>
                <div className='container mx-auto px-4 py-8 flex flex-col md:flex-row gap-5 items-center mt-10'>
                    <div className='md:w-1/2'>
                        <Image src={image} width={400} height={300} alt={name} />
                    </div>
                    <div className='md:w-1/2 max-w-4xl mx-auto'>
                        <h1 className='text-3xl font-bold mb-2'>{name}</h1>
                        <p className='text-sm font-light'>House: {house}</p>
                        <p className='text-sm font-light'>Ancestry: {ancestry}</p>
                        <p className='text-sm font-light'>Actor name: {actor}</p>
                        <p className='text-sm font-light'>Wand Wood: {wand?.wood}</p>
                        <p className='text-sm font-light'>Wand Core: {wand?.core}</p>
                        <p className='text-sm font-light'>Wand Length: {wand?.length}</p>
                    </div>
                </div>
            </section>
            

        );
        } else {
        return <p>No character found.</p>;
        }
    } catch (error) {
        return <p>Error loading character data.</p>;
    }
};


export default CharacterDetailsPage;