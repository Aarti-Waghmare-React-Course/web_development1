// 2. Online/Offline Status Detector
// Detect when the user goes online or offline using window.addEventListener.
// Concepts: Cleanup in useEffect.

import React from "react";
import { useEffect,useState } from "react";

const OnlineStatus_02 = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return <h2>You are {isOnline ? 'Online' : 'Offline'}</h2>;
};

export default OnlineStatus_02;