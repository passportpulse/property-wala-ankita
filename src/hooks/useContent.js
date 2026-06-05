import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = `${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/content`;

export const useContent = (type) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let baseUrl = `${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/content`;
        if (['visits', 'partners', 'auctions'].includes(type)) {
          baseUrl = `${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/features`;
        }
        
        const response = await axios.get(`${baseUrl}/${type}`);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  return { data, loading, error };
};
