
import RecipeList from "../component/Recette/RecipeList";
import backgroundImage from "../lib/img/19.jpg";

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "50vh",
          
        }}
      ></div>
      <h1>Recette</h1>
      <RecipeList />
    </div>
  );
};

export default Home;


