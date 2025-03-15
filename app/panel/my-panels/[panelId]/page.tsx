import { Metadata } from 'next';

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
            {/* You can fetch additional data based on panelId here */}
        </div>
    );
};

export default PanelId;