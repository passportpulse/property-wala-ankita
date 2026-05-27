import { useState, useEffect } from 'react';
import { fetchProperties } from '../services/api';

export const useProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProperties = async () => {
      try {
        const { data } = await fetchProperties();
        setProperties(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getProperties();
  }, []);

  return { properties, loading, error };
};
