import { GetServerSideProps } from 'next';

interface PanelProps {
    panelId: string;
}

const PanelId = ({ panelId }: PanelProps) => {
    return (
        <div>
            <h1>Panel ID: {panelId}</h1>
            {/* You can fetch additional data based on panelId here */}
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { panelId } = context.params || {}; // Get panelId from params

    return {
        props: {
            panelId: panelId || 'default-id', // Fallback if panelId is not found
        },
    };
};

export default PanelId; 