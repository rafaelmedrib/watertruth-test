import React from "react";

import Chart from "./Chart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App (){
  return <div className="app-wrapper">
          <Header />
          <div className="chart-wrapper container-fluid rounded">
           <Chart />
          </div>
          <Footer />
        </div>
}

export default App;