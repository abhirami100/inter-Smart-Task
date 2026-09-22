"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { SERVICES } from "@/lib/services-data";
import { ServiceAccordionItem } from "@/components/sections/service-accordion-item";
import { Button } from "@/components/ui/button";

// The "Our Artificial Intelligence Services" section with the accordion list
export function Services() {
	const [activeId, setActiveId] = useState<string>(SERVICES[0].id);

	const handleToggle = useCallback((id: string) => {
		setActiveId((current) => (current === id ? "" : id));
	}, []);

	return (
		<section
			id="services"
			className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
		>
			<div className="mx-auto max-w-7xl">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-[35px] font-medium text-theme">
						Our Artificial Intelligence Services
					</h2>
					<p className="mt-4 text-sm  text-theme sm:text-base">
						As one of India&apos;s leading AI development companies, SysAlly
						offers the following services to businesses.
					</p>
					<span className="mx-auto mt-5 block h-[3px] w-25 rounded-full bg-accent" />
				</div>

				<div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
					<div className="relative mx-auto aspect-square w-full max-w-xl">
						<Image
							src="/assets/home/Group.svg"
							alt="Diagram of AI service capabilities: automation, cloud computing, big data, autonomous systems, IoT, and data management"
							fill
							className="object-contain"
						/>
					</div>

					<div className="flex flex-col gap-4">
						{SERVICES.map((service) => (
							<ServiceAccordionItem
								key={service.id}
								service={service}
								isOpen={activeId === service.id}
								onToggle={handleToggle}
							/>
						))}
					</div>
				</div>

				<div className="mt-12 text-center">
					<Button href="#services">View all services</Button>
				</div>
			</div>
		</section>
	);
}
