// src/components/PersonSelect.js

import React from "react";
import { useNavigate } from "react-router-dom";

const PersonSelect = ({ people, onPersonChange }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Wprowadziła:</h2>
      <select onChange={onPersonChange}>
        <option value="">Wybierz osobę</option>
        {people.map((person) => (
          <option key={person.id} value={person.id}>
            {person.name}
          </option>
        ))}
      </select>
      <button onClick={() => navigate("/products")}>DALEJ</button>
    </div>
  );
};

export default PersonSelect;
