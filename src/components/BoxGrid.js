import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BoxGrid = () => {
  const { sampleId, fridge, section, rack } = useParams();
  const navigate = useNavigate();

  // Dummy data for the grid
  const gridData = Array.from({ length: 5 }, (_, row) =>
    Array.from({ length: 5 }, (_, col) => ({ row: row + 1, col: col + 1 }))
  );

  const handleButtonClick = (row, col) => {
    const positionText = `R${row}C${col}`;
    navigate(`/assign/${sampleId}/fridge/${fridge}/section/${section}/rack/${rack}/box/R${row}C${col}`);
  };

  // const handleDoneButtonClick = () => {
  //   // const concatenatedPositions = selectedPositions.join('');
  //   // Construct the path to Box component
  //   // const pathToBox = ;
  //   // Navigate to Box component
  // };

  return (
    <div className="box-grid">
  <h2>Select a Box in {section}{rack} in {fridge}</h2>
  <div className="handle"></div>
  <div className="box-container">
    {gridData.map((row, rowIndex) => (
      <div key={rowIndex} className="grid-row">
        {row.map(({ row, col }, colIndex) => (
          <button
            key={colIndex}
            onClick={() => handleButtonClick(row, col)}
          >
            {`R${row}C${col}`}
          </button>
        ))}
      </div>
    ))}
  </div>
  {/* <button onClick={handleDoneButtonClick}>Done</button> */}
</div>
  );
};

export default BoxGrid;
