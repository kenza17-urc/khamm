
import React, { useState } from "react";
import RecipeList from "../component/Recette/RecipeList";
import backgroundImage from "../lib/img/19.jpg";

const Home = () => {
  const [filterTags, setFilterTags] = useState<string[]>([]);
  const [filterDuration, setFilterDuration] = useState<number | null>(null);

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
          marginTop: "10px",
        }}
      ></div>
      <h1>Recette</h1>
      <div>
        <h2>Filtre:</h2>
        <div>
          <label>
            Tags:
            <input
              type="checkbox"
              value="citron"
              checked={filterTags.includes("tag1")}
              onChange={handleTagChange}
            />{" "}
            citron
          </label>
          <label>
            <input
              type="checkbox"
              value="pomme"
              checked={filterTags.includes("tag2")}
              onChange={handleTagChange}
            />{" "}
            pomme
          </label>
          <label>
            <input
              type="checkbox"
              value="salade"
              checked={filterTags.includes("tag3")}
              onChange={handleTagChange}
            />{" "}
            salade
          </label>
        </div>
        <div>
          <label>
            Durée (minutes):
            <input
              type="number"
              value={filterDuration || ""}
              onChange={handleDurationChange}
            />
          </label>
        </div>
      </div>
      <RecipeList filterTags={filterTags} filterDuration={filterDuration} />
    </div>
  );
};

export default Home;

