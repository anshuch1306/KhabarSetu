import { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import './App.css'

import React from 'react'
import LoadingBar from "react-top-loading-bar";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  let page = 20
  const [progress, setProgress] = useState(0);

  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  const showNews = (category) => (
    <News
      key={category}
      pageSize={20}
      category={category}
      setProgress={setProgress}
      apiKey={apiKey}
    />
  );
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <LoadingBar
          color="#f11946"
          height={3}
          progress={progress}
        />
        <Routes>
          <Route
            path="/"
            element={showNews("general")}
          />
          <Route
            path="/general"
            element={showNews("general")}
          />

          <Route
            path="/business"
            element={showNews("business")}
          />

          <Route
            path="/technology"
            element={showNews("technology")}
          />

          <Route
            path="/sports"
            element={showNews("sports")}
          />

          <Route
            path="/entertainment"
            element={showNews("entertainment")}
          />

          <Route
            path="/health"
            element={showNews("health")}
          />

          <Route
            path="/science"
            element={showNews("science")}
          />

          <Route
            path="*"
            element={
              <h2 className="text-center mt-5">
                404 - Page Not Found
              </h2>
            }
          />
        </Routes>
      </div>

    </BrowserRouter>
  )

}
export default App;