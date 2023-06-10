import React from "react";


//creamos componente principal
const SecondsCounter = (props) => {

	let secondsArr = Array.from(String(props.seconds));

	return (
		<div className="d-flex justify-content-center p-4">

			<div className="counter-box text-center">
				<span>
					{secondsArr.length > 1 ? secondsArr[secondsArr.length - 6] : 0}
				</span>
			</div>

			<div className="counter-box text-center">
				<span>
					{secondsArr.length > 1 ? secondsArr[secondsArr.length - 5] : 0}
				</span>
			</div>

			<div className="counter-box text-center">
				<span>
					{secondsArr.length > 1 ? secondsArr[secondsArr.length - 4] : 0}
				</span>
			</div>

			<div className="counter-box text-center">
				<span>
					{secondsArr.length > 1 ? secondsArr[secondsArr.length - 3] : 0}
				</span>
			</div>

			<div className="counter-box text-center">
				<span>
					{secondsArr.length > 1 ? secondsArr[secondsArr.length - 2] : 0}
				</span>
			</div>

			<div className="counter-box text-center">
				<span>
					{secondsArr[secondsArr.length - 2]} 
				</span>
			</div>
		</div>
	);
};






export default SecondsCounter;
