import './Home.css'
import React, { useState } from "react";
import RecipeList from "../component/Recette/RecipeList";
import backgroundImage from "../lib/img/19.jpg";
import SearchBar from "../component/SearchFilter/SearchBar";

const Home = () => {
  const [filterTags, setFilterTags] = useState<string[]>([]);
  const [filterDuration, setFilterDuration] = useState<number | null>(null);
  const [termSearch, setTermSearch] = useState<string>("");


  const handleSearch = (searchTerm: string) => {
    console.log(`Searching for ${searchTerm}`);
    setTermSearch(searchTerm);
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tagName = e.target.value;
    if (e.target.checked) {
      setFilterTags((prevTags) => [...prevTags, tagName]);
    } else {
      setFilterTags((prevTags) => prevTags.filter((tag) => tag !== tagName));
    }
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const duration = parseInt(e.target.value);
    setFilterDuration(duration);
  };
  

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "50vh",
          marginTop: "10px",}}>

      </div>
      <h1>Recette</h1>
      <div className='bloc-filter'>
        <h2>Filtre:</h2>
        <div> <SearchBar onSearch={handleSearch} /></div>
        <div>
          <label>Par catégories:</label>

            <input type="checkbox"  value="citron" onChange={handleTagChange}/>
            <label>citron</label>

            <input type="checkbox" value="Curry" onChange={handleTagChange}/>
            <label> Curry</label>  

            <input type="checkbox" value="salade" onChange={handleTagChange} />
            <label> salade </label>
        </div>

        <div>
          <label> Par durée (minutes):</label>
            <input type="number" value={filterDuration || ""} onChange={handleDurationChange} />
        </div>

      </div>
      <RecipeList filterTags={filterTags} filterDuration={filterDuration} termSearch={termSearch} />
    </div>
  );
};

export default Home;

