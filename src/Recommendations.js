// src/Recommendations.js
import React, { useEffect, useState } from 'react';
import { firestore, auth } from './firebase';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await firestore.collection('users').doc(user.uid).get();
        const watchHistory = userDoc.data().watchHistory;

        // Fetch recommendations based on the watch history.
        const response = await fetch('/api/recommendations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ watchHistory }),
        });
        const data = await response.json();
        setRecommendations(data);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div>
      <h2>Recommended for You</h2>
      <ul>
        {recommendations.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
