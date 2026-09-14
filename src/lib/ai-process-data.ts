export interface AiProcessStep {
	id: string;
	number: string;
	title: string;
	description: string;
	image: string;
}

export const AI_PROCESS_STEPS: AiProcessStep[] = [
	{
		id: "identifying-the-problem",
		number: "01",
		title: "Identifying The Problem",
		description:
			"The first step of building your custom AI solutions begins with identifying the problems or opportunities that the system can solve. Our team runs a thorough analysis to examine the pain points of the project and create a business case. Analyzing the current practices and data sets is necessary to identify areas for implementing automation and development.",
		image: "/assets/home/ai-process.webp",
	},
	{
		id: "preparing-the-data",
		number: "02",
		title: "Preparing The Data",
		description:
			"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		image: "/assets/home/ai_project_02.webp",
	},
	{
		id: "the-suited-ai-model",
		number: "03",
		title: "The Suited AI Model",
		description:
			"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		image: "/assets/home/ai_project_01.webp",
	},
	{
		id: "training-the-model",
		number: "04",
		title: "Training The Model",
		description:
			"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		image: "/assets/home/ai_project_02.webp",
	},
];
