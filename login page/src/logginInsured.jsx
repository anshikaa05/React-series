import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function logginInsured() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/your/redirect/page');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <h2>Please complete login</h2>
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
    </div>
  );
}