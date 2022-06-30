import { Route, Routes, Navigate } from "react-router-dom";

import { Navbar } from "../ui";
import { MarvelPage, DcPage } from "../heroes";

import { LoginPage } from "../auth";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/Marvel' element={<MarvelPage />} />
        <Route path='/DC' element={<DcPage />} />
        <Route path='/Login' element={<LoginPage />} />

        <Route path='/' element={<Navigate to='/Marvel' />} />
      </Routes>
    </>
  );
};
