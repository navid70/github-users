import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import HistoryContextProvider from "./context/history-context";
import NavBar from "./components/NavBar/NavBar";
import {PATHS} from "./utils/routes/Routes";
import History from "./pages/History";


const App = () => {

  return (
    <HistoryContextProvider>
      <NavBar/>
      <Routes>
        <Route path={PATHS.HOME} element={<Home/>}/>
        <Route path={PATHS.HISTORY} element={<History/>}/>
      </Routes>
    </HistoryContextProvider>
  );
};

export default App;
