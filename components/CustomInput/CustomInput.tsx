"use client";
import style from "./CustomInput.module.css";
import { LucideIcon } from "lucide-react";

import { useField } from "formik";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  onIconClick?: () => void;
}

export default function CustomInput({
  name,
  children,
  icon: Icon,
  onIconClick,
  ...props
}: Props) {
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;

  return (
    <div className={style.Conter}>
      <div className={style.inputWrapper}> 
      {Icon && <Icon onClick={onIconClick} className={style.icon} />}
      {field.value === "" && <label className={style.text}>{children}</label>}
      <input
        {...field}
        {...props}
        className={`${style.CustomInput} ${style.numberInput}`}
      />
      {hasError && <div className={style.errorMessage}>{meta.error}</div>}
      </div>
    </div>
  );

}