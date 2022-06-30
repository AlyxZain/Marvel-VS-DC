import { Route, Routes, Navigate } from "react-router-dom";

import { Navbar } from "../../ui";
import { MarvelPage, DcPage, SearchPage, HeroPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
      <div className="container">

        <Routes>
          <Route path='/Marvel' element={<MarvelPage />} />
          <Route path='/DC' element={<DcPage />} />
          <Route path='/Search' element={<SearchPage />} />
          <Route path='/Hero' element={<HeroPage />} />


          <Route path='/' element={<Navigate to='/Marvel' />} />
        </Routes>
      </div>
    </>
  );
};
