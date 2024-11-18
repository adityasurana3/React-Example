import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;


// Cancel old timer and execute new timer

// Example Without clearTimeout
// Imagine the user types quickly into an input box:
// searchTerm changes to "a", starts a setTimeout for 500ms.
// Before 500ms elapses, the user types "ab", starting another setTimeout.
// Without clearTimeout, the first timer would still execute after 500ms, setting the debouncedValue to "a", even though the user has already typed "ab".


// What clearTimeout Fixes
// By using clearTimeout, we ensure that only the most recent setTimeout is active. Here's how it works:
// User types "a", starts a setTimeout (timer ID: 1).
// Before 500ms, the user types "ab". clearTimeout cancels timer ID 1 and starts a new timer (timer ID: 2).
// Only the timer for "ab" completes, updating debouncedValue.

