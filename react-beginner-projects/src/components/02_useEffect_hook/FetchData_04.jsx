// 4. API Fetch on Mount
// Fetch dummy JSON data when the component mounts.
// Concepts: One-time fetch ([] dependency array).

import React from "react";
import { useEffect,useState } from "react";

const FetchData_04 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h2>API Data:</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
};

export default FetchData_04;