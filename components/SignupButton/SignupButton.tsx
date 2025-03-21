import style from './SignupButton.module.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    children:React.ReactNode;
  }

export default function SignupButton({children}:Props) {
  return <button  className={style.button}>{children}</button>;
}
