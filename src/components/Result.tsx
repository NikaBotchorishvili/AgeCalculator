function Result() {
	return (
		<div className="results-container">
			<div className="results">
				<div className="result">
					<h1>
						<span className="counts">- -</span>
						<span>Years</span>
					</h1>
				</div>
				<div className="result">
					<h1>
						<span className="counts">- -</span>
						<span>Months</span>
					</h1>
				</div>
				<div className="result">
					<h1>
						<span className="counts">- -</span>
						<span>Days</span>
					</h1>
				</div>
			</div>
			<div className="button">
				<img src="./src/assets/images/icon-arrow.svg" />
			</div>
		</div>
	);
}

export default Result;
