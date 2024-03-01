import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const FridgeList = () => {
  const { sampleId } = useParams();
  const fridges = ['DN01', 'DN02', 'PL01', 'PL02'];
  const navigate = useNavigate();

  const handleFridgeSelection = (fridge) => {
    navigate(`/assign/${sampleId}/fridge/${fridge}`);
  };

  return (
    <div className="fridge-list">
      <h2>Select a Fridge</h2>
      <ul>
        {fridges.map((fridge) => (
          <li key={fridge}>
            <button onClick={() => handleFridgeSelection(fridge)}>
              {fridge}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FridgeList;
