"use client"
import { useState } from "react"
import CustomInput from "@/components/CustomInput/CustomInput";
import { vazir } from "@/lib/fonts";
import SignupButton from "@/components/SignupButton/SignupButton";
import style from "./signup.module.css";
import Background from '../../public/signup.jpg';
import Image from "next/image";
import { MoveLeft, Smartphone, Lock, User, Unlock, Check } from 'lucide-react';

function login() {
    const[name,setName]=useState("");
    const[Lname,setLName]=useState("");
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
                <div className="flex flex-row gap-3 justify-center w-9/10 ">
                <CustomInput  icon={User}  type="text" value={Lname} onChange={setLName}>نام خانوادگی</CustomInput>
                <CustomInput icon={User}  type="text" value={name} onChange={setName}>نام </CustomInput>
                </div>
                <div className="flex flex-row justify-center w-9/10 ">
                    <div className={style.code}>
                    <CustomInput readonly={true} value="" icon={Smartphone} type="number" > +98 </CustomInput>
                    </div>
                    <CustomInput  type="number" value={phonenumber} onChange={setphonenumber}>شماره تلفن همراه</CustomInput>
                </div>
                <CustomInput onIconClick={()=>Sethidepass(prev=>!prev)} icon={hidepass?Lock:Unlock} type={hidepass?"password":"text"} value={password} onChange={setPassword}>رمز عبور</CustomInput>
                <CustomInput onIconClick={()=>Sethideconfpass(prev=>!prev)} icon={hideconfpass?Lock:Unlock} type={hideconfpass?"password":"text"} value={confpassword} onChange={setConfpassword}>تایید رمز عبور</CustomInput>
            <div className={style.ruleText}>
            
            <label htmlFor="link-checkbox" className="flex gap-1">
              .را می پذیرم
              <a href="#" className={style.link}>قوانین و مقررات</a>
            </label>
            <div className="relative">
              <input id="link-checkbox" onClick={()=>Setcheck(prev=>!prev)} type="checkbox" value="" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#2979FF] checked:border-blue-500"/>
              <Check className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-white opacity-0 pointer-events-none peer-checked:opacity-100 w-4.5 h-4.5"/>
            </div>
                
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
                <a href="./login" className={style.link}>ورود به حساب</a>
                <p>!قبلا حساب ساخته ام</p>
            </div>

        </div>
    </div>
    </div>
    </>
  )
}

export default login