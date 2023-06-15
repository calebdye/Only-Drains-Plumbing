import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Helmet } from "react-helmet";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>Only Drains</title>
        <meta name="description" content="Only Drains offers expert plumbing services in Salt Lake City, Utah. Contact us today for a free quote!" />
        <meta name="keywords" content="plumbing services, Salt Lake, Utah, Only Drains plumbing |have knowledgeable and experienced technicians, offer competitive pricing, and use high-quality materials. |Experience the Best Drain and Plumbing Services in Utah with Only Drains!" />
        <meta name="author" content="Only Drains Plumbing" />
        
      </Helmet>
       <div className="box-sizing:border-box bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
    </>
  );
}

export default App;
