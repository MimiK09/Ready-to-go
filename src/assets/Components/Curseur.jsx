import { useState } from "react";

const Curseur = (props) => {
	const [isOn, setIsOn] = useState(false);
	return (
		<div className="curseur">
			<p
				onClick={() => {
					setIsOn(!isOn);
				}}
				className={isOn ? "clicked" : "noclicked"}
			>
				ON
			</p>
			<p onClick={() => {
					setIsOn(!isOn);
				}} className={isOn ? "noclicked" : "clicked"}>OFF</p>
		</div>
	);
};

export default Curseur;
