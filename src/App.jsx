import axios from "axios";
import { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import { ThemeContext } from "./components/context/ThemeContext";
import TopHeader from "./components/header/TopHeader";
import Routers from "./router/Routers";
import Footer from "./section/footer/Footer";
import Values from "./Values";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [carency, setCarency] = useState("CFA");

  const countryCahangHandler = (e) => {
    setCountry(e.target.value);
  };

  const categoryChangeHandler = (data) => {
    if (data) {
      setCategory(data.id);
    }
  };
  const allCatagoriChangeHandler = () => {
    setCategory("");
  };
  const homeURL = `${Values.BASE_URL}home`;

  useEffect(() => {
    if (!country) {
      axios
        .get(
          `https://api.db-ip.com/v2/free/self?fbclid=IwAR0jbAi5udYxbIx3Q3EysI-yhIW-tvdxNjI0kZEPPgqdiluUGNJNeGwPcyA`
        )
        .then((d) => {
          setCountry(d.data.countryCode);
        });
    }
    axios
      .get(homeURL, {
        headers: {
          "Api-Access-Token":
            "743b1e57df96fc47abd528c7f2b34242edd81c23dbe252928954b8ddc169ca27",
          "Content-Type": "application/json",
          country: `${country}`,
        },
      })
      .then((d) => {
        setData(d.data.data);
        // console.log(d.data.data);
        setCategory("");
      })
      .catch((e) => {
        console.log(e.response.data);
      });
    if (data.countries) {
      data.countries.forEach((d) => {
        if (country === d.code) {
          setCarency(d.currency_symbol);
        }
      });
    }
  }, [country]);

  return (
    <div className="App">
      <HashRouter>
        <TopHeader
          data={data.countries}
          country={country}
          handler={countryCahangHandler}
        />
        <main>
          <ThemeContext.Provider
            value={{
              data,
              handler: categoryChangeHandler,
              category,
              carency,
              allCatagori: allCatagoriChangeHandler,
            }}
          >
            <Routers />
          </ThemeContext.Provider>
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
