import "./App.css";
import { useState } from "react";

function App() {
	const [switch1, setSwitch1] = useState(false);
	const [switch2, setSwitch2] = useState(false);
	const [switch3, setSwitch3] = useState(false);

	const final = () => {
		if (switch1 && switch2 && switch3) {
			return "finalok";
		} else {
			return "finalno";
		}
	};

	return (
		<>
			<header>
				<div className="container">
					<img
						src="./src/assets/space-shuttle.png"
						alt="fusée"
						className="logo"
					/>
					<h1>Ready To Go</h1>
				</div>
			</header>
			<main>
				<div className="container">
					<div className="curseurs">
						<div className="curseur">
							<p
								onClick={() => {
									setSwitch1(!switch1);
								}}
								className={switch1 ? "clicked" : "noclicked"}
							>
								ON
							</p>
							<p
								onClick={() => {
									setSwitch1(!switch1);
								}}
								className={switch1 ? "noclicked" : "clicked"}
							>
								OFF
							</p>
						</div>
						<div className="curseur">
							<p
								onClick={() => {
									setSwitch2(!switch2);
								}}
								className={switch2 ? "clicked" : "noclicked"}
							>
								ON
							</p>
							<p
								onClick={() => {
									setSwitch2(!switch2);
								}}
								className={switch2 ? "noclicked" : "clicked"}
							>
								OFF
							</p>
						</div>
						<div className="curseur">
							<p
								onClick={() => {
									setSwitch3(!switch3);
								}}
								className={switch3 ? "clicked" : "noclicked"}
							>
								ON
							</p>
							<p
								onClick={() => {
									setSwitch3(!switch3);
								}}
								className={switch3 ? "noclicked" : "clicked"}
							>
								OFF
							</p>
						</div>
					</div>
					<p className={final()}>No Way</p>
				</div>

				<div>
					<p
						onClick={() => {
							setSwitch1(false);
							setSwitch2(false);
							setSwitch3(false);
						}}
						className="reset"
					>
						Reset
					</p>
				</div>
			</main>
		</>
	);
}

export default App;
