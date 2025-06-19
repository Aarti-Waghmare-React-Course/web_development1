// 10. Conditional Effect Based on Props
// Render a component that only fetches data if a prop is true.
// Concepts: Conditionally running useEffect.

import React from "react";
import { useEffect,useState } from "react";

const ConditionalFetcher_10 = ({ shouldFetch }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!shouldFetch) return;
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(setData);
  }, [shouldFetch]);

  return (
    <div>
      <h2>Conditional Fetch</h2>
      {shouldFetch ? (data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...') : 'Fetch disabled'}
    </div>
  );
};

export default ConditionalFetcher_10;