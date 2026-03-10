import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainApp from "./components/MainApp";

function ElectroNova() {
	return (
		<div className="electronova">
			<Navbar />
			<MainApp />
			<Footer />
		</div>
	);
}

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<ElectroNova />} />
			</Routes>
		</Router>
	);
}

export default App;
