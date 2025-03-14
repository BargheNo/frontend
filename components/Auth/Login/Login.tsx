"use client";
import { useState} from "react";
import { MoveLeft, Lock, Unlock, Smartphone
 } from "lucide-react";
import Link from "next/link";
import styles from "./login.module.css";

const Login = () => {
  const [formData, setFormData] = useState({
    number: "98",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (value === "") {
        setFormData({ ...formData, number: "98" });
      } else if (!value.startsWith("98")) {
        setFormData({ ...formData, number: `98${value}` });
      } else {
        setFormData({ ...formData, number: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in...", formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div dir="rtl" className={styles.mainbg}>
      <div className="w-full max-w-md p-6 space-y-4 shadow-2xl rounded-2xl bg-[#f1f4fc]">
        <h2 className="text-3xl text-black text-center">{"ورود"}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Smartphone
              className="absolute left-3 top-2 text-orange-400"
              size={20}
            />
            


            <input
              type="tel"
              name="phone"
              value={formData.number === "98" ? "" : formData.number}
              onChange={handleChange}
              placeholder="شماره همراه"
              className="text-black w-4/5 px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 shadow-[inset_-4px_-4px_10px_rgba(255,255,255,0.5),inset_1px_1px_3px_rgba(0,0,0,0.2)]"
              required
              dir="rtl"
            />
            <input
              type="tel"
              name="phone"
              placeholder="+98"
              className="text-black align-middle w-1/5 pl-9 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 shadow-[inset_-4px_-4px_10px_rgba(255,255,255,0.5),inset_1px_1px_3px_rgba(0,0,0,0.2)]"
              dir="ltr"
              readOnly
            />
          </div>

          <div className="relative">
          <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute left-3 top-3 text-orange-400 cursor-pointer"
            >
              {showPassword ? <Unlock size={20} /> : <Lock size={20} />}
            </button>

            <input
              type={showPassword ? "text" : "password"} 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="رمز عبور"
              className="text-black w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 shadow-[inset_-4px_-4px_10px_rgba(255,255,255,0.5),inset_1px_1px_3px_rgba(0,0,0,0.2)]"
              required
              dir="rtl"
            />
          </div>

          <button
            type="submit"
            className={`flex justify-center mt-8 items-center text-orange-500 text-xl font-semibold gap-2 p-3 w-full justify-self-center rounded-full cursor-pointer shadow-[-4px_-4px_10px_rgba(255,255,255,1),2px_2px_5px_rgba(0,0,0,0.3)]
              duration-300 hover:shadow-[-8px_-8px_20px_rgba(255,255,255,1),4px_4px_10px_rgba(0,0,0,0.3)]
              active:shadow-[inset_-4px_-4px_10px_rgba(255,255,255,0.5),inset_1px_1px_3px_rgba(0,0,0,0.2)]`}
          >
            {"ورود"}
            <MoveLeft />
          </button>
        </form>

        <p className="flex gap-5 justify-center text-center text-sm text-blue-600">
          <a href="">فراموشی رمز عبور</a>
          <Link href="/signup">ثبت نام نکرده ام</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;