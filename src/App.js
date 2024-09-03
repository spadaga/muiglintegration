import logo from "./logo.svg";
import "./App.css";
import '@fontsource/roboto';
import React, { useState,useEffect } from 'react'
import LandingPage from "./pages/LandingPage";
import Routing from "./pages/Routing";
import LoadingOverlay from '../src/components/LoadingOverlay '

import '../src/assets/common.css'
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate an API call or some loading process
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
       {loading && <LoadingOverlay />}
      <Routing />
    </div>
  );
}

export default App;
