import { ContactForm } from "@/components/sections/contact-form";

/**
 * "Let's talk" contact section: intro copy paired with a schedule-meeting
 * form, on the dedicated contact background color.
 */
export function Contact() {
	return (
		<section
			id="contact"
			className="bg-contact px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
		>
			<div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
				<div>
					<h2 className="text-3xl font-semibold leading-tight text-theme sm:text-4xl lg:text-[48px]">
						Let&apos;s talk about how digital initiatives can transform your
						business
					</h2>
					<p className="mt-4 text-lg font-normal  text-theme">
						We&apos;ll happily assist in exploring what will work best for you.
						Like, really best.
					</p>
				</div>

				<ContactForm />
			</div>
		</section>
	);
}
