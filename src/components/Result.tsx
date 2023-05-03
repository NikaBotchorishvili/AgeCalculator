import { useContext } from "react";
import { formDataContext, IContext } from "../context/Context";

function Result() {
	const { age }: IContext = useContext(formDataContext);
	return (
		<div className="results-container">
			<div className="results">
				<div className="result">
					<h1>
						<span className="counts">
							{age.year != null ? age.year : "- -"}
						</span>
						<span>Years</span>
					</h1>
				</div>
				<div className="result">
					<h1>
						<span className="counts">
							{age.month != null ? age.month : "- -"}
						</span>
						<span>Months</span>
					</h1>
				</div>
				<div className="result">
					<h1>
						<span className="counts">
							{age.day != null ? age.day : "- -"}
						</span>
						<span>Days</span>
					</h1>
				</div>
			</div>
		</div>
	);
}

export default Result;
