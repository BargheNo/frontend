import React from "react";
import RequestCard from "./RequestCard/RequestCard";

export default function Requests() {
	return (
		<div className="flex flex-col text-gray-800 rounded-2xl overflow-hidden bg-[#F4F1F3] shadow-[-6px_-6px_16px_rgba(255,255,255,0.8),6px_6px_16px_rgba(0,0,0,0.2)]">
			<RequestCard
				panelDetails={{
					panelName: "پنل خانه تهرانپارس",
					customerName: "مجتبی قاطع",
					address: "فلکه شانزدهم تهرانپارس، حیدرخانی، کوچه پارسا، پلاک 134",
					capacity: 5000,
					price: 200000,
				}}
			/>
			<RequestCard
				panelDetails={{
					panelName: "پنل باغ شهری",
					customerName: "رضا موسوی نارنجی",
					address: " ایران، استان کبیر اردبیل، نرسیده ترکیه، 200 کیلومتری ارومیه، کنار دریای خزر، خیابان باقلوا، کوچه خوشمزه، پلاک 104، درب انتهای کوچه سبز خراسان رضوی شمالی نبش میدان بنفش",
					capacity: 200,
					price: 120050780123406,
				}}
			/>
		</div>
	);
}
