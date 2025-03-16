import style from './SignupButton.module.css';

interface Props {
    Disable?:boolean;
    Style?: React.CSSProperties;
    children:React.ReactNode;
    type?:"submit"|"button"
  }

export default function SignupButton({Disable,Style,children,type}:Props) {
  return <button  type={type} style={Style} disabled={Disable} className={style.button}>{children}</button>;
}
