import React from 'react';

function Resume() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>My Resume</h2>

      {/* Embed the resume PDF */}
      <iframe 
        src="/resume.pdf" 
        width="80%" 
        height="600px" 
        title="Resume"
        style={{ border: '1px solid #ccc', borderRadius: '8px' }}
      >
        Your browser doesn't support embedded PDFs. 
        <a href="/resume.pdf" download>Download the PDF</a>
      </iframe>

      {/* Button to download the resume */}
      <div style={{ marginTop: '20px' }}>
        <a href="/resume.pdf" download>
          <button 
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#61dafb',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default Resume;
