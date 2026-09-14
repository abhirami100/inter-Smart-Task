import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import "./globals.css";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Inter Smart Solution",
	description:
		"Inter Smart is one of the leading web designing companies in Kochi, Kerala with 15+ years of experience in establishing a strong and profitable online presence for businesses. ",
	icons: {
		icon: [
			{ url: "/favicon.ico", sizes: "any" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
		],
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className={`${poppins.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				{children}
				<ScrollToTop />
			</body>
		</html>
	);
}
