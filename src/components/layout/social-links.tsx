import Image from "next/image";

interface SocialLink {
	label: string;
	href: string;
	icon: string;
}

const SOCIAL_LINKS: SocialLink[] = [
	{
		label: "Facebook",
		href: "https://www.facebook.com/intersmart",
		icon: "/assets/footer/facebook.png",
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/intersmartsolution/",
		icon: "/assets/footer/instagram.png",
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/company/inter-smart-solution",
		icon: "/assets/footer/linkdin.png",
	},
	{
		label: "Twitter",
		href: "twitter.com/Intersmarts",
		icon: "/assets/footer/twitter.png",
	},
];

// Row of social media icon links
export function SocialLinks() {
	return (
		<div className="flex items-center gap-3">
			{SOCIAL_LINKS.map((social) => (
				<a
					key={social.label}
					href={social.href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={social.label}
					className="inline-flex items-center justify-center rounded-lg transition-opacity hover:opacity-80"
				>
					<Image
						src={social.icon}
						alt=""
						width={40}
						height={40}
						aria-hidden="true"
					/>
				</a>
			))}
		</div>
	);
}
