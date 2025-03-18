'use client'
import { REGEXP_ONLY_DIGITS } from "input-otp"
import { vazir } from "@/lib/fonts";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import style from './phoneVerification.module.css'
import SignupButton from "@/components/SignupButton/SignupButton";
import {  MoveLeft } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Props{
  disable:boolean;
}

export default function verificationModal({disable}:Props) {
  
  return (
    <div className={vazir.className}>   
    <Dialog  >
      <DialogTrigger asChild style={{width:"90%"}}>
      <div>
          <SignupButton type="submit"  disabled={disable}>
            <div className={style.leftIconButton}>
                <MoveLeft></MoveLeft>
                <p>ثبت نام</p> 
            </div>
          </SignupButton>
                
      </div>
      </DialogTrigger>
      <DialogContent className={`${style.card} ${vazir.className}`}>
        <DialogHeader className="mt-20">
          <DialogTitle className="font-normal">.کد تأیید ارسال‌ شده را در کادر زیر وارد کنید</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2 ">
          <div className="grid flex-1 gap-2">
              <InputOTP  maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
              <InputOTPGroup className="gap-4" >
              {[...Array(6)].map((_, index) => (
                <InputOTPSlot style={{marginTop:"2rem"}} className={style.CustomInput} key={index} index={index} />
                ))}
              </InputOTPGroup>
            </InputOTP>
            <div style={{fontSize:"14px",marginBottom:"60px"}} className='flex flex-row justify-end ml-auto w-2/9 h-auto font-bold '>
                <SignupButton>ارسال مجدد </SignupButton>
            </div>
          </div>
        </div>

      </DialogContent>
    </Dialog>


    </div>
  )
}
