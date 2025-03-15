"use client";

import React, { JSX } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { vazir } from "@/lib/fonts";

const XAXISRANGE: number = 60000;
const lastDate: Date = new Date();

const getNewSeries = (lastDate: Date, range: { min: number; max: number }) => {
	const newDate = new Date(lastDate.getTime() + 1000); // Increment by 1 second
	const newDataPoint =
		Math.floor(Math.random() * (range.max - range.min + 1)) + range.min; // Generate random data
	return { x: newDate.getTime(), y: newDataPoint }; // Return new data point
};

export default function LiveChart(): JSX.Element {
	const [state, setState] = React.useState<{
		series: { data: { x: number; y: number }[] }[];
		options: ApexOptions;
	}>({
		series: [
			{
				data: [],
			},
		],
		options: {
			chart: {
				id: "realtime",
				height: 350,
				type: "line" as "line",
				animations: {
					enabled: true,
					dynamicAnimation: {
						speed: 1000,
					},
				},
				toolbar: {
					show: false,
				},
				zoom: {
					enabled: false,
				},
			},
			stroke: {
				curve: "smooth",
				width: 3,
				colors: ["#FF4560"],
			},
			title: {
				text: "میزان برق تولیدی",
				offsetX: -5,
				offsetY: 10,
				align: "right",
				style: {
					fontSize: "20px",
					color: "#333",
					fontFamily: "vazir",
				},
			},
			xaxis: {
				type: "datetime",
				range: XAXISRANGE,
				title: {
					text: "زمان",
					offsetY: 5,
					style: {
						color: "#333",
						fontFamily: "vazir",
						fontSize: "14px",
					},
				},
			},
			yaxis: {
				max: 100,
				title: {
					text: "مگاوات",
					style: {
						color: "#333",
						fontFamily: "vazir",
						fontSize: "14px",
					},
				},
			},
			legend: {
				show: false,
			},
			tooltip: {
				enabled: true,
				style: {
					fontSize: "12px",
					// colors: '#333',
				},
				x: {
					format: "dd MMM HH:mm",
				},
			},
			grid: {
				borderColor: "#e0e0e0",
				// borderColor: "#000"
			},
		},
	});

	React.useEffect(() => {
		const interval = window.setInterval(() => {
			const newPoint = getNewSeries(lastDate, {
				min: 10,
				max: 90,
			});
			lastDate.setTime(newPoint.x); // Update lastDate to the new point's time

			setState((prevState) => ({
				...prevState,
				series: [
					{
						data: [...prevState.series[0].data, newPoint], // Add new data point
					},
				],
			}));
		}, 1000);

		// Cleanup interval on component unmount
		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			<div id="chart">
				<ReactApexChart
					options={state.options}
					series={state.series}
					type="line"
					height={350}
					className="w-full border-solid border-2 border-black"
				/>
			</div>
			<div id="html-dist"></div>
		</div>
	);
}
