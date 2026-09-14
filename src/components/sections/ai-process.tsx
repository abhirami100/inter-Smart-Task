"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { AI_PROCESS_STEPS } from "@/lib/ai-process-data";

const STEP_COUNT = AI_PROCESS_STEPS.length;

/**
 * "Our AI Development Process" section: a step tracker with prev/next
 * navigation, clickable step tabs, and a detail card per step.
 */
export function AiProcess() {
	const [activeIndex, setActiveIndex] = useState(0);

	const goToPrevious = useCallback(() => {
		setActiveIndex((current) => (current - 1 + STEP_COUNT) % STEP_COUNT);
	}, []);

	const goToNext = useCallback(() => {
		setActiveIndex((current) => (current + 1) % STEP_COUNT);
	}, []);

	const activeStep = AI_PROCESS_STEPS[activeIndex];
	const progressPercent = ((activeIndex + 1) / STEP_COUNT) * 100;

	return (
		<section className="bg-theme px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-[35px] font-medium text-primary">
						Our AI Development Process
					</h2>
					<p className="mt-4 text-base font-normal leading-relaxed text-primary">
						Developing an AI solution according to your needs involves a
						structured approach to assure its success and effectiveness. Our
						expert AI developers ensure the project&apos;s success by following
						a systematic process in building your artificial intelligence
						solution.
					</p>
					<span className="mx-auto mt-5 block h-[3px] w-25 rounded-full bg-accent" />
				</div>

				<div className="mt-10 flex items-center justify-end gap-3">
					<button
						type="button"
						onClick={goToPrevious}
						aria-label="Previous step"
						className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full border border-para/30 text-para transition-colors hover:bg-para/10"
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							aria-hidden="true"
						>
							<path d="m15 18-6-6 6-6" />
						</svg>
					</button>

					<span className="text-sm font-medium text-para">
						{activeIndex + 1}/{STEP_COUNT}
					</span>

					<button
						type="button"
						onClick={goToNext}
						aria-label="Next step"
						className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full border border-para/30 text-para transition-colors hover:bg-para/10"
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							aria-hidden="true"
						>
							<path d="m9 18 6-6-6-6" />
						</svg>
					</button>
				</div>

				<div className="relative mt-4 h-0.5 w-full bg-para/15">
					<div
						className="absolute inset-y-0 left-0 bg-para transition-all"
						style={{ width: `${progressPercent}%` }}
					/>
				</div>

				<div className="mt-4 border-para/15" />

				<div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pt-6">
					{AI_PROCESS_STEPS.map((step, index) => (
						<span
							key={step.id}
							className={`whitespace-nowrap text-base font-semibold transition-colors sm:text-xl ${
								index === activeIndex ? "text-para" : "text-para/50"
							}`}
						>
							{step.title}
						</span>
					))}
				</div>

				<div className="mt-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-5 lg:gap-8">
					<div className="rounded-lg bg-box p-8 lg:col-span-2">
						<span className="text-xl font-medium text-theme">
							{activeStep.number}
						</span>
						<p className="mt-3 text-sm leading-relaxed text-theme">
							{activeStep.description}
						</p>
					</div>

					<div className="relative h-72 w-full overflow-hidden rounded-lg sm:h-96 lg:col-span-3 lg:h-[420px]">
						<Image
							src={activeStep.image}
							alt={activeStep.title}
							fill
							className="object-cover"
							sizes="(min-width: 1024px) 60vw, 100vw"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
