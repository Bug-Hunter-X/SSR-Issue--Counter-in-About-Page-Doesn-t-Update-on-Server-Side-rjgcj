```javascript
// pages/aboutSolution.js
import {useEffect, useState, useMemo} from 'react';

export default function About() {
  const [count, setCount] = useState(0);

  const memoizedCount = useMemo(() => count, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>The counter is: {memoizedCount}</p>
    </div>
  );
}
```