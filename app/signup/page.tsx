"use client"
import { useState } from "react"
import CustomInput from "@/components/CustomInput/CustomInput";
import { vazir } from "@/lib/fonts";
import SignupButton from "@/components/SignupButton/SignupButton";
import style from "./signup.module.css";
import Background from '../../public/signup.jpg';
import Image from "next/image";
import { MoveLeft, Smartphone, Lock, User, Unlock, Check } from 'lucide-react';
import * as Yup from "yup";
import { Form, Formik } from "formik";
import registerService from '@/src/services/registerService';

function login() {
    const validationSchema = Yup.object({
        firstname: Yup.string().required(".نام الزامی است"),
        lastname: Yup.string().required(".نام خانوادگی الزامی است"),
        phonenumber: Yup.string()
            .matches(/^(9\d{9})$/, ".شماره تلفن وارد شده اشتباه است")
            .required(".شماره تلفن الزامی است"),
        password: Yup.string()
            .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد.")
            .matches(/[a-z]/, ".رمز عبور باید شامل حداقل یک حرف کوچک باشد")
            .matches(/[A-Z]/, ".رمز عبور باید شامل حداقل یک حرف بزرگ باشد")
            .matches(/\d/, ".رمز عبور باید شامل حداقل یک عدد باشد")
            .matches(/[\W_]/, ".رمز عبور باید شامل حداقل یک نماد باشد")
            .required(".رمز عبور الزامی است"),
        confirmpassword: Yup.string()
            .oneOf([Yup.ref("password")], ".تأیید رمز عبور باید با رمز عبور مطابقت داشته باشد")
            .required(".تأیید رمز عبور الزامی است"),
    });
    


    const[check,Setcheck]=useState(false);
    const[hidepass,Sethidepass]=useState(true);
    const[hideconfpass,Sethideconfpass]=useState(true);

    const handelRegister=(name:string,Lname:string,phone:string,password:string,confirmPassword:string,isAcceptTerms:boolean)=>{
        registerService.createUser({firstName:name,lastName:Lname,phone:phone,password:password,confirmPassword:confirmPassword,isAcceptTerms:isAcceptTerms})
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.error(err.message)})
    }
  return (
    <>
        <Image className="-z-10" src={Background} alt="Background" layout="fill" objectFit="cover" />
    <div className={vazir.className}>
    <div className={style.wholePage}>
        <div className={style.card}>
           <h1 className={style.topic}>ثبت نام</h1>
           <Formik  initialValues={{firstname:"",lastname:"",phonenumber:"",password:"",confirmpassword:""}} 
            validationSchema={validationSchema}
            onSubmit={(values) => {
                handelRegister(
                    values.firstname,
                    values.lastname,
                    values.phonenumber,
                    values.password,
                    values.confirmpassword,
                    check 
                );
            }}>
                <Form className={style.form}>

            
                <div className="flex flex-row gap-3 justify-center w-9/10 ">
                <CustomInput name="lastname" icon={User}  type="text"  placeholder="نام خانوادگی"> </CustomInput>
                <CustomInput placeholder="نام" name="firstname" icon={User}  type="text" > </CustomInput>
                </div>
                <div className="flex flex-row justify-center w-9/10 ">
                    <div className={style.code}>
                    <CustomInput name="countrycode" readOnly={true} placeholder="+98" icon={Smartphone} type="number" > </CustomInput>
                    </div>
                    <CustomInput name="phonenumber" placeholder="شماره تلفن همراه"  type="number" > </CustomInput>
                </div>
                <CustomInput name="password" placeholder="رمز عبور" onIconClick={()=>Sethidepass(prev=>!prev)} icon={hidepass?Lock:Unlock} type={hidepass?"password":"text"} > </CustomInput>
                <CustomInput name="confirmpassword" onIconClick={()=>Sethideconfpass(prev=>!prev)} icon={hideconfpass?Lock:Unlock} type={hideconfpass?"password":"text"}  placeholder="تایید رمز عبور">  </CustomInput>
            <div className={style.ruleText}>
            
            <label htmlFor="link-checkbox" className="flex gap-1">
              .را می پذیرم
              <a href="#" className={style.link}>قوانین و مقررات</a>
            </label>
            <div className="relative">
              <input id="link-checkbox" onClick={()=>Setcheck(prev=>!prev)} type="checkbox" value="" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#2979FF] checked:border-blue-500 mt-0.5"/>
              <Check className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-white opacity-0 pointer-events-none peer-checked:opacity-100 w-4.5 h-4.5 "/>
            </div>
                
            </div>
            <div style={{width:"90%"}}>
                <SignupButton  type="submit"  disabled={!check}>
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
            </Form>
            </Formik>
        </div>
    </div>
    </div>
    </>
  )
}

export default login