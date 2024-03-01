import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
//import { handleDelete } from './Utils';

const Box = () => {
  const { sampleId, fridge, section, rack, box } = useParams();
  const [finalPositions, setFinalPositions] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const navigateToRoot = useNavigate();

  const initialGridData = Array.from({ length: 10 }, (_, row) =>
    Array.from({ length: 10 }, (_, col) => ({ position: `${(row * 10) + col + 1}`, isOccupied: false }))
  );

  const [gridData, setGridData] = useState(initialGridData);

  useEffect(() => {
    // Load finalPositions from local storage when the component mounts
    const storedFinalPositions = JSON.parse(localStorage.getItem('finalPositions'));
    if (storedFinalPositions) {
      setFinalPositions(storedFinalPositions);
    }
  }, []);

  const saveFinalPositionsToLocalStorage = (positions) => {
    localStorage.setItem('finalPositions', JSON.stringify(positions));
  };
  
  // const handleDelete = (sampleId) => {
  //   // Find the sample by ID
  //   const sampleIndex = finalPositions.findIndex(pos => pos.id === sampleId);
  //   if (sampleIndex !== -1) {
  //     // Remove the position from finalPositions
  //     const updatedFinalPositions = [...finalPositions];
  //     updatedFinalPositions.splice(sampleIndex, 1);
  //     setFinalPositions(updatedFinalPositions);

  //     // Update finalPositions in local storage
  //     saveFinalPositionsToLocalStorage(updatedFinalPositions);
  //   }
  // };

  // const handleDeleteClick = (finalPositions) => {
  //   handleDelete(finalPositions, setFinalPositions);
  // }



  const handleSelectPosition = (position) => {
    if (selectedPosition) {
      setSelectedPosition(null);
      setGridData(initialGridData);
      return;
    }
  
    const updatedGridData = gridData.map((row) =>
      row.map(({ position: currentPos }) => ({
        position: currentPos,
        isOccupied: currentPos === position,
      }))
    );
  
    setSelectedPosition(position);
    const fridgePosition = `${fridge}${section}${rack}${box}${position.padStart(3,'0')}`;
  
    // Check if the position already exists in finalPositions
    const positionExistsIndex = finalPositions.findIndex(pos => pos.position === fridgePosition);
    if (positionExistsIndex !== -1) {
      // Delete the position from finalPositions
      const newFinalPositions = [...finalPositions];
      newFinalPositions.splice(positionExistsIndex, 1); // Remove the position
      setFinalPositions(newFinalPositions);
      saveFinalPositionsToLocalStorage(newFinalPositions); // Save updated positions to local storage
    } else {
      // Update the position to the newly selected position
      const newFinalPositions = [
        ...finalPositions,
        { id: sampleId, position: fridgePosition },
      ];
      setFinalPositions(newFinalPositions);
      saveFinalPositionsToLocalStorage(newFinalPositions); // Save updated positions to local storage
    }

    // Update the position of the sample ID to the newly selected position
    const sampleIndex = finalPositions.findIndex(pos => pos.id === sampleId);
    if (sampleIndex !== -1) {
      const updatedFinalPositions = [...finalPositions];
      updatedFinalPositions[sampleIndex].position = fridgePosition; // Set position to the newly selected position
      setFinalPositions(updatedFinalPositions);
      saveFinalPositionsToLocalStorage(updatedFinalPositions); // Save updated positions to local storage
    }
  
    setGridData(updatedGridData);
  };

  const handleButtonClick = () => {
    console.log('final', finalPositions);
    navigateToRoot("/", { state: { finalPositions } });
  };

  

  return (
    <div className="box">
    <h2>Samples in Box in {box} of {section}{rack} of {fridge}</h2>
    <div className="box-tank">
      <div className="box-innergrid">
        {initialGridData.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map(({ position, isOccupied }, colIndex) => {
              const fridgePosition = `${fridge}${section}${rack}${box}${position.padStart(3,'0')}`;
              const isAssigned = finalPositions.some(pos => pos.position === fridgePosition);
              const isSelected = selectedPosition === position;
              const buttonClasses = `grid-button${isOccupied ? ' occupied' : ''}${isSelected ? ' selected' : ''}${isAssigned ? ' assigned' : ''}`;
              return (
                <button
                  key={colIndex}
                  className={buttonClasses}
                  onClick={() => handleSelectPosition(position)}
                  disabled={isAssigned}
                >
                  {position.padStart(3, '0')}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      </div>
      <button className="done-button" onClick={handleButtonClick}>Done</button>
      {/* <button onClick={() => handleDeleteClick(finalPositions)}>Delete</button> */}
    </div>
  );
};

export default Box;
