import Image from "next/image";
import Link from "next/link";

export function Logo() {
	return (
		<Link href="/" className="flex items-center" aria-label="Inter Smart home">
			<Image
				src="/assets/header/logo.png"
				alt="Inter Smart - Perfection at its finest"
				width={220}
				height={48}
				priority
				className="h-7 w-auto sm:h-9"
			/>
		</Link>
	);
}
