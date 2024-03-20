import React from "react";
import logo from './logo.svg';
import './App.css';
import Layout from "./component/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
  		<Layout>
  		<div>
  			<BrowserRouter>
  				<Routes> 
  					<Route index element ={<Home />}/>
  					<Route path="/home" element ={<Home />}/>
  					<Route path="/contact" element ={<Contact />}/>
  				</Routes>
  			</BrowserRouter>
  		</div>
  		</Layout>
  	);
}

export default App;
