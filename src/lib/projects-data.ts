export interface Project {
	id: string;
	alt: string;
	image?: string;
}

export const PROJECTS: Project[] = [
	{
		id: "ai-warehouse-automation",
		alt: "AI-powered warehouse inventory automation",
		image: "/assets/home/ai_project_02.webp",
	},
	{
		id: "ppe-compliance-detection",
		alt: "AI-based worker PPE compliance detection on the factory floor",
		image: "/assets/home/ai_project_01.webp",
	},
	{
		id: "project-placeholder-03",
		alt: "Project image coming soon",
		image: "/assets/home/ai_project_02.webp",
	},
	{
		id: "project-placeholder-04",
		alt: "Project image coming soon",
		image: "/assets/home/ai_project_01.webp",
	},
];
