import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Facebook } from "lucide-react";
import { Card } from "./components/card";

const navigation = [
	{ name: "E-book", href: "/ebook" },
	{ name: "Board Game", href: "/boardgame" },
	{ name: "Video", href: "/video" },
	// { name: "Contact", href: "/contact" },
];

const socials = [
	// {
	// 	icon: <Twitter size={20} />,
	// 	href: "https://twitter.com/chronark_",
	// 	label: "Twitter",
	// 	handle: "@chronark_",
	// },
	// {
	// 	icon: <Mail size={20} />,
	// 	href: "mailto:dev@chronark.com",
	// 	label: "Email",
	// 	handle: "dev@chronark.com",
	// },
	{
		icon: <Facebook size={20} />,
		href: "https://www.facebook.com/EncodingtoDigitalResilienceCode?mibextid=LQQJ4d",
		label: "Facebook",
		handle: "MomickeyoM",
	},
];

const campaignDescription = `เคล็ดลับ วิธีเอาตัวรอด ในโลกยุคใหม่! กับสังคมดิจิทัล หรือสื่อออนไลน์ต่างๆ พร้อมทำความเข้าใจ และจำลองสถานการณ์ของ พฤติกรรม ในเชิงลึก`;

export default function Home() {
	return (
		<div className="flex flex-col items-center w-screen xl:h-screen overflow-hidden bg-gradient-to-tl from-white via-zinc-600/20 to-white px-2 lg:px-0 align-middle">
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
			<h1 className="z-10 text-4xl  text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
			SWU - EDRC
			</h1>

			{/* <div className="flex justify-center mt-8">
				<img alt="Chapter-01.pdf" className="irnPqc" style={{ height: `10rem` }} src={`${`/esocial-manual.jpeg`}`} data-iml="91125.90000000037" data-atf="true"></img>
			</div> */}

			<div className="grid grid-cols-1 gap-8 mx-auto mt-14 lg:grid-cols-3 z-10 text-4xl  text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
				<img alt="Loading .." className="irnPqc" style={{ height: `10rem` }} src={`${`/eiei.png`}`} data-iml="91125.90000000037" data-atf="true"></img>
				{/* <div className="text-center"> */}
				<img alt="Loading .." className="irnPqc mx-auto" style={{ height: `10rem` }} src={`${`/msv.png`}`} data-iml="91125.90000000037" data-atf="true"></img>
				{/* </div> */}
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


			{/* <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16"> */}
					{socials.map((s) => (
						// <Card>
							<div className="w-full px-2 xl:px-4 text-righ fixed bottom">
								<Link
								href={s.href}
								target="_blank"
								className="float-right py-4"
							>
								{/* <span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/> */}
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								{/* <div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div> */}
							</Link>
							</div>
						// </Card>
					))}
				{/* </div>
			</div> */}
			
		</div>
	);
}
