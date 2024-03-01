export const handleDelete = (sampleId, finalPositions, setFinalPositions) => {
    const updatedFinalPositions = finalPositions.filter(pos => pos.id !== sampleId);
    setFinalPositions(updatedFinalPositions);
    saveFinalPositionsToLocalStorage(updatedFinalPositions);
  };
  
  export const saveFinalPositionsToLocalStorage = (positions) => {
    localStorage.setItem('finalPositions', JSON.stringify(positions));
  };
  