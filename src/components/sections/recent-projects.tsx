import { ProjectsScroll } from "@/components/sections/projects-scroll";

/**
 * "Our Recent AI Projects" section: intro copy followed by a project
 * preview grid and a "View all projects" CTA.
 */
export function RecentProjects() {
	return (
		<section className="bg-white py-16 sm:py-20">
			<div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
				<h2 className="text-[35px] font-medium text-theme">
					Our Recent AI Projects
				</h2>
				<p className="mt-4 text-base font-normal text-theme">
					As one of India&apos;s leading AI development companies, SysAlly
					offers the following services to businesses.
				</p>
				<span className="mx-auto mt-5 block h-[3px] w-25 rounded-full bg-accent" />
			</div>

			<div className="mt-14">
				<ProjectsScroll />
			</div>

			<div className="mt-12 text-center">
				<a
					href="#projects"
					className="inline-block rounded-full border-2 border-transparent bg-theme px-8 py-2 text-base font-medium text-para transition-colors duration-300 hover:border-theme hover:bg-transparent hover:text-theme"
				>
					View all projects
				</a>
			</div>
		</section>
	);
}
