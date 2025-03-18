import { ReactNode, JSX } from 'react';

interface NavItem {
	path: string;
	name: string;
	icon: JSX.Element;
}

interface PanelAsideProps {
	children: ReactNode;
	navItems: NavItem[];
	corp: boolean | null;
}

export type { NavItem };
export type { PanelAsideProps };
