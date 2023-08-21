import { CharacterWrapper, Characters } from "@/types/potter";

const handleResponse = async (response: Response) => {
    if(!response.ok){
        throw Error(response.statusText)
    }
    const data = await response.json();
    return data;
}

export const getCharacters = async(): Promise<CharacterWrapper> => {
    const url = `https://hp-api.onrender.com/api/characters`;
    const response = await fetch(url);
    return(handleResponse(response));
}

export const detailCharacter = async(id: string): Promise<Characters[]> => {
    const urlId = `https://hp-api.onrender.com/api/character/${id}`;
    const response = await fetch(urlId);
    return(handleResponse(response))
}

export const searchCharacter = async(queryString: string | null): Promise<Characters[]> => {
    const urlId = `https://hp-api.onrender.com/api/character?house=${queryString}`;
    const response = await fetch(urlId);
    return(handleResponse(response))
}
