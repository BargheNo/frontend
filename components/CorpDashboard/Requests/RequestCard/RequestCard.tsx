import IconWithBackground from "@/components/IconWithBackground/IconWithBackground";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { RequestCardProps } from "@/src/types/RequestCardTypes";
import styles from "./RequestCard.module.css";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	ArrowLeft,
	Battery,
	Calendar,
	DollarSign,
	Eclipse,
	MapPin,
	User,
} from "lucide-react";
import { vazir } from "@/lib/fonts";
import Link from "next/link";
import React from "react";
import CustomInput from "@/components/CustomInput/CustomInput";

function wordExpression(value: number | string, english: boolean) {
	if (typeof value === "number") {
		if (english) {
			if (value > 1e3) return { value: `${value / 1e3}k`, changed: true };
			if (value > 1e6) return { value: `${value / 1e6}M`, changed: true };
			if (value > 1e9) return { value: `${value / 1e9}G`, changed: true };
			return { value: `${value}`, changed: true };
		} else {
			let res = "";
			let found = false;
			if (Math.round(value / 1e12) !== 0) {
				res += `${Math.round(value / 1e12)} تیلیارد`;
				found = true;
			}
			if (Math.round(value / 1e9) % 1000 !== 0) {
				if (found) res += " و ";
				res += `${Math.round(value / 1e9) % 1000} میلیارد`;
				found = true;
			}
			console.log("m:", Math.round(value / 1e9) % 1000);
			if (Math.round(value / 1e6) % 1000 !== 0) {
				if (found) res += " و ";
				res += `${Math.round(value / 1e6) % 1000} میلیون`;
				found = true;
			}
			if (Math.round(value / 1e3) % 1000 !== 0) {
				if (found) res += " و ";
				res += `${Math.round(value / 1e3) % 1000} هزار`;
				found = true;
			}
			if (Math.round(value) % 1000 !== 0) {
				if (found) res += " و ";
				res += `${Math.round(value) % 1000}`;
			}

			return { value: res, changed: true };
		}
	}
	return { value: value, changed: false };
}

const ItemWithBackground = ({
	icon: Icon,
	fieldName,
	fieldValue,
	smallValue = false,
	prefix,
	english = false,
}: {
	icon: React.ElementType;
	fieldName: string;
	fieldValue: string | number;
	smallValue?: boolean;
	prefix?: string;
	english?: boolean;
}) => {
	const { value, changed } = wordExpression(fieldValue, english);
	return (
		<div className="flex my-2 h-full gap-3">
			<div className="flex items-start">
				<IconWithBackground icon={Icon} />
			</div>
			<div className="flex gap-1 items-start">
				<span
					className={`${smallValue ? "text-xl" : "text-xl mt-[2px]"}`}
				>
					{fieldName}:{" "}
				</span>
				<span
					dir={english ? "ltr" : "rtl"}
					className={`text-black ${
						smallValue ? "mt-[3px]" : "font-bold text-2xl"
					}`}
				>
					{value}
					{changed && english ? "" : " "}
					{prefix}
				</span>
			</div>
		</div>
	);
};

const Item = ({
	icon: Icon,
	fieldName,
	fieldValue,
	english = false,
	prefix,
}: {
	icon: React.ElementType;
	fieldName: string;
	fieldValue: string | number;
	english?: boolean;
	prefix?: string;
}) => {
	const { value, changed } = wordExpression(fieldValue, english);
	return (
		<div className="flex items-start gap-2 border-t-2 first:border-t-0 border-gray-300 w-full py-2">
			<Icon className="min-w-6 min-h-6 transition-transform duration-200 hover:scale-115 text-[#FA682D]" />
			<div className="flex gap-1">
				<span>{fieldName}: </span>
				<span className="text-[#5E5E5E]">
					{value}
					{changed && english ? "" : " "}
					{prefix}
				</span>
			</div>
		</div>
	);
};

export default function RequestCard({
	className,
	// sentRequestsCount = 0,
	panelDetails,
}: RequestCardProps) {
	return (
		<div
			className={`${className} w-full min-h-64 border-t-1 border-gray-300 first:border-t-0`}
		>
			<div className="flex flex-row justify-between w-full min-h-64 bg-[#F4F1F3] overflow-hidden relative">
				<div className="flex flex-row justify-between w-full min-h-64">
					<div className="w-4/5 flex flex-col justify-between px-4 py-4 h-full">
						<ItemWithBackground
							icon={Eclipse}
							fieldName="نام پنل"
							fieldValue={panelDetails.panelName}
						/>
						<ItemWithBackground
							icon={User}
							fieldName="مشتری"
							fieldValue={panelDetails.customerName}
						/>
						<ItemWithBackground
							icon={MapPin}
							fieldName="آدرس"
							fieldValue={panelDetails.address}
							smallValue={true}
						/>
						<ItemWithBackground
							icon={Battery}
							fieldName="ظرفیت مورد نیاز"
							fieldValue={panelDetails.capacity}
							prefix="W"
							english={true}
						/>
						<ItemWithBackground
							icon={DollarSign}
							fieldName="قیمت مد نظر"
							fieldValue={panelDetails.price}
							prefix="تومان"
						/>
					</div>
					<div className="flex flex-col justify-evenly w-1/5 items-center text-center">
						{/* <div className="flex flex-col shadow-[-6px_-6px_16px_rgba(255,255,255,0.8),6px_6px_16px_rgba(0,0,0,0.2)] rounded-md px-4 mx-4 my-4 py-2">
							<span>پیشنهادهای ارسال شده</span>
							<span className="text-3xl font-bold" dir="rtl">
								{sentRequestsCount}/5
							</span>
						</div> */}
						<div className="flex flex-col items-center gap-2">
							<Dialog>
								<DialogTrigger asChild>
									<div className="bg-gradient-to-b from-[#EE4334] to-[#D73628] rounded-full w-16 h-16 flex items-center place-content-center text-white cursor-pointer shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
										<ArrowLeft />
									</div>
								</DialogTrigger>

								<DialogContent
									dir="rtl"
									className="sm:max-w-[425px] min-w-[70vw] border-0"
								>
									<DialogHeader>
										<DialogTitle
											className={`flex ${vazir.className} text-2xl`}
										>
											ثبت پیشنهاد
										</DialogTitle>
									</DialogHeader>
									<span className="text-lg font-bold">
										مشخصات درخواست
									</span>
									<div className={styles.Box}>
										<Item
											icon={Eclipse}
											fieldName="نام پنل"
											fieldValue={panelDetails.panelName}
										/>
										<Item
											icon={User}
											fieldName="مشتری"
											fieldValue={
												panelDetails.customerName
											}
										/>
										<Item
											icon={Battery}
											fieldName="ظرفیت"
											fieldValue={panelDetails.capacity}
											english={true}
											prefix="W"
										/>
										<Item
											icon={MapPin}
											fieldName="آدرس"
											fieldValue={panelDetails.address}
										/>
									</div>
									<div className="flex flex-row justify-evenly">
										<CustomInput
											icon={DollarSign}
											type="string"
										>
											قیمت پیشنهادی شما
										</CustomInput>
										<CustomInput
											icon={Calendar}
											type="string"
										>
											زمان تخمینی نصب
										</CustomInput>
										<CustomInput
											icon={DollarSign}
											type="string"
										>
											آپلود فایل قرارداد
										</CustomInput>
									</div>
									<CustomInput
										icon={DollarSign}
										type="string"
									>
										آپلود فایل قرارداد
									</CustomInput>

									<DialogFooter>
										<button
											type="submit"
											className={`${vazir.className} bg-[#11B33A] hover:cursor-pointer shadow-md rounded-md px-2 py-1 text-white`}
										>
											ارسال پیشنهاد
										</button>
									</DialogFooter>
								</DialogContent>
							</Dialog>

							{/* <Link href={"requests/meow"}></Link> */}
							<span>مشاهده جزئیات</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
