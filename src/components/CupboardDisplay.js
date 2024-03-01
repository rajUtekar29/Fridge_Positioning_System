import React, { useState } from 'react';
import './CupboardDisplay.css';

const CupboardDisplay = () => {
  const [cupboards, setCupboards] = useState([...Array(6).keys()].map(() => ({ expanded: false })));
  const [racks, setRacks] = useState([...Array(6).keys()].map(() => Array(4).fill({ expanded: false })));
  const [sections, setSections] = useState([...Array(6).keys()].map(() => Array(5).fill({ expanded: false })));
  const [boxes, setBoxes] = useState([...Array(6).keys()].map(() => Array(5).fill({ filled: false })));

  const handleCupboardClick = (cupboardIndex) => {
    const updatedCupboards = [...cupboards];
    updatedCupboards[cupboardIndex].expanded = !updatedCupboards[cupboardIndex].expanded;
    setCupboards(updatedCupboards);
  };

  const handleRackClick = (cupboardIndex, rackIndex) => {
    const updatedRacks = [...racks];
    updatedRacks[cupboardIndex][rackIndex].expanded = !updatedRacks[cupboardIndex][rackIndex].expanded;
    setRacks(updatedRacks);
  };

  const handleSectionClick = (cupboardIndex,rackIndex, sectionIndex) => {
    const updatedSections = [...sections];
    updatedSections[cupboardIndex][rackIndex][sectionIndex].expanded = !updatedSections[cupboardIndex][rackIndex][sectionIndex].expanded;
    setSections(updatedSections);
  };

  const handleBoxClick = (cupboardIndex,rackIndex, sectionIndex, boxIndex) => {
    const updatedBoxes = [...boxes];
    updatedBoxes[cupboardIndex][rackIndex][sectionIndex][boxIndex].filled = !updatedBoxes[cupboardIndex][rackIndex][sectionIndex][boxIndex].filled;
    setBoxes(updatedBoxes);
  };

  return (
    <div className="cupboard-container">
      {cupboards.map((cupboard, cupboardIndex) => (
        <div key={cupboardIndex} className={`cupboard ${cupboard.expanded ? 'expanded' : ''}`} onClick={() => handleCupboardClick(cupboardIndex)}>
          Cupboard {cupboardIndex + 1}
          {cupboard.expanded && (
            <RackDisplay
              cupboardIndex={cupboardIndex}
              racks={racks[cupboardIndex]}
              sections={sections[cupboardIndex]}
              boxes={boxes[cupboardIndex]}
              onRackClick={handleRackClick}
              onSectionClick={handleSectionClick}
              onBoxClick={handleBoxClick}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const RackDisplay = ({ cupboardIndex, racks, sections, boxes, onRackClick, handleSectionClick, handleBoxClick }) => {
  return (
    <div className="rack-container">
      {racks.map((rack, rackIndex) => (
        <div key={rackIndex} className={`rack ${rack.expanded ? 'expanded' : ''}`} onClick={() => onRackClick(cupboardIndex, rackIndex)}>
          Rack {rackIndex + 1}
          {rack.expanded && (
            <SectionDisplay
              cupboardIndex={cupboardIndex}
              rackIndex={rackIndex}
              sections={sections[rackIndex]}
              boxes={boxes[rackIndex]}
              onSectionClick={handleSectionClick}
              onBoxClick={handleBoxClick}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const SectionDisplay = ({ cupboardIndex, rackIndex, sections, boxes, onSectionClick, handleBoxClick }) => {
  return (
    <div className="section-container">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className={`section ${section.expanded ? 'expanded' : ''}`} onClick={() => onSectionClick(cupboardIndex,rackIndex, sectionIndex)}>
          Section {sectionIndex + 1}
          {section.expanded && (
            <BoxDisplay
              cupboardIndex={cupboardIndex}
              rackIndex={rackIndex}
              sectionIndex={sectionIndex}
              boxes={boxes[sectionIndex]}
              onBoxClick={handleBoxClick}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const BoxDisplay = ({ cupboardIndex, rackIndex, sectionIndex, boxes, onBoxClick }) => {
  return (
    <div className="box-container">
      {boxes.map((box, boxIndex) => (
        <div key={boxIndex} className={`box ${box.filled ? 'filled' : 'empty'}`} onClick={() => onBoxClick(cupboardIndex, rackIndex,sectionIndex, boxIndex)}>
          Box {boxIndex + 1}
        </div>
      ))}
    </div>
  );
};

export default CupboardDisplay;
