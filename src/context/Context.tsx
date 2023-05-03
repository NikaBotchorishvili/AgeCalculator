import { useState, createContext, ReactNode } from "react";
interface Data<T> {
	day: T;
	month: T;
	year: T;
}

type FormData = Data<string>
type Age = Data<number | null>
interface IProps {
	children?: ReactNode;
}

interface IErrors {
	dayError: string | null;
	monthError: string | null;
	yearError: string | null;
}

export interface IContext {
	formData: FormData;
	handleChange: Function;
	handleSubmit: Function;
	errors: IErrors;
	age: Age,
}

export const formDataContext = createContext({});

export default function ContextProvider({ children }: IProps) {
	const [formData, setFormData] = useState<FormData>({
		day: "",
		month: "",
		year: "",
	});

	const [age, setAge] = useState<Age>({
		day: null,
		year: null,
		month: null,
	});

	const [errors, setErrors] = useState<IErrors>({
		dayError: null,
		monthError: null,
		yearError: null,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormData((prevFormData) => {
			return { ...prevFormData, [name]: value };
		});
	};

	const validate = (day: number, month: number, year: number) => {
		const errs: IErrors = {
			dayError: null,
			monthError: null,
			yearError: null,
		};

		if (formData.day == "") {
			errs.dayError = "This Field is required";
		} else if (day < 1 || day > 31) {
			errs.dayError = "Must be a valid date";
		} else if (year % 4 != 0 && day > 28 && month == 2) {
			errs.dayError = "Consider a leap day";
		}

		if (formData.month == "") {
			errs.monthError = "This Field is required";
		} else if (month < 1 || month > 12) {
			errs.monthError = "Must be a valid date";
		}

		if (formData.year == "") {
			errs.yearError = "This Field is required";
		}else if(new Date().getFullYear() - year < 0){
			errs.yearError = "Must be in past"
		}

		switch (month) {
			case 4:
				if (day > 30) {
					errs.dayError = "there are 30 days in April";
				}
				break;

			case 6:
				if (day > 30) {
					errs.dayError = "there are 30 days in June";
				}
				break;
			case 9:
				if (day > 30) {
					errs.dayError = "There are 30 days in September";
				}
				break;
			case 11:
				if (day > 30) {
					errs.dayError = "There are 30 days in November";
				}
		}
		setErrors(errs);
		return Object.values(errs).every((val) => val == null);
	};

	const calculateAge = (birthDate: Date) => {
		let currentDate = new Date();

		let currentYear = currentDate.getFullYear(); 
		let currentMonth = currentDate.getMonth();
		let currentDay = currentDate.getDate();

		let bornYear = birthDate.getFullYear();	
		let bornMonth = birthDate.getMonth();
		let bornDay = birthDate.getDate();

		let ageYear = 0;
		let ageMonth = 0;
		let ageDay = 0;
		let monthDiff = currentMonth - bornMonth;

		ageYear = currentYear - bornYear

		if(currentMonth - bornMonth < 0){
			ageYear--;
			ageMonth = -(currentMonth - bornMonth + 1);
		}else if(monthDiff < 0 || (monthDiff === 0 && currentDay < bornDay)){
			//	Possible Bug
			ageYear--;
		}else{
			ageMonth = currentMonth - bornMonth;
		}

		if(currentDay - bornDay < 0){
			ageMonth++
			ageDay = -(currentDay - bornDay);
		}else{
			ageDay = currentDay - bornDay;
		}
		
		if(currentYear - bornYear == 0){
			ageYear = 0
		}

		setAge({year: ageYear, month: ageMonth, day: ageDay})
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		let day = Number(formData.day);
		let month = Number(formData.month);
		let year = Number(formData.year);

		let isValid = validate(day, month, year);
		if (isValid) {
			let birthDate = new Date(year, month - 1, day);
			calculateAge(birthDate);
		}
	};
	const context: IContext = {
		formData: formData,
		handleChange: handleChange,
		handleSubmit: handleSubmit,
		errors: errors,
		age: age,
	};
	return (
		<formDataContext.Provider value={context}>
			{children}
		</formDataContext.Provider>
	);
}
