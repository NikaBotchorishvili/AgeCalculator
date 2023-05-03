import { useContext } from "react";
import { formDataContext, IContext } from "../context/Context";

interface IInputProp {
	placeholder: string;
	type: string;
	label: string;
	name: string;
	error: null | string;
}

function Input(props: IInputProp) {
	const { handleChange, formData }: IContext = useContext(formDataContext);

		return (
		<div className="input-group">
			<label htmlFor="day">{props.label}</label>
			<input
				type={props.type}
				name={props.name}
				placeholder={props.placeholder}
				value={
					formData
						? formData[props.name as keyof typeof formData]
						: ""
				}
				style={props.error && {borderColor: "red"}}
				onChange={(e) => handleChange?.(e)}
			/>
			<span className="error">{props.error}</span>
		</div>
	)
}

export default Input;
