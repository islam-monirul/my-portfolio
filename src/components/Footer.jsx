import { profile } from "../data/profile.js";
import SocialIcons from "./SocialIcons.jsx";

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="relative z-10 border-t border-ink-800/60 bg-ink-950/60 backdrop-blur-sm">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 md:flex-row md:px-8">
				<p className="text-sm text-ink-400">
					© {year} {profile.name}. Built with React &amp;
					Tailwind CSS
				</p>
				<SocialIcons />
			</div>
		</footer>
	);
}
