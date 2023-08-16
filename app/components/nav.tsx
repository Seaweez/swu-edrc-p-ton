"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${isIntersecting
						? "bg-white border-transparent"
						: "bg-white  border-zinc-800 "
					}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<Link
							href="/ebook"
							className="duration-200 text-black hover:text-zinc-400 hover:underline"
						>
							E-Book
						</Link>
						<Link
							href="/boardgame"
							className="duration-200 text-black hover:text-zinc-400 hover:underline"
						>
							Board Game
						</Link>
						<Link
							href="/video"
							className="duration-200 text-black hover:text-zinc-400 hover:underline"
						>
							Video
						</Link>
						{/* <Link
							href="/contact"
							className="duration-200 text-white hover:text-zinc-400 hover:underline"
						>
							Contact
						</Link> */}
					</div>

					<Link
						href="/"
						className="duration-200 text-black hover:text-zinc-400 hover:underline"
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
		</header>
	);
};
