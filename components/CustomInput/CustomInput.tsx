import style from "./CustomInput.module.css";

interface Props {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode; 
  type:string;
  style?: React.CSSProperties;
}

export default function CustomInput({ value, onChange, children,type }: Props) {
  return (
    <div className={style.Conter}>
      {value === "" && <p className={style.text}>{children}</p>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${style.CustomInput} ${style.numberInput}`}
      />
    </div>
  );
}
