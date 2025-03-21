"use client"
import React, { useEffect, useState } from 'react'
import { Plus, ShieldAlert,Mailbox, SquareMenu, Building2, Map, MapPinHouse, LandPlot, Building, CircleDollarSign, Gauge,BellRing,House } from 'lucide-react';
import style from './style.module.css'
import SignupButton from '@/components/SignupButton/SignupButton';
import { vazir } from '@/lib/fonts';
import * as Yup from 'yup'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import CustomInput from '@/components/CustomInput/CustomInput';
import { Form, Formik } from 'formik';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function Page() {
    const[disable,Setdisable]=useState(true);
    const[province,Setprovince]=useState("");
    const[cities,Setcities]=useState<string[]>([]);
    // useEffect(()=>{
    //     console.log(province)
    // },[province])
    return (
        <div className={`${"flex justify-center items-center mt-15"} ${vazir.className}`}>
            <div>
                <Dialog>
                    <DialogTrigger asChild>
                        <SignupButton type='button'><Plus className={style.icon} /></SignupButton>
                    </DialogTrigger>
                    <DialogContent style={{backgroundColor:"#F1F4FC"}} className='min-w-[57vw] '>
                        <DialogHeader>
                            <DialogTitle className='flex justify-center items-end font-bold mt-3.5'>ثبت سفارش پنل جدید</DialogTitle>
                            <DialogDescription></DialogDescription>
                        </DialogHeader>
                        <Formik
                            initialValues={{name: "",city: "",province: "",address: "",area: "",electricity: "",cost: "",building: "",code:"",unit:"",number:""}}
                            validationSchema={Yup.object({
                                name: Yup.string().required("این فیلد الزامی است").max(50,"نام پنل نمی تواند بیش از 50 کارکتر باشد"),
                                city: Yup.string().required("این فیلد الزامی است"),
                                province: Yup.string().required("این فیلد الزامی است"),
                                address: Yup.string().required("این فیلد الزامی است"),
                                area: Yup.string().required("این فیلد الزامی است"),
                                electricity: Yup.string().required("این فیلد الزامی است"),
                                cost: Yup.string().required("این فیلد الزامی است"),
                                building: Yup.string().required("این فیلد الزامی است"),
                                number: Yup.number().required("این فیلد الزامی است"),
                                code: Yup.string().required("این فیلد الزامی است").length(10,"کد پستی وارد شده اشتباه است"),
                                unit: Yup.number().required("این فیلد الزامی است"),
                            })}
                            onSubmit={(values) => console.log(values)}
                        >
                            <Form className='flex flex-col items-end w-full h-auto gap-4'>
                                <div className='flex justify-end w-full items-center' style={{gap:"1vw"}}>
                                    <div className='flex flex-row justify-center mt-5 gap-x-1 text-gray-500'>
                                        <p>.پنل شما با این نام در بخش پنل‌ها ثبت خواهد شد</p>
                                        <ShieldAlert />
                                    </div>
                                    <CustomInput dir='rtl' style={{ width: "25vw" }} placeholder='نام پنل' icon={SquareMenu} name='name'> </CustomInput>
                                </div>

                                <div className='flex justify-end mt-2' style={{gap:"1vw"}}>
                                <Select name='city' disabled={disable}>
                                    <SelectTrigger disabled={disable} className={style.CustomInput} style={{width:"25vw"}}>
                                        <SelectValue  placeholder="شهر" />
                                    </SelectTrigger >
                                    <SelectContent>
                                        <SelectGroup>
                                        <SelectLabel>شهر</SelectLabel>
                                        {cities.map((city,index) => (
                                            <SelectItem key={index} value={city}>
                                                {Object.values(city)}
                                            </SelectItem>))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Select name='province' onValueChange={(value)=>{Setdisable(false);Setprovince(value);}}>
                                    <SelectTrigger className={style.CustomInput} style={{width:"25vw"}}>
                                        <SelectValue placeholder="استان" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                        <SelectLabel>استان</SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                </div>
                                <div className='-mt-5'>
                                <CustomInput dir='rtl' style={{ width: "51vw" }} placeholder='آدرس' icon={MapPinHouse} name='address'> </CustomInput>
                                </div>
                                <div className='flex justify-end -mt-4' style={{gap:"1vw"}} >
                                    <CustomInput type='number' style={{width:"25vw"}} dir='rtl' icon={Mailbox} name='code' placeholder='کد پستی'> </CustomInput>
                                    <CustomInput type='number' style={{width:"12vw"}} dir='rtl' icon={BellRing} placeholder='واحد' name='unit'> </CustomInput>
                                    <CustomInput type='number' style={{width:"12vw"}} dir='rtl' icon={House} placeholder='پلاک' name='number'> </CustomInput>
                                </div>

                                <div className='flex justify-end w-full gap-x-1 text-gray-500 -mb-6 mt-2'>
                                    <p>.مکانی که برای نصب پنل در نظر دارید</p>
                                    <ShieldAlert />
                                </div>

                                <div className='flex justify-end w-full items-center -mt-2' style={{gap:"1vw"}}>
                                    <div className='flex flex-row justify-center gap-x-1 text-gray-500 mt-6'>
                                        <p>(متر مربع)مساحت محل نصب پنل </p>
                                        <ShieldAlert />
                                    </div>
                                    <CustomInput type='number' dir='rtl' style={{ width: "25vw" }} placeholder='مساحت' icon={LandPlot} name='area'> </CustomInput>
                                </div>

                                <div className='flex justify-end w-full items-center -mt-4' style={{gap:"1vw"}}>
                                    <div className='flex flex-row justify-center gap-x-1 text-gray-500 mt-6'>
                                        <p>میزان برق مورد نیاز </p>
                                        <ShieldAlert />
                                    </div>
                                    <CustomInput type='number' dir='rtl' style={{ width: "25vw" }} placeholder='میزان برق مورد نیاز' icon={Gauge} name='electricity'>                                    </CustomInput>
                                </div>

                                <div className='flex justify-end w-full items-center -mt-4' style={{gap:"1vw"}}>
                                    <Select name='building'>
                                        <SelectTrigger className={style.CustomInput} style={{width:"25vw"}}>
                                            <SelectValue placeholder="نوع ساختمان" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                            <SelectLabel>نوع ساختمان</SelectLabel>
                                            <SelectItem value="residential">مسکونی</SelectItem>
                                            <SelectItem value="commercial">تجاری</SelectItem>
                                            <SelectItem value="industrial">صنعتی</SelectItem>
                                            <SelectItem value="argiculture">کشاورزی</SelectItem>
                                            <SelectItem value="more">سایر</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <div className='mb-6.5'>
                                    <CustomInput type='number' dir='rtl' style={{ width: "25vw", }} placeholder='سقف هزینه' icon={CircleDollarSign} name='cost'> </CustomInput>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-center items-center self-center'>
                                <SignupButton  style={{marginTop:"-15px",width:"25vw"}}> ثبت سفارش</SignupButton>
                                </div>
                                <DialogFooter>
                                    <DialogClose />
                                </DialogFooter>
                            </Form>
                        </Formik>
                    </DialogContent>
                </Dialog>

                <div className='mr-2 mt-4 text-navy-blue'>
                    <p>ثبت سفارش جدید</p>
                </div>
            </div>
        </div>
    )
}
