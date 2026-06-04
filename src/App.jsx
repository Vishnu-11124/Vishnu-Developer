
import { useState, useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout"
import AppRoute from "./route/appRoute";
import SplashScreen from "./components/SplashScreen";


function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
    <BrowserRouter>
      <SplashScreen onComplete={() => setShowSplash(false)} />
      {!showSplash && (
        <Layout>
          <AppRoute />
        </Layout>
      )}
      </BrowserRouter>
    </>
  );
}

export default App;
