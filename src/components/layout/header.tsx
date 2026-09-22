"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/logo";
import { NavMenu } from "@/components/layout/nav-menu";
import { Button } from "@/components/ui/button";

// Site header with logo, nav, and a mobile menu
export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isHidden, setIsHidden] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const closeMenu = () => setIsMenuOpen(false);

	// Stop the page from scrolling behind the open mobile menu
	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);

	// Hide header when scrolling down, show it again when scrolling up
	useEffect(() => {
		let lastScrollY = window.scrollY;

		function onScroll() {
			const scrollY = window.scrollY;
			setIsScrolled(scrollY > 20);
			setIsHidden(scrollY > lastScrollY && scrollY > 100);
			lastScrollY = scrollY;
		}

		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<>
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-in-out ${
				isScrolled ? "bg-theme shadow-md" : "bg-transparent"
			} ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
		>
			<div className="relative z-20 mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8">
				<Logo />

				<NavMenu className="hidden items-center gap-8 min-[1100px]:flex" />

				<div className="flex items-center gap-3">
					<div className="hidden min-[1100px]:block">
						<Button href="#contact" variant="para">
							Get in touch
						</Button>
					</div>

					<button
						type="button"
						onClick={() => setIsMenuOpen((open) => !open)}
						aria-expanded={isMenuOpen}
						aria-label="Toggle navigation menu"
						className="inline-flex items-center justify-center rounded-md p-2 text-para min-[1100px]:hidden"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							aria-hidden="true"
						>
							{isMenuOpen ? (
								<path d="M18 6 6 18M6 6l12 12" />
							) : (
								<path d="M3 6h18M3 12h18M3 18h18" />
							)}
						</svg>
					</button>
				</div>
			</div>
		</header>

		<div
			aria-hidden={!isMenuOpen}
			className={`fixed inset-y-0 right-0 z-40 w-full bg-theme transition-transform duration-300 ease-in-out min-[1100px]:hidden ${
				isMenuOpen ? "translate-x-0" : "pointer-events-none translate-x-full"
			}`}
		>
			<div className="flex h-full flex-col items-start justify-center px-6 pb-10">
				<NavMenu
					className="flex flex-col items-start gap-6 text-left"
					linkClassName="text-lg"
					onLinkClick={closeMenu}
				/>
				<Button
					href="#contact"
					variant="para"
					onClick={closeMenu}
					className="mt-8"
				>
					Get in touch
				</Button>
			</div>
		</div>
		</>
	);
}
