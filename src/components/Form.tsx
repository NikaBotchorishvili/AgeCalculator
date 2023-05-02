import { useState } from "react";

function Form() {
	interface IFormData {
		day: number;
		month: number;
		year: number;
	}

	const [formData, setFormData] = useState<IFormData>({
		day: 0,
		month: 0,
		year: 0,
	});

	return (
		<div className="form">
			<div className="input-group">
				<label htmlFor="day">Day</label>
				<input type="number" name="day" />
			</div>
			<div className="input-group">
				<label htmlFor="day">Month</label>
				<input type="number" name="month" />
			</div>
			<div className="input-group">
				<label htmlFor="day">Year</label>
				<input type="number" name="year" />
			</div>
		</div>
	);
}

export default Form;
