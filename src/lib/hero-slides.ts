export interface HeroSlide {
	id: string;
	heading: string;
	subheading: string;
	description: string;
	image: string;
	ctaLabel: string;
	ctaHref: string;
}

// Placeholder content until the real copy and images are ready
export const HERO_SLIDES: HeroSlide[] = [
	{
		id: "ai-development",
		heading: "AI development company",
		subheading: "In India",
		description:
			"One of the leading AI development companies in India with remarkable expertise in artificial intelligence solutions. Our forte in AI technologies spans diverse verticals like machine learning (ML).....",
		image: "/assets/home/Group.webp",
		ctaLabel: "Reach us",
		ctaHref: "#contact",
	},
	{
		id: "slide-two",
		heading: "Lorem ipsum dolor sit",
		subheading: "Consectetur adipiscing elit",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
		image: "/assets/home/Group.webp",
		ctaLabel: "Learn more",
		ctaHref: "#contact",
	},
	{
		id: "slide-three",
		heading: "Sed do eiusmod tempor",
		subheading: "Incididunt ut labore",
		description:
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
		image: "/assets/home/Group.webp",
		ctaLabel: "Learn more",
		ctaHref: "#contact",
	},
	{
		id: "slide-four",
		heading: "Ut enim ad minim veniam",
		subheading: "Quis nostrud exercitation",
		description:
			"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.",
		image: "/assets/home/Group.webp",
		ctaLabel: "Learn more",
		ctaHref: "#contact",
	},
];
