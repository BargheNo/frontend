"use client"
import { useState } from "react"
import CustomInput from "@/components/CustomInput/CustomInput";
import { vazir } from "@/lib/fonts";
import SignupButton from "@/components/SignupButton/SignupButton";
function login() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confpassword,setConfpassword]=useState("");
  return (
    <div className={vazir.className}>
    <div style={{backgroundColor:"gray"}} className="flex justify-center items-center h-screen">
        <div style={{boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.4)",backgroundColor:"#F1F4FC",borderRadius:"15px"}} className="w-1/3 h-4/5 flex flex-col justify-center items-center">
           <h1 style={{fontWeight:"bolder",fontSize:"30px"}}>ثبت نام</h1>
                <CustomInput value={name} onChange={setName}>نام</CustomInput>
                <CustomInput value={email} onChange={setEmail}>ایمیل</CustomInput>
                <CustomInput value={password} onChange={setPassword}>رمز عبور</CustomInput>
                <CustomInput value={confpassword} onChange={setConfpassword}>تایید رمز عبور</CustomInput>
            <div style={{marginTop:"15px",gap:"4px",fontSize:"16px",marginLeft:"auto",marginRight:"30px"}} className="flex flex-row justify-end">
                <p >.را می پذیرم</p>
                <p style={{color:"#2979FF",cursor:"pointer"}}>قوانین و مقررات</p>
                <input className="border-gray-500" style={{width:"1.5rem",height:"1.5rem",boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",outline:"none",border:"solid #bbbb 1px",borderRadius:"14px",cursor:"pointer"}} type="checkbox" id="myCheckbox" />
            </div>
            <div style={{width:"90%"}}>
                <SignupButton>ثبت نام</SignupButton>
            </div>

            <div style={{marginTop:"20px",gap:"4px",fontSize:"16px"}} className="flex flex-row justify-end">
                <p style={{color:"#2979FF",cursor:"pointer"}}>ورود به حساب</p>
                <p>!قبلا حساب ساخته ام</p>
            </div>

        </div>
    </div>
    </div>
  )
}

export default login