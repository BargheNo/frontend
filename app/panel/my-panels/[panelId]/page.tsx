import LiveChart from "@/components/Panel/LiveChart/LiveChart";

interface PanelProps {
	params: {
		panelId: string;
	};
}

const PanelId = ({ params }: PanelProps) => {
	const { panelId } = params; // Access the panelId from params

	return (
		<div className="w-full px-12 my-7 flex flex-col gap-12">
			<div className="grid grid-cols-2 gap-12">
				<div className="flex flex-col text-gray-800 rounded-2xl overflow-hidden shadow-[-6px_-6px_16px_rgba(255,255,255,0.8),6px_6px_16px_rgba(0,0,0,0.2)]">
					<LiveChart />
				</div>
				<div className="flex flex-col text-gray-800 rounded-2xl overflow-hidden shadow-[-6px_-6px_16px_rgba(255,255,255,0.8),6px_6px_16px_rgba(0,0,0,0.2)]">
					<LiveChart />
				</div>
			</div>
			<div className="w-full text-gray-800 rounded-2xl overflow-hidden shadow-[-6px_-6px_16px_rgba(255,255,255,0.8),6px_6px_16px_rgba(0,0,0,0.2)]">
				meow
			</div>
		</div>
	);
};

export default PanelId;
