import React from "react";

//include images into your bundle
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<>
		<div className = "container-fluid px-0">
		<Navbar/>
		<div className= "container-fluid">
		<Jumbotron/>
		<div className="d-flex justify-content-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
      		<Card />
      		<Card />
    		<Card />
    	    <Card />
    	</div>
		</div>
		<Footer/>
		</div>
		</>
	);
};

export default Home;
