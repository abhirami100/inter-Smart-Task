import { memo } from "react";
import type { Service } from "@/lib/services-data";

interface ServiceAccordionItemProps {
	service: Service;
	isOpen: boolean;
	onToggle: (id: string) => void;
}

/**
 * Single collapsible service row. Memoized so toggling one item doesn't
 * re-render the sibling rows in the list.
 */
function ServiceAccordionItemComponent({
	service,
	isOpen,
	onToggle,
}: ServiceAccordionItemProps) {
	return (
		<div className="rounded-lg bg-box">
			<button
				type="button"
				onClick={() => onToggle(service.id)}
				aria-expanded={isOpen}
				className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
			>
				<span className="text-xl font-medium text-theme sm:text-[22px]">
					{service.title}
				</span>
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
					className={`shrink-0 text-theme/70 transition-transform ${
						isOpen ? "rotate-90" : ""
					}`}
				>
					<path d="m9 18 6-6-6-6" />
				</svg>
			</button>

			{isOpen && (
				<p className="px-6 pb-6 text-[15px] leading-relaxed text-theme">
					{service.description}
				</p>
			)}
		</div>
	);
}

export const ServiceAccordionItem = memo(ServiceAccordionItemComponent);
