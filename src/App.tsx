import React, { ReactElement } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './views/MainPage';
import ErrorPage from './views/ErrorPage';
import Maps from './views/Maps';

const App:React.FC = (): ReactElement => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/map" element={<Maps />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;