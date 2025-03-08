"use client"
import { useState } from "react"
import CustomInput from "@/components/CustomInput/CustomInput";
import { vazir } from "@/lib/fonts";
import SignupButton from "@/components/SignupButton/SignupButton";
import style from "./signup.module.css";
import Background from '../../public/signup.jpg';
import Image from "next/image";

function login() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confpassword,setConfpassword]=useState("");
  return (
    <>
    <div className="h-screen w-screen absolute -z-10">
        <Image src={Background} alt="Background" layout="fill" objectFit="cover" />
    </div>
    <div className={vazir.className}>
    <div className={style.wholePage}>
        <div className={style.card}>
           <h1 className={style.topic}>ثبت نام</h1>
                <CustomInput value={name} onChange={setName}>نام</CustomInput>
                <CustomInput value={email} onChange={setEmail}>ایمیل</CustomInput>
                <CustomInput value={password} onChange={setPassword}>رمز عبور</CustomInput>
                <CustomInput value={confpassword} onChange={setConfpassword}>تایید رمز عبور</CustomInput>
            <div className={style.ruleText}>
                <p >.را می پذیرم</p>
                <p className={style.link}>قوانین و مقررات</p>
                <input className={style.checkbox} type="checkbox" id="myCheckbox" />
            </div>
            <div style={{width:"90%"}}>
                <SignupButton>ثبت نام</SignupButton>
            </div>

            <div className={style.loginText}>
                <p className={style.link}>ورود به حساب</p>
                <p>!قبلا حساب ساخته ام</p>
            </div>

        </div>
    </div>
    </div>
    </>
  )
}

export default login