import { useContext } from "react";
import { formDataContext, IContext } from "../context/Context";
import Input from "./Input";
function Form() {
	const { handleSubmit, errors, toggled }: IContext =
		useContext(formDataContext);
	return (
		<>
			<form className="form">
				<Input
					label="Day"
					type="number"
					name="day"
					placeholder="DD"
					error={errors?.dayError}
				/>
				<Input
					label="Month"
					type="number"
					name="month"
					placeholder="MM"
					error={errors?.monthError}
				/>
				<Input
					label="Year"
					type="number"
					name="year"
					placeholder="YYYY"
					error={errors?.yearError}
				/>
			</form>
			<button
				onClick={(e) => handleSubmit?.(e)}
				style={
					toggled
						? { backgroundColor: "#874bff" }
						: { backgroundColor: "" }
				}
				className="button"
			>
				<img src="./src/assets/images/icon-arrow.svg" />
			</button>
		</>
	);
}

export default Form;
