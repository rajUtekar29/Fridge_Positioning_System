import React from 'react';
import { useLocation } from 'react-router-dom';
import SampleTable from './SampleTable';

const Homepage = () => {
  const location = useLocation();
  const finalPosition = new URLSearchParams(location.search).get('finalPosition');

  return (
    <div>
      
      <SampleTable finalPosition={finalPosition} />
    </div>
  );
};

export default Homepage;
