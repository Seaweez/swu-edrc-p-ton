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
							อีบุ๊ค
						</Link>
						<Link
							href="/boardgame"
							className="duration-200 text-black hover:text-zinc-400 hover:underline"
						>
							บอร์ดเกมส์
						</Link>
						<Link
							href="/video"
							className="duration-200 text-black hover:text-zinc-400 hover:underline"
						>
							วีดีโอ
						</Link>
						<Link
							// href="https://drive.google.com/file/d/1Vu0BFS2RgPZ_EUJVuJ5-K6sFqVwAIzvr/view?usp=sharing"
							href={`https://drive.google.com/file/d/1rjqP04U11GcrBQkW1HgGH1MEA-uHfXfD/view?usp=sharing`}
							className="duration-200 text-black hover:text-zinc-400 hover:underline"
						>
							บันทึกผลการใช้สื่อ
						</Link>
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
