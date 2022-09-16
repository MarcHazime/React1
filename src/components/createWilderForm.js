import React from "react";
import axios from "axios";
import { useState } from "react";

function CreateWilder({ loadWilder}) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/wilders", { name });
      loadWilder();
    } catch (err) {
      return [];
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default CreateWilder;
