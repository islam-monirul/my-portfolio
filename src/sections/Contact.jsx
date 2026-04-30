import SectionHeading from "../components/SectionHeading.jsx";
import SocialIcons from "../components/SocialIcons.jsx";
import { profile } from "../data/profile.js";

const Row = ({ label, value, href }) => (
	<div className="flex items-baseline justify-between gap-4 border-b border-ink-800/60 py-3 last:border-b-0">
		<span className="text-xs uppercase tracking-[0.18em] text-ink-500">
			{label}
		</span>
		{href ? (
			<a
				href={href}
				target="_blank"
				rel="noreferrer"
				className="text-sm text-ink-200 transition hover:text-ocean-300"
			>
				{value}
			</a>
		) : (
			<span className="text-sm text-ink-200">{value}</span>
		)}
	</div>
);

export default function Contact() {
	return (
		<section id="contact" className="relative px-5 py-24 md:px-8">
			<div className="mx-auto max-w-6xl">
				<SectionHeading
					eyebrow="06 / Contact"
					title="Let’s build something."
					subtitle="The fastest way to reach me is email — I try to reply within a day."
				/>

				<div className="grid gap-6 md:grid-cols-2">
					{/* Card: invite */}
					<div className="relative overflow-hidden rounded-2xl border border-ocean-500/20 bg-gradient-to-br from-ocean-500/10 via-ink-900/50 to-ink-950 p-8 animate-fade-up">
						<div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-ocean-500/20 blur-3xl" />
						<h3 className="font-display text-2xl font-semibold text-ink-100">
							Have a project, role, or idea?
						</h3>
						<p className="mt-3 text-sm leading-relaxed text-ink-300">
							I’m especially interested in full-stack work,
							AWS-backed data platforms, and AI-native
							tooling. Happy to chat about an opportunity,
							a collaboration, or a tricky problem you’re
							trying to untangle.
						</p>
						<a
							href={`mailto:${profile.email}`}
							className="mt-6 inline-flex items-center gap-2 rounded-full bg-ocean-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-ocean-400 hover:shadow-ocean-glow"
						>
							<svg
								viewBox="0 0 24 24"
								className="h-4 w-4"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<rect
									x="3"
									y="5"
									width="18"
									height="14"
									rx="2"
								/>
								<path d="m3 7 9 6 9-6" />
							</svg>
							Email me
						</a>
					</div>

					{/* Card: details */}
					<div className="rounded-2xl border border-ink-800/60 bg-ink-900/40 p-8 animate-fade-up">
						<Row
							label="Email"
							value={profile.email}
							href={`mailto:${profile.email}`}
						/>
						<Row
							label="Phone"
							value={profile.phone}
							href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
						/>
						<Row
							label="LinkedIn"
							value="/-islammonirul"
							href={profile.links.linkedin}
						/>
						<Row label="Location" value={profile.location} />
						<Row
							label="Resume"
							value="Download PDF"
							href={profile.links.resume}
						/>

						<div className="mt-6 flex items-center justify-between">
							<span className="text-xs uppercase tracking-[0.18em] text-ink-500">
								Elsewhere
							</span>
							<SocialIcons />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
