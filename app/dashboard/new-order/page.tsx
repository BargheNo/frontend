"use client"
import React from 'react'
import { Plus, ShieldAlert, SquareMenu, Building2, Map, MapPinHouse, LandPlot, Building, CircleDollarSign, Gauge } from 'lucide-react';
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

export default function Page() {
    return (
        <div className={`${"flex justify-center items-center mt-15"} ${vazir.className}`}>
            <div>
                <Dialog>
                    <DialogTrigger asChild>
                        <SignupButton type='button'><Plus className={style.icon} /></SignupButton>
                    </DialogTrigger>
                    <DialogContent className='min-w-[57vw]'>
                        <DialogHeader>
                            <DialogTitle className='flex justify-center items-end font-bold mt-3.5'>ثبت سفارش پنل جدید</DialogTitle>
                            <DialogDescription></DialogDescription>
                        </DialogHeader>
                        <Formik
                            initialValues={{name: "",city: "",province: "",address: "",area: "",electricity: "",cost: "",building: ""}}
                            validationSchema={Yup.object({
                                name: Yup.string().required("این فیلد الزامی است"),
                                city: Yup.string().required("این فیلد الزامی است"),
                                province: Yup.string().required("این فیلد الزامی است"),
                                address: Yup.string().required("این فیلد الزامی است"),
                                area: Yup.string().required("این فیلد الزامی است"),
                                electricity: Yup.string().required("این فیلد الزامی است"),
                                cost: Yup.string().required("این فیلد الزامی است"),
                                building: Yup.string().required("این فیلد الزامی است"),
                            })}
                            onSubmit={(values) => console.log(values)}
                        >
                            <Form className='flex flex-col items-end w-full h-auto gap-4'>
                                <div className='flex justify-end w-full gap-x-4 items-center'>
                                    <div className='flex flex-row justify-center mt-5 gap-x-1 text-gray-500'>
                                        <p>.پنل شما با این نام در بخش پنل‌ها ثبت خواهد شد</p>
                                        <ShieldAlert />
                                    </div>
                                    <CustomInput dir='rtl' style={{ width: "22vw" }} placeholder='نام پنل' icon={SquareMenu} name='name'> </CustomInput>
                                </div>

                                <div className='flex justify-end gap-x-6'>
                                    <CustomInput style={{width:"25vw"}} readOnly placeholder='شهر' icon={Building2} name='city'> </CustomInput>
                                    <CustomInput style={{width:"25vw"}} readOnly placeholder='استان' icon={Map} name='province'> </CustomInput>
                                </div>

                                <CustomInput dir='rtl' style={{ width: "51.5vw" }} placeholder='آدرس' icon={MapPinHouse} name='address'> </CustomInput>

                                <div className='flex justify-end w-full gap-x-1 mt-5 text-gray-500'>
                                    <p>.مکانی که برای نصب پنل در نظر دارید</p>
                                    <ShieldAlert />
                                </div>

                                <div className='flex justify-end w-full gap-x-4 items-center -mt-2'>
                                    <div className='flex flex-row justify-center gap-x-1 text-gray-500'>
                                        <p>(متر مربع)مساحت محل نصب پنل </p>
                                        <ShieldAlert />
                                    </div>
                                    <CustomInput dir='rtl' style={{ width: "25vw" }} placeholder='مساحت' icon={LandPlot} name='area'> </CustomInput>
                                </div>

                                <div className='flex justify-end w-full gap-x-4 items-center -mt-4'>
                                    <div className='flex flex-row justify-center gap-x-1 text-gray-500'>
                                        <p>میزان برق مورد نیاز </p>
                                        <ShieldAlert />
                                    </div>
                                    <CustomInput dir='rtl' style={{ width: "25vw" }} placeholder='میزان برق مورد نیاز' icon={Gauge} name='electricity'>                                    </CustomInput>
                                </div>

                                <div className='flex justify-end w-full gap-x-6 -mt-4'>
                                    <CustomInput dir='rtl' style={{ width: "25vw" }} placeholder='سقف هزینه' icon={CircleDollarSign} name='cost'> </CustomInput>
                                    <CustomInput dir='rtl' style={{ width: "25vw" }} placeholder='نوع ساختمان' icon={Building} name='building'> </CustomInput>
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
