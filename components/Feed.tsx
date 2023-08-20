import { getCharacters } from "@/utils/api";
import AllCharacters from "./AllCharacters";
import Search from "./Search";
import StaffCharacters from "./StaffCharacters";
import StudentCharacters from "./StudentCharacters";
import Spells from "./Spells";

const Feed = async() => {
  return (
  <main>
    <div className="text-center mt-10">
      <p className="text-3xl font-bold">All Characters</p>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 max-lg:grid-cols-5 mt-10">
          <AllCharacters/>
      </div>
    </div>
    <div className="text-center mt-16">
      <p className="text-3xl font-bold">Hogwart Students</p>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 max-lg:grid-cols-5 mt-10">
          <StudentCharacters/>
      </div>
    </div>
    <div className="text-center mt-16">
      <p className="text-3xl font-bold">Hogwart Staff</p>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 max-lg:grid-cols-5 mt-10">
          <StaffCharacters/>
      </div>
    </div>
    <div className="text-center mt-16">
      <p className="text-3xl font-bold">Spells</p>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 max-lg:grid-cols-5 mt-10">
          <Spells/>
      </div>
    </div>
  </main>
  
)
}

export default Feed