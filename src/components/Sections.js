import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Sections = () => {
  const { sampleId, fridge } = useParams();
  const sections = ['A', 'B', 'C', 'D'];
  const navigate = useNavigate();

  const handleSectionSelection = (section) => {
    navigate(`/assign/${sampleId}/fridge/${fridge}/section/${section}`);
  };

  return (
    <div className="sections">
      <h2>Select a Section in {fridge}</h2>
      <ul>
        {sections.map((section) => (
        <li key={section}>
          <button className="button-with-knob" onClick={() => handleSectionSelection(section)}>
            <span className="knob"></span>
            {section}
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default Sections;
