import "./App.css";

import { useEffect, useState } from "react";

import CreateWilderForm from "./components/createWilderForm";
import Footer from "./components/footer";
import Header from "./components/header";
import Wilder from "./components/wilder";
import axios from "axios";

function App() {
  const [wilders, setWilders] = useState([]);
  
  const getWilders = async () => {
    try {
      return (await axios.get("http://localhost:5000/wilders")).data;
    } catch (err) {
      return [];
    }
  };

  const loadWilder = async () => {
    setWilders(await getWilders());
  };


  useEffect(
    () => async () => {
      setWilders(await getWilders());
    },
    []
  );

  return (
    <>
      <Header />
      <main className="container">
        <h2>Wilders</h2>
        <CreateWilderForm wilders={setWilders} loadWilder={loadWilder}/>
        <section className="card-row">
          {wilders.map((wilder) => (
            <Wilder
              key={wilder.id}
              name={wilder.name}
              skills={wilder.skills}
              city={wilder.city}
              wilderId={wilder.id}
              loadWilder={loadWilder}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
