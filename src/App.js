import logo from './logo.svg';
import './App.css';
import { Reset } from 'styled-reset';
import { Global } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./styles/common"
import { Route, Routes } from 'react-router-dom';
import FeedPage from './pages/FeedPage/FeedPage';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import BookedPage from './pages/BookedPage/BookedPage';
import TimelinePage from './pages/TimelinePage/TimelinePage';
import ReviewPage from './pages/ReviewPage/ReviewPage';
import SavedPage from './pages/SavedPage/SavedPage';

function App() {
  return (
    <>
    <Reset />
    <Global styles={S.SCommon} />
    <MainLayout>
      <Routes>
        <Route path="/feed" element={ <FeedPage /> } />
        <Route path="/timeline" element={ <TimelinePage /> } />
        <Route path="/review" element={ <ReviewPage /> } />
        <Route path="/booked" element={ <BookedPage /> } />
        <Route path="/saved" element={ <SavedPage /> } />
      </Routes>
    </MainLayout>
    </>

  );
}

export default App;
