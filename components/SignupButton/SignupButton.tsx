import style from './SignupButton.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children:React.ReactNode;
  }

export default function SignupButton({children,...props}:Props) {
  return <button {...props}  className={style.button}>{children}</button>;
}
