import React, { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';

const DebouncedSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log(`Searching for: ${debouncedSearchTerm}`);
      // API Call
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <p>Current Value: {searchTerm}</p>
      <p>Debounced Value: {debouncedSearchTerm}</p>
    </div>
  );
};

export default DebouncedSearch;
