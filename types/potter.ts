export interface Characters {
    id: string,
    name: string,
    alternate_names: [],
    species: string,
    gender: string,
    house: string,
    dateOfBirth: string,
    yearOfBirth: number,
    wizard: boolean,
    ancestry: string,
    eyeColour: string,
    hairColour: string,
    wand: {
        wood: string,
        core: string,
        length: number
    },
    patronus: string,
    hogwartsStudent: boolean,
    hogwartsStaff: boolean,
    actor: string,
    alternate_actors: [],
    alive: boolean,
    image: string
}

export interface CharacterWrapper{
    length: number
    results: Characters[]
}