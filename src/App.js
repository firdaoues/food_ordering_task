import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';

import Vendor from './components/vendor/Vendor';
import {loadCartData} from './actions/cart' 

const App = () => {
    const dispatch = useDispatch();
    dispatch(loadCartData());
    return (
        <BrowserRouter>
        <Routes>
          <Route path="vendor/:id" element={<Vendor />}>
          {/* <Route index element={<Vendor />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    )
}
export default App;