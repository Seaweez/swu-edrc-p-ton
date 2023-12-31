import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

const VIDEO_LIST = [
	{ title: `EP1 รู้กัน ไม่กลั่นแกล้ง`, description: `รู้กัน ไม่กลั่นแกล้ง`, href: `https://youtu.be/__rh4tAcMoA`, src: `https://drive.google.com/file/d/1y5dEktNPsY4OAj0wsGBWqunJXyNI92D3/preview`, googleDrive: `https://drive.usercontent.google.com/download?id=1TyXLirPtgHlt3dp9jjWB6-BjevtcIwRV&export=download&authuser=0&confirm=t&uuid=5f1ecd5f-546b-4581-a02a-42082b8881c8&at=AC2mKKRQo74GDwmD9LjweeObYs2V:1690074993842`, views: 1023 },
	{ title: `EP2 รู้แน่ แชร์ที่ตั้ง`, description: `รู้แน่ แชร์ที่ตั้ง`, href: `https://youtu.be/fSf4YU5Z_64`, src: `https://drive.google.com/file/d/1zfFAISpnFNYuiuLUZ42byijEjBix8JNv/preview`, googleDrive: `https://drive.usercontent.google.com/download?id=1-DaBzNn1M1XnRZJrhovxz1wNUCz4fQM4&export=download&authuser=0&confirm=t&uuid=14edbdf0-befc-4b64-b128-a1c92677b791&at=AC2mKKT5ZUne8gFwbDSWAmE1ZBuP:1690074998577`, views: 1412 },
	{ title: `EP3 รู้ทัน ก่อนลงทุน`, description: `รู้ทัน ก่อนลงทุน`, href: `https://youtu.be/opd0WoAcQHo`, src: `https://drive.google.com/file/d/1IgQ7uHM85xHbVfSQHwjwnKKmVtiIrfKH/preview`, googleDrive: `https://drive.usercontent.google.com/download?id=1n89I4kA_uFNXwW9bVOugC_jhAwAFoICw&export=download&authuser=0&confirm=t&uuid=322efa42-f4c8-4e0e-9d15-c0f76b2643c8&at=AC2mKKQZTYA_WtaxOaYUug15DuY5:1690075002399`, views: 1877 },
	{ title: `EP4 รู้เท่า ก่อนเราซื้อ`, description: `รู้เท่า ก่อนเราซื้อ`, href: `https://youtu.be/W5hC7U84pys`, src: `https://drive.google.com/file/d/1jTdEB1ddkDeG8OswXM7zObpAxQtx2NBF/preview`, googleDrive: `https://drive.usercontent.google.com/download?id=1O1h7jUvba1zflULHVXP3DOrM6D0R-6tJ&export=download&authuser=0&confirm=t&uuid=3b17e5e2-f89b-4343-a10d-119461530646&at=AC2mKKRU_WaDgKj2C_o5tivYZPG5:1690075010153`, views: 1673 },
	{ title: `EP5 รู้ก่อน ตอนจองตั๋ว`, description: `รู้ก่อน ตอนจองตั๋ว`, href: `https://youtu.be/Cxx3EUlFukw`, src: `https://drive.google.com/file/d/1Q555BaB_pgy-wYF6E0m6xqmNs4-lURr_/preview`, googleDrive: `https://drive.usercontent.google.com/download?id=1kfd-mgso6tMHn0Fgg6cmyB7rQwCJQNqx&export=download&authuser=0&confirm=t&uuid=eda72f98-2ef5-4a58-8e15-c69cd3a9b422&at=AC2mKKRaTcXce1HrcEiBAa_R1l7q:1690076643041`, views: 1132 }
]

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
	const views = (
		await redis.mget<number[]>(
			...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
		)
	).reduce((acc, v, i) => {
		acc[allProjects[i].slug] = v ?? 0;
		return acc;
	}, {} as Record<string, number>);

	const featured = allProjects.find((project) => project.slug === "unkey")!;
	const top2 = allProjects.find((project) => project.slug === "planetfall")!;
	const top3 = allProjects.find((project) => project.slug === "highstorm")!;
	const sorted = allProjects
		.filter((p) => p.published)
		.filter(
			(project) =>
				project.slug !== featured.slug &&
				project.slug !== top2.slug &&
				project.slug !== top3.slug,
		)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						อนิเมชั่น
					</h2>
					<p className="mt-4 text-white">
						สุดยอด อนิเมชั่น ที่จะช่วยให้ทุกคนเท่าทันโลกโซเชี่ยล
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="">
					<img alt={`cover-animation`} className="mx-auto" src={`/cover-animation.jpg`} data-iml="91125.90000000037" data-atf="true"></img>
				</div>


				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2  p-4 rounded">

					{/* <Card>
						<iframe
							width="560" height="315"
							src="https://www.youtube.com/embed/__rh4tAcMoA"
							title="YouTube video player" frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						>
						</iframe>
					</Card> */}
					{VIDEO_LIST.map(video => (
						<div className="flex py-auto text-center justify-center">
							<Card>
								{/* <iframe
									width="560" height="315"
									src={`${video.src}?controls=0&showinfo=0`}
									title="YouTube video player" frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									// allowFullScreen
								>
								</iframe> */}
								<div className="p-4">

								<iframe src={`${video.src}`} width="480" height="480" ></iframe>
								</div>

								<div className="my-3">
								<Article project={video} views={video.views} />
									<button className="bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded inline-flex items-center">
										<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
										<Link href={`${video.googleDrive}`} className="text-white" target="_blank" download>
											<span>Download</span>
											<span className="text-white text-xs  flex items-center gap-1">
												<Eye className="w-4 h-4" />{" "}
												{Intl.NumberFormat("en-US").format(video.views)}
											</span>
										</Link>
									</button>
								</div>
								 

							</Card>
							{/* <Link href="/files/myfile.pdf" target="_blank" download>Download</Link> */}
						</div>
					))}

					{/* <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
						{[top2, top3].map((project) => (
							<Card key={project.slug}>
								<Article project={project} views={views[project.slug] ?? 0} />
							</Card>
						))}
					</div> */}
				</div>
				<div className="hidden w-full h-px md:block bg-zinc-800" />

				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
					{/* {sorted
							.filter((_, i) => i % 3 === 0) */}
					{/* {ARTICLE_LIST.map((project) => (
						<div className="grid grid-cols-1 gap-4">
							<Card key={project.title}>
								<div className="flex justify-center mt-8">
									<img alt={`${project.title}`} className="irnPqc" src={`${project.preview}`} data-iml="91125.90000000037" data-atf="true"></img>
								</div>

								<Article project={project} views={888} />
							</Card>
						</div>
					))} */}
					{/* https://drive.google.com/file/d/1DfdIzZ1Su4mlipB1K2JKEJa95gVA-9dN/view?usp=drive_link */}
					{/* <div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 1)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={views[project.slug] ?? 0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 2)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={views[project.slug] ?? 0} />
								</Card>
							))}
					</div> */}
				</div>
			</div>
		</div>
	);
}
