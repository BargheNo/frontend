import style from "./CustomInput.module.css";

interface Props {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode; 
}

export default function CustomInput({ value, onChange, children }: Props) {
  return (
    <div className={style.Conter}>
      {value === "" && <p className={style.text}>{children}</p>}
      <input 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={style.CustomInput}
      />
    </div>
  );
}
