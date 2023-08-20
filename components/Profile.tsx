import React from 'react'
import AllCharacters from './AllCharacters'

interface Character {
    id: string;
    name: string;
    image: string;
    dateOfBirth: string;
  }

const Profile = ({name, id, image}: Character) => {
  return (
    <div>Profile</div>
  )
}

export default Profile