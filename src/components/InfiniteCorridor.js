import React, { useState, useEffect } from 'react';
import './InfiniteCorridor.css'; // Ensure the CSS file is correctly imported

const InfiniteCorridor = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Add a delay for the first load
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 2200); // Adjust delay time in milliseconds (1000ms = 1s)

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  return (
    <div className="infinite-corridor">
      <div className="perspective">
        <div className="slider">
          {[...Array(5)].map((_, index) => (
            <div
              className={`corridor ${isInitialLoad ? 'initial-load' : ''}`}
              key={index}
            >
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
