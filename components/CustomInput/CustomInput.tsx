import style from "./CustomInput.module.css";
import { LucideIcon } from "lucide-react";

interface Props {
	value?: string;
	onChange?: (value: string) => void;
	children: React.ReactNode;
	type: string;
	style?: React.CSSProperties;
	icon?: LucideIcon;
	onIconClick?: () => void;
	readonly?: boolean;
}

export default function CustomInput({
	value,
	onChange,
	children,
	type,
	icon: Icon,
	onIconClick,
	readonly,
}: Props) {
	return (
		<div className={style.Conter}>
			{Icon && <Icon onClick={onIconClick} className={style.icon}></Icon>}
			{value === "" && <label className={style.text}>{children}</label>}
			<input
				type={type}
				value={value}
				readOnly={readonly}
				onChange={(e) => onChange && onChange(e.target.value)}
				className={`${style.CustomInput} ${style.numberInput}`}
			/>
		</div>
	);
}
