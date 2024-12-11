import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './output.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './Main.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './Topbar.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* Added Router here to provide context for useRoutes */}
      <Routes>
        <Route
          path="*"
          element={
            <div className="main-content pb-[80px]">
              <Routes> {/* Nested Routes should be avoided, but if needed, ensure it is inside the Router context */}
                <Route path="/" element={<Main />} />
              </Routes>
              <Topbar />
            </div>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
