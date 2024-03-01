import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import './table.css';

const SampleTable = () => {
  
  const [sampleData, setSampleData] = useState([
    { id: 'P1', position: '', assigned: false },
    { id: 'P2', position: '', assigned: false },
    { id: 'P3', position: '', assigned: false },
    { id: 'P4', position: '', assigned: false },
    { id: 'P5', position: '', assigned: false },
    { id: 'P6', position: '', assigned: false },
    { id: 'P7', position: '', assigned: false },
    { id: 'P8', position: '', assigned: false },
    { id: 'P9', position: '', assigned: false },
    { id: 'P10', position: '', assigned: false },
    { id: 'P11', position: '', assigned: false },
    { id: 'P12', position: '', assigned: false },
    { id: 'P13', position: '', assigned: false },
    { id: 'P14', position: '', assigned: false },
    { id: 'P15', position: '', assigned: false },
    { id: 'P16', position: '', assigned: false },
    { id: 'P17', position: '', assigned: false },
    { id: 'P18', position: '', assigned: false },
    { id: 'P19', position: '', assigned: false },
    { id: 'P20', position: '', assigned: false },
    { id: 'P21', position: '', assigned: false },
    { id: 'P22', position: '', assigned: false },
    { id: 'P23', position: '', assigned: false },
    { id: 'P24', position: '', assigned: false },
    { id: 'P25', position: '', assigned: false },
    { id: 'P26', position: '', assigned: false },
    { id: 'P27', position: '', assigned: false },
    { id: 'P28', position: '', assigned: false },
    { id: 'P29', position: '', assigned: false },
    { id: 'P30', position: '', assigned: false },
    { id: 'P31', position: '', assigned: false },
    { id: 'P32', position: '', assigned: false },
    { id: 'P33', position: '', assigned: false },
    { id: 'P34', position: '', assigned: false },
    { id: 'P35', position: '', assigned: false },
    { id: 'P36', position: '', assigned: false },
    { id: 'P37', position: '', assigned: false },
    { id: 'P38', position: '', assigned: false },
    { id: 'P39', position: '', assigned: false },
    { id: 'P40', position: '', assigned: false },
    { id: 'P41', position: '', assigned: false },
    { id: 'P42', position: '', assigned: false },
    { id: 'P43', position: '', assigned: false },
    { id: 'P44', position: '', assigned: false },
    { id: 'P45', position: '', assigned: false },
    { id: 'P46', position: '', assigned: false },
    { id: 'P47', position: '', assigned: false },
    { id: 'P48', position: '', assigned: false },
    { id: 'P49', position: '', assigned: false },
    { id: 'P50', position: '', assigned: false }
    // Add more rows as needed
  ]);

  
  const [finalPositions, setFinalPositions] = useState([]); // Define finalPositions state here

  console.log('Sample Data:', sampleData);

  const navigate = useNavigate();
  const location = useLocation();
  const { finalPositions: initialFinalPositions } = location.state || {};

  useEffect(() => {
    if (initialFinalPositions) {
      const updatedSampleData = sampleData.map(sample => {
        const matchedPosition = initialFinalPositions.find(pos => pos.id === sample.id);
        if (matchedPosition) {
          return { ...sample, position: matchedPosition.position, assigned: true };
        }
        return sample;
      });
      setSampleData(updatedSampleData);
    } 
  }, [initialFinalPositions]);

  const handleAssign = (sampleId) => {
    const sample = sampleData.find(sample => sample.id === sampleId);
    if (sample && !sample.assigned) {
      const updatedSampleData = sampleData.map(sampleItem =>
        sampleItem.id === sampleId ? { ...sampleItem, assigned: true } : sampleItem
      );
      setSampleData(updatedSampleData);
      
      const updatedFinalPositions = finalPositions.map(sampleItem =>
        sampleItem.id === sampleId ? { ...sampleItem, assigned: true } : sampleItem
      );
      setFinalPositions(updatedFinalPositions);
  
      navigate(`/assign/${sampleId}/fridgeList`);
    }
  };
  
  
  const handleDelete = (sampleIds) => {
    const updatedSampleData = sampleData.map(sampleData => {
      if (sampleIds.includes(sampleData.id)) {
        return { ...sampleData, position: '', assigned: false };
      }
      return sampleData;
    });
    setSampleData(updatedSampleData);
  };
  

  
  
  
  
  
  
  
  
  

  return (
    <div className="table-container">
      <h2>Sample Table</h2>
      <table>
        <thead>
          <tr>
            <th>Pensieve_ID</th>
            <th>Storage Position</th>
            <th>Assign</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map(sample => (
            <tr key={sample.id}>
              <td>{sample.id}</td>
              <td>{sample.position}</td>
              <td>
                {!sample.assigned && (
                  <button onClick={() => handleAssign(sample.id)}>Assign</button>
                )}
                {sample.assigned && (
                  <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: '1.5em' }} />
                )}
              </td>
              <td>
                <FontAwesomeIcon
                  onClick={() => handleDelete(sample.id)}
                  icon={faTrashCan}
                  style={{ width: '25px', height: '25px', cursor: "pointer" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SampleTable;
