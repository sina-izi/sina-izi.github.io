import React from 'react';

function Resume() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>My Resume</h2>

      {/* Buttons at the top: Download and View PDF */}
      <div style={{ marginBottom: '20px' }}>
        <a href="/resume.pdf" download>
          <button 
            style={{
              width: '200px',  // Set fixed width
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#61dafb',
              border: 'none',
              borderRadius: '5px',
              marginRight: '10px',
              cursor: 'pointer'
            }}
          >
            Download
          </button>
        </a>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button 
            style={{
              width: '200px',  // Set fixed width
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#21a1f1',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Open PDF
          </button>
        </a>
      </div>

      {/* Embed the resume PDF */}
      <iframe 
        src="/resume.pdf" 
        width="100%" 
        height="900px" 
        title="Resume"
        style={{ border: '1px solid #ccc', borderRadius: '8px' }}
      >
        Your browser doesn't support embedded PDFs. 
        <a href="/resume.pdf" download>Download the PDF</a>
      </iframe>
    </div>
  );
}

export default Resume;
