"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HERO_SLIDES } from "@/lib/hero-slides";
import { Button } from "@/components/ui/button";

const SLIDE_COUNT = HERO_SLIDES.length;
const AUTO_ADVANCE_MS = 6000;

// The homepage hero - auto-playing image slider with dot navigation
export function Hero() {
	const [activeIndex, setActiveIndex] = useState(0);
	const activeSlide = HERO_SLIDES[activeIndex];

	useEffect(() => {
		const timer = setInterval(() => {
			setActiveIndex((current) => (current + 1) % SLIDE_COUNT);
		}, AUTO_ADVANCE_MS);
		return () => clearInterval(timer);
	}, []);

	return (
		<section className="relative isolate flex h-screen flex-col overflow-hidden bg-theme">
			{HERO_SLIDES.map((slide, index) => (
				<Image
					key={slide.id}
					src={slide.image}
					alt=""
					fill
					priority={index === 0}
					className={`object-cover transition-opacity duration-1000 ease-in-out ${
						index === activeIndex ? "opacity-100" : "opacity-0"
					}`}
					sizes="100vw"
				/>
			))}

			<div aria-hidden="true" className="absolute inset-0 bg-black/50" />

			<div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8">
				<div
					key={activeSlide.id}
					className="mt-[50px] max-w-4xl animate-hero-fade"
				>
					<h1 className="text-3xl font-semibold leading-tight text-primary sm:text-5xl lg:text-[60px]">
						{activeSlide.heading}
						<br />
						{activeSlide.subheading}
					</h1>

					<p className="mt-6 max-w-xl text-base font-normal text-primary">
						{activeSlide.description}
					</p>

					<Button href={activeSlide.ctaHref} variant="primary" className="mt-8">
						{activeSlide.ctaLabel}
					</Button>
				</div>
			</div>

			<div className="relative flex items-center justify-center gap-2 pb-8 sm:pb-10">
				{HERO_SLIDES.map((slide, index) => (
					<button
						key={slide.id}
						type="button"
						onClick={() => setActiveIndex(index)}
						aria-label={`Go to slide ${index + 1}`}
						aria-current={index === activeIndex}
						className={`h-1.5 cursor-pointer rounded-full transition-all ${
							index === activeIndex
								? "w-6 bg-para"
								: "w-1.5 bg-para/40 hover:bg-para/60"
						}`}
					/>
				))}
			</div>
		</section>
	);
}
