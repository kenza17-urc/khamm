import {useState} from 'react'
import SearchBar from './SearchBar'

const PostsSearch = () => {
  const [termSearch, setTermSearch] = useState<string>("");
  const [listRecettes, setListRecettes] = useState([
    {titre:"Pate poulet", description:"facile à faire", duree:30},
    {titre:"riz cantonais", description:"niveau moyen", duree:1},
  ]);

  const handleSearch = (searchTerm: string) => {
    console.log(`Searching for ${searchTerm}`);
    setTermSearch(searchTerm)
}
  return (
    <div>

      <div>
        <SearchBar onSearch={handleSearch} />
        <div className="search__results">
          {
            listRecettes.filter((val)=>{
              return val.titre.toLowerCase().includes(termSearch.toLowerCase());
            }).map((val)=>{
              return(
                <div className="result"> {val.titre} </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default PostsSearch