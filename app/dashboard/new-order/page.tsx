"use client"
import React from 'react'
import { Plus} from 'lucide-react';
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
            
            <Dialog>
               <DialogTrigger asChild>
                    <SignupButton type='button'><Plus className={style.icon}/></SignupButton>
                </DialogTrigger>
            <DialogContent >
                <DialogHeader>
                <DialogTitle className='flex justify-center items-end font-bold mt-3.5'>ثبت سفارش پنل جدید</DialogTitle>
                <DialogDescription></DialogDescription>
                </DialogHeader>
                {/* <div className='flex flex-row'>
                    <p>.پنل شما با این نام در بخش پنلها ثبت خواهد شد</p>
                    <Formik initialValues={{ name: "" }}
                        validationSchema={Yup.object({name: Yup.string().required("این فیلد الزامی است"),})}
                        onSubmit={(values) => console.log(values)}>
                        <Form>
                            <CustomInput name='name'> </CustomInput>
                    </Form>
                    </Formik>
                </div> */}

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
