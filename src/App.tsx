import React, { ReactElement } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './views/MainPage';
import ErrorPage from './views/ErrorPage';
import Maps from './views/Maps';



export default function App(): ReactElement {
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
}