import AllCharacters from "./AllCharacters";
import Search from "./Search";
import StaffCharacters from "./StaffCharacters";
import StudentCharacters from "./StudentCharacters";

const Feed = () => {
    return (
    <main>
      <div className="feed">
      <Search/>
      </div>
      <div className="flex padding-x padding-y ml-5 mt-12">
        <h1 className="text-4xl">All Characters</h1>
      </div>
      <AllCharacters/>
      <div className="flex padding-x padding-y ml-5 mt-12">
        <h1 className="text-4xl">Hogwart Students</h1>
      </div>
      <StudentCharacters/>
      <div className="flex padding-x padding-y ml-5 mt-12">
        <h1 className="text-4xl">Hogwart Staff</h1>
      </div>
      <StaffCharacters/>
    </main>
    
  )
}

export default Feed