"use client"
import { useState } from "react"
import CustomInput from "@/components/CustomInput/CustomInput";
import { vazir } from "@/lib/fonts";
import SignupButton from "@/components/SignupButton/SignupButton";
import style from "./signup.module.css";
import Background from '../../public/signup.jpg';
import Image from "next/image";
import { MoveLeft, Mail, Lock, User, Unlock, Icon } from 'lucide-react';

function login() {
    const[name,setName]=useState("");
    const[phonenumber,setphonenumber]=useState("");
    const[password,setPassword]=useState("");
    const[confpassword,setConfpassword]=useState("");
    const[check,Setcheck]=useState(false);
    const[hidepass,Sethidepass]=useState(true);
    const[hideconfpass,Sethideconfpass]=useState(true);
  return (
    <>
        <Image className="-z-10" src={Background} alt="Background" layout="fill" objectFit="cover" />
    <div className={vazir.className}>
    <div className={style.wholePage}>
        <div className={style.card}>
           <h1 className={style.topic}>ثبت نام</h1>

                <CustomInput icon={User}  type="text" value={name} onChange={setName}>نام</CustomInput>
                <CustomInput icon={Mail} type="number" value={phonenumber} onChange={setphonenumber}>شماره تلفن همراه</CustomInput>
                <CustomInput onIconClick={()=>Sethidepass(prev=>!prev)} icon={hidepass?Lock:Unlock} type={hidepass?"password":"text"} value={password} onChange={setPassword}>رمز عبور</CustomInput>
                <CustomInput onIconClick={()=>Sethideconfpass(prev=>!prev)} icon={hideconfpass?Lock:Unlock} type={hideconfpass?"password":"text"} value={confpassword} onChange={setConfpassword}>تایید رمز عبور</CustomInput>
            <div className={style.ruleText}>
                <p >.را می پذیرم</p>
                <p className={style.link}>قوانین و مقررات</p>
                <input onClick={()=>Setcheck(prev=>!prev)} className={style.checkbox} type="checkbox" id="myCheckbox" />
            </div>
            <div style={{width:"90%"}}>
                <SignupButton  Disable={!check}>
                    <div className={style.leftIconButton}>
                        <MoveLeft></MoveLeft>
                        <p>ثبت نام</p> 
                    </div>
                </SignupButton>
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