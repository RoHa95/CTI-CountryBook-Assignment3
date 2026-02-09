import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
function App() {
  //states
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [region, setRegion] = useState("asia");

  //fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
        if (!res.ok) {
          throw new Error("request failed");
        }
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  return (
    <div>
      <Navbar />
      <Content data={countries} />
    </div>
  );
}

export default App;
