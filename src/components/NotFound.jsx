import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - Page Not Found</h1>
      <button onClick={() => navigate('/')} style={{ marginTop: '1rem' }}>
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
