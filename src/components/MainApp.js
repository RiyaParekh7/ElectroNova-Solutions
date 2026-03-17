import React from "react";
import mainImg1 from "./images/Mainpage_image_1.jpg";

function MainApp() {
	const mainStyle = {
		marginTop: "250px",
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-start",
		flexWrap: "wrap",
		color: "#fff",
		gap: "380px",
	};

	const mainHead = {
		fontFamily: "Roboto",
		margin: "20px 0px 0px",
		fontSize: "50px",
	};

	const head3 = {
		fontFamily: "Roboto",
	};

	const Img1 = {};

	return (
		<>
			<div className="mainapp" style={mainStyle}>
				<h1 style={mainHead}>ELECTRONOVA &ensp; SYSTEMS</h1>
				<br />
				<h3 style={head3}>
					Engineering smart electronics and IoT solutions for a connected future
				</h3>
				<br />
				<p>
					Building reliable electronic solutions with modern technology. Focused
					on innovation, functionality and real-world applications. Our goal is
					to create practical technology that solves real problems.
				</p>
				<div className="section-divide">
					<div className="left-section"></div>
					<div className="right-section">
						<img src={mainImg1} alt="Image q on mainApp" style={Img1} />
					</div>
				</div>
			</div>
		</>
	);
}

export default MainApp;
