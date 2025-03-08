import style from './SignupButton.module.css';

export default function SignupButton({ children }: { children: React.ReactNode }) {
  return <button className={style.button}>{children}</button>;
}
