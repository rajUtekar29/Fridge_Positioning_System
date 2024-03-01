import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Racks = () => {
  const { sampleId, fridge, section } = useParams();
  const racks = ['01', '02', '03', '04', '05', '06', '07'];
  const navigate = useNavigate();

  const handleRackSelection = (rack) => {
    navigate(`/assign/${sampleId}/fridge/${fridge}/section/${section}/rack/${rack}`);
  };

  return (
    <div className="racks">
      <h2>Select a Rack in {section} of {fridge}</h2>
      <ul>
        {racks.map((rack) => (
          <li key={rack}>
            <button onClick={() => handleRackSelection(rack)}>{rack}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Racks;
