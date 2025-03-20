import { ArrowLeft } from 'lucide-react';
import React from 'react'
import BidCard from '@/components/CorpDashboard/Bids/BidCard'

const page = () => {
  return (
    <div className="p-6 space-y-4 shadow-2xl rounded-2xl bg-[#f1f4fc]">
        <input
            type="password"
            name="password"
            value="test"
            placeholder="رمز عبور"
            className="text-black w-full px-3 py-2 inset-input"
            required
        />
        <br/>
        <button
            type="submit"
            className={`flex justify-center mt-8 cta-neu-button`}
          >
            {"ورود"}
            {/* <MoveLeft /> */}
        </button>
        <br/>
        <div className="flex flex-col neu-container">
			<BidCard
				panelDetails={{
					panelName: "پنل خانه تهرانپارس",
					customerName: "مجتبی قاطع",
					address:
						"فلکه شانزدهم تهرانپارس، حیدرخانی، کوچه پارسا، پلاک 134",
					capacity: 5000,
					price: 200000,
				}}
				status="confirmed"
			/>
			<BidCard
				panelDetails={{
					panelName: "پنل باغ شهری",
					customerName: "رضا موسوی نارنجی",
					address:
						"ایران، استان کبیر اردبیل، نرسیده ترکیه، 200 کیلومتری ارومیه، کنار دریای خزر، خیابان باقلوا، کوچه خوشمزه، پلاک 104، درب انتهای کوچه سبز",
					capacity: 200,
					price: 120050780123406,
				}}
				status="pending"
			/>
		</div>
        
        <br/>
        <br/>

        <div
            className={`h-4 w-4 rounded-full ${1 ? "green-status" : 0 ? "yellow-status" : "red-status"} shadow-md`}
        ></div>
        <div
            className={`h-4 w-4 rounded-full ${0 ? "green-status" : 1 ? "yellow-status" : "red-status"} shadow-md`}
        ></div>
        <div
            className={`h-4 w-4 rounded-full ${0 ? "green-status" : 0 ? "yellow-status" : "red-status"} shadow-md`}
        ></div>

        <br/>
        <br/>
        <br/>
        
        <div className="flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-[#F0F0F3] shadow-[inset_-4px_-4px_10px_rgba(255,255,255,0.8),inset_4px_4px_10px_rgba(0,0,0,0.1)] w-24">
            <div
                className={`h-4 w-4 rounded-full green-status shadow-md`}
            ></div>
            <span className="text-sm font-medium text-gray-600">
                {   1
                    ? "تایید شده"
                    : "در انتظار تایید مشتری"}
            </span>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <div className="red-circle-button">
            <ArrowLeft />
        </div>


        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        

        <div className="bg-white rounded-2xl p-4 neu-shadow">
            hi
        </div>

        <br/>
        
        <div className="gradient-orange-purple rounded-2xl p-4 neu-shadow">
            hiiii
        </div>

        <br/>

        <div className="gradient-soft-blue rounded-2xl p-4 neu-shadow">
            hiiiii
        </div>

    </div>
  )
}

export default page