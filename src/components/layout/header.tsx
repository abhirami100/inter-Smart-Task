"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/logo";
import { NavMenu } from "@/components/layout/nav-menu";

/**
 * Site header: logo, primary nav (desktop), CTA button, and a
 * mobile-first collapsible menu for small screens.
 */
export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => setIsMenuOpen(false);

	// Lock background scroll while the mobile menu is open so the header
	// (and its close button) stays put instead of scrolling away with it.
	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);

	return (
		<header className="absolute inset-x-0 top-0 z-50 bg-transparent">
			<div className="relative z-20 mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-8 sm:px-6 lg:px-8">
				<Logo />

				<NavMenu className="hidden items-center gap-8 lg:flex" />

				<div className="flex items-center gap-3">
					<a
						href="#contact"
						className="hidden rounded-full border-2 border-transparent bg-para px-8 py-2 text-base font-medium text-theme transition-colors duration-300 hover:border-para hover:bg-transparent hover:text-para sm:inline-block"
					>
						Get in touch
					</a>

					<button
						type="button"
						onClick={() => setIsMenuOpen((open) => !open)}
						aria-expanded={isMenuOpen}
						aria-label="Toggle navigation menu"
						className="inline-flex items-center justify-center rounded-md p-2 text-para lg:hidden"
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

			<div
				aria-hidden={!isMenuOpen}
				className={`fixed inset-y-0 right-0 z-10 w-full bg-theme transition-transform duration-300 ease-in-out lg:hidden ${
					isMenuOpen
						? "translate-x-0"
						: "pointer-events-none translate-x-full"
				}`}
			>
				<div className="flex h-full flex-col items-start justify-center px-6 pb-10">
					<NavMenu
						className="flex flex-col items-start gap-6 text-left"
						linkClassName="text-lg"
						onLinkClick={closeMenu}
					/>
					<a
						href="#contact"
						onClick={closeMenu}
						className="mt-8 inline-block rounded-full border-2 border-transparent bg-para px-8 py-2 text-center text-base font-medium text-theme transition-colors duration-300 hover:border-para hover:bg-transparent hover:text-para"
					>
						Get in touch
					</a>
				</div>
			</div>
		</header>
	);
}
