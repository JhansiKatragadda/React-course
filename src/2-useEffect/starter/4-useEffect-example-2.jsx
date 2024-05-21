import React, { useEffect, useState } from 'react';

const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

function Index() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, msg: "" });

  const fetchDrinks = async (url) => {
    setLoading(true);
    setError({ status: false, msg: "" });
    try {
      const response = await fetch(url);
      const responseData = await response.json();
      setData(responseData.drinks || []);
      setLoading(false);
      if (response.status === 404) {
        throw new Error("Data not found");
      }
    } catch (error) {
      setLoading(false);
      setError({
        status: true,
        msg: error.message || "Something went wrong, please try again!",
      });
    }
  };

  useEffect(() => {
    const correctURL = `${apiUrl}${searchTerm}`;
    fetchDrinks(correctURL);
  }, [searchTerm]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error.status) {
    return (
      <div>
        <h3 style={{ color: "red" }}>{error.msg}</h3>
      </div>
    );
  }

  return (
    <div>
      <h2>Example1</h2>
      <form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search something new..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <ul className="cocktail-data">
        {data.map((eachDrink) => {
          const { idDrink, strDrink, strDrinkThumb } = eachDrink;
          return (
            <li key={idDrink}>
              <div>
                <img src={strDrinkThumb} alt={strDrink} />
              </div>
              <div className="text">
                <h3>{strDrink}</h3>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Index;
