import LiveChart from "@/components/Panel/LiveChart/LiveChart";

interface PanelProps {
    params: {
        panelId: string;
    };
}

const PanelId = ({ params }: PanelProps) => {
    const { panelId } = params; // Access the panelId from params

    return (
        <div>
            <h1>Panel ID: {panelId}</h1>
			<LiveChart />
        </div>
    );
};

export default PanelId;