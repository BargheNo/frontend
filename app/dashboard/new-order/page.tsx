"use client"
import React from 'react'
import { Plus,ShieldAlert,SquareMenu,Building2,Map,MapPinHouse,LandPlot,Building,CircleDollarSign,Gauge} from 'lucide-react';
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

export default function page() {
  return (
    <div className={`${"flex justify-center items-center mt-15"} ${vazir.className}`}>
        <div >
            
            <Dialog open={true}>
               <DialogTrigger asChild>
                    <SignupButton type='button'><Plus className={style.icon}/></SignupButton>
                </DialogTrigger>
            <DialogContent className='min-w-[55vw] '>
                <DialogHeader>
                <DialogTitle className='flex justify-center items-end font-bold mt-3.5'>ثبت سفارش پنل جدید</DialogTitle>
                <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className='flex flex-col items-end'>
                <div className='flex flex-row items-center gap-7 -mr-8'>
                    <div className='flex flex-row items-center mt-7 '>
                        <p>.پنل شما با این نام در بخش پنلها ثبت خواهد شد</p>
                        <ShieldAlert></ShieldAlert>
                    </div>
                    <Formik initialValues={{ name: "" }}
                        validationSchema={Yup.object({name: Yup.string().required("این فیلد الزامی است"),})}
                        onSubmit={(values) => console.log(values)}>
                        <Form >
                            <div className='w-80'>
                            <CustomInput  placeholder='نام پنل' icon={SquareMenu} name='name'> </CustomInput>
                            </div>
                        </Form>
                    </Formik>
                </div>
                <div className='w-50'>
                    <SignupButton > انتخاب آدرس</SignupButton>
                </div>
                <div className='flex flex-row items-end justify-end w-170'>

                    <Formik initialValues={{ city: "" ,province:""}}
                        validationSchema={Yup.object({city: Yup.string().required("این فیلد الزامی است"),province: Yup.string().required("این فیلد الزامی است"),})}
                        onSubmit={(values) => console.log(values)}>
                        <Form className={`flex-1 flex flex-row gap-7  ${style.form}`}>
                            <CustomInput readOnly={true} placeholder='شهر' icon={Building2} name='city'> </CustomInput>
                            <CustomInput readOnly={true} placeholder='استان' icon={Map} name='province'> </CustomInput>
                        </Form>
                    </Formik>
                </div>
                <div className='flex flex-row items-end justify-end  w-180'>

                    <Formik initialValues={{ address: "" }}
                        validationSchema={Yup.object({address: Yup.string().required("این فیلد الزامی است"),})}
                        onSubmit={(values) => console.log(values)}>
                        <Form className={`flex-1 flex flex-row gap-7 `}>
                            <CustomInput  placeholder='آدرس' icon={MapPinHouse} name='address'> </CustomInput>
                        </Form>
                    </Formik>
                </div>
                    <div className='flex flex-row items-center mt-7 '>
                        <p> .مکانی که برای نصب پنل در نظر دارید</p>
                        <ShieldAlert></ShieldAlert>
                    </div>
                    <div className='flex flex-row items-center gap-7 -mr-8'>
                    <div className='flex flex-row items-center mt-7 '>
                        <p> (متر مربع) مساحت محل نصب پنل </p>
                        <ShieldAlert></ShieldAlert>
                    </div>
                    <Formik initialValues={{ area: "" }}
                        validationSchema={Yup.object({area: Yup.string().required("این فیلد الزامی است"),})}
                        onSubmit={(values) => console.log(values)}>
                        <Form >
                            <div className='w-80'>
                            <CustomInput  placeholder='مساحت' icon={LandPlot} name='area'> </CustomInput>
                            </div>
                        </Form>
                    </Formik>
                </div>
                <div className='flex flex-row items-center gap-7 -mr-8'>
                    <div className='flex flex-row items-center mt-7 '>
                        <p> (متر مربع) مساحت محل نصب پنل </p>
                        <ShieldAlert></ShieldAlert>
                    </div>
                    <Formik initialValues={{ elecricity: "" }}
                        validationSchema={Yup.object({elecricity: Yup.string().required("این فیلد الزامی است"),})}
                        onSubmit={(values) => console.log(values)}>
                        <Form >
                            <div className='w-80'>
                            <CustomInput  placeholder='میزان برق مورد نیاز' icon={Gauge} name='elecricity'> </CustomInput>
                            </div>
                        </Form>
                    </Formik>
                </div>

                <div className='flex flex-row items-end justify-end w-170'>
                <Formik initialValues={{ cost: "" ,building:""}}
                    validationSchema={Yup.object({cost: Yup.string().required("این فیلد الزامی است"),building: Yup.string().required("این فیلد الزامی است"),})}
                    onSubmit={(values) => console.log(values)}>
                    <Form className={`flex-1 flex flex-row gap-7  ${style.form}`}>
                        <CustomInput  placeholder='سقف هزینه' icon={Building} name='cost'> </CustomInput>
                        <CustomInput  placeholder='نوع ساختمان' icon={CircleDollarSign} name='province'> </CustomInput>
                    </Form>
                </Formik>
                </div>

                </div>
              
                <DialogFooter >
                <DialogClose asChild>
                </DialogClose>
                </DialogFooter>
            </DialogContent>
            </Dialog>
            
            <div className='mr-2 mt-4 text-navy-blue'>
                <p>ثبت سفارش جدید</p>
            </div>
        </div>
    </div>
  )
}
