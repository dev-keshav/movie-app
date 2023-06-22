import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import { AppProvider } from "./Context";

const App = () => {
  return (
    <div>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<SingleMovie />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
};

export default App;
