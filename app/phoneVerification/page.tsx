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
    <Dialog>
      <DialogTrigger asChild>
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
        <DialogHeader className="mt-7">
          <DialogTitle className="font-normal">کد تأیید ارسال‌ شده را در کادر زیر وارد کنید</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2 ">
          <div className="grid flex-1 gap-2 mt-4">
              <InputOTP  maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
              <InputOTPGroup className="gap-3" >
              {[...Array(6)].map((_, index) => (
                <InputOTPSlot  className={style.CustomInput} key={index} index={index} />
                ))}
              </InputOTPGroup>
            </InputOTP>
            <div style={{fontSize:"16px"}} className={`${'grid flex-1 justify-end ml-auto w-3/9 font-bold '} ${style.button}`}>
                <SignupButton >ارسال مجدد </SignupButton>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>


    </div>
  )
}
