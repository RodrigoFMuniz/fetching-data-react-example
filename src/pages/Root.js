import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import PagesPromotionSearch from './Promotion/Search/Search';


const Root = ()=>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagesPromotionSearch />}/>
      </Routes>
    </Router>
  )
}
export default Root;