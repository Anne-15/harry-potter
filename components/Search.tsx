"use client"

import { useRouter } from "next/navigation";
import { useState, KeyboardEvent } from "react"

const Search = () => {
    const [searchText, setSearchText] = useState<string>('');
    const router = useRouter();

    const handleSearchChange = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && searchText.trim() !== '') {
        setSearchText('');
        router.push(`/search?query=${searchText}`);
      }
    }

  return (
    <form className='relative w-full flex-center'>
        <input 
        type="text"
        placeholder='Search by name or house'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        required
        className='search_input peer'
        onKeyDown={handleSearchChange}
        />
      </form>
  )
}

export default Search