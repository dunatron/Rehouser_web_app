import { useState, useEffect } from 'react';

/**
 * Saved Form Data is juust local Storage for now.
 * But it will work like this. For each user they can have an array of forms saved.
 * the id will be the form name + user id and will be retrieved as such
 */
const useSavedFormData = ({ saveKey }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const savedData = localStorage.getItem(saveKey);
    setData(JSON.parse(savedData));
    setLoading(false);
  }, []);

  return { loading, error, data };
};

export default useSavedFormData;
