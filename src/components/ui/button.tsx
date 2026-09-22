import type {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	ReactNode,
} from "react";

type ButtonVariant = "theme" | "para" | "primary";

const BASE_CLASSES =
	"inline-flex w-fit cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-transparent px-8 py-2 text-base font-medium transition-colors duration-300 hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-60";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
	theme: "bg-theme text-para hover:border-theme hover:text-theme",
	para: "bg-para text-theme hover:border-para hover:text-para",
	primary: "bg-primary text-theme hover:border-primary hover:text-primary",
};

interface ButtonOwnProps {
	variant?: ButtonVariant;
	className?: string;
	children: ReactNode;
}

type ButtonAsLinkProps = ButtonOwnProps &
	Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
		href: string;
	};

type ButtonAsButtonProps = ButtonOwnProps &
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
		href?: undefined;
	};

export type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

// Shared button - renders a link if href is passed, otherwise a real button
export function Button({
	variant = "theme",
	className = "",
	children,
	...rest
}: ButtonProps) {
	const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;

	if (rest.href !== undefined) {
		return (
			<a
				className={classes}
				{...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
			>
				{children}
			</a>
		);
	}

	return (
		<button
			type="button"
			className={classes}
			{...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
		>
			{children}
		</button>
	);
}
