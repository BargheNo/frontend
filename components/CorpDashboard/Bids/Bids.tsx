import React from "react";
import BidCard from "./BidCard";

export default function Bids() {
	return (
		<div className="flex flex-col text-gray-800 rounded-2xl overflow-hidden bg-[#F4F1F3] shadow-[-6px_-6px_16px_rgba(255,255,255,0.8),6px_6px_16px_rgba(0,0,0,0.2)]">
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
	);
}
