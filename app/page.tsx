import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "E-book", href: "/ebook" },
	{ name: "Board Game", href: "/boardgame" },
	{ name: "Video", href: "/video" },
	// { name: "Contact", href: "/contact" },
];

const campaignDescription = `เคล็ดลับ วิธีเอาตัวรอด ในโลกยุคใหม่! กับสังคมดิจิทัล หรือสื่อออนไลน์ต่างๆ พร้อมทำความเข้าใจ และจำลองสถานการณ์ของ พฤติกรรม ในเชิงลึก`;

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-white via-zinc-600/20 to-white">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-white hover:text-zinc-300 hover:underline"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			{/* <h1 className="z-10 text-4xl  text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
			MomickeyoM
			</h1> */}

			{/* <div className="flex justify-center mt-8">
				<img alt="Chapter-01.pdf" className="irnPqc" style={{ height: `10rem` }} src={`${`/esocial-manual.jpeg`}`} data-iml="91125.90000000037" data-atf="true"></img>
			</div> */}

			<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3 ">
			<img alt="Loading .." className="irnPqc" style={{ height: `10rem` }} src={`${`/eiei.jpg`}`} data-iml="91125.90000000037" data-atf="true"></img>
			<img alt="Loading .." className="irnPqc" style={{ height: `10rem` }} src={`${`/msv.png`}`} data-iml="91125.90000000037" data-atf="true"></img>
			<img alt="Loading .." className="irnPqc" style={{ height: `10rem` }} src={`${`/tmf.png`}`} data-iml="91125.90000000037" data-atf="true"></img>
			
				</div>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-white ">
					{campaignDescription}
					{/* Hi, my name is Ton Rattasapa Chu, I'm building serverless and open source
					solutions at{" "}
					<Link
						target="_blank"
						href="https://upstash.com"
						className="underline duration-500 hover:text-zinc-300"
					>
						Upstash
					</Link>

					<br />
					and working on{" "}
					<Link
						target="_blank"
						href="https://unkey.dev"
						className="underline duration-500 hover:text-zinc-300"
					>
						unkey.dev
					</Link>{" "}
					at night. */}
				</h2>
			</div>
		</div>
	);
}
