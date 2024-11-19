import React from 'react';
import './InfiniteCorridor.css'; // Ensure the CSS file is correctly imported

const InfiniteCorridor = () => {
  return (
    <div className="infinite-corridor">
      <div className="perspective">
        <div className="slider">
          {[...Array(5)].map((_, index) => (
            <div className="corridor" key={index}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <span className="img">
                <span className="eye"></span>
              </span>
              <span className="img-mirror">
                <span className="eye"></span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCorridor;
