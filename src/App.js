import "./App.css";
import FoodCard from "./components/FoodCard";
import { useState } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [healthLabel, setHealthLabel] = useState("vegan");
  const [foodData, setFoodData] = useState([]);

  const onClickHandler = async () => {
    const res = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&health=${healthLabel}`
    );
    setFoodData(res.data);
  };

  return (
    <div className="App">
      <div className="searchbar">
        <h1>Food Recipe Hub</h1>
        <input
          type="text"
          className="food-input"
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="health"
          onChange={(e) => setHealthLabel(e.target.value)}
          defaultValue={healthLabel}
        >
          <option value="vegan">Vegan</option>
          <option value="vegetarian">vegetarian</option>
          <option value="low-sugar">low-sugar</option>
          <option value="dairy-free">dairy-free</option>
          <option value=" immuno-supportive ">immuno-supportive</option>
          <option value="wheat-free">wheat-free</option>
        </select>
        <button className="btn" type="btn" onClick={onClickHandler}>
          Get Recipe
        </button>
      </div>
      <div className="foodlist">
        <FoodCard data={foodData} />
      </div>
    </div>
  );
}

export default App;
