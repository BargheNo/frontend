"use client";
import style from "./CustomInput.module.css";
import { LucideIcon } from "lucide-react";

import { useField } from "formik";
import { ChangeEventHandler, useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	children: React.ReactNode;
	icon?: LucideIcon;
	onIconClick?: () => void;
	// value?: string;
  autoFocus?: boolean;
	// onChange?: ChangeEventHandler<HTMLInputElement>;
}

const isRTL = (text: string | undefined): boolean => {
	if (text) {
		const rtlChars = /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/;
		return rtlChars.test(text);
	}
	return true;
};

export default function CustomInput({
	name,
	children,
	icon: Icon,
	onIconClick,
  autoFocus = false,
	...props
}: Props) {
	// const [isTextRTL, setTextRTL] = useState(true);
	const [field, meta] = useField(name);
	const hasError = meta.touched && meta.error;

	// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	onChange?.(e);
	// 	setTextRTL(isRTL(e.target.value));
	// };

	return (
		<div className={style.Conter}>
			<div className={style.inputWrapper}>
				{Icon && <Icon onClick={onIconClick} className={style.icon} />}
				{field.value === "" && (
					<label className={style.text}>{children}</label>
				)}
				<input
					dir={isRTL(field.value) ? "rtl" : "ltr"}
					{...field}
					{...props}
					// onChange={handleChange}
          autoFocus={autoFocus}
					// value={value}
					className={`${style.CustomInput} ${style.numberInput} ${
						isRTL(field.value) ? "text-right" : "text-left"
					}`}
					style={{ paddingLeft: Icon ? "42px" : "12px"}}
				/>
				{hasError && (
					<div className={style.errorMessage}>{meta.error}</div>
				)}
			</div>
		</div>
	);
}
