"use client";

import { useState, type FormEvent } from "react";

interface ContactFormValues {
	email: string;
	name: string;
	message: string;
}

const INITIAL_VALUES: ContactFormValues = {
	email: "",
	name: "",
	message: "",
};

/**
 * "Schedule Meeting" contact form. Controlled inputs with a mock async
 * submit handler that surfaces a loading state and a success message.
 */
export function ContactForm() {
	const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange =
		(field: keyof ContactFormValues) =>
		(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setValues((current) => ({ ...current, [field]: event.target.value }));
		};

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// Letters and spaces only — strips out numbers/symbols as the user types.
		const textOnly = event.target.value.replace(/[^a-zA-Z\s]/g, "");
		setValues((current) => ({ ...current, name: textOnly }));
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitting(true);
		setIsSubmitted(false);

		try {
			// Replace with a real API call.
			await new Promise((resolve) => setTimeout(resolve, 1000));
			setIsSubmitted(true);
			setValues(INITIAL_VALUES);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div>
			<h3 className="text-2xl font-medium text-theme sm:text-[30px]">
				Schedule Meeting
			</h3>

			<form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
				<input
					type="email"
					required
					placeholder="Email"
					value={values.email}
					onChange={handleChange("email")}
					className="w-full rounded-lg border border-[#2D4362] bg-white px-4 py-3 text-sm text-theme placeholder:text-theme focus:outline-none"
				/>

				<input
					type="text"
					required
					placeholder="Name"
					value={values.name}
					onChange={handleNameChange}
					pattern="[A-Za-z\s]+"
					className="w-full rounded-lg border border-[#2D4362] bg-white px-4 py-3 text-sm text-theme placeholder:text-theme focus:outline-none"
				/>

				<textarea
					required
					placeholder="Message"
					rows={4}
					value={values.message}
					onChange={handleChange("message")}
					className="w-full resize-none rounded-lg border border-[#2D4362] bg-white px-4 py-3 text-sm text-theme placeholder:text-theme focus:outline-none"
				/>

				<button
					type="submit"
					disabled={isSubmitting}
					className="inline-flex w-fit cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-transparent bg-theme px-8 py-2 text-base font-medium text-para transition-colors duration-300 hover:border-theme hover:bg-transparent hover:text-theme disabled:cursor-not-allowed disabled:opacity-60"
				>
					{isSubmitting && (
						<span
							aria-hidden="true"
							className="size-4 animate-spin rounded-full border-2 border-para/40 border-t-para"
						/>
					)}
					{isSubmitting ? "Submitting..." : "Submit"}
				</button>

				{isSubmitted && (
					<p role="status" className="text-sm font-medium text-theme">
						Thanks! We&apos;ll be in touch shortly.
					</p>
				)}
			</form>
		</div>
	);
}
