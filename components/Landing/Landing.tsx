import { vazir } from "@/lib/fonts";
import { ArrowLeft } from "lucide-react";
import panel from "@/public/images/Landing/panel.png";
import Link from "next/link";
import Image from "next/image";
import styles from "./Landing.module.css";
import Announcement from "./Announcement/Announcement";
export default function Landing() {
	return (
		<div
			className={`items-center bg-[#F4F7F9] ${vazir.className}`}
			dir="rtl"
		>
			{/*
			 * برق نو
			 */}
			<div className="w-[90vw] h-screen flex place-self-center items-center">
				<div className="flex flex-col gap-5 w-1/2">
					<h1
						className={`text-9xl font-bold text-[#193947] ${vazir.className} flex place-self-center my-4`}
					>
						برق نو
					</h1>
					<span className={`${vazir.className} font-bold text-xl text-center`}>
						سامانه جامع مدیریت برق خورشیدی
					</span>
					<Link href="/login" className="w-full">
						<button className="w-3/5 place-self-center rounded-full flex justify-center gap-2 hover:cursor-pointer shadow-md hover:scale-105 items-center place-content-center cursor-pointer hover:shadow-lg transition duration-300 text-white p-4 font-bold bg-gradient-to-r from-[#EB4132] to-[#DD392B]">
							<span className={`${vazir.className} text-2xl`}>
								ورود
							</span>
							<ArrowLeft />
						</button>
					</Link>
				</div>
				<div className="p-8">
					<div className="p-6 border-solid border-2 border-gray-50 rounded-lg">
						<div className="p-6 border-solid border-2 border-gray-50 rounded-lg">
							<div className="p-6 border-solid border-2 border-gray-100 rounded-lg">
								<div className="p-6 border-solid border-2 border-gray-100 rounded-lg">
									<div className="p-6 border-solid border-2 border-gray-200 rounded-lg">
										<div className="p-6 border-solid border-2 border-gray-200 rounded-lg">
											<Image
												src={panel}
												alt="panel"
												className={`${styles.panel}`}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/*
			 * اطلاعیه ها
			 */}
			<div className="w-[70vw] h-screen flex flex-col place-self-center items-center">
				<div>
					<div
						className={`w-1/12 ${styles.announcements_top} flex place-content-center mr-0`}
					>
						<div
							className={`${styles.announcements_header} text-center text-white place-content-center text-3xl font-bold mx-auto my-auto`}
						>
							اطلاعیه‌ها
						</div>
					</div>
					<div
						className={`w-1/3 ${styles.announcements_bottom} p-2 flex mx-auto flex-col overflow-auto`}
					>
						<div className={`${styles.announcements_box} flex flex-col p-8 items-start gap-8`}>
							<Announcement
								header="اطلاعیه جدید"
								text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد..."
							/>
							<Announcement
								header="اطلاعیه جدید"
								text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد..."
							/>
							<Announcement
								header="اطلاعیه جدید"
								text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد..."
							/>
							<Announcement
								header="اطلاعیه جدید"
								text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد..."
							/>
						</div>
					</div>
				</div>
			</div>

			{/*
			 * درباره ما
			 */}
			<div></div>
		</div>
	);
}
