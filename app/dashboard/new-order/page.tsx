import { vazir } from '@/lib/fonts';
import Neworder from '@/components/New-Order/new-order';


export default function Page() {
    const handelHistory=()=>{
        
    }

    return (
        <>
        <div className={`${"flex justify-center items-center mt-15"} ${vazir.className}`}>
            <div>
               <Neworder></Neworder>

                <div className='mr-2 mt-4 text-navy-blue'>
                    <p>ثبت سفارش جدید</p>
                </div>
            </div>
        </div>
       {/* <OrderHistory name='panel tehran' address='mazandaran amol kooche dool pelak 10 vahed 1' status='in progress' createdTime='2-2-2025'></OrderHistory>
        
         */}
        </>
    )
}
