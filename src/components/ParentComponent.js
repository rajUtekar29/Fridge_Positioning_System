// ParentComponent.js
import React, { useState } from 'react';
import Box from './Box';
import SampleTable from './SampleTable';

const ParentComponent = () => {
  const [finalPosition, setFinalPosition] = useState('');

  // Function to handle assigning final position to a sample ID
  const handleAssign = (sampleId, finalPosition) => {
    // Implement logic to assign final position to the corresponding sample ID
    console.log(`Assigning ${finalPosition} to sample ID ${sampleId}`);
  };

  return (
    <div>
      <Box onAssign={handleAssign} setFinalPosition={setFinalPosition} />
      <SampleTable finalPosition={finalPosition} />
    </div>
  );
};

export default ParentComponent;
