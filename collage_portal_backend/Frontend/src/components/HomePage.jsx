// import React from 'react'


// import Navbar from  './Navbar.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Banner from  "./Banner.jsx"
// import Card from "./Card.jsx";
// import Footer from "./Footer.jsx";
// import CountryList from "./CountryList.jsx";
// import CollegeList from "./CollegeList.jsx";
// import College from "./College.jsx";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';



// const HomePage = () => {
//   return (
//     <div>
//       <Navbar  />
//       <Banner />
//       <Card />
//       <Footer/>
 
//        <Router>
//         <Routes>

//         <Route path="/colleges" element={<CollegeList />}></Route>
//           <Route path="/country" element={<CountryList />}></Route>
//           <Route path="/college" element={<College />}></Route>

//             </Routes>
          
//       </Router> 
      
      
//     </div>
//   )
// }

// export default HomePage;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer.jsx';
import CountryList from './CountryList.jsx';
import CollegeList from './CollegeList.jsx';
import College from './College.jsx';
import Banner from './Banner.jsx';
import Card from './Card.jsx';
import Hero  from './Hero Section.jsx';
import ApplyForm  from './CollageApply.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<CountryListWithNavAndFooter />} />
        <Route path="/collage" element={<CollegeWithNavAndFooter />} />
        <Route path="/collages" element={<CollegeListWithNavAndFooter />} />
        <Route path="/apply" element= {<ApplyForm/>} />
        
      </Routes>
      
      <Footer />
    </Router>
  );
};

const Home = () => {
  return (
    <>
      <Banner />
      <Card />
    </>
  );
};

const CountryListWithNavAndFooter = () => {
  return (
    <>
      <CountryList />
    </>
  );
};

const CollegeWithNavAndFooter = () => {
  return (
    <>
      <College />
    </>
  );
};

const CollegeListWithNavAndFooter = () => {
  return (
    <>
      <CollegeList />
    </>
  );
};

export default App;
