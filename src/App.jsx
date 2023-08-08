import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <header className="shadow-lg ">
        <div className="container mx-auto px-5">
          <nav className="h-[80px] flex justify-between items-center">
            <a href="#" className="logo text-2xl font-extrabold ">
              Where in the world?
            </a>
          </nav>
        </div>
      </header>
      <main>
        <section id="filters" className="my-12">
          <div className="container mx-auto px-5">
            <div className="flex items-start  md:justify-between  md:items-center flex-col md:flex-row">
              <input
                id="search"
                type="search"
                placeholder="Search for a country…"
                className=" shadow  h-[56px] rounded-[5px]  outline-none mb-[40px] md:mb-0 w-full md:w-[480px] p-[18px]"
              />

              <select
                id="region"
                className="h-[56px] w-[200px] px-[24px] py-[18px] shadow "
              >
                <option className="" selected>
                  Filter by Region
                </option>
              </select>
            </div>
          </div>
        </section>

        <section id="countries">
          <div className="container mx-auto px-5">
            <div id="wrapper" className="grid justify-items-center ">
              <div className="flex flex-wrap gap-x-12">
                {data.length
                  ? data.map((card) => {
                      return (
                        <Card
                          key={card.id}
                          flag={card.flags.png}
                          name={card.name.official}
                          population={card.population}
                          region={card.region}
                          capital={card.capital}
                        />
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
