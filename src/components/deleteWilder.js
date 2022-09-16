import React from "react";
import axios from "axios";

export default function DeleteWilder({ wilderID, loadWilder }) {

    
  const handleDelete = async (wilderID) => {
    try {
      await axios.delete(`http://localhost:5000/wilders/${wilderID}`);
      loadWilder();
    } catch (err) {
      return [];
    }
  };
  return (
    <button type="submit" onClick={() => handleDelete(wilderID)}>
      Supprimer
    </button>
  );
}
