interface TechnicalDetails {
	efficiency: number;
	capacity: number;
	todayProduction: number;
}

export interface PanelCardProps {
	params: { slug: string[] };
	panelName: string;
	technicalDetails: TechnicalDetails;
	address: string;
	className?: string | null;
}
