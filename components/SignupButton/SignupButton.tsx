import style from './SignupButton.module.css';

interface Props {
    Disable?:boolean;
    Style?: React.CSSProperties;
    children:React.ReactNode;
  }

export default function SignupButton({Disable,Style,children}:Props) {
  return <button   style={Style} disabled={Disable} className={style.button}>{children}</button>;
}
