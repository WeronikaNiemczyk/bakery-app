// src/components/SectionSelect.js

import React from "react";
import { useNavigate } from "react-router-dom";

const SectionSelect = ({ sections, onSectionChange }) => {
  const navigate = useNavigate();

  const handleClick = (sectionId) => {
    onSectionChange({ target: { value: sectionId } });

    if (sectionId) {
      navigate("/person");
    }
  };

  return (
    <div>
      <h2>Wybierz miejsce</h2>

      {sections.map((section) => (
        <button key={section.id} onClick={() => handleClick(section.id)}>
          {section.name}
        </button>
      ))}
    </div>
  );
};

export default SectionSelect;
